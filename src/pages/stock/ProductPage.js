import React, { useState, useEffect } from "react";
import Filter from "../../components/stock/Filter";
import Product from "../../components/stock/Product";
import ProductViewHeader from "../../components/stock/ProductViewHeader";
import axios from "axios";

function ProductPage() {
  const [filter, setFilter] = useState(false);

  const filterClicked = () => setFilter(!filter);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4200/api/stock/getCusProducts", {
        params: { archived: false },
      })
      .then(function (response) {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    // full screen div

    <div className="flex flex-col items-center justify-center w-screen border-2">
      <div className="flex flex-col">
        <ProductViewHeader filterClicked={filterClicked} />
        <div className="flex flex-row relative">
          <Filter filter={filter} />
          <div className="flex flex-wrap justify-left xl:w-[1150px]">
            {products.map((product, index) => (
              <Product key={index} docID={product._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
