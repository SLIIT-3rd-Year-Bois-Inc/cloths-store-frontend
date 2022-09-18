import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ItemLoader from "./ItemLoader";

function Product({ viewtype, doc }) {
  const [image, setImage] = useState("");
  const inputEl = useRef(null);

  useEffect(() => {
    setImage(doc.imagesUrls[0][1]);
  }, [doc]);

  return (
    <div className="relative w-[330px] h-[470px]  mr-5 ml-5 mb-14 ">
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
          {doc.name}
        </span>
        <span className="text-xl font-bold">Rs.{doc.price}</span>
      </div>
    </div>
  );
}

export default Product;
