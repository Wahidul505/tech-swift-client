"use client";
import LoadingPage from "@/app/loading";
import ErrorHeading from "@/components/Heading/ErrorHeading";
import Image from "next/image";
import React, { useState } from "react";
import orderImg from "../../../resources/Empty-pana.png";
import CustomTable from "@/components/Table/CustomTable";
import {
  useDeleteProductMutation,
  useProductsQuery,
} from "@/redux/api/productApi";
import DeleteButton from "@/components/Button/DeleteButton";
import EditButton from "@/components/Button/EditButton";
import ViewButton from "@/components/Button/ViewButton";
import Modal from "@/components/Modal/Modal";
import ProductDetailsCard from "@/components/Card/ProductDetailsCard";
import toast from "react-hot-toast";

const columns = [
  { key: "image", label: "Image" },
  { key: "title", label: "Title" },
  { key: "price", label: "Price" },
  { key: "category", label: "Category" },
];

const ManageProductPage = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const { data, isLoading } = useProductsQuery({ limit: 10000 }) as {
    data: any;
    isLoading: any;
  };
  const [deleteProduct] = useDeleteProductMutation();

  const handleDeleteProduct = async (id: string) => {
    const res = await deleteProduct(id).unwrap();
    if (res) {
      toast.success("Product Deleted");
    } else toast.error("Something went wrong");
    setModalOpen(false);
  };

  const products =
    data instanceof Array &&
    data?.map((product: any) => ({
      image: (
        <Image
          src={product?.image}
          alt=""
          width={500}
          height={500}
          className="w-10 h-8 md:w-12 md:h-10  lg:w-16 lg:h-14 rounded-2xl overflow-hidden"
        />
      ),
      title: product?.title,
      price: product?.price,
      category: product?.category?.title,
      actionButton: (
        <div className="flex items-center space-x-4">
          <Modal
            htmlFor={`admin/manage-product/view/${product?._id}`}
            label="View"
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            btnType="view"
          >
            <ProductDetailsCard product={product} />
          </Modal>
          <EditButton href={`/admin/manage-product/update/${product?._id}`} />
          <Modal
            htmlFor={`admin/manage-product/delete/${product?._id}`}
            label="Delete"
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            btnType="delete"
          >
            <div className="flex flex-col items-center">
              <div className="heading mb-4">Confirm Deletion</div>
              <DeleteButton onClick={() => handleDeleteProduct(product?._id)} />
            </div>
          </Modal>
        </div>
      ),
    }));

  if (isLoading) return <LoadingPage />;
  if (!data || (data instanceof Array && data?.length < 1)) {
    return (
      <ErrorHeading
        imgSrc={orderImg}
        label="Product is empty"
        btnLabel="Back to Account"
        btnHref="/admin/account"
      />
    );
  }

  return (
    <div className="w-full">
      <CustomTable
        columns={columns}
        data={products}
        action={true}
        shadow={false}
      />
    </div>
  );
};

export default ManageProductPage;
