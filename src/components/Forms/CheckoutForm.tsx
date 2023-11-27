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
import FormRadio from "./FormRadio";
import CardHeading from "../Heading/CardHeading";

interface IProps {
  cart: any;
}

const CheckoutForm = ({ cart }: IProps) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [payment, setPayment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [createOrder] = useCreateOrderMutation();
  const stripe = useStripe();
  const elements = useElements();
  const { userEmail, userId } = getUserInfo() as {
    userEmail: string;
    userId: string;
  };
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    setIsLoading(true);
    if (!payment) {
      toast.error("Please select a payment method");
      setIsLoading(false);
      return;
    }
    data.payment = payment;
    data.products = cart?.map((product: any, index: number) => ({
      product: product?.product?._id,
      quantity: product?.quantity,
    }));
    const result = await createOrder(data).unwrap();
    if (!result) {
      toast.error("Fill up all the information");
      setIsLoading(false);
      return;
    } else if (result && payment === "gateway") {
      if (!stripe || !elements) {
        setIsLoading(false);
        return;
      }
      const card = elements.getElement(CardElement);
      if (card == null) {
        setIsLoading(false);
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
        setIsLoading(false);
        setErrorMessage(intentError?.message as string);
      } else {
        setIsLoading(false);
        toast.success("Your Order is Confirmed");
      }
    } else if (result) {
      setIsLoading(false);
      toast.success("Your Order is Confirmed");
    } else {
      setIsLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <Form
        submitHandler={handleSubmit}
        doReset={false}
        resolver={yupResolver(orderSchema)}
      >
        <div className="m-4 lg:m-5 bg-gray-100 p-3 md:p-4 shadow-lg rounded-2xl ">
          <CardHeading serial={2} label="Customer Information" />
          <FormInput
            name="name"
            label="Your Name"
            placeholder="Your full name"
          />
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
        </div>
        <div className="m-4 lg:m-5 bg-gray-100 p-3 md:p-4 shadow-lg rounded-2xl">
          <CardHeading serial={3} label="Payment Method" />
          <div className="mb-1 info primary-text">Select a Payment method</div>

          <FormRadio
            value="cod"
            label="Cash on Delivery"
            handler={setPayment}
          />
          <FormRadio
            value="gateway"
            label="Online Payment"
            handler={setPayment}
          />
          {payment === "gateway" && (
            <CardElement
              className="border border-solid  border-[#3c6e71] rounded-2xl px-2 py-3 text-xl mt-3"
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
          )}
          {errorMessage && (
            <p className="text-sm text-red-500 mt-2 ">{errorMessage}</p>
          )}
          <div className="mt-3 md:mt-5 text-center">
            {!isLoading ? (
              <PrimaryButton type="submit" label="Confirm Order" />
            ) : (
              <PrimaryButton type="button" label="Loading..." />
            )}
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CheckoutForm;
