import React, { useEffect, useState } from "react";
import Cart from "../cart/cart";
import { FiHeart, FiCheckSquare, FiXSquare } from "react-icons/fi";
import { useParams } from "react-router-dom";
import TwoTabs from "../../pages/review/cust-two-tab";
import axios from "axios";
const ProductDetails = () => {
  let params = useParams();

  // const data = [
  //   {
  //     id: "1",
  //     img: [
  //       "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/555bccc0efd24c26b79aaeb500dd25b5_9366/Capable_of_Greatness_Training_Tee_Black_HG7895_01_laydown.jpg",
  //       "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c4efa9f4e66a41ad8979aeb500dce959_9366/Capable_of_Greatness_Training_Tee_Black_HG7895_21_model.jpg",
  //       "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e3dea28f166549f4a787aeb500dd0788_9366/Capable_of_Greatness_Training_Tee_Black_HG7895_41_detail.jpg",
  //       "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/97293103e26045a5a35faeb500dcfc39_9366/Capable_of_Greatness_Training_Tee_Black_HG7895_25_model.jpg",
  //     ],
  //     description:
  //       "Make each rep count in this adidas x Peloton tee. AEROREADY manages moisture, so you can train distraction-free and focus on your form. A droptail hem with side slits adds coverage for deep squats and gives you greater freedom of movement on twisty ab and back exercises. So simple. So stellar Made with a series of recycled materials, and at least 60% recycled content, this product represents just one of our solutions to help end plastic waste.",
  //     name: "CAPABLE OF GREATNESS TRAINING TEE",
  //     gender: "m",
  //     color: "Black",
  //     brand: "adidas",
  //     size: ["S", "M", "L"],
  //     price: "3000",
  //   },
  // ];

  const [name, setName] = useState(params.productID);
  const [price, setPrice] = useState("");
  const [gender, setGender] = useState("X");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [sizeList, setSizeList] = useState([]);
  const [imagesUrlList, setImagesUrlList] = useState([]);
  const [mainImage, setMainImage] = useState("");

  const [isToggle, setToggle] = useState(false);
  const [size, setSize] = useState(null);
  const [cartData, setCartData] = useState([]);
  const [sizeID, setSizeId] = useState();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4200/api/stock/getProduct", {
        params: { id: params.productID },
      })
      .then(function (response) {
        setName(response.data.name);
        setPrice(response.data.price);
        setGender(response.data.gender);
        let data = [];
        let dataUrls = [];
        response.data.imagesUrls.forEach((image) => {
          data.push(image[0]);
          dataUrls.push(image[1]);
        });
        console.log("heres the use effect image name set" + data);
        setImagesUrlList(dataUrls);
        setMainImage(dataUrls[0]);
        setColor(response.data.color);
        setDescription(response.data.description);
        let qObj = response.data.quantity;
        let qArray = [];
        for (const key in qObj) {
          qArray.push({
            size: key,
            quantity: qObj[key],
          });
        }
        setSizeList(qArray);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  useEffect(() => {
    console.log();
  });

  const changeImage = (event) => {
    document.querySelector(".main-img").src = event.target.src;
  };

  const changeSize = (e, key) => {
    setSizeId(key);
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

  // const addToCart = () => {
  //   if (size !== null) {
  //     setCartData([
  //       {
  //         name: data[0].name,
  //         img: data[0].img[0],
  //         price: data[0].price,
  //         size: size,
  //       },
  //       ...cartData,
  //     ]);
  //     setShowSuccess(true);
  //   } else {
  //     setShowError(true);
  //   }
  // };

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

  return (
    <>
      <div className="md:flex flex-row  flex-row md:ml-24 md:pt-9">
        <div className="w-0.5/4  flex flex-row md:flex-col ">
          {imagesUrlList.map((value, index) => (
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
              src={mainImage}
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
                  {gender === "M" ? "Men's" : "Women's"}
                </label>
                <div className=" pt-0 block text-l">{name} </div>
              </div>

              <div className=" pt-1 text-xs ">
                {sizeList ? (
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
                <div className="font-bold md:text-lg">Rs {price}.00</div>
              </div>
              <div className=" pt-3">
                <div className="font-bold md:text-lg">Available color</div>
                <div
                  className={`${color}`}
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
                  {sizeList.map((value, index) => (
                    <button
                      className={
                        sizeID === index
                          ? "sizeSelect inline-block  mr-3 bg-zinc-900 shadow-lg border w-16 h-7 md:w-24 md:h-9 bg-  text-white	 text-center items-center"
                          : "sizeSelect inline-block  mr-3 bg-white-50 shadow-lg border w-16 h-7 md:w-24 md:h-9 bg-  text-center items-center"
                      }
                      id={index}
                      onClick={(e) => changeSize(e, index)}
                    >
                      {value.size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="description" className="font-bold md:text-lg">
                  Description:
                </label>
                <div className="">{description}</div>
              </div>
            </div>

            <div className="flex flex-row">
              <button
                className="mt-9 w-28 h-9 md:w-40 md:h-12 bg-black text-white text-center items-center rounded"
                // onClick={addToCart}
              >
                ADD TO BAG
              </button>
              <div
                className="mt-9 cursor-pointer"
                // onClick={() => {
                //   setToggle(!isToggle);
                //   console.log(cartData);
                // }}
              >
                <FiHeart
                  size={16}
                  color="red"
                  className="items-center border border-red-600 h-9 w-12 ml-1 md:ml-3 md:w-16 md:h-12 rounded "
                />
              </div>
            </div>
            <div>
              {/* <div>{showSuccess ? addedToCartSuccess() : <></>}</div>
              <div>{showError ? chooseSizeError() : <></>}</div> */}
            </div>
            <div className=" pt-4 text-xs md:text-base ">
              <div>Only {sizeList[sizeID]?.quantity} Available</div>
            </div>
            <div className=" pt-4 text-xs md:text-s ">
              <div>
                Order now to get it between Tuesday, 9th August and Monday, 22nd
                August
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
        />

        <TwoTabs
        // title={}
        // price={}
        // description={}
        // image1={}
        />
      </div>
    </>
  );
};

export default ProductDetails;
