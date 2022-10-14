import React from "react";
import noImage from "../../../src/image/no_image.jpg";
import loading from "../../../src/image/loading.gif";
import { useState } from "react";
import { API_ENDPOINT } from "../../config";
import CommonSuccess from "../../components/review-modals/common-success";
import Failed from "../../components/review-modals/failed";
import ImageBig from "../../components/review-modals/imageBig";
import { uploadFile } from "../../firebase";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CusCreateReview() {
  let navigate = useNavigate();
  const location = useLocation();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);
  const [image1, setImage1] = useState(noImage);
  const [image2, setImage2] = useState(noImage);
  const [image3, setImage3] = useState(noImage);
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const [star1, setStar1] = useState("");
  const [star2, setStar2] = useState("");
  const [star3, setStar3] = useState("");
  const [star4, setStar4] = useState("");
  const [star5, setStar5] = useState("");

  const [imageBig, setImageBig] = useState(false);

  const [commonPop, setCommonPop] = useState(false);
  const [modalOn2, setModalOn2] = useState(false);
  const [choice2, setChoice2] = useState(false);
  const productID = location.state.data._id;

  const formSubmit = (e) => {
    e.preventDefault();

    const data = { review, rating, image1, image2, image3, date, productID };
    fetch(`${API_ENDPOINT}/api/review/addReview`, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 200) {
          setCommonPop(true);
        } else {
          setModalOn2(true);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const starColor = (event) => {
    setRating(event);
    if (event == 1) {
      setStar1("#de3333");
      setStar2("");
      setStar3("");
      setStar4("");
      setStar5("");
    } else if (event == 2) {
      setStar1("#de3333");
      setStar2("#de3333");
      setStar3("");
      setStar4("");
      setStar5("");
    } else if (event == 3) {
      setStar1("#de3333");
      setStar2("#de3333");
      setStar3("#de3333");
      setStar4("");
      setStar5("");
    } else if (event == 4) {
      setStar1("#de3333");
      setStar2("#de3333");
      setStar3("#de3333");
      setStar4("#de3333");
      setStar5("");
    } else if (event == 5) {
      setStar1("#de3333");
      setStar2("#de3333");
      setStar3("#de3333");
      setStar4("#de3333");
      setStar5("#de3333");
    }
  };

  const pick_image = async (event) => {
    const picker_options = {
      types: [
        {
          description: "Images",
          accept: {
            "image/*": [".png", ".jpg", ".jpeg"],
          },
        },
      ],
      excludeAcceptAllOption: true,
      multiple: false,
    };

    let files = await window.showOpenFilePicker(picker_options);

    if (files.length < 1) {
      return;
    }

    let image = await files[0].getFile();

    if (image.size > 2 * 1024 * 1024) {
      setImageBig(true);
      return;
    }

    try {
      if (event == 1) {
        setImage1(loading);
      } else if (event == 2) {
        setImage2(loading);
      } else if (event == 3) {
        setImage3(loading);
      }

      let [_, url] = await uploadFile(image);

      if (event == 1) {
        setImage1(url);
      } else if (event == 2) {
        setImage2(url);
      } else if (event == 3) {
        setImage3(url);
      }
    } catch (e) {
      return;
    }
  };

  return (
    <div className="m-24 ml-40 mr-40">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:tracking-tight">
        Write Your Review
      </h1>
      <div className="grid lg:grid-flow-col gap-10 2xl:grid-flex-row md:grid-flex-col pb-10">
        <div className="bg-gray-00">
          <img src={location.state.data2} className="object-cover h-72 w-72 " />
        </div>
        <div className="bg-gray-000">
          <div className="">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
              <span className="block">{location.state.data.name} </span>
              <span className="block text-red-600">
                RS. {location.state.data.price}
              </span>
            </h1>

            <p className="text-justify">{location.state.data.description}</p>
            <br />
            <div className="grid lg:grid-flow-col gap-10 2xl:grid-flex-row md:grid-flex-col"></div>
          </div>
        </div>
      </div>

      <div>
        <form onSubmit={formSubmit}>
          <div className="grid lg:grid-flow-col gap-12 2xl:grid-flex-row md:grid-flow-col pb-5">
            <div className="col-span-6 ">
              <label
                for="about"
                className="block font-bold tracking-tight text-gray-600 sm:text-2xl sm:tracking-tight"
              >
                {" "}
                Write a review{" "}
              </label>
              <div className="mt-1">
                <textarea
                  maxlength="500"
                  className="shadow-sm focus:ring-red-600 focus:border-red-600 w-full mt-1 block sm:text-sm border border-gray-300 rounded-md h-64"
                  placeholder="Type your review here"
                  value={review}
                  onChange={(e) => {
                    setReview(e.target.value);
                  }}
                  required
                ></textarea>
              </div>
            </div>
            <div className="bg-gray-00 col-span-2 ">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-600 sm:text-2xl sm:tracking-tight">
                  Rate your review
                </h1>
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    style={{ color: star1 }}
                    className="w-7 h-7 hover:text-red-600 hover:w-10 hover:h-10 text-red-200"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={(event) => starColor(1)}
                  >
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7  hover:text-red-600 hover:w-10 hover:h-10 text-red-200"
                    style={{ color: star2 }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={(event) => starColor(2)}
                  >
                    <title>Second star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7  hover:text-red-600 hover:w-10 hover:h-10 text-red-200"
                    style={{ color: star3 }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={(event) => starColor(3)}
                  >
                    <title>Third star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7  hover:text-red-600 hover:w-10 hover:h-10 text-red-200"
                    style={{ color: star4 }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={(event) => starColor(4)}
                  >
                    <title>Fourth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7  hover:text-red-600 hover:w-10 hover:h-10 text-red-200"
                    style={{ color: star5 }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={(event) => starColor(5)}
                  >
                    <title>Fifth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                    {rating} out of 5
                  </p>
                </div>
                <br />
                <h3>Maximum 3 Images can be added</h3>
                <h3>Maximum 500 characters</h3>
                <h3>Image size should not exceed 2mb</h3>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-flow-col gap-4 2xl:grid-flex-row md:grid-flex-col">
            <div className="grid lg:grid-flow-col gap-12 2xl:grid-flex-row md:grid-flow-col justify-start">
              <div className="w-32 h-32 ">
                <div className="mt-1 flex justify-center border-2 border-red-600 border-dashed rounded-md w-32 h-32 ">
                  <div className="">
                    <img
                      src={image1}
                      className="h-full"
                      onClick={(event) => pick_image(1)}
                    />
                  </div>
                </div>
              </div>

              <div className="w-32 h-32 ">
                <div className="mt-1 flex justify-center border-2 border-red-600 border-dashed rounded-md w-32 h-32 ">
                  <div className="">
                    <img
                      src={image2}
                      onClick={(event) => pick_image(2)}
                      className="h-full"
                    />
                  </div>
                </div>
              </div>

              <div className="w-32 h-32 ">
                <div className="mt-1 flex justify-center border-2 border-red-600 border-dashed rounded-md w-32 h-32 ">
                  <div className="">
                    <img
                      src={image3}
                      className="h-full"
                      onClick={(event) => pick_image(3)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-000 flex items-end lg:justify-end sm:justify-center md:justify-end">
              <div>
                <div>
                  <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow ">
                      <button
                        onClick={() => navigate(-1)}
                        type="button"
                        className="inline-flex w-32 h-12 items-center justify-center px-5 py-3 border border-transparent text-base font-medium text-white bg-stone-900 hover:bg-stone-700 rounded-sm"
                      >
                        {" "}
                        Cancel{" "}
                      </button>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                      <button
                        type="submit"
                        className="inline-flex w-40 h-12 items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-sm text-white bg-red-600 hover:bg-red-800"
                      >
                        {" "}
                        Submit Review{" "}
                      </button>
                      {commonPop && (
                        <CommonSuccess
                          setCommonSuccess={setCommonPop}
                          message={
                            "Your Review has been added. Thank you for your review."
                          }
                          topic={"Review Added!"}
                          link1={"review"}
                          link2={""}
                        />
                      )}

                      {modalOn2 && (
                        <Failed
                          setModalOn2={setModalOn2}
                          setChoice2={setChoice2}
                        />
                      )}
                      {imageBig && <ImageBig setImageBig={setImageBig} />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CusCreateReview;
