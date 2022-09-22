import React from "react";
import { Customer } from "../../../types";
import { FiEdit2, FiSearch } from "react-icons/fi";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useQuery } from "react-query";
import { AdminAPI } from "../api";
import { CustomerLoadingOverlay } from "../../../components/customer-loading-overlay";
import AdminHeader from "../../../components/admin-header";

export function CustomerManagement() {
  const query = useQuery(["admin/all_customers", 0, 10], AdminAPI.allCustomers);
  const total = query.data?.total ?? "N/A";
  const data = query.data?.data ?? [];

  return (
    <>
      <div className="flex justify-center items-center w-full h-full flex-col">
        <div className="w-full">
          <form className="flex flex-row justify-center items-center">
            <input
              placeholder="Search"
              type="text"
              className="mr-4 rounded-md"
            ></input>
            <button className="p-2 rounded-full border-1 border">
              <FiSearch size={20} />
            </button>
          </form>
        </div>
        <div className="h-[80%] w-full p-2 overflow-y-auto">
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
        </div>
        {query.isLoading || query.isError ? (
          <CustomerLoadingOverlay>
            {query.isLoading ? <div>Loading</div> : ""}
          </CustomerLoadingOverlay>
        ) : (
          ""
        )}
        <div className="mt-3">Total Customers - {total}</div>
        <div className="flex justify-center items-center mt-2">
          <button className="p-2 text-gray-700 border border-gray-700 rounded hover:bg-gray-300">
            <AiOutlineLeft />
          </button>
          <input className="h-full mx-2 rounded p-2" type="text" size={5} />
          <button className="p-2 text-gray-700 border border-gray-700 rounded hover:bg-gray-300">
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </>
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
