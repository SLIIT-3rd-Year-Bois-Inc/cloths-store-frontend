import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ItemLoader from "./ItemLoader";
import companyLogo from "./tempAssests/No-Image.png";

function Product({ viewtype, doc, postWidth }) {
  const [image, setImage] = useState("");
  const inputEl = useRef(null);

  useEffect(() => {
    if (doc.imagesUrls.length > 0) {
      setImage(doc.imagesUrls[0][1]);
    } else {
      setImage(companyLogo);
    }
  }, [doc]);

  return (
    <div
      className={
        "relative   mr-5 ml-5 mb-14 " +
        (postWidth === 2 ? "w-[535px] h-[730px]" : "w-[330px] h-[470px]")
      }
    >
      <img
        className={
          postWidth === 2 ? "w-[535px] h-[648px]" : "w-[330px] h-[400px]"
        }
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
