import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminProduct from "../../components/stock/AdminProduct";
import Filter from "../../components/stock/Filter";
import AdminProductViewHeader from "../../components/stock/AdminProductViewHeader";

function AdminProductPage() {
  const [filter, setFilter] = useState(false);
  const filterClicked = () => setFilter(!filter);
  const [products, setProducts] = useState([]);
  const [sortingOption, setSortingOption] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:4200/api/stock/getAdminProducts", {
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
    <div className="flex flex-col items-center justify-center w-screen">
      <div className="flex flex-col">
        <AdminProductViewHeader
          filterClicked={filterClicked}
          setSortingOption={setSortingOption}
        />
        <div className="flex flex-row relative">
          <Filter filter={filter} />
          <div className="flex flex-wrap justify-left xl:w-[1150px]">
            {products.map((product, index) => (
              <AdminProduct key={index} docID={product._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProductPage;
