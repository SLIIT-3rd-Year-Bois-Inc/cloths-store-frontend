import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { LinkProps } from "react-router-dom";
import { useMutation } from "react-query";
import { AdminAPI } from "../../../pages/admin/api";

export function AdminSidebar() {
  const navigate = useNavigate();
  const sign_out = useMutation(AdminAPI.signOut, {
    onSuccess: () => {
      setTimeout(() => {
        navigate("/admin/login");
        sign_out.reset();
      }, 1000);
    },
    onError: () => {
      setTimeout(() => sign_out.reset(), 1000);
    },
  });
  return (
    <div className="h-full min-w-[18em] max-w-[50%] pt-2 px-1">
      <CollapsibleButton title="Customer Management">
        <SubButton title="Search" to="customers" />
        <SubButton title="Add Customer" to="customers/add" />
        <SubButton title="Statistics" to="customers/statistics" />
      </CollapsibleButton>
      <CollapsibleButton title="Product Management">
        <SubButton title="Search" to="stocks" />
        <SubButton title="Add Product" to="stocks/add" />
        <SubButton title="Reports" to="stocks/reports" />
      </CollapsibleButton>

      <CollapsibleButton title="Question Management">
        <SubButton title="View Questions" to="/admin/adminAnswer" />
      </CollapsibleButton>

      <div
        className="px-10 py-3 bg-red-600 text-white text-center mt-3 hover:bg-red-500 hover:cursor-pointer"
        onClick={() => sign_out.mutate()}
      >
        Log Out
      </div>

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
