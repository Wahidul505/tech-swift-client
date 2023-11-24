import * as yup from "yup";

export const authSchema = yup.object().shape({
  email: yup.string().email().required("Email is Required"),
  password: yup.string().required("Password is Required"),
});

export const userSchema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  phone: yup.string().required("Contact Number is Required"),
  address: yup.string().required("Address is Required"),
});
