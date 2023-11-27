"use client";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { getStripPK } from "@/helpers/config/envConfig";
import CheckoutForm from "@/components/Forms/CheckoutForm";
import CustomTable from "@/components/Table/CustomTable";
import CardHeading from "@/components/Heading/CardHeading";

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

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  const cartData = cart.map((product: any) => ({
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
    price: `${Number(
      (product?.product?.price * product?.quantity).toFixed(2)
    )} x ${product?.quantity}`,
    total: `${
      Number((product?.product?.price * product?.quantity).toFixed(2)) *
      product?.quantity
    }`,
  }));

  console.log(cart);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2 md:m-3 lg:m-4 bg-white rounded-2xl p-2 lg:p-4 shadow-lg">
          <CardHeading serial={1} label="Order Overview" />
          <CustomTable
            columns={columns}
            data={cartData}
            action={false}
            shadow={false}
          />
        </div>
        <div className="md:m-3 lg:m-4 bg-white p-2 md:p-4 shadow-lg rounded-2xl ">
          <Elements stripe={stripePromise}>
            <CheckoutForm productId={"id"} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
