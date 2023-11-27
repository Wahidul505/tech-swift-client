"use client";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { getStripPK } from "@/helpers/config/envConfig";
import CheckoutForm from "@/components/Forms/CheckoutForm";
import CustomTable from "@/components/Table/CustomTable";
import CardHeading from "@/components/Heading/CardHeading";
import PrimaryButton from "@/components/Button/PrimaryButton";
import { useRouter } from "next/navigation";

const stripePromise = loadStripe(
  "pk_test_51L0f8BK96S4Dx2sqbNrb8CtiStAD5MvRtuaitvoIxKHkgpfokbzhX3YpcAYd1dbbGAqk5v0cqrXzzSL581c6mJHw00LKqElvb1" as string
);

const columns = [
  { key: "title", label: "Product Name" },
  { key: "price", label: "Price" },
  { key: "total", label: "Total" },
];

const CheckoutPage = () => {
  const cart = useSelector((state: RootState) => state?.checkout?.cart);
  const router = useRouter();
  const [total, setTotal] = useState(0);

  const cartData = cart?.map((product: any) => ({
    title: (
      <div>
        {product?.product?.title} <br />
        {product?.product?.features &&
          product?.product?.features?.map((feature: string, index: number) => (
            <span key={index} className="pr-2 hidden lg:inline">
              {feature}
            </span>
          ))}
      </div>
    ),
    price: `${Number((product?.product?.price).toFixed(2))} x ${
      product?.quantity
    }`,
    total: `${(
      Number((product?.product?.price).toFixed(2)) * product?.quantity
    ).toFixed(2)}`,
  }));

  useEffect(() => {
    setTotal(
      cart?.reduce(
        (sum, next) =>
          sum + Number((next?.product?.price).toFixed(2)) * next?.quantity,
        0
      )
    );
  }, [cart]);

  console.log(cart);

  if (!cart || cart?.length < 1) {
    return (
      <div className="text-center">
        <div className="primary-text heading mb-3">Cart is Empty</div>
        <PrimaryButton
          onClick={() => router.push("/cart")}
          label="Back to Cart"
          size="small"
        />
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2 m-4 lg:m-5 bg-white rounded-2xl p-3 lg:p-4 shadow-lg">
          <CardHeading serial={1} label="Order Overview" />
          <CustomTable
            columns={columns}
            data={cartData}
            action={false}
            shadow={false}
          />
          <div className="mt-3 py-3 pl-2 md:pl-3 border-t border-b-0 border-r-0 border-l-0 border-solid border-gray-500">
            <div className="primary-text info flex ">
              <span className=" text-gray-800 mr-2 md:mr-5">Sub-Total: </span> $
              {total.toFixed(2)}
            </div>
            <div className="primary-text info md:my-1 flex ">
              <span className=" text-gray-800 mr-2 md:mr-5">Delivery: </span>{" "}
              $100
            </div>
            <div className="primary-text info flex ">
              <span className=" text-gray-800 mr-2 md:mr-5">Total: </span> $
              {(total + 100).toFixed(2)}
            </div>
          </div>
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm cart={cart} />
        </Elements>
      </div>
    </div>
  );
};

export default CheckoutPage;
