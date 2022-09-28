import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../../schema/customer";
import CustomerFormError from "../../../components/customer-form-error";
import { CustomerLoadingOverlay } from "../../../components/customer-loading-overlay";
import { getDateYearsAgo } from "../../../utils/date-time";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { CustomerAPI } from "../../customer/api";

export default function AdminAddCustomer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const navigate = useNavigate();

  const sign_up = useMutation(CustomerAPI.signUp, {
    onSuccess: () => {
      setTimeout(() => {
        navigate("/");
        sign_up.reset();
      }, 1000);
    },
    onError: () => {
      setTimeout(() => sign_up.reset(), 1000);
    },
  });

  return (
    <div>
      <div className="text-lg pl-4 pt-4 font-bold">Add new Customer</div>
      <form
        onSubmit={handleSubmit((data) => sign_up.mutate(data))}
        className="max-w-[35em] p-4"
      >
        <div className="w-full flex flex-row justify-center items-center">
          <div className="flex flex-col justify-center items-center flex-grow mr-3">
            <label className="text-sm">First Name</label>
            <input
              className="rounded border-black border mx-2 p-2 w-full"
              placeholder="First Name"
              {...register("f_name")}
            ></input>
            <CustomerFormError hideWhenEmpty className="mb-2">
              {errors.f_name?.message as string}
            </CustomerFormError>
          </div>
          <div className="flex flex-col justify-center items-center flex-grow">
            <label className="text-sm">Last Name</label>
            <input
              className="rounded border-black border mx-2 p-2 w-full"
              placeholder="Last Name"
              {...register("l_name")}
            ></input>
            <CustomerFormError hideWhenEmpty className="mb-2">
              {errors.l_name?.message as string}
            </CustomerFormError>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <label className="text-sm">Email</label>
          <input
            className="rounded border-black border mx-2 p-2 w-full"
            placeholder="Email"
            {...register("email")}
          ></input>
          <CustomerFormError hideWhenEmpty className="mb-2">
            {errors.email?.message as string}
          </CustomerFormError>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <label className="text-sm">Password</label>
          <input
            type="password"
            className="rounded border-black border mx-2 p-2 w-full"
            placeholder="Password"
            {...register("password")}
          ></input>
          <CustomerFormError hideWhenEmpty className="mb-2">
            {errors.password?.message as string}
          </CustomerFormError>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <label className="text-sm">Confirm Password</label>
          <input
            type="password"
            className="rounded border-black border mx-2 p-2 w-full"
            placeholder="Confirm Password"
            {...register("confirm_password")}
          ></input>
          <CustomerFormError hideWhenEmpty className="mb-2">
            {errors.confirm_password?.message as string}
          </CustomerFormError>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col justify-center items-center flex-grow mr-3 w-1/2">
            <label className="text-sm">Date of Birth</label>
            <input
              type="date"
              className="rounded border-black border p-2 w-full"
              placeholder="Select date"
              {...register("dob")}
              max={getDateYearsAgo(18)}
              defaultValue={getDateYearsAgo(18)}
            />
            <CustomerFormError hideWhenEmpty className="mb-2">
              {errors.dob?.message as string}
            </CustomerFormError>
          </div>
          <div className="flex flex-col justify-center items-center flex-grow w-1/2">
            <label className="text-sm">Gender</label>
            <select
              className="rounded border-black border mx-1 p-2 w-full"
              aria-label=".form-select-sm example"
              defaultValue=""
              {...register("gender")}
            >
              <option value="">Choose</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="rather-not-say">Rather Not Say</option>
            </select>
            <CustomerFormError hideWhenEmpty className="mb-2">
              {errors.gender?.message as string}
            </CustomerFormError>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-2">
          <button
            type="submit"
            className="rounded bg-black text-white px-8 py-2 text-sm"
          >
            Add
          </button>
        </div>
      </form>
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
