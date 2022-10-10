import React, { useEffect } from "react";

function MyAlert({ deleteAlertChanged, setDeleteAlertChanged }) {
  useEffect(() => {
    console.log("prduct changed", deleteAlertChanged);
  }, [deleteAlertChanged]);
  return (
    <div className="w-full mx-10">
      {deleteAlertChanged == 0 ? null : (
        <div
          className={
            "text-white px-6 py-4 border-0 rounded relative mb-4 bg-" +
            (deleteAlertChanged == 1 ? "green" : "red") +
            "-500"
          }
        >
          <span className="text-xl inline-block mr-5 align-middle">
            <i className="fas fa-bell" />
          </span>
          <span className="inline-block align-middle mr-8">
            {deleteAlertChanged == 1
              ? "Product deleted successfully!"
              : deleteAlertChanged == 2
              ? "Product Couldn't delete!"
              : null}
          </span>
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={() => {
              setDeleteAlertChanged(0);
            }}
          >
            <span>×</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default MyAlert;
