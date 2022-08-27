import React, { useState } from "react";
import Filter from "../../components/stock/Filter";
import Product from "../../components/stock/Product";
import ProductViewHeader from "../../components/stock/ProductViewHeader";

function ProductPage() {
  const [filter, setFilter] = useState(false);

  const filterClicked = () => setFilter(!filter);

  return (
    // full screen div

    <div className="flex flex-col items-center justify-center w-screen border-2">
      <div className="flex flex-col">
        <ProductViewHeader filterClicked={filterClicked} />
        <div className="flex flex-row relative">
          <Filter filter={filter} />
          <div className="flex flex-wrap justify-center xl:w-[1150px]">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
