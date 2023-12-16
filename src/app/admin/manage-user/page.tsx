"use client";
import LoadingPage from "@/app/loading";
import ErrorHeading from "@/components/Heading/ErrorHeading";
import React from "react";
import orderImg from "../../../resources/Empty-pana.png";
import CustomTable from "@/components/Table/CustomTable";
import ViewButton from "@/components/Button/ViewButton";
import { useUsersQuery } from "@/redux/api/authApi";

const columns = [
  { key: "id", label: "User ID" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role" },
];

const ManageUserPage = () => {
  const { data, isLoading } = useUsersQuery({ limit: 10000000 });

  const users = data?.map((user: any) => ({
    id: user?._id,
    email: user?.email,
    role: user?.role || "",
    actionButton: (
      <div className="flex items-center space-x-4">
        <ViewButton />
      </div>
    ),
  }));

  if (isLoading) return <LoadingPage />;
  if (!data || data?.length < 1) {
    return (
      <ErrorHeading
        imgSrc={orderImg}
        label="User is empty"
        btnLabel="Back to Account"
        btnHref="/admin/account"
      />
    );
  }

  return (
    <div className="w-full">
      <CustomTable
        columns={columns}
        data={users}
        action={true}
        shadow={false}
      />
    </div>
  );
};

export default ManageUserPage;
