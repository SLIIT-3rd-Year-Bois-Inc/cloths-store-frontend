import React from "react";

export default function CustomerFormError({
  children,
  className,
  ...rest
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={`${
        children ? "text-red-600" : "text-transparent"
      } text-sm mt-1 ${className}`}
      {...rest}
    >
      {children || "No error"}
    </div>
  );
}
