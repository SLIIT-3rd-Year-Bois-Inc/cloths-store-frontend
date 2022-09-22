import React, { useState } from "react";
import {
  CgViewSplit,
  CgViewGrid,
  CgViewMonth,
  CgViewList,
} from "react-icons/cg";
import { FiChevronUp, FiChevronDown, FiFilter } from "react-icons/fi";
import { Link } from "react-router-dom";

function AdminProductViewHeader({ filterClicked, setSortingOption }) {
  const [sortby, setSortBy] = useState(false);
  const sortbyClicked = () => setSortBy(!sortby);
  return (
    <div className=" h-24 px-10 flex flex-row justify-between ">
      <Link
        to={"/stock/admin/newProduct"}
        className="bg-black w-[300px] hover:cursor-pointer hover:bg-black/90 flex flex-row justify-center items-center mr-[50px] my-3 text-white font-bold text-center"
      >
        <span>ADD NEW ITEM</span>
      </Link>
      <div className="w-full  flex flex-row justify-between">
        <div className="flex flex-row items-center ">
          {/*sort by */}
          <div
            class="relative inline-block text-left hover:cursor-pointer"
            onBlur={sortbyClicked}
          >
            <div
              className="flex flex-row items-center"
              onClick={sortbyClicked}
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <span className="px-2 ">Sort by</span>
              {sortby ? (
                <FiChevronUp
                  size={20}
                  className="stroke-2"
                  // color={`${bg ? "" : "white"}`}
                />
              ) : (
                <FiChevronDown
                  size={20}
                  className="stroke-2"
                  // color={`${bg ? "" : "white"}`}
                />
              )}
            </div>
            <div
              class={
                sortby
                  ? "origin-top-right absolute s:left-0 2xl:right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                  : "hidden"
              }
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <span
                  class="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-50"
                  onClick={() => setSortingOption(1)}
                >
                  Price: low to high
                </span>
                <span
                  class="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-50"
                  onClick={() => setSortingOption(-1)}
                >
                  Price: high to low
                </span>
              </div>
            </div>
          </div>

          <div
            onClick={filterClicked}
            className="2xl:hidden  flex flex-row items-center"
          >
            <span className="px-2">Filter</span>
            <FiFilter size={20} className="stroke-2" />
          </div>
        </div>
        <div className="flex justify-center items-center mr-10">
          <span className="px-1">View:</span>
          <CgViewSplit size={40} className="px-1" />
          <CgViewGrid size={40} className="px-1" />
          <CgViewMonth size={40} className="px-1" />
          <CgViewList size={40} className="px-1" />
        </div>
      </div>
    </div>
  );
}

export default AdminProductViewHeader;
