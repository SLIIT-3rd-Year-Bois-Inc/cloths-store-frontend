import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomerFormError from "../../../components/customer-form-error";
import { CustomerAPI } from "../api";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { sign } from "crypto";
import { CustomerLoadingOverlay } from "../../../components/customer-loading-overlay";
import { useEffect } from "react";

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

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const navigate = useNavigate();

  const sign_up = useMutation(CustomerAPI.sign_up);

  const onSubmit = (data: any) => {
    sign_up.mutate(data);
  };

  useEffect(() => {
    if (sign_up.isSuccess) {
      setTimeout(() => {
        navigate("/");
        sign_up.reset();
      }, 1000);
    } else {
      setTimeout(() => sign_up.reset(), 1000);
    }
  }, [sign_up.status]);

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center relative">
      <div className="py-6 px-10 bg-white w-[30em]">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="w-full flex flex-row justify-center items-center">
            <div className="flex flex-col justify-center items-center flex-grow mr-3">
              <label className="text-sm">First Name</label>
              <input
                className="rounded border-black border mx-2 p-3 w-full"
                placeholder="First Name"
                {...register("f_name")}
              ></input>
              <CustomerFormError className="mb-2">
                {errors.f_name?.message as string}
              </CustomerFormError>
            </div>
            <div className="flex flex-col justify-center items-center flex-grow">
              <label className="text-sm">Last Name</label>
              <input
                className="rounded border-black border mx-2 p-3 w-full"
                placeholder="Last Name"
                {...register("l_name")}
              ></input>
              <CustomerFormError className="mb-2">
                {errors.l_name?.message as string}
              </CustomerFormError>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <label className="text-sm">Email</label>
            <input
              className="rounded border-black border mx-2 p-3 w-full"
              placeholder="Email"
              {...register("email")}
            ></input>
            <CustomerFormError className="mb-2">
              {errors.email?.message as string}
            </CustomerFormError>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <label className="text-sm">Password</label>
            <input
              type="password"
              className="rounded border-black border mx-2 p-3 w-full"
              placeholder="Password"
              {...register("password")}
            ></input>
            <CustomerFormError className="mb-2">
              {errors.password?.message as string}
            </CustomerFormError>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <label className="text-sm">Confirm Password</label>
            <input
              type="password"
              className="rounded border-black border mx-2 p-3 w-full"
              placeholder="Confirm Password"
              {...register("confirm_password")}
            ></input>
            <CustomerFormError className="mb-2">
              {errors.confirm_password?.message as string}
            </CustomerFormError>
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col justify-center items-center flex-grow mr-3 w-1/2">
              <label className="text-sm">Date of Birth</label>
              <input
                type="date"
                className="rounded border-black border p-4 w-full"
                placeholder="Select date"
                {...register("dob")}
                max={getDateYearsAgo(18)}
                defaultValue={getDateYearsAgo(18)}
              />
              <CustomerFormError className="mb-2">
                {errors.dob?.message as string}
              </CustomerFormError>
            </div>
            <div className="flex flex-col justify-center items-center flex-grow w-1/2">
              <label className="text-sm">Gender</label>
              <select
                className="rounded border-black border mx-2 p-4 w-full"
                aria-label=".form-select-sm example"
                defaultValue=""
                {...register("gender")}
              >
                <option value="">Choose</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="rather-not-say">Rather Not Say</option>
              </select>
              <CustomerFormError className="mb-2">
                {errors.gender?.message as string}
              </CustomerFormError>
            </div>
          </div>
          <div className="w-full flex justify-center items-center mt-2">
            <button
              type="submit"
              className="bg-red-600 text-white px-8 py-4 line-spacing-main open-sans-font text-sm"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      {sign_up.isLoading || sign_up.isSuccess || sign_up.isError ? (
        <CustomerLoadingOverlay>
          {sign_up.isLoading ? <div>Loading</div> : ""}
          {sign_up.isError ? <div>Error</div> : ""}
          {sign_up.isSuccess ? <div>Success</div> : ""}
        </CustomerLoadingOverlay>
      ) : (
        ""
      )}
    </div>
  );
}

function getDateYearsAgo(years: number) {
  let date = new Date();
  date.setFullYear(date.getFullYear() - years);
  return date.toISOString().split("T")[0];
}
