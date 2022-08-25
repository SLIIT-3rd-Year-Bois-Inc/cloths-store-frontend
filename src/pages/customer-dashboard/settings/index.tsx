import React, { useState } from "react";
import { Portal } from "react-portal";

export default function Settings() {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  return (
    <>
      <h1 className="font-bold text-2xl mb-6">Settings</h1>
      <div className="flex-grow">
        <h1 className="pb-2 font-semibold">Delete Your Account</h1>
        <br></br>
        <p className="mb-4">
          Warning This will remove all the order history and user data.<br></br>
          All the orders that ongoing will get delivered regardless.
        </p>
        <button
          className="bg-red-600 hover:bg-red-800 text-white px-8 py-4 line-spacing-main open-sans-font text-sm"
          onClick={(_) => setShowDeleteConfirmation(true)}
        >
          Delete Account
        </button>
      </div>
      {showDeleteConfirmation && (
        <Portal>
          <ConfirmDelete onClose={() => setShowDeleteConfirmation(false)} />
        </Portal>
      )}
    </>
  );
}

interface ConfirmDeleteProps extends React.HTMLProps<HTMLDivElement> {
  onClose?: () => any;
}

function ConfirmDelete({ onClose, ...rest }: ConfirmDeleteProps) {
  return (
    <div
      className="fixed w-screen h-screen bg-[#00000086] top-0 right-0 flex flex-col justify-center items-center"
      {...rest}
    >
      <div>
        <div className="flex flex-col justify-center items-center bg-white px-8 py-10 w-[35em]">
          <h1 className="text-lg mb-4">Delete Account</h1>
          <div className="w-full px-5">
            <input
              type="text"
              className="w-full rounded"
              placeholder="Password"
            />
          </div>
          <div className="mt-4 mb-8">
            Please confirm your password to proceed.
          </div>
          <div className="text-center px-4 mb-4 text-red-600">
            Warning. This will remove all the order history, and user data. All
            the orders that are ongoing will get delivered regardless.
          </div>
          <div className="flex flex-col">
            <button className="bg-red-600 hover:bg-red-800 text-white px-8 py-4 line-spacing-main open-sans-font text-sm mb-2">
              I understand the consequences, delete my account
            </button>
            <button
              className="bg-gray-600 hover:bg-gray-800 text-white px-8 py-4 line-spacing-main open-sans-font text-sm"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
