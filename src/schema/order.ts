import * as yup from "yup";

export const orderSchema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  phone: yup.string().required("phone is Required"),
  location: yup.string().required("Address is Required"),
});
