import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { LinkProps } from "react-router-dom";

export function AdminSidebar() {
  return (
    <div className="h-full min-w-[18em] max-w-[50%] pt-2 pl-3">
      <CollapsibleButton title="Customer Management">
        <SubButton title="Search" to="customers" />
        <SubButton title="Add Customer" to="customers/add" />
        <SubButton title="Statistics" to="customers/statistics" />
      </CollapsibleButton>
      <CollapsibleButton title="Product Management">
        <SubButton title="Search" to="stocks" />
        <SubButton title="Add Product" to="stocks/add" />
        <SubButton title="Reports" to="stocks/reports" />
        <SubButton title="Search" to="" />
        <SubButton title="Add Product" to="" />
      </CollapsibleButton>
    </div>
  );
}

interface SubButtonProps extends LinkProps {
  title: string;
}

interface CButtonProps {
  title: string;
  children?: any;
}

export function CollapsibleButton({ title, children }: CButtonProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="w-full mb-1 select-none">
      <div
        className="w-full relative rounded-md transition-all p-3 bg-gray flex flex-col items-center justify-between bg-gray-300 overflow-hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="w-full relative px-4 min-h-11 flex justify-between items-center cursor-pointer">
          {title}
          <BsChevronDown
            size={38}
            className={`p-3 transition-all ${
              open ? "rotate-180" : ""
            } cursor-pointer`}
          />
        </div>
        <div
          className={`w-full transition-all overflow-hidden ${
            open ? "max-h-100" : "max-h-0"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function SubButton({ title, className, ...rest }: SubButtonProps) {
  return (
    <Link
      className={`w-full min-h-10 bg-gray-200 block py-2 text-center ${className}`}
      {...rest}
    >
      {title}
    </Link>
  );
}
