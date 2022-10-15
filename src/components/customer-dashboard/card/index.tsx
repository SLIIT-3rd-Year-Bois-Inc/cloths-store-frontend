import React from "react";
import { AiOutlineCheck, AiOutlineDelete } from "react-icons/ai";
import { useMutation, useQueryClient } from "react-query";
import CustomerDashBoard from "../../../pages/customer-dashboard/dashboard";
import { CustomerAPI } from "../../../pages/customer/api";

interface CardProps {
  noCard?: boolean;
  clickOnAdd?: () => void;
  name_on_card?: string;
  card_number?: number;
  id?: string;
  def?: boolean;
}

export default function Card({
  noCard,
  clickOnAdd,
  name_on_card,
  card_number,
  id,
  def,
}: CardProps) {
  const query_client = useQueryClient();

  const delete_card = useMutation(CustomerAPI.deletePaymentMethod, {
    onSuccess: () => {
      query_client.invalidateQueries(["customer", "cards"]);
    },
  });

  const patch_card = useMutation(CustomerAPI.patchPaymentMethod, {
    onSuccess: () => {
      query_client.invalidateQueries(["customer", "cards"]);
    },
  });

  if (noCard) {
    return (
      <div className="shadow-lg h-[10em] bg-black w-[20em] m-4 cursor-pointer flex justify-center items-center border-2 border-gray-400 rounded-lg">
        <div
          onClick={() => {
            clickOnAdd && clickOnAdd();
          }}
          className="text-lg font-bold text-white"
        >
          Add Card +
        </div>
      </div>
    );
  }

  return (
    <div className="shadow-lg hover:scale-105 transition-all h-[10em] w-[20em] flex flex-col m-4 p-4 border-2 border-gray-400 rounded-lg">
      <div>{name_on_card}</div>
      <div className="flex-grow"></div>
      <div className="flex w-full justify-center items-center">
        <div>Ends With {card_number}</div>
        <div className="flex-grow"></div>
        <button
          onClick={() => {
            delete_card.mutate({ id: id });
          }}
        >
          <AiOutlineDelete
            size={32}
            className="p-2 mr-2 border border-gray-300 rounded hover:bg-gray-400"
          />
        </button>
        <button
          onClick={() => {
            patch_card.mutate({ id: id, default: !def });
          }}
        >
          <AiOutlineCheck
            size={32}
            className={`p-2 border border-gray-300 rounded hover:bg-gray-400 ${
              def ? " bg-green-500" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
}
