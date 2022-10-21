import React from "react";
import { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";

interface SideBarProps extends LinkProps {
  children?: string;
  red?: boolean;
  className?: string;
  title?: string;
  to: string;
}

export default function SideBarItem({
  children,
  red,
  className,
  title,
  ...rest
}: SideBarProps) {
  return (
    <Link
      title={title ? title : ""}
      className={`w-full text-center ${
        red ? "bg-red-600 text-white" : "bg-gray-200"
      } mb-3 p-2 rounded hover:bg-red-300 cursor-pointerd transition-[50ms] open-sans-font line-spacing-small text-sm ${
        className ? className : ""
      }`}
      {...rest}
    >
      {children}
    </Link>
  );
}
