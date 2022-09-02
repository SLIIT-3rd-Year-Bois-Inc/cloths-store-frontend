import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { BsArchive } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";
import ItemLoader from "./ItemLoader";

function AdminProduct({ viewtype, docID }) {
  const [product, setProduct] = useState({});
  const [archiveConfirmModel, setArchiveConfirmModel] = useState(false);
  const [loading, setLoading] = useState(false);

  function showArchiveConfirmModel() {
    setArchiveConfirmModel(true);
  }
  function closeArchiveConfirmModel() {
    setArchiveConfirmModel(false);
  }

  function archiveClicked() {
    closeArchiveConfirmModel();

    setLoading(true);
    axios
      .put("http://localhost:4200/api/stock/archiveProduct", {
        _id: docID,
        archived: !product.archived,
      })
      .then(function (response) {
        console.log(response);

        getProduct();
      })
      .catch(function (error) {
        console.log(error);
        alert("product was not Updated");
      })
      .then(() => {
        setLoading(false);
      });
  }
  function getProduct() {
    setLoading(true);
    axios
      .get("http://localhost:4200/api/stock/getProduct", {
        params: { id: docID },
      })
      .then(function (response) {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        setLoading(false);
      });
  }
  useEffect(() => {
    console.log(docID);
    getProduct();
  }, []);
  return (
    <div className="relative w-[330px] h-[470px]  mr-5 ml-5 mb-14 ">
      {archiveConfirmModel && (
        <div className="absolute top-0 w-full h-full z-10 flex flex-row justify-center items-center">
          <div className="bg-white/75 px-6 py-6 min-w-[200px] border rounded-sm">
            <span className="font-bold">
              {product.archived
                ? "Do you want to reveal this Product?"
                : "Do you want to Archive this Product?"}
            </span>
            <div className="mt-4">
              <span
                className="flex flex-grow py-3 flex-row justify-center items-center bg-red-600 text-white hover:bg-red-500"
                onClick={archiveClicked}
              >
                yes
              </span>
              <span
                className="flex flex-grow py-3 flex-row justify-center items-center bg-black text-white hover:bg-gray-900"
                onClick={closeArchiveConfirmModel}
              >
                no
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="relative">
        <img
          height="100%"
          width="100%"
          src={require("./tempAssests/productImg1.png")}
          alt="car"
        />
        <div className="absolute w-full bottom-16 flex flex-row justify-evenly">
          <Link
            to={`/stock/admin/editProduct/${docID}`}
            className="p-3 hover:cursor-pointer hover:bg-white/60 bg-white/50"
          >
            <FaRegEdit color="white" className="w-5 h-5" />
          </Link>
          <span
            onClick={showArchiveConfirmModel}
            className={
              "p-3 hover:cursor-pointer " +
              (product.archived
                ? "hover:bg-red-600/60 bg-red-600/50"
                : "hover:bg-white/60 bg-white/50")
            }
          >
            <BsArchive color="white" className="w-5 h-5" />
          </span>
          <span className="p-3 hover:cursor-pointer hover:bg-white/60 bg-white/50">
            <RiDeleteBin6Line color="white" className="w-5 h-5" />
          </span>
        </div>
        {loading && <ItemLoader />}
      </div>

      <div className="flex flex-col items-center p-2">
        <span className="text-xl">{product.name}</span>
        <span className="text-xl font-bold">Rs.{product.price}</span>
      </div>
    </div>
  );
}

export default AdminProduct;
