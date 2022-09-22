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

export { signUpSchema };
