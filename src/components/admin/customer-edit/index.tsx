import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editCustomerSchema } from "../../../schema/customer";
import { Portal } from "react-portal";
import CustomerFormError from "../../customer/form-error";
import { useMutation, useQueryClient } from "react-query";
import { CustomerAPI } from "../../../pages/customer/api";
import { AdminAPI } from "../../../pages/admin/api";

interface CustomerEditProps {
  onClickClose?: () => void;
  customer?: any;
}

export default function CustomerEdit({
  onClickClose,
  customer,
}: CustomerEditProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editCustomerSchema),
    defaultValues: customer,
  });
  const query_client = useQueryClient();

  const edit_customer = useMutation(AdminAPI.editCustomerSchema, {
    onSuccess: () => {
      query_client.invalidateQueries(["admin", "all_customers"]);
      onClickClose && onClickClose();
    },
  });

  return (
    <Portal>
      <div className="fixed top-0 left-0 w-screen h-screen z-[900] flex justify-center items-center bg-[#00000096]">
        <form
          onSubmit={handleSubmit((data) => {
            data.id = customer._id;
            console.log(data);
            edit_customer.mutate(data);
          })}
          className="p-8 w-[30em] bg-white"
        >
          <div className="pb-2 text-center font-bold text-lg">
            Edit Customer
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col flex-grow mr-3 w-1/2">
              <label className="text-sm">First Name</label>
              <input
                type="text"
                className="rounded border-black border p-2 w-full"
                placeholder="First Name"
                {...register("f_name")}
              />
              <CustomerFormError hideWhenEmpty className="mb-2">
                {errors.f_name?.message as string}
              </CustomerFormError>
            </div>
            <div className="flex flex-col flex-grow w-1/2">
              <label className="text-sm">Last Name</label>
              <input
                type="text"
                className="rounded border-black border p-2 w-full"
                placeholder="Last Name"
                {...register("l_name")}
              />
              <CustomerFormError hideWhenEmpty className="mb-2">
                {errors.l_name?.message as string}
              </CustomerFormError>
            </div>
          </div>
          <div className="flex flex-col flex-grow">
            <label className="text-sm">Email</label>
            <input
              type="text"
              className="rounded border-black border p-2 w-full"
              placeholder="Email"
              {...register("email")}
            />
            <CustomerFormError hideWhenEmpty className="mb-2">
              {errors.email?.message as string}
            </CustomerFormError>
          </div>
          <div className="w-full mt-4 flex justify-center items-center">
            <button
              type="submit"
              className="cursor-pointer flex-shrink rounded bg-black text-white hover:bg-white hover:text-black px-4 py-2 w-[9em] text-sm shadow-md ml-2 line-clamp-1"
            >
              Update
            </button>
            <button
              onClick={() => {
                onClickClose && onClickClose();
              }}
              type="button"
              className="cursor-pointer flex-shrink rounded bg-black text-white hover:bg-white hover:text-black px-4 py-2 w-[9em] text-sm shadow-md ml-2 line-clamp-1"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Portal>
  );
}
