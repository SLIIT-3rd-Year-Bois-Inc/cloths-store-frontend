import React from "react";
import { CgDanger } from "react-icons/cg";

function DeleteConfirmModel({ deleteClicked, closeDeleteConfirmModel }) {
  return (
    <div className="absolute top-0 w-full h-full z-10 flex flex-row justify-center items-center">
      <div className="bg-white/90 px-6 py-6 min-w-[200px] border rounded-sm">
        <span className="w-full flex flex-row justify-center">
          <CgDanger color="red" className="h-8 w-8" />
        </span>
        <span className="font-bold">
          <span className=" text-red-500 text-center block">
            You will not be able to recover this product if you continue!
          </span>
          <span className=" text-lime-500 text-center block">
            Try archive option instead!{" "}
          </span>
        </span>
        <div className="mt-4">
          <span
            className="flex flex-grow py-3 flex-row justify-center items-center cursor-pointer bg-black text-white hover:bg-gray-900"
            onClick={closeDeleteConfirmModel}
          >
            No, Don't Delete
          </span>
          <span
            className="flex flex-grow py-3 flex-row justify-center items-center cursor-pointer bg-red-600 text-white hover:bg-red-500"
            onClick={deleteClicked}
          >
            Continue to Delete
          </span>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmModel;
