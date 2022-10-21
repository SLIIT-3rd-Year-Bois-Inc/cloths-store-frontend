import React from "react";
import { Portal } from "react-portal";

export function CustomerLoadingOverlay({
  className,
  ...rest
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <Portal>
      <div
        className="fixed top-0 right-0 w-screen h-screen bg-white flex flex-col justify-center items-center"
        {...rest}
      ></div>
    </Portal>
  );
}
