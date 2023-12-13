"use client";
import LoadingPage from "@/app/loading";
import ErrorHeading from "@/components/Heading/ErrorHeading";
import CustomTable from "@/components/Table/CustomTable";
import { useOrdersQuery } from "@/redux/api/orderApi";
import { format } from "date-fns";
import React from "react";
import toast from "react-hot-toast";
import orderImg from "../../../resources/Empty-pana.png";

const columns = [
  { key: "orderId", label: "Order ID" },
  { key: "orderDate", label: "Order Date" },
  { key: "status", label: "Status" },
  { key: "totalPrice", label: "Total Price" },
  { key: "delivery", label: "Delivery" },
  { key: "payment", label: "Payment" },
];

const ManageOrderPage = () => {
  const { data, isLoading } = useOrdersQuery({ limit: 100 });

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
        label="Order is empty"
        btnLabel="Back to Account"
        btnHref="/admin/account"
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

export default ManageOrderPage;
