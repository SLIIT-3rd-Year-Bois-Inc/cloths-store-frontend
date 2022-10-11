import React from "react";

interface InfoMessageProps {
  message?: string;
  onClickClose?: () => void;
}

export default function InfoMessageModal({
  message,
  onClickClose,
}: InfoMessageProps) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col bg-[#000000] justify-center items-center z-[900]">
      <div className="flex flex-col justify-center items-center p-8 bg-white shadow-lg">
        <div className="text-lg font-bold mb-6">{message}</div>
        <button
          onClick={() => {
            onClickClose && onClickClose();
          }}
          className="rounded bg-black text-white hover:bg-white hover:text-black px-10 py-3 text-sm shadow-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export const InfoMessage = {
  logged_out: "You have been logged out Successfully.",
  error: "An Unknown error Occurred. Please try again later.",
};
