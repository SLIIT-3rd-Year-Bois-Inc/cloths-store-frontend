import React from "react";
import { useNavigate } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";

function FullScreenModelAddNewItem({ message }) {
  const navigate = useNavigate();
  function goToAdminPage() {
    navigate("/stock/admin/ProductPage");
  }
  function addAnother() {
    window.location.reload(false);
  }
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/20 z-50 flex flex-row items-center justify-center">
      <div className="bg-white  pt-6 w-[400px]  rounded flex flex-col items-center">
        <BsCheckCircleFill color="green" className="w-8 h-8" />
        <span className="font-bold p-6">{message}</span>
        <div className="mt-4 w-full flex flex-row justify-between">
          <span
            className="flex flex-grow py-3 hover:cursor-pointer flex-row justify-center w-full items-center bg-red-600 text-white hover:bg-red-500"
            onClick={addAnother}
          >
            Add Another Item
          </span>
          <span
            className="flex flex-grow py-3 hover:cursor-pointer flex-row justify-center w-full items-center bg-black text-white hover:bg-gray-900"
            onClick={goToAdminPage}
          >
            Go to Item Admin
          </span>
        </div>
      </div>
    </div>
  );
}

export default FullScreenModelAddNewItem;
