import React, { useState } from "react";
import { useQuery } from "react-query";
import CustomerAddBillingMethod from "../../../components/customer/add-billing-method";
import Card from "../../../components/customer-dashboard/card";
import { useAuth } from "../../../hooks/auth";
import { CustomerAPI } from "../../customer/api";

export default function Billing() {
  useAuth();

  const get_cards = useQuery(
    ["customer", "cards"],
    CustomerAPI.getPaymentMethods
  );
  const [showAddCard, setShowAddCard] = useState(false);

  return (
    <>
      <h1 className="font-bold text-2xl mb-4">Billing</h1>
      <h2 className="font-bold text-xl mb-4">Payment Methods</h2>
      <div className="flex-grow">
        {get_cards.data && get_cards.data.length ? (
          <>
            {get_cards.data.map((card: any) => (
              <Card
                name_on_card={card.name_on_card}
                card_number={card.card_number}
                id={card._id}
              />
            ))}
            <Card
              noCard
              clickOnAdd={() => {
                setShowAddCard(true);
              }}
            />
          </>
        ) : null}
        {!(get_cards.data && get_cards.data.length) ? (
          <NoCard
            onClickAdd={() => {
              setShowAddCard(true);
            }}
          />
        ) : null}
      </div>
      {showAddCard && (
        <CustomerAddBillingMethod
          onClickClose={() => {
            setShowAddCard(false);
          }}
        />
      )}
    </>
  );
}

interface NoCardProps {
  onClickAdd: () => void;
}

function NoCard({ onClickAdd }: NoCardProps) {
  return (
    <div className="w-full h-full flex justify-center items-center p-4 flex-col">
      <div className="text-lg font-bold">
        You don't have any payment methods added
      </div>
      <button
        onClick={() => {
          onClickAdd && onClickAdd();
        }}
        className="mt-4 cursor-pointer flex-shrink rounded bg-black text-white hover:bg-white hover:text-black px-4 py-2 w-[9em] text-sm shadow-md line-clamp-1"
      >
        Add One +
      </button>
    </div>
  );
}
