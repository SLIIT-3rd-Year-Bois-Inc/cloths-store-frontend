import React, { useState, useEffect } from "react";
import Filter from "../../components/stock/Filter";
import Product from "../../components/stock/Product";
import ProductViewHeader from "../../components/stock/ProductViewHeader";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/stock/Loader";

function ProductPage() {
  let params = useParams();
  const [filter, setFilter] = useState(false);

  const filterClicked = () => setFilter(!filter);
  const [products, setProducts] = useState([]);
  const [sortingOption, setSortingOption] = useState();
  const [gender, setGender] = useState();
  const [tagsArray, setTagsArray] = useState([]);
  const [clothneeds, setClothneeds] = useState(null);
  const [colorArray, setColorArray] = useState([]);
  const [maxPrice, getMaxPrice] = useState("");
  const [minPrice, getminPrice] = useState("");
  const [loading, setLoading] = useState(false);
  function makeObject() {
    let temSearchObj = { archived: false };
    if (!gender) {
      setGender(params.gender);
      temSearchObj.gender = params.gender;
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
      .get("http://localhost:4200/api/stock/getCusProducts", {
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
  }, [sortingOption, gender, tagsArray, colorArray]);
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
        tagBuildOnGender(clothneeds, params.gender);
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

  useEffect(() => {
    tagBuildOnGender(clothneeds, gender);
  }, [gender, clothneeds]);

  return (
    // full screen div

    <div className="relative flex flex-col items-center justify-center w-screen border-2">
      {loading && <Loader />}
      <div className="flex flex-col">
        <ProductViewHeader
          filterClicked={filterClicked}
          setSortingOption={setSortingOption}
        />
        <div className="flex flex-row relative">
          <Filter
            filter={filter}
            setGender={setGender}
            gender={gender}
            tagsArray={tagsArray}
            setTagsArray={setTagsArray}
            setColorArray={setColorArray}
            colorArray={colorArray}
          />
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
