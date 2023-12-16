"use client";
import LoadingPage from "@/app/loading";
import PrimaryButton from "@/components/Button/PrimaryButton";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import {
  useSingleProductQuery,
  useUpdateProductMutation,
} from "@/redux/api/productApi";
import React from "react";
import toast from "react-hot-toast";

const UpdateProduct = ({ params }: { params: any }) => {
  const { productId } = params;
  const { data: productData, isLoading: isProductLoading } =
    useSingleProductQuery(productId);
  const [updateProduct] = useUpdateProductMutation();

  const handleSubmit = async (data: any) => {
    data.price = Number(data?.price) || productData?.price;
    data.title = data?.title || productData?.title;
    try {
      await updateProduct({ id: productId, payload: data });
      toast.success("Product Updated");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  if (isProductLoading) return <LoadingPage />;

  return (
    <div className="md:w-1/2">
      <Form submitHandler={handleSubmit} doReset={false}>
        <FormInput
          name="title"
          type="text"
          placeholder="Enter Product Title"
          label="Category Title"
          defaultValue={productData?.title ? productData?.title : ""}
        />
        <FormInput
          name="price"
          type="number"
          placeholder="Enter Product Price"
          label="Product Price"
          defaultValue={productData?.price ? productData?.price : ""}
        />

        <div className="flex flex-col items-center mt-2">
          <PrimaryButton label="Update" type="submit" />
        </div>
      </Form>
    </div>
  );
};

export default UpdateProduct;
