import React, { useState } from "react";
import { Customer } from "../../../types";
import { FiEdit2, FiSearch } from "react-icons/fi";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useQuery } from "react-query";
import { AdminAPI } from "../api";
import { CustomerLoadingOverlay } from "../../../components/customer-loading-overlay";
import useDebounce from "../../../hooks/debounce";
import { ToggleSwitch } from "flowbite-react";

export function CustomerManagement() {
  const [search_query, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(search_query, 500);

  const query = useQuery(
    ["admin", "all_customers", { from: 0, to: 10, search: debouncedSearch }],
    AdminAPI.allCustomers
  );
  const total = query.data?.total ?? "N/A";
  const data = query.data?.data ?? [];

  return (
    <>
      <div className="text-lg pl-4 pt-4 font-bold">Manage customers</div>
      <div className="flex justify-center items-center w-full h-full flex-col">
        <div className="w-full">
          <form className="flex flex-row justify-center items-center">
            <input
              placeholder="Search"
              type="text"
              className="mr-4 rounded-md"
              onChange={(e) => setSearchQuery(e.target.value)}
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
                <TableRow customer={cus} key={i} idx={i} />
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
  idx: number | string;
}

function TableRow({ customer, idx }: TableProps) {
  return (
    <tr className="text-center border-gray-400 border">
      <td className="py-4">{customer.f_name}</td>
      <td>{customer.l_name}</td>
      <td>{customer.email}</td>
      <td className="">
        <div className="flex justify-center items-center">
          <label
            htmlFor={"toggle" + idx}
            className="inline-block relative items-center cursor-pointer mr-2"
          >
            <input
              type="checkbox"
              value=""
              id={"toggle" + idx}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
          <FiEdit2
            size={22}
            className="p-1 inline-block border border-gray-500 rounded cursor-pointer"
          />
        </div>
      </td>
    </tr>
  );
}
