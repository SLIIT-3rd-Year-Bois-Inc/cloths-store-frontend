import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { cardSchema } from "../../../schema/customer";
import { Portal } from "react-portal";
import CustomerFormError from "../form-error";
import { useMutation, useQueryClient } from "react-query";
import { CustomerAPI } from "../../../pages/customer/api";

interface CustomerAddBillingMethodProps {
  onClickClose?: () => void;
}

export default function CustomerAddBillingMethod({
  onClickClose,
}: CustomerAddBillingMethodProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(cardSchema),
  });
  const query_client = useQueryClient();

  const add_billing_method = useMutation(CustomerAPI.addPaymentMethod, {
    onSuccess: () => {
      query_client.invalidateQueries(["customer", "cards"]);
      onClickClose && onClickClose();
    },
  });

  return (
    <Portal>
      <div className="fixed top-0 left-0 w-screen h-screen z-[900] flex justify-center items-center bg-[#00000096]">
        <form
          onSubmit={handleSubmit((data) => {
            add_billing_method.mutate(data);
          })}
          className="p-8 w-[30em] bg-white"
        >
          <div className="pb-2 text-center font-bold text-lg">Add Card</div>
          <div className="flex flex-row">
            <div className="flex flex-col flex-grow mr-3 w-1/2">
              <label className="text-sm">Card Number</label>
              <input
                type="text"
                className="rounded border-black border p-2 w-full"
                placeholder="Card Number"
                {...register("card_number")}
              />
              <CustomerFormError hideWhenEmpty className="mb-2">
                {errors.card_number?.message as string}
              </CustomerFormError>
            </div>
            <div className="flex flex-col flex-grow w-1/2">
              <label className="text-sm">CVC</label>
              <input
                type="text"
                className="rounded border-black border p-2 w-full"
                placeholder="CVC"
                {...register("cvc")}
              />
              <CustomerFormError hideWhenEmpty className="mb-2">
                {errors.cvc?.message as string}
              </CustomerFormError>
            </div>
          </div>
          <div className="flex flex-col flex-grow">
            <label className="text-sm">Name on card</label>
            <input
              type="text"
              className="rounded border-black border p-2 w-full"
              placeholder="Name on card"
              {...register("name_on_card")}
            />
            <CustomerFormError hideWhenEmpty className="mb-2">
              {errors.name_on_card?.message as string}
            </CustomerFormError>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col flex-grow mr-3">
              <label className="text-sm">Expiry Month</label>
              <input
                type="number"
                size={2}
                min={1}
                max={12}
                className="rounded border-black border p-2 w-full"
                placeholder="Expiry Month"
                {...register("expiry_month")}
              />
              <CustomerFormError hideWhenEmpty className="mb-2">
                {errors.expiry_month?.message as string}
              </CustomerFormError>
            </div>
            <div className="flex flex-col flex-grow">
              <label className="text-sm">Expiry Year</label>
              <input
                type="number"
                size={4}
                className="rounded border-black border p-2 w-full"
                placeholder="Expiry Year"
                {...register("expiry_year")}
              />
              <CustomerFormError hideWhenEmpty className="mb-2">
                {errors.expiry_year?.message as string}
              </CustomerFormError>
            </div>
            <div className="flex-grow"></div>
          </div>
          <div className="w-full mt-4 flex justify-center items-center">
            <button
              type="submit"
              className="cursor-pointer flex-shrink rounded bg-black text-white hover:bg-white hover:text-black px-4 py-2 w-[9em] text-sm shadow-md ml-2 line-clamp-1"
            >
              Add
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
