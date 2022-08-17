import React, { useState } from "react";

import { FiChevronDown, FiChevronUp, FiFilter } from "react-icons/fi";
import {
  CgViewGrid,
  CgViewMonth,
  CgViewSplit,
  CgViewList,
} from "react-icons/cg";

function ProductPage() {
  const [filter, setFilter] = useState(false);
  const [sortby, setSortBy] = useState(false);

  const filterClicked = () => setFilter(!filter);
  const sortbyClicked = () => setSortBy(!sortby);

  return (
    // full screen div
    <div className="w-screen">
      {/* sort,view layer div */}
      <div className="h-24 px-10 flex flex-row flex-grow justify-between 2xl:ml-[350px]">
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
                  ? "origin-top-right absolute s:left-0 2xl:right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  : "hidden"
              }
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <a
                  href="he"
                  class="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-50"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                >
                  Account settings
                </a>
                <a
                  href="he"
                  class="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-50"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  Support
                </a>
                <a
                  href="he"
                  class="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-50"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                >
                  License
                </a>
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
        <div className="flex justify-center items-center">
          <span className="px-1">View:</span>
          <CgViewSplit size={40} className="px-1" />
          <CgViewGrid size={40} className="px-1" />
          <CgViewMonth size={40} className="px-1" />
          <CgViewList size={40} className="px-1" />
        </div>
      </div>

      {/* products and filters div */}
      <div className="w-screen flex flex-col 2xl:flex-row px-10">
        {/* filters div */}
        <div
          className={
            " 2xl:min-w-[300px] 2xl:mr-10" +
            (filter
              ? " transition-h   min-h-[400px]"
              : " hidden 2xl:flex 2xl:flex-col transition-h 2xl:min-h-[400px]")
          }
        >
          <div className="">
            <span>Gender</span>

            <div className="">
              <div class="flex items-center mb-4">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Default radio
                </label>
              </div>
              <div class="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Checked state
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* products container div */}
        <div>products</div>
      </div>
    </div>
  );
}

export default ProductPage;
