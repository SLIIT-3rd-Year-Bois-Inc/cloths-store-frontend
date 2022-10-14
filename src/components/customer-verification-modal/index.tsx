import React, { useState } from "react";
import { GrClose } from "react-icons/gr";

interface ICustomerVerificationModalProps {
  onClose?: () => void;
  onClickVerify?: (code: string) => void;
}

export default function CustomerVerificationModal({
  onClose,
  onClickVerify,
}: ICustomerVerificationModalProps) {
  const [code, setCode] = useState("");

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[#00000096]">
      <div className="w-[30em] pb-[3em] bg-white flex flex-col items-center">
        <div className="flex flex-row w-full">
          <div className="flex-grow"></div>
          <div
            className="p-3 cursor-pointer flex justify-center items-center"
            onClick={() => {
              onClose && onClose();
            }}
          >
            <GrClose size={32} />
          </div>
        </div>
        <div className="text-2xl font-bold w-full text-center mb-4">
          Verify your email
        </div>
        <input
          type="text"
          placeholder="Code"
          className="rounded"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
        ></input>
        <button
          className="mt-4 rounded bg-black text-white px-8 py-2 text-sm"
          onClick={() => {
            onClickVerify && onClickVerify(code);
          }}
        >
          Verify
        </button>

        <div className="my-4">Check your email for the verification code</div>
      </div>
    </div>
  );
}
