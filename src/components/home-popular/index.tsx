import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { CustomerAPI } from "../../pages/customer/api";
import HomeProduct from "../home-product";

export default function HomePopular() {
  const popular_products = useQuery(
    ["products", 10],
    CustomerAPI.popularProducts
  );
  const products = popular_products.data ?? [];

  console.log(products);
  return (
    <div className="py-8 ml-[3.5em] min-h-[30em]">
      <h1 className="font-open-sans text-xl font-semibold mb-4">
        Popular Right now
      </h1>
      <div className="flex flex-row overflow-hidden overflow-x-auto">
        {products.map((v: any) => (
          <HomeProduct
            title={v.name}
            price={v.price}
            image={
              v.imagesUrls.length > 0 && v.imagesUrls[0].length > 0
                ? v.imagesUrls[0][1]
                : ""
            }
            sold={v.sold}
            link={`/product/${v._id}`}
          />
        ))}
      </div>
    </div>
  );
}
