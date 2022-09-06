import React, { useState, useRef } from "react";
import Loader from "../../components/stock/Loader";

import { uploadFile } from "../../firebase";

import { RiImageAddLine } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

function ImageTest() {
  const [selectedfile, setSelectedfile] = useState(null);
  const [selectedfileIndex, setSelectedfileIndex] = useState(-1);
  const [imagesList, setimagesList] = useState([]);
  const [imagesUrlList, setImagesUrlList] = useState([]);
  const [loading, setLoading] = useState(false);
  function handleChange(e) {
    console.log(e.target.files);

    let temUrlparr = [...imagesUrlList];
    temUrlparr.unshift(URL.createObjectURL(e.target.files[0]));
    setImagesUrlList(temUrlparr);

    let temparr = [...imagesList];
    temparr.unshift(e.target.files[0]);
    setimagesList(temparr);

    setSelectedfile(URL.createObjectURL(e.target.files[0]));
    setSelectedfileIndex(0);
  }
  const myRefname = useRef(null);
  const handleClick = () => {
    myRefname.current.click();
  };

  function imgClicked(index) {
    setSelectedfile(imagesUrlList[index]);
    setSelectedfileIndex(index);
  }
  function imgRemoveClicked() {
    let temparr = [...imagesUrlList];
    temparr.splice(selectedfileIndex, 1);
    if (temparr.length === 0) {
      setSelectedfile(null);
      setSelectedfileIndex(-1);
    } else {
      setSelectedfile(temparr[0]);
      setSelectedfileIndex(0);
    }

    setImagesUrlList(temparr);

    let tempUrlarr = [...imagesUrlList];
    tempUrlarr.splice(selectedfileIndex, 1);

    setimagesList(tempUrlarr);
  }

  async function sendData(e) {
    e.preventDefault();
    console.log(imagesList);

    let newArray = imagesList.map((image) => uploadFile(image));

    console.log(await Promise.all(newArray));
    console.log("hehe");
  }

  return (
    <div>
      {loading && <Loader />}
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
              {imagesUrlList.map((imgItem, index) => (
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
      </div>
      <input
        onClick={(e) => sendData(e)}
        type="submit"
        value={"ADD"}
        className="bg-red-600 text-white h-10 w-[200px] cursor-pointer hover:bg-red-700 mr-10 mt-20"
      />
    </div>
  );
}

export default ImageTest;
