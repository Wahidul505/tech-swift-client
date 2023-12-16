"use client";
import LoadingPage from "@/app/loading";
import PrimaryButton from "@/components/Button/PrimaryButton";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import {
  useProfileQuery,
  useSaveProfileMutation,
} from "@/redux/api/profileApi";
import { getUserInfo } from "@/services/auth.service";
import React from "react";
import toast from "react-hot-toast";

const AccountPage = () => {
  const { userId, email } = getUserInfo() as { userId: string; email: string };
  const { data: profileData, isLoading: isProfileLoading } = useProfileQuery(
    userId
  ) as { data: any; isLoading: any };
  const [saveProfile] = useSaveProfileMutation();
  const handleSubmit = async (data: any) => {
    data.name = data?.name || profileData?.name || "";
    data.phone = data?.phone || profileData?.phone || "";
    data.location = data?.location || profileData?.location || "";
    if (!profileData) {
      data.user = userId;
    }
    delete data.email;
    const result = await saveProfile({ id: userId, data: data });
    if (result) {
      toast.success("Profile Saved");
      return;
    } else {
      toast.error("Something went wrong");
      return;
    }
  };

  if (isProfileLoading) return <LoadingPage />;
  return (
    <div className="md:w-1/2">
      <Form submitHandler={handleSubmit} doReset={false}>
        <FormInput
          name="name"
          type="text"
          placeholder="Enter your Name"
          label="Your Name"
          defaultValue={profileData?.name ? profileData?.name : ""}
        />
        <FormInput
          name="phone"
          type="text"
          placeholder="Enter your phone number"
          label="Phone Number"
          defaultValue={profileData?.phone ? profileData?.phone : ""}
        />
        <FormInput
          name="location"
          type="text"
          placeholder="Enter your full address"
          label="Your Address"
          defaultValue={profileData?.location ? profileData?.location : ""}
        />
        <FormInput
          name="email"
          type="email"
          placeholder="Your Email Address"
          label="Email Address"
          disabled={true}
          defaultValue={email ? email : ""}
        />

        <div className="flex flex-col items-center mt-2">
          <PrimaryButton label="Save" type="submit" />
        </div>
      </Form>
    </div>
  );
};

export default AccountPage;
