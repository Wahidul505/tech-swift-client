"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.service";
import { toast } from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import Heading from "@/components/Heading/Heading";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useRegisterMutation } from "@/redux/api/authApi";
import { authSchema } from "@/schema/auth";
import PrimaryButton from "@/components/Button/PrimaryButton";

const RegisterPage = () => {
  const [register] = useRegisterMutation();
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      const result = await register({ ...data }).unwrap();
      storeUserInfo({ accessToken: result });
      if (!result) {
        toast.error("You already have an account");
        return;
      }
      if (result) {
        router.back();
        toast.success("Account Created");
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  return (
    <div className="w-5/6 md:w-2/3 lg:w-1/3 mx-auto base-bg border border-solid border-[#457b9d] rounded-2xl p-3 md:p-7">
      <Heading label="Create" subLabel="an Account" />
      <Form
        submitHandler={handleSubmit}
        resolver={yupResolver(authSchema)}
        doReset={false}
      >
        <div className=" flex flex-col ">
          <FormInput
            name="email"
            type="email"
            placeholder="Your Email"
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            placeholder="Password"
            label="Password"
          />
        </div>
        <div className="flex flex-col items-center mt-2">
          <PrimaryButton label="Create Account" type="submit" />
          <Link href={"/login"} className="text-gray-800 mt-3">
            Already have an Account?
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;
