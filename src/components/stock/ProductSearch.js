import React, { useEffect, useState, useRef } from "react";
import { FiSearch } from "react-icons/fi";

function ProductSearch({ searchProducts }) {
  const [searchValue, setSearchValue] = useState("");
  const ref = useRef(null);
  const searchref = useRef(null);
  useEffect(() => {
    const handleClick = (event) => {
      if (event.key === "Enter") {
        // Cancel the default action, if needed

        event.preventDefault();
        // Trigger the button element with a click
        searchref.current.click();
      }
    };

    const element = ref.current;

    element.addEventListener("keypress", handleClick);

    return () => {
      element.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      ref={ref}
      onChange={(e) => setSearchValue(e.target.value)}
      className="md:w-[700px] w-[500px] h-14  border-2 rounded-full flex flex-row pl-5 mb-5"
    >
      <input
        ref={searchref}
        type="text"
        className="h-full grow focus:outline-none border-none focus:ring-0 text-xl "
        placeholder="Find items...."
      />
      <span
        onClick={() => {
          searchProducts(searchValue);
        }}
        className="flex flex-row justify-center items-center rounded-full w-13 p-4 bg-black h-13 hover:cursor-pointer hover:bg-slate-800"
      >
        <FiSearch color="white" className="w-6 h-6" />
      </span>
    </div>
  );
}

export default ProductSearch;
