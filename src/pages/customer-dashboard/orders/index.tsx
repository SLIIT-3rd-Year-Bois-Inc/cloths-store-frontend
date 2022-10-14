import React from "react";
import { FiCopy } from "react-icons/fi";
import { useQuery } from "react-query";
import { useAuth } from "../../../hooks/auth";
import { CustomerAPI } from "../../customer/api";

export default function Orders() {
  useAuth();

  const order_query = useQuery(
    ["customer", "orders"],
    CustomerAPI.getCustomerOrders
  );
  let order_data = order_query.data?.data || [];

  order_data = transformOrders(order_data);
  console.log(order_data);
  return (
    <>
      <h1 className="font-bold text-2xl mb-4">Your Orders</h1>
      <div className="w-full flex-grow max-w-[60em]">
        {order_data.map((order: any) => (
          <Order {...order} />
        ))}
      </div>
    </>
  );
}

function transformOrders(data: any[]) {
  let status: any = {
    success: "Awaiting Delivery",
    pending: "Awaiting Payment",
    not_success: "Payment Failed",
    delivered: "Delivered Successfully",
    delivery_failed: "Delivery failed",
  };

  return data.map((d) => {
    let name =
      d.products.length > 1
        ? `${d.products[0].resolved.name} and More +${d.products.length}`
        : d.products[0].resolved.name;
    let images = d.products.map((p: any) => p.resolved.imagesUrls[0][1]);

    return {
      name,
      date: new Date(d.placed_time),
      images,
      state: status[d.state] ?? "",
      total: 4433,
      id: d._id,
    };
  });
}

interface OrderProps {
  name?: string;
  date?: Date;
  images?: string[];
  state?: string;
  id?: string;
  total?: number;
}

function Order({ name, date, images, state, id, total }: OrderProps) {
  return (
    <div className="w-full bg-white shadow-lg mb-2 border-2 border-gray-300 rounded-md">
      <div className="p-6">
        <div className="flex flex-row justify-center px-2 mb-2">
          <div className="font-bold mr-2">{state}</div>
          <div className="flex-grow"></div>
          <div>
            <div className="line-clamp-1">
              Order date:{" "}
              {date
                ? date.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Unknown"}
            </div>
            <div className="flex flex-row items-center">
              <span className="line-clamp-1">Order ID:{id} </span>
              <span
                className="text-blue-600 hover:text-black px-2 cursor-pointer"
                title="Copy Order ID"
              >
                <FiCopy />
              </span>
            </div>
          </div>
          <a className="block h-fit cursor-pointer flex-shrink rounded bg-black text-white hover:bg-white hover:text-black p-2 text-sm shadow-md ml-2 line-clamp-1">
            Order Details
          </a>
        </div>
        <div className="flex flex-row">
          <div className="h-[9em] w-[9em] mr-2 flex-shrink-0">
            <img
              src={images && images.length > 0 ? images[0] : ""}
              className="w-full h-full object-contain"
            ></img>
          </div>
          <div className="flex flex-col">
            <div className="w-full mb-1 cursor-pointer hover:text-red-500">
              {name}
            </div>
            <div className="text-gray-500 mb-2">{name}</div>
            <div>Total - Rs {total}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
