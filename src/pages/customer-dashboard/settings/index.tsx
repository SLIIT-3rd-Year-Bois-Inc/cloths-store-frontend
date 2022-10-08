import React, { useState } from "react";
import { Portal } from "react-portal";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { CustomerAPI } from "../../customer/api";

export default function Settings() {
  const navigate = useNavigate();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const delete_customer = useMutation(CustomerAPI.deleteMe, {
    onSuccess: () => {
      setTimeout(() => {
        navigate("/");
        setShowDeleteConfirmation(false);
      }, 2000);
    },
  });

  const message = (() => {
    switch (delete_customer.status) {
      case "error":
        return "Something went wrong";
      case "loading":
        return "Please wait";
      case "success":
        return "Your account was deleted. Redirecting to home...";
      default:
        return "";
    }
  })();

  const _delete_customer = (data: any) => {
    delete_customer.mutate(data);
  };

  return (
    <>
      <h1 className="font-bold text-2xl mb-6">Settings</h1>
      <div className="flex-grow">
        <h1 className="pb-2 font-semibold">Delete Your Account</h1>
        <br></br>
        <p className="mb-4">
          Warning, This will remove all the order history and user data.
          <br></br>
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
          <ConfirmDelete
            onClose={() => setShowDeleteConfirmation(false)}
            onConfirm={_delete_customer}
            message={message}
          />
        </Portal>
      )}
    </>
  );
}

interface ConfirmDeleteProps extends React.HTMLProps<HTMLDivElement> {
  onClose?: () => any;
  onConfirm?: (password: any) => any;
  message?: string;
}

function ConfirmDelete({
  onClose,
  onConfirm,
  message,
  ...rest
}: ConfirmDeleteProps) {
  const [data, setData] = useState({ password: "" });

  return (
    <div
      className="fixed w-screen h-screen bg-[#00000086] top-0 right-0 flex flex-col justify-center items-center z-[500]"
      {...rest}
    >
      <div>
        <div className="flex flex-col justify-center items-center bg-white px-8 py-10 w-[35em]">
          <h1 className="text-lg mb-4">Delete Account</h1>
          <div className="w-full px-5">
            <input
              type="password"
              className="w-full rounded"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ password: e.target.value })}
            />
          </div>
          <div className="mt-4 mb-8">
            Please confirm your password to proceed.
          </div>
          <div className="text-center px-4 mb-4 text-red-600">
            Warning, This will remove all the order history, and user data. All
            the orders that are ongoing will get delivered regardless.
          </div>
          <div className="flex flex-col">
            <button
              onClick={() => onConfirm && onConfirm(data)}
              className="bg-red-600 hover:bg-red-800 text-white px-8 py-4 line-spacing-main open-sans-font text-sm mb-2"
            >
              I understand the consequences, delete my account
            </button>
            <button
              className="bg-gray-600 hover:bg-gray-800 text-white px-8 py-4 line-spacing-main open-sans-font text-sm"
              onClick={onClose}
            >
              Cancel
            </button>
            <div className="text-red-600 text-center w-full font-bold mt-2">
              {message}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
