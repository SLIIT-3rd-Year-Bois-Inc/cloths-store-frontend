import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { BsArchive } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";
import ItemLoader from "./ItemLoader";
import DeleteConfirmModel from "./DeleteConfirmModel";

function AdminProduct({ viewtype, product, postWidth }) {
  const [archiveConfirmModel, setArchiveConfirmModel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [deleteConfirmModel, setDeleteConfirmModel] = useState(false);
  const [id, setID] = useState();
  const [archived, setArchived] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();

  function showDeleteConfirmModel() {
    setDeleteConfirmModel(true);
  }
  function closeDeleteConfirmModel() {
    setDeleteConfirmModel(false);
  }

  function showArchiveConfirmModel() {
    setArchiveConfirmModel(true);
  }
  function closeArchiveConfirmModel() {
    setArchiveConfirmModel(false);
  }

  function deleteClicked() {
    closeDeleteConfirmModel();
    alert("nothing happend he he");
    // setLoading(true);
    // axios
    //   .put("http://localhost:4200/api/stock/archiveProduct", {
    //     _id: docID,
    //     archived: !product.archived,
    //   })
    //   .then(function (response) {
    //     console.log(response);

    //     getProduct();
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     alert("product was not Updated");
    //   })
    //   .then(() => {
    //     setLoading(false);
    //   });
  }

  function archiveClicked() {
    closeArchiveConfirmModel();

    setLoading(true);
    axios
      .put("http://localhost:4200/api/stock/archiveProduct", {
        _id: product._id,
        archived: !archived,
      })
      .then(function (response) {
        console.log(response.data.updatedobj);
        setID(product._id);
        setArchived(!response.data.updatedobj.archived);
        setImage(response.data.updatedobj.imagesUrls[0][1]);
        setName(response.data.updatedobj.name);
        setPrice(response.data.updatedobj.price);
      })
      .catch(function (error) {
        console.log(error);
        alert("product was not Updated");
      })
      .then(() => {
        setLoading(false);
      });
  }
  useEffect(() => {
    setID(product._id);
    setArchived(product.archived);
    setImage(product.imagesUrls[0][1]);
    setName(product.name);
    setPrice(product.price);
  }, [product]);

  return (
    <div
      className={
        "relative   mr-5 ml-5 mb-14 " +
        (postWidth === 2 ? "w-[535px] h-[730px]" : "w-[330px] h-[470px]")
      }
    >
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

      {deleteConfirmModel && (
        <DeleteConfirmModel
          deleteClicked={deleteClicked}
          closeDeleteConfirmModel={closeDeleteConfirmModel}
        />
      )}
      <div className="relative ">
        <img
          className={
            postWidth === 2 ? "w-[535px] h-[648px]" : "w-[330px] h-[400px]"
          }
          src={image}
          alt="car"
        />
        <div className="absolute w-full bottom-16 flex flex-row justify-evenly">
          <Link
            to={`/admin/stocks/edit/${id}`}
            className="p-3 hover:cursor-pointer hover:bg-white/60 bg-white/50"
          >
            <FaRegEdit color="black" className="w-5 h-5" />
          </Link>
          <span
            onClick={showArchiveConfirmModel}
            className={
              "p-3 hover:cursor-pointer " +
              (archived
                ? "hover:bg-red-600/60 bg-red-600/50"
                : "hover:bg-white/60 bg-white/50")
            }
          >
            <BsArchive color="black" className="w-5 h-5" />
          </span>
          <span
            className="p-3 hover:cursor-pointer hover:bg-white/60 bg-white/50"
            onClick={showDeleteConfirmModel}
          >
            <RiDeleteBin6Line color="black" className="w-5 h-5" />
          </span>
        </div>
        {loading && <ItemLoader />}
      </div>

      <div className="flex flex-col items-center p-2">
        <span className="text-xl w-full text-center  truncate max-h-[40px]">
          {name}
        </span>
        <span className="text-xl font-bold">Rs.{price}</span>
      </div>
    </div>
  );
}

export default AdminProduct;
