import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { LinkProps } from "react-router-dom";

export function AdminSidebar() {
  return (
    <div className="h-full min-w-[18em] max-w-[50%] pt-2 pl-3">
      <CollapsibleButton title="Customer Management">
        <CollapsibleSubButton title="Search" to="customers" />
        <CollapsibleSubButton title="Add Customer" to="customers/add" />
        <CollapsibleSubButton title="Statistics" to="customers/statistics" />
      </CollapsibleButton>
      <CollapsibleButton title="Product Management">
        <CollapsibleSubButton title="Search" to="" />
        <CollapsibleSubButton title="Add Product" to="" />
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
    <div className="w-full mb-1">
      <div className="w-full rounded-md transition-all p-3 bg-gray flex flex-col items-center justify-between bg-gray-300">
        <div
          className="w-full px-4 min-h-11 flex justify-between items-center cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {title}
          <BsChevronDown
            size={38}
            className={`p-3 transition-all ${
              open ? "rotate-180" : ""
            } cursor-pointer`}
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={`w-full mt-2 ${open ? "" : "hidden"}`}>{children}</div>
      </div>
    </div>
  );
}

export function CollapsibleSubButton({
  title,
  className,
  ...rest
}: SubButtonProps) {
  return (
    <Link
      className={`w-full min-h-10 bg-gray-200 block py-2 text-center ${className}`}
      {...rest}
    >
      {title}
    </Link>
  );
}
