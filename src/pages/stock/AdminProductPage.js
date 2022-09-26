import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminProduct from "../../components/stock/AdminProduct";
import Filter from "../../components/stock/Filter";
import AdminProductViewHeader from "../../components/stock/AdminProductViewHeader";
import AdminFilter from "../../components/stock/AdminFilter";
import Loader from "../../components/stock/Loader";
import ProductSearch from "../../components/stock/ProductSearch";
import ReactPaginate from "react-paginate";

function AdminProductPage() {
  const [filter, setFilter] = useState(false);
  const filterClicked = () => setFilter(!filter);
  const [products, setProducts] = useState([]);
  const [sortingOption, setSortingOption] = useState();
  const [tagsArray, setTagsArray] = useState([]);
  const [gender, setGender] = useState();
  const [clothneeds, setClothneeds] = useState(null);
  const [maxPrice, getMaxPrice] = useState("");
  const [minPrice, getminPrice] = useState("");
  const [colorArray, setColorArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [archived, setArchived] = useState("all");

  //pagination=======================================================================
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  // pagination end====================================================================

  function makeObject() {
    let temSearchObj = {};

    if (archived === "all") {
    } else if (archived === "archived") {
      temSearchObj.archived = true;
    } else {
      temSearchObj.archived = false;
    }

    if (!gender) {
      setGender("M");
    } else {
      temSearchObj.gender = gender;
    }

    let selectedTags = [];
    tagsArray.forEach((tag) => {
      if (tag.selected) {
        selectedTags.push(tag.tagName);
      }
    });

    if (selectedTags.length) {
      temSearchObj.tags = { $all: selectedTags };
    }

    let selectedColors = [];
    colorArray.forEach((color) => {
      if (color.selected) {
        selectedColors.push(color.colorName);
      }
    });

    if (selectedColors.length) {
      temSearchObj.color = { $in: selectedColors };
    }

    return temSearchObj;
  }

  useEffect(() => {
    setLoading(true);
    let tempSearchObj = makeObject();
    axios
      .get("http://localhost:4200/api/stock/getAdminProducts", {
        params: { tempSearchObj, sortingOption },
      })
      .then(function (response) {
        setProducts([...response.data]);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        setLoading(false);
      });
  }, [sortingOption, gender, tagsArray, colorArray, archived]);

  function searchProducts(searchValue) {
    alert(searchValue);
    setLoading(true);
    let tempSearchObj = makeObject();
    axios
      .get("http://localhost:4200/api/stock/searchProduct", {
        params: { tempSearchObj, searchValue, sortingOption },
      })
      .then(function (response) {
        console.log(response.data.data.items);
        setProducts([...response.data.data.items]);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        setLoading(false);
      });
  }

  function colorArrayBuilderForChangeGet(color) {
    let selectedBool = false;

    return {
      colorName: color,
      selected: selectedBool,
    };
  }
  useEffect(() => {
    axios
      .get("http://localhost:4200/api/clothNeeds/getTags")
      .then(function (response) {
        // handle success
        tagBuildOnGender(clothneeds, "M");
        let colorsInit = response.data[0].colors.map((color) =>
          colorArrayBuilderForChangeGet(color)
        );
        setColorArray(colorsInit);
        setClothneeds(response.data[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
        console.log(clothneeds);
      });
  }, []);

  function tagArrayBuilderForChangeGet(tag) {
    let selectedBool = false;

    return {
      tagName: tag,
      selected: selectedBool,
    };
  }
  function tagBuildOnGender(clothneeds, gender) {
    if (clothneeds) {
      let data = [];
      if (gender === "M") {
        data = clothneeds.mensTags.map((tag) =>
          tagArrayBuilderForChangeGet(tag)
        );
      } else if (gender === "W") {
        data = clothneeds.womenTags.map((tag) =>
          tagArrayBuilderForChangeGet(tag)
        );
      } else if (gender === "K") {
        data = clothneeds.childTags.map((tag) =>
          tagArrayBuilderForChangeGet(tag)
        );
      } else if (gender === "U") {
        data = clothneeds.unisexTags.map((tag) =>
          tagArrayBuilderForChangeGet(tag)
        );
      }
      setTagsArray(data);
    }
  }
  useEffect(() => {
    tagBuildOnGender(clothneeds, gender);
  }, [gender, clothneeds]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full mt-10">
      {loading && <Loader />}
      <ProductSearch searchProducts={searchProducts} />
      <div className="flex flex-col">
        <AdminProductViewHeader
          filterClicked={filterClicked}
          setSortingOption={setSortingOption}
        />
        <div className="flex flex-row relative">
          <AdminFilter
            filter={filter}
            archived={archived}
            setArchived={setArchived}
            setGender={setGender}
            gender={gender}
            tagsArray={tagsArray}
            setTagsArray={setTagsArray}
            setColorArray={setColorArray}
            colorArray={colorArray}
          />

          <div className="flex flex-wrap justify-left xl:w-[1150px]">
            {currentItems.map((product, index) => (
              <AdminProduct key={index} product={product} />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-row justify-end font-bold  ">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="flex flex-row gap-1.5 items-center"
            pageLinkClassName="px-4 py-2 bg-red-600 text-white hover:cursor-pointer font-bold hover:bg-red-500"
            previousClassName="px-4 py-2 bg-red-600 text-white hover:cursor-pointer font-bold hover:bg-red-500"
            nextClassName="px-4 py-2 bg-red-600 text-white hover:cursor-pointer font-bold hover:bg-red-500"
            activeLinkClassName="px-4 py-2 bg-black text-white hover:cursor-pointer font-bold "
          />
        </div>
      </div>
    </div>
  );
}

export default AdminProductPage;
