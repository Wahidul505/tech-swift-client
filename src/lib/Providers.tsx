"use client";
import React from "react";
import { IChildrenProps } from "@/types/common";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const Providers = ({ children }: IChildrenProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
