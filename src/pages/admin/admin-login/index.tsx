import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomerFormError from "../../../components/customer-form-error";
import { AdminAPI } from "../api";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { CustomerLoadingOverlay } from "../../../components/customer-loading-overlay";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Seems like not a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export default function AdminLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();
  const login = useMutation(AdminAPI.login);

  const onSubmitHandler = async (data: any) => {
    data.remember_me = rememberMe;
    login.mutate(data);
  };

  useEffect(() => {
    if (login.isSuccess) {
      console.log("success");
      setTimeout(() => {
        navigate("/admin/customers");
        login.reset();
      }, 1000);
    } else {
      setTimeout(() => login.reset(), 5000);
    }
  }, [login.status]);

  return (
    <div className="w-screen h-screen flex flex-row relative">
      <div className="w-[50%] flex-shrink-0">
        <img
          src="/philipp-arlt-NmH9A0obon8-unsplash.jpg"
          alt="Welcome"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center w-full">
        <div
          className={`galada-font font-bold text-[42px] text-center mt-[5em]`}
        >
          Cloths <span className=" font-normal">Management</span>
        </div>
        <form
          className="w-full flex flex-col items-center"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <div className="flex flex-col justify-center items-center my-3">
            <label className="text-sm">Email</label>
            <input
              className="rounded border-black border mx-2 p-3 min-w-[22em]"
              placeholder="Email"
              {...register("email")}
            ></input>
            <CustomerFormError>
              {errors.email?.message as string}
            </CustomerFormError>
          </div>
          <div className="flex flex-col justify-center items-center mb-6">
            <label className="text-sm">Password</label>
            <input
              type="password"
              className="rounded border-black border mx-2 p-3 min-w-[22em]"
              placeholder="Password"
              {...register("password")}
            ></input>
            <CustomerFormError>
              {errors.password?.message as string}
            </CustomerFormError>
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white px-8 py-4 line-spacing-main open-sans-font text-sm"
          >
            Login
          </button>
        </form>
        <div className="min-w-[25em] flex flex-row px-5 mt-10">
          <a>Forgot Password?</a>
          <div className="flex-grow"></div>
          <div className="flex justify-center items-center">
            <input
              id="checked-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label
              htmlFor="checked-checkbox"
              className="ml-2 text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
        </div>
        <div className="flex-grow"></div>
        <div className="flex flex-row w-full py-4 px-6">
          <div>Trouble Logging in ?</div>
          <div className="flex-grow"></div>
          <div>Back to home</div>
        </div>
      </div>
      {login.isLoading || login.isSuccess || login.isError ? (
        <CustomerLoadingOverlay>
          {login.isLoading ? <div>Loading</div> : ""}
          {login.isError ? <div>Error</div> : ""}
          {login.isSuccess ? <div>Success</div> : ""}
        </CustomerLoadingOverlay>
      ) : (
        ""
      )}
    </div>
  );
}
