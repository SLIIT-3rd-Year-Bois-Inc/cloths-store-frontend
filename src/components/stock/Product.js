import React from "react";

function Product({ imgUrl, viewtype }) {
  return (
    <div className="w-[330px] h-[470px]  mr-5 ml-5 mb-14 ">
      <img
        height="100%"
        width="100%"
        src={require("./tempAssests/productImg1.png")}
        alt="car"
      />
      <div className="flex flex-col items-center p-2">
        <span className="text-xl">Hot Pink Round Sidebow Top</span>
        <span className="text-xl font-bold">Rs.1223.00</span>
      </div>
    </div>
  );
}

export default Product;
