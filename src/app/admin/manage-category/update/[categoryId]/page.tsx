"use client";
import LoadingPage from "@/app/loading";
import PrimaryButton from "@/components/Button/PrimaryButton";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import {
  useSingleCategoryQuery,
  useUpdateCategoryMutation,
} from "@/redux/api/categoryApi";
import React from "react";
import toast from "react-hot-toast";

const UpdateCategory = ({ params }: { params: any }) => {
  const { categoryId } = params;
  const { data: categoryData, isLoading: categoryIsLoading } =
    useSingleCategoryQuery(categoryId);
  const [updateCategory] = useUpdateCategoryMutation();

  const handleSubmit = async (data: any) => {
    data.title = data?.title || categoryData?.title;
    try {
      await updateCategory({ id: categoryId, payload: data });
      toast.success("Category Updated");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  if (categoryIsLoading) return <LoadingPage />;

  return (
    <div className="md:w-1/2">
      <Form submitHandler={handleSubmit} doReset={false}>
        <FormInput
          name="title"
          type="text"
          placeholder="Enter Category Title"
          label="Category Title"
          defaultValue={categoryData?.title ? categoryData?.title : ""}
        />

        <div className="flex flex-col items-center mt-2">
          <PrimaryButton label="Update" type="submit" />
        </div>
      </Form>
    </div>
  );
};

export default UpdateCategory;
