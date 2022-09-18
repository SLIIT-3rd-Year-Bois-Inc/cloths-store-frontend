import React, { useState, useEffect } from "react";
import Filter from "../../components/stock/Filter";
import Product from "../../components/stock/Product";
import ProductViewHeader from "../../components/stock/ProductViewHeader";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductPage() {
  const [filter, setFilter] = useState(false);

  const filterClicked = () => setFilter(!filter);
  const [products, setProducts] = useState([]);
  const [sortingOption, setSortingOption] = useState();
  const [gender, setGender] = useState();
  const [maxPrice, getMaxPrice] = useState("");
  const [minPrice, getminPrice] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4200/api/stock/getCusProducts", {
        params: { archived: false, sortingOption },
      })
      .then(function (response) {
        setProducts([...response.data]);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [sortingOption]);

  return (
    // full screen div

    <div className="flex flex-col items-center justify-center w-screen border-2">
      <div className="flex flex-col">
        <ProductViewHeader
          filterClicked={filterClicked}
          setSortingOption={setSortingOption}
        />
        <div className="flex flex-row relative">
          <Filter filter={filter} setGender={setGender} gender={gender} />
          <div className="flex flex-wrap justify-left xl:w-[1150px]">
            {products.map((product, index) => (
              <Link to={`/product/${product._id}`}>
                <Product key={index} doc={product} setGender={setGender} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
