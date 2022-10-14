import React, { useEffect, useState } from "react";
import Cart from "../cart/cart";
import { FiHeart, FiCheckSquare, FiXSquare } from "react-icons/fi";
import { useParams } from "react-router-dom";
import TwoTabs from "../../pages/review/cust-two-tab";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../header";

const ProductDetails = () => {
  let params = useParams();
  const userId = "10001";
  let navigate = useNavigate();

  // Fixed
  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState("");

  var today = new Date();
  var nextWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 7
  );

  const [isToggle, setToggle] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4200/api/stock/getProduct", {
        params: { id: params.productID },
      })
      .then(function (response) {
        // Fixed
        let res = response.data;
        res.imageUrls = res.imagesUrls.map((image) => image[1]);

        setProduct(res);

        let keys = res.quantity ? Object.keys(res.quantity) : [];
        if (keys.length > 0) {
          setSelectedSize(keys[0]);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const main_image =
    product.imageUrls && product.imageUrls.length ? product.imageUrls[0] : "";

  const changeImage = (event) => {
    document.querySelector(".main-img").src = event.target.src;
  };

  const chooseSizeError = () => (
    <div
      id="alert-border-3"
      className="flex p-4 mb-4  bg-red-100 border-t-4 border-red-500 dark:bg-red-200 mt-4 w-2/4 "
      role="alert"
    >
      <div class="ml-3 text-sm font-medium text-red-700">
        Select a size to add.
      </div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5  bg-red-100 dark:bg-red-200 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 dark:hover:bg-red-300 inline-flex h-8 w-8"
        data-dismiss-target="#alert-border-3"
        aria-label="Close"
        onClick={() => setShowError(false)}
      >
        <span class="sr-only">Dismiss</span>
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );

  const addToCart = () => {
    if (selectedSize !== "") {
      setCartData([
        {
          name: product.name,
          img: main_image,
          price: product.price,
          size: selectedSize,
          id: product._id,
        },
        ...cartData,
      ]);
      setShowSuccess(true);
    } else {
      setShowError(true);
    }
  };

  const addedToCartSuccess = () => (
    <div
      id="alert-border-3"
      className="flex p-4 mb-4 bg-green-100 border-t-4 border-green-500 dark:bg-green-200 mt-4  w-3/4"
      role="alert"
    >
      <svg
        class="flex-shrink-0 w-5 h-5 text-green-700"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <div class="ml-3 text-sm font-medium text-green-700">
        Item added!. Check your cart for added item
      </div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-green-100 dark:bg-green-200 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 dark:hover:bg-green-300 inline-flex h-8 w-8"
        data-dismiss-target="#alert-border-3"
        aria-label="Close"
        onClick={() => setShowSuccess(false)}
      >
        <span class="sr-only">Dismiss</span>
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );

  function navigateToCreate() {
    navigate("/createReview", {
      state: { data: product, data2: main_image },
    });
  }

  return (
    <>
      <Header />
      <div className="md:flex flex-row  flex-row md:ml-24 md:pt-9">
        <div className="w-0.5/4  flex flex-row md:flex-col ">
          {product.imageUrls &&
            product.imageUrls.map((value, index) => (
              <div key={index} className="pt-2 mr-6 ">
                <img
                  className="object-contain h-32 w-42  flex-row  "
                  src={value}
                  alt="F.jpg"
                  onClick={changeImage}
                />
              </div>
            ))}
        </div>
        <div className="  md:mr-14">
          <div className=" md:ml-0 pt-4 md:pt-0 mb-4">
            <img
              src={main_image}
              className="main-img  ml-12 md:ml-0 object-contain h-2/4 w-3/4   md:h-3/4  md:w-3/4	"
              alt="F.jpg"
            />
          </div>
        </div>
        <div className=" md:w-2/4  md: -ml-40">
          <div className="ml-44 md:ml-0 text-xs md:text-base">
            <div>
              <div className=" font-extrabold italic">
                <label htmlFor="name" className=" text-xs pb-0">
                  {product.gender === "M" ? "Men's" : "Women's"}
                </label>
                <div className=" pt-0 block text-l">{product.name}</div>
              </div>

              <div className=" pt-1 text-xs ">
                {product.quantity && product.quantity[selectedSize] ? (
                  <>
                    <FiCheckSquare size={32} color="green" />
                  </>
                ) : (
                  <>
                    <FiXSquare size={32} color="red" />
                  </>
                )}
              </div>
              <div className=" pt-3">
                <div className="font-bold md:text-lg">
                  Rs {product.price}.00
                </div>
              </div>
              <div className=" pt-3">
                <div className="font-bold md:text-lg">Available color</div>
                <div
                  className={`${product.color}`}
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <div className=" pt-3 ">
                <div>
                  <div className="font-bold md:text-lg">Size:</div>
                  {product.quantity
                    ? Object.keys(product.quantity).map((key, index) => (
                        <button
                          className={
                            selectedSize === key
                              ? "sizeSelect inline-block  mr-3 bg-zinc-900 shadow-lg border w-16 h-7 md:w-24 md:h-9 bg-  text-white	 text-center items-center"
                              : "sizeSelect inline-block  mr-3 bg-white-50 shadow-lg border w-16 h-7 md:w-24 md:h-9 bg-  text-center items-center"
                          }
                          id={index}
                          onClick={() => setSelectedSize(key)}
                        >
                          {key}
                        </button>
                      ))
                    : null}
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="description" className="font-bold md:text-lg">
                  Description:
                </label>
                <div className="">{product.description}</div>
              </div>
            </div>

            <div className="flex flex-row">
              <button
                className="mt-9 w-28 h-9 md:w-40 md:h-12 bg-black text-white text-center items-center rounded"
                onClick={addToCart}
              >
                ADD TO BAG
              </button>

              <button
                className="mt-9 ml-4 w-28 h-9 md:w-40 md:h-12 bg-black text-white text-center items-center rounded"
                onClick={navigateToCreate}
              >
                Add a review
              </button>
              <div
                className="mt-9 cursor-pointer"
                onClick={() => {
                  setToggle(!isToggle);
                }}
              >
                <FiHeart
                  size={16}
                  color="red"
                  className="items-center border border-red-600 h-9 w-12 ml-1 md:ml-3 md:w-16 md:h-12 rounded "
                />
              </div>
            </div>
            <div>
              <div>{showSuccess ? addedToCartSuccess() : <></>}</div>
              <div>{showError ? chooseSizeError() : <></>}</div>
            </div>
            <div className=" pt-4 text-xs md:text-base ">
              <div>
                Only {product.quantity ? product.quantity[selectedSize] : "N/A"}{" "}
                Available
              </div>
            </div>
            <div className=" pt-4 text-xs md:text-s ">
              <div>
                Order now to get by &nbsp;
                {nextWeek.toLocaleString("en-us", { day: "2-digit" })}
                &nbsp;
                {nextWeek.toLocaleString("en-us", { month: "long" })}, &nbsp;
                {nextWeek.getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Cart
          isToggle={isToggle}
          setToggle={setToggle}
          cartData={cartData}
          setCartData={setCartData}
          today={today}
          arrival={nextWeek}
        />

        <TwoTabs productID={product} />
      </div>
    </>
  );
};

export default ProductDetails;
