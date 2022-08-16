import React, { useState } from "react";

import { FiChevronDown, FiFilter } from "react-icons/fi";
import {
  CgViewGrid,
  CgViewMonth,
  CgViewSplit,
  CgViewList,
} from "react-icons/cg";

function ProductPage() {
  const [filter, setFilter] = useState(false);
  const filterClicked = () => setFilter(!filter);

  return (
    // full screen div
    <div className="w-screen">
      {/* sort,view layer div */}
      <div className="h-24 px-10 flex flex-row flex-grow justify-between 2xl:ml-[350px]">
        <div className="flex flex-row items-center ">
          <div className="flex flex-row items-center">
            <span className="px-2 ">Sort by</span>
            <FiChevronDown
              size={20}
              className="stroke-2"
              // color={`${bg ? "" : "white"}`}
            />
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
            "relative top-[-30px] bg-slate-300  2xl:min-w-[300px] 2xl:mr-8" +
            "transform ease-in-out" +
            (filter
              ? " transition-all opacity-100  min-h-[400px] duration-500 translate-y-0"
              : " transition-all  opacity-0 text-teal-50translate-y-full  ")
          }
        >
          filters
        </div>

        {/* products container div */}
        <div>products</div>
      </div>
    </div>
  );
}

export default ProductPage;
