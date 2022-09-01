import React, { useState, useRef } from "react";
import { RiImageAddLine } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import "./../../components/stock/css/newProduct.css";
import axios from "axios";

import { IoMdAddCircleOutline } from "react-icons/io";

const initialArray = [
  {
    tagName: "T-shirt",
    selected: false,
  },
  {
    tagName: "Shirt",
    selected: false,
  },
  {
    tagName: "Office Ware",
    selected: true,
  },
  {
    tagName: "skirts",
    selected: false,
  },
  {
    tagName: "Frocks",
    selected: false,
  },

  {
    tagName: "Trousers",
    selected: false,
  },
  {
    tagName: "Blouse",
    selected: true,
  },
  {
    tagName: "Long Sleeve",
    selected: false,
  },
];

function AddNewProduct() {
  //form usestates-----------------------------------------------------------------------------------------------------------------
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [gender, setGender] = useState("Men");
  const [selectedTags, setSelectedTags] = useState([]);

  function sendData(e) {
    e.preventDefault();

    const newItem = {
      name,
      price,
      gender,
    };
    axios
      .post("http://localhost:4200/user", {
        firstName: "Fred",
        lastName: "Flintstone",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // functional use states and functions-------------------------------------------------------------------------------------------
  const [selectedfile, setSelectedfile] = useState(null);
  const [selectedfileIndex, setSelectedfileIndex] = useState(-1);
  const [imagesList, setimagesList] = useState([]);
  const [sizeList, setSizeList] = useState([
    {
      size: "s",
      quantity: 14,
    },
    {
      size: "",
      quantity: 0,
    },
  ]);
  const [tags, setTags] = useState(false);
  const [tagsArray, setTagsArray] = useState(initialArray);
  const tagsClicked = () => {
    setTags(!tags);
  };

  const handleSizeChange = (index, event) => {
    let data = [...sizeList];
    data[index][event.target.name] = event.target.value;
    setSizeList(data);
  };
  function handleChange(e) {
    console.log(e.target.files);

    let temparr = [...imagesList];
    temparr.unshift(URL.createObjectURL(e.target.files[0]));
    setimagesList(temparr);
    setSelectedfile(URL.createObjectURL(e.target.files[0]));
    setSelectedfileIndex(0);
  }

  const myRefname = useRef(null);
  const handleClick = () => {
    myRefname.current.click();
  };

  function imgClicked(index) {
    setSelectedfile(imagesList[index]);
    setSelectedfileIndex(index);
  }
  function imgRemoveClicked() {
    let temparr = [...imagesList];
    temparr.splice(selectedfileIndex, 1);
    if (temparr.length === 0) {
      setSelectedfile(null);
      setSelectedfileIndex(-1);
    } else {
      setSelectedfile(temparr[0]);
      setSelectedfileIndex(0);
    }

    setimagesList(temparr);
  }

  function addSize() {
    let data = [...sizeList];
    data.push({
      size: "",
      quantity: 0,
    });
    setSizeList(data);
  }
  function removeSize(index) {
    let data = [...sizeList];
    data.splice(index, 1);
    setSizeList(data);
  }

  function tagclicked(index) {
    let temparr = [...tagsArray];
    temparr[index].selected = !temparr[index].selected;
    setTagsArray(temparr);
  }

  return (
    <div className="w-screen">
      <span>Add New Item</span>

      {/* image upload and inputs set */}
      <div className="w-screen flex flex-wrap 2xl:flex-row  justify-center  ">
        {/* image upload */}
        <div className=" w-[600px] m-8 flex flex-row ">
          {/* selected image */}
          <div
            className={
              "relative w-[330px] h-[415px] ml-14 border-2 " +
              (selectedfileIndex === -1 ? "border-dashed" : "border-solid")
            }
          >
            <img
              src={selectedfile}
              className={selectedfileIndex === -1 ? "opacity-0" : "opacity-100"}
              alt="selected cloath"
            />
            <span
              onClick={imgRemoveClicked}
              className={
                "absolute top-2 right-2 bg-gray-50/75 rounded-sm cursor-pointer hover:bg-gray-50" +
                (selectedfileIndex === -1 ? "opacity-0" : "opacity-100")
              }
            >
              <IoCloseSharp
                className={selectedfileIndex === -1 ? "hidden" : "block"}
                color="black"
              />
            </span>
          </div>

          {/* image list */}
          <div className="h-[470px] w-[134px] flex flex-col">
            <div
              className={
                " h-[268px] w-[134px] snap-y overflow-x-hidden mb-2 mx-5 ml-5" +
                (selectedfileIndex === -1
                  ? "overflow-y-hidden overflow-hidden"
                  : "overflow-y-scroll")
              }
            >
              {imagesList.map((imgItem, index) => (
                <div
                  key={index}
                  onClick={() => imgClicked(index)}
                  className="mb-5 w-[130px] hover:cursor-pointer h-[130px]  flex flex-row items-center overflow-hidden"
                >
                  <img src={imgItem} alt={index + " items"} />{" "}
                </div>
              ))}
            </div>

            <div
              className="hover:cursor-pointer mx-5 mt-2 w-[130px] h-[130px] border-dashed border-2 flex flex-col justify-center items-center"
              onClick={handleClick}
            >
              <input
                ref={myRefname}
                className="hidden"
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleChange}
              />
              <RiImageAddLine color="gray" className="h-10 w-10" />
              <span className="text-sm text-zinc-500">Add New Image</span>
            </div>
          </div>
        </div>
        {/* input field set */}
        <form>
          <div className="w-[600px] m-8">
            <div className="grid">
              {/*product name input */}
              <div className="mb-6">
                <label
                  for="first_name"
                  class="block ml-2 mb-2   text-gray-900 dark:text-gray-300 font-bold text-md"
                >
                  Product Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  id="first_name"
                  class=" border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md"
                  placeholder="John"
                  required
                />
              </div>
              {/*product price input */}
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    for="first_name"
                    class="block ml-2 mb-2   text-gray-900 dark:text-gray-300 font-bold text-md"
                  >
                    Product Price
                  </label>
                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    type="text"
                    id="first_name"
                    class=" border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md"
                    placeholder="price"
                    required
                  />
                </div>
                {/*gender input */}
                <div>
                  <label
                    for="countries"
                    class="block ml-2 mb-2   text-gray-900 dark:text-gray-300 font-bold text-md"
                  >
                    Gender
                  </label>
                  <select
                    id="countries"
                    class=" border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="Men" selected>
                      Men
                    </option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                    <option value="Unisex">Unisex</option>
                  </select>
                </div>
              </div>
              <div className="relative mb-6">
                <label
                  for="first_name"
                  class="block ml-2 mb-2   text-gray-900 dark:text-gray-300 font-bold text-md"
                >
                  Select Tags
                </label>
                <div className="border items-center flex flex-row justify-between min-h-[45px] align-middle border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md">
                  <div className="flex flex-wrap">
                    {tagsArray.map((tag, index) => {
                      if (tag.selected) {
                        return (
                          <span
                            className={
                              "h-8 m-1 bg-black text-base rounded-full px-4 py-1 text-white hover:cursor-pointer " +
                              (tag.selected
                                ? "bg-red-600 hover:bg-red-500"
                                : "bg-black hover:bg-gray-900")
                            }
                            onClick={() => tagclicked(index)}
                          >
                            {tag.tagName}
                          </span>
                        );
                      } else {
                        return "";
                      }
                    })}
                  </div>
                  <span onClick={tagsClicked} className="">
                    <IoMdAddCircleOutline className="w-6 h-6" />
                  </span>
                </div>
                <div
                  class={
                    tags
                      ? "absolute -bottom-[100px] h-[100px] overflow-y-auto w-full p-5 flex flex-wrap origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                      : "hidden"
                  }
                >
                  {tagsArray.map((tag, index) => (
                    <span
                      className={
                        "h-8 m-1 bg-black text-base rounded-full px-4 py-1 text-white hover:cursor-pointer " +
                        (tag.selected
                          ? "bg-red-600 hover:bg-red-500"
                          : "bg-black hover:bg-gray-900")
                      }
                      onClick={() => tagclicked(index)}
                    >
                      {tag.tagName}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <label
                  for="first_name"
                  class="block ml-2 mb-2   text-gray-900 dark:text-gray-300 font-bold text-md"
                >
                  Description
                </label>
                <input
                  type="text"
                  id="first_name"
                  class=" border align-middle border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md"
                  placeholder="description"
                  required
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full flex flex-row justify-center">
        <form>
          <div class="flex flex-col items-center gap-6 mb-6">
            <div className="mb-2">
              <label
                for="first_name"
                class="block ml-2 mb-2   text-gray-900 dark:text-gray-300 font-bold text-md"
              >
                Color
              </label>

              <select
                id="countries"
                class="w-[250px] border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md"
              >
                <option selected>Choose a color</option>
                <option value="US">white</option>
                <option value="CA">blue</option>
                <option value="FR">black</option>
                <option value="DE">red</option>
              </select>
            </div>
            <div class="flex flex-wrap justify-around">
              {sizeList.map((sizeqty, index) => (
                <div key={index} className="flex flex-row items-center pl-10">
                  <div className="">
                    <label
                      for="first_name"
                      class="block ml-2 mb-2 text-gray-900 dark:text-gray-300 font-bold text-md"
                    >
                      Size
                    </label>
                    <input
                      value={sizeqty.size}
                      name="size"
                      onChange={(event) => handleSizeChange(index, event)}
                      type="text"
                      id="first_name"
                      class="border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80px] p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md"
                      placeholder="size"
                      required
                    />
                  </div>
                  <div className="ml-5">
                    <label
                      for="first_name"
                      class="block ml-2 mb-2   text-gray-900 dark:text-gray-300 font-bold text-md"
                    >
                      Quantity
                    </label>
                    <input
                      value={sizeqty.quantity}
                      name="quantity"
                      onChange={(event) => handleSizeChange(index, event)}
                      type="text"
                      id="first_name"
                      class="border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80px] p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md"
                      placeholder="size"
                      required
                    />
                  </div>
                  <span
                    onClick={() => {
                      removeSize(index);
                    }}
                    className={
                      "ml-3 bg-gray-500 rounded-sm cursor-pointer hover:bg-gray-600"
                    }
                  >
                    <IoCloseSharp color="white" />
                  </span>
                </div>
              ))}

              <div className="ml-10 mt-2">
                <br />
                <div className="flex flex-row justify-center items-center  border-2 border-dashed w-[190px] h-12">
                  <span
                    onClick={addSize}
                    className="text-zinc-500 hover:cursor-pointer"
                  >
                    add a size
                  </span>
                </div>
              </div>
            </div>
            <div>
              <input
                onClick={(e) => sendData(e)}
                type="submit"
                value={"ADD"}
                className="bg-red-600 text-white h-10 w-[200px] cursor-pointer hover:bg-red-700 mr-10 mt-20"
              />
              <button className="bg-black text-white h-10 w-[200px]">
                CANCLE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewProduct;
