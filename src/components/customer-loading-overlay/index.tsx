import React from "react";

export function CustomerLoadingOverlay({
  className,
  ...rest
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className="absolute w-full h-full bg-white flex flex-col justify-center items-center"
      {...rest}
    ></div>
  );
}
