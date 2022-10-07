import React from "react";
import OrderComplete from "../../components/order/order-complete";
import DeliveryDetails from "../../components/order/delivery-details";
import image2 from "../../../src/image/email.png";
import { useState } from "react";

// Use this URL
// http://localhost:3000/template

function Template() {
  const dataTika = {
    subTotal: "3000.00",
    delivery: "20th Augest",
    total: "3450.00",
    arrive: "20th Augest",
    image: image2,
    title: "Mens Training Tee",
    size: "M",
    color: "Black",
    qty: "1",
    Rs: "3000",
  };

  return (
    <div>
      {/* <OrderComplete /> */}

      <DeliveryDetails data={dataTika} />
    </div>
  );
}

export default Template;
