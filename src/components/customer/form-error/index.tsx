import React from "react";

interface CustomerFormErrorProps extends React.HTMLProps<HTMLDivElement> {
  hideWhenEmpty?: boolean;
}

export default function CustomerFormError({
  children,
  className,
  hideWhenEmpty,
  ...rest
}: CustomerFormErrorProps) {
  return (
    <div
      className={`${
        children ? "text-red-600" : "text-transparent"
      } text-sm mt-1 ${className}`}
      {...rest}
    >
      {children || (hideWhenEmpty ? "" : "No error")}
    </div>
  );
}
