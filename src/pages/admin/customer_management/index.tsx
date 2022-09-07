import React from "react";
import { Customer } from "../../../types";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useMutation, useQuery } from "react-query";
import { AdminAPI } from "../api";
import { CustomerLoadingOverlay } from "../../../components/customer-loading-overlay";

export function CustomerManagement() {
  const query = useQuery(["admin/all_customers", 0, 10], AdminAPI.allCustomers);
  const total = query.data && query.data.total;
  const data = query.data && query.data.data ? query.data.data : [];

  return (
    <div className="flex justify-center items-center w-full h-full flex-col">
      <table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              First Name
            </th>
            <th scope="col" className="py-3 px-6">
              Last Name
            </th>
            <th scope="col" className="py-3 px-6">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((cus: any, i: number) => (
            <TableRow customer={cus} key={i} />
          ))}
        </tbody>
      </table>
      {query.isLoading || query.isError ? (
        <CustomerLoadingOverlay>
          {query.isLoading ? <div>Loading</div> : ""}
        </CustomerLoadingOverlay>
      ) : (
        ""
      )}
      <div className="mt-3">Total Customers - {total || "N/A"}</div>
      <div className="flex justify-center items-center mt-2">
        <button className="p-4 text-gray-700 border border-gray-700 rounded hover:bg-gray-300">
          <AiOutlineLeft />
        </button>
        <input className="h-full mx-2 rounded p-4" type="text" size={5} />
        <button className="p-4 text-gray-700 border border-gray-700 rounded hover:bg-gray-300">
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
}

interface TableProps {
  customer: Customer;
}

function TableRow({ customer }: TableProps) {
  return (
    <tr className="text-center border-gray-400 border">
      <td className="py-4">{customer.f_name}</td>
      <td>{customer.l_name}</td>
      <td>{customer.email}</td>
      <td>
        <FiEdit2
          size={22}
          className="p-1 border border-gray-500 rounded cursor-pointer"
        />
      </td>
    </tr>
  );
}
