import React from "react";
import HomeProduct from "../home-product";

export default function HomePopular() {
  const products = new Array(10);

  products.fill(
    <HomeProduct
      title="Some Nice Product"
      price={12.0}
      image={
        "https://img.ltwebstatic.com/images3_pi/2022/08/01/16593228520eb8906e0a881d44efa11330f61a584a_thumbnail_600x.webp"
      }
    />
  );

  return (
    <div className="py-8 ml-[3.5em] min-h-[30em]">
      <h1 className="font-open-sans text-xl font-semibold mb-4">
        Popular Right now
      </h1>
      <div className="flex flex-row overflow-hidden">{products}</div>
    </div>
  );
}
