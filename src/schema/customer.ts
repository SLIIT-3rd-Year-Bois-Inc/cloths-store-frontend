import * as yup from "yup";

const signUpSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirm_password: yup
    .string()
    .required("Please Confirm your Password")
    .oneOf([yup.ref("password")], "Passwords must match"),
  f_name: yup.string().max(255).required("First Name is required"),
  l_name: yup.string().max(255).required("Last Name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  dob: yup.date().required("Date of Birth is required"),
  gender: yup.string().required("Select a gender"),
});

const cardSchema = yup.object().shape({
  card_number: yup
    .string()
    .label("Card number")
    .max(16)
    .required("The Card Number is required"),
  cvc: yup.string().label("CVC").min(3).max(4).required("CVC is required"),
  name_on_card: yup
    .string()
    .label("Name on card")
    .required("Name in card is Required"),
  expiry_month: yup.string().label("Expiry month").min(1).max(2).required(),
  expiry_year: yup
    .string()
    .label("Expiry year")
    .min(4)
    .max(4)
    .required("Expiry year is Required"),
});

const editCustomerSchema = yup.object().shape({
  f_name: yup.string().max(255).required("First Name is required"),
  l_name: yup.string().max(255).required("Last Name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
});

export { signUpSchema, cardSchema, editCustomerSchema };
