"use client";
import React from "react";
import { useLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.service";
import { toast } from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import Heading from "@/components/Heading/Heading";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { authSchema } from "@/schema/auth";
import PrimaryButton from "@/components/Button/PrimaryButton";

const LoginPage = () => {
  const [login] = useLoginMutation();
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      const result = await login({ ...data }).unwrap();
      storeUserInfo({ accessToken: result });
      if (!result) {
        toast.error("Wrong User Credentials");
        return;
      }
      if (result) {
        // router.push("/");
        router.back();
        toast.success("Logged in");
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  return (
    <div className="w-5/6 md:w-2/3 lg:w-1/3 mx-auto base-bg border border-solid border-[#457b9d] rounded-2xl p-3 md:p-7">
      <Heading label="Login" subLabel="to your Account" />
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
          <PrimaryButton label="Login" type="submit" />
          <Link href={"/register"} className="text-gray-800 mt-3">
            Don&apos;t have an account?
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
