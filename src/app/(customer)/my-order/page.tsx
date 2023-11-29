"use client";
import LoadingPage from "@/app/loading";
import CustomTable from "@/components/Table/CustomTable";
import { useMyOrdersQuery } from "@/redux/api/orderApi";
import { getUserInfo } from "@/services/auth.service";
import React from "react";
import toast from "react-hot-toast";
import { format } from "date-fns";
import ErrorHeading from "@/components/Heading/ErrorHeading";
import orderImg from "../../../resources/Empty-pana.png";

const columns = [
  { key: "orderId", label: "Order ID" },
  { key: "orderDate", label: "Order Date" },
  { key: "status", label: "Status" },
  { key: "totalPrice", label: "Total Price" },
  { key: "delivery", label: "Delivery" },
  { key: "payment", label: "Payment" },
];

const MyOrderPage = () => {
  const { userId } = getUserInfo() as { userId: string };
  const { data, isLoading } = useMyOrdersQuery(userId);
  const handleCopyToClipBoard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("Copied to Clipboard");
  };
  const orders = data?.map((order: any) => ({
    orderId: (
      <div
        className="cursor-pointer"
        onClick={() => handleCopyToClipBoard(order?._id)}
      >
        {order?._id?.slice(0, 7)}...
      </div>
    ),
    orderDate: format(new Date(order?.createdAt), "yyyy-MM-dd"),
    status: order?.status,
    totalPrice: `$${order?.totalPrice.toFixed(2)}`,
    delivery: "$100",
    payment:
      order?.payment === "gateway" ? "Gateway (paid)" : "Cash on Delivery",
  }));

  if (isLoading) return <LoadingPage />;

  if (!data || data?.length < 1) {
    return (
      <ErrorHeading
        imgSrc={orderImg}
        label="Your Order is empty"
        btnLabel="Back to Shop"
        btnHref="/shop"
      />
    );
  }

  console.log(data);

  return (
    <div className="w-full">
      <CustomTable
        columns={columns}
        data={orders}
        action={false}
        shadow={false}
      />
    </div>
  );
};

export default MyOrderPage;
