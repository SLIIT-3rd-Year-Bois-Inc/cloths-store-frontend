import React from "react";
import Card from "../../../components/customer-dashboard/card";

export default function Billing() {
  return (
    <>
      <h1 className="font-bold text-2xl mb-4">Billing</h1>
      <h2 className="font-bold text-xl mb-4">Payment Methods</h2>
      <div className="flex-grow">
        <Card />
      </div>
    </>
  );
}
