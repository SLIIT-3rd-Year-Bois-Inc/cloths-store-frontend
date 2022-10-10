import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { CustomerAPI } from "../../pages/customer/api";

interface UserModalProps {
  onClose: () => any;
}

export default function UserModal({ onClose, ...rest }: UserModalProps) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const query = useQuery(["customer", "session"], CustomerAPI.me);
  const queryClient = useQueryClient();

  const sign_out = useMutation(CustomerAPI.signOut, {
    onSuccess: () => {
      queryClient.invalidateQueries(["customer"]);
      onClose && onClose();
      setTimeout(() => {
        navigate("/");
        sign_out.reset();
      }, 1000);
    },
    onError: () => {
      setTimeout(() => sign_out.reset(), 1000);
    },
  });

  useEffect(() => {
    setShow(true);
  }, []);

  const self_close = () => {
    setShow(false);
    setTimeout(() => onClose && onClose(), 500);
  };

  return (
    <div className="fixed w-full h-full top-0  z-50" onClick={self_close}>
      <div
        className={`absolute top-0 w-[15em] shadow-lg backdrop-blur-sm bg-[#ffffff88] right-0 ${
          show ? "translate-x-0" : "translate-x-full"
        } transition-[500ms]`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full">
          <button
            onClick={self_close}
            className="p-2 bg-gray-200 hover:bg-gray-400 cursor-pointer"
          >
            <GrClose size={20} color="white" />
          </button>
        </div>
        <div className="w-full flex justify-center items-center">
          {/* <img className="w-[5em] h-[5em] mb-6"></img> */}
          <div className="p-4 rounded-full bg-red-600 mb-6 shadow-lg">
            <AiOutlineUser size={72} color="white" />
          </div>
        </div>
        <div className="flex flex-col">
          {query.error || !query.isSuccess ? (
            <>
              <Link
                to="/customer/login"
                className="bg-white text-center text-black px-1 py-2 line-spacing-main open-sans-font text-sm"
              >
                Login
              </Link>
              <Link
                to="/customer/sign-up"
                className="bg-black text-white text-center px-1 py-2 line-spacing-main open-sans-font text-sm"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/customer/dashboard/me"
                className="bg-black text-center text-white px-1 py-2 line-spacing-main open-sans-font text-sm"
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  sign_out.mutate();
                }}
                className="bg-white text-center text-black px-1 py-2 line-spacing-main open-sans-font text-sm"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
