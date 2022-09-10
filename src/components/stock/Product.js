import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ItemLoader from "./ItemLoader";

function Product({ viewtype, docID }) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const inputEl = useRef(null);

  function getProduct() {
    setLoading(true);
    axios
      .get("http://localhost:4200/api/stock/getProduct", {
        params: { id: docID },
      })
      .then(function (response) {
        setProduct(response.data);
        console.log(response.data);
        setImage(response.data.imagesUrls[0][1]);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        setLoading(false);
      });
  }
  useEffect(() => {
    getProduct();
  }, [docID]);

  return (
    <div className="relative w-[330px] h-[470px]  mr-5 ml-5 mb-14 ">
      {loading && <ItemLoader />}
      <img
        className="w-[330px] h-[400px]"
        height="100%"
        width="100%"
        src={image}
        alt="car"
        ref={inputEl}
      />
      <div className="flex flex-col items-center p-2">
        <span className="text-xl w-full text-center  truncate max-h-[40px]">
          {product.name}
        </span>
        <span className="text-xl font-bold">Rs.{product.price}</span>
      </div>
    </div>
  );
}

export default Product;
