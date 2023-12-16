"use client";
import LoadingPage from "@/app/loading";
import ErrorHeading from "@/components/Heading/ErrorHeading";
import CustomTable from "@/components/Table/CustomTable";
import { useOrdersQuery, useProceedOrderMutation } from "@/redux/api/orderApi";
import { format } from "date-fns";
import React, { useState } from "react";
import toast from "react-hot-toast";
import orderImg from "../../../resources/Empty-pana.png";
import Modal from "@/components/Modal/Modal";
import EditButton from "@/components/Button/EditButton";
import CustomButton from "@/components/Button/CustomButton";

const columns = [
  { key: "orderId", label: "Order ID" },
  { key: "orderDate", label: "Order Date" },
  { key: "status", label: "Status" },
  { key: "totalPrice", label: "Total Price" },
  { key: "delivery", label: "Delivery" },
  { key: "payment", label: "Payment" },
];

const productColumns = [
  { key: "title", label: "Product" },
  { key: "quantity", label: "Quantity" },
];

const ManageOrderPage = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const { data, isLoading } = useOrdersQuery({ limit: 100000 }) as {
    data: any;
    isLoading: any;
  };
  const [proceedOrder] = useProceedOrderMutation();

  console.log(data);

  const handleProceedOrder = async (id: string, status: string) => {
    const result = await proceedOrder(id);
    result
      ? toast.success(`Order ${status}`)
      : toast.error("Something went wrong");
  };

  const handleCopyToClipBoard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("Copied to Clipboard");
  };

  const orders =
    data instanceof Array &&
    data?.map((order: any) => ({
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
      actionButton: (
        <div className="flex items-center space-x-4">
          <Modal
            htmlFor={`admin/manage-order/view/${order?._id}`}
            label="View"
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            btnType="view"
          >
            <CustomTable
              columns={productColumns}
              data={order?.products?.map((product: any, index: number) => ({
                title: product?.product?.title,
                quantity: product?.quantity,
              }))}
              action={false}
              shadow={false}
            />
          </Modal>
          {order?.status === "delivered" ? (
            <div className="info text-gray-800">Delivered</div>
          ) : order?.status === "confirmed" ? (
            <CustomButton
              label="Shipped"
              onClick={() => handleProceedOrder(order?._id, "Shipped")}
            />
          ) : (
            order?.status === "shipped" && (
              <CustomButton
                label="Delivered"
                onClick={() => handleProceedOrder(order?._id, "Delivered")}
              />
            )
          )}
        </div>
      ),
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

  return (
    <div className="w-full">
      <CustomTable
        columns={columns}
        data={orders}
        action={true}
        shadow={false}
      />
    </div>
  );
};

export default ManageOrderPage;
