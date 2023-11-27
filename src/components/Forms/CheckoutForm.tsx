"use client";
import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import Form from "./Form";
import FormInput from "./FormInput";
import { getUserInfo } from "@/services/auth.service";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useCreateOrderMutation } from "@/redux/api/orderApi";
import PrimaryButton from "../Button/PrimaryButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderSchema } from "@/schema/order";

interface IProps {
  productId: string;
}

const CheckoutForm = ({ productId }: IProps) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [createOrder] = useCreateOrderMutation();
  const stripe = useStripe();
  const elements = useElements();
  const { userEmail, userId } = getUserInfo() as {
    userEmail: string;
    userId: string;
  };
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    data.product = productId;
    data.user = userId;
    const result = await createOrder(data).unwrap();
    if (!result) {
      toast.error("Fill up all the information");
    } else {
      if (!stripe || !elements) {
        return;
      }
      const card = elements.getElement(CardElement);
      if (card == null) {
        return;
      }
      const { error } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      setErrorMessage(error?.message || "");

      const clientSecret = result?.transactionId;

      // to complete the payment
      const { paymentIntent, error: intentError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: result?.name,
              email: userEmail,
            },
          },
        });
      if (intentError) {
        setErrorMessage(intentError?.message as string);
      } else {
        toast.success("Your Order is Confirmed");
        router.push(`/success/${result?._id}`);
      }
    }
  };

  return (
    <div>
      <Form
        submitHandler={handleSubmit}
        doReset={false}
        resolver={yupResolver(orderSchema)}
      >
        <FormInput name="name" label="Your Name" placeholder="Your full name" />
        <FormInput
          name="phone"
          label="Phone Number"
          placeholder="Your contact number"
        />
        <FormInput
          name="location"
          label="Address"
          placeholder="Your full address"
        />
        <CardElement
          className="border border-solid  border-[#3c6e71] rounded-2xl px-2 py-3 text-xl"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {errorMessage && (
          <p className="text-sm text-red-500 mt-2 ">{errorMessage}</p>
        )}
        <div className="mt-3 text-center">
          <PrimaryButton type="submit" label="Confirm Order" />
        </div>
      </Form>
    </div>
  );
};

export default CheckoutForm;
