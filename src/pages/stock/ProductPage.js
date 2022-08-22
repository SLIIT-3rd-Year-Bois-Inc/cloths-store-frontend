import React, { useEffect, useState } from "react";
import Filter from "../../components/stock/Filter";
import Product from "../../components/stock/Product";
import ProductViewHeader from "../../components/stock/ProductViewHeader";
import { useLocation } from "react-router-dom";

function ProductPage() {
  const [filter, setFilter] = useState(false);
  const location = useLocation();
  const { from } = location.state;

  const filterClicked = () => setFilter(!filter);

  useEffect(() => {
    // Update the document title using the browser API
    console.log(from);
  });

  return (
    // full screen div

    <div className="">
      <ProductViewHeader from={from} filterClicked={filterClicked} />
      {/* sort,view layer div */}
      {/* <ProductViewHeader filterClicked={filterClicked}/> */}

      {/* products and filters div */}
      <div className="flex flex-col justify-center 2xl:flex-row px-10">
        {/* filters div */}
        <Filter filter={filter} />

        {/* products container div */}

        <div className="flex flex-wrap justify-center">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
