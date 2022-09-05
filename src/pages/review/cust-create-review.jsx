import React from "react";
import image from "../../../src/image/ti.jpg";
import { useState } from "react";
import { API_ENDPOINT } from "../../config";
import Success from "../../components/review-modals/success";
import Failed from "../../components/review-modals/failed";

function CusCreateReview() {
  // put const for ishans stuff

  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");

  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);
  const [modalOn2, setModalOn2] = useState(false);
  const [choice2, setChoice2] = useState(false);
  // const clicked = () => {
  //   setModalOn(true);
  // };

  const formSubmit = (e) => {
    e.preventDefault();
    // const data = { revive , stars, image1 etc}

    const data = { review, rating };
    fetch(`${API_ENDPOINT}/api/review/addReview`, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("success");
          setModalOn(true);
        } else {
          console.log("Failed");
          setModalOn2(true);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="m-24 ml-40 mr-40">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:tracking-tight">
        Write Your Review
      </h1>
      <div className="grid lg:grid-flow-col gap-10 2xl:grid-flex-row md:grid-flex-col pb-10">
        <div className="bg-gray-00">
          <img src={image} className="object-cover h-72 w-72 " />
        </div>
        <div className="bg-gray-000">
          <div className="">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
              <span className="block">Red Peamugeon Dress </span>
              <span className="block text-red-600">RS. 6500</span>
            </h1>

            <p className="text-justify">
              Merge pull request #3 from SLIIT-3rd-Year-Merge pull request #3
              from SLIIT-3rd-Year-Merge pull request #3 from
              SLIIT-3rd-Year-Merge pull request #3 from SLIIT-3rd-Year-Merge
              pull request #3 from SLIIT-3rd-Year-Merge pull request #3 from
              SLIIT-3rd-Year-Merge pull request #3 from SLIIT-3rd-Year-Merge
              pull request #3 from SLIIT-3rd-Year-Merge pull request #3 from
              SLIIT-3rd-Year-Merge pull request #3 from SLIfxv dfv IT-3rd-Yea
              r-Me rges dcMerges dcMer ges dv cMergesdc
            </p>
            <br />
            <div className="grid lg:grid-flow-col gap-10 2xl:grid-flex-row md:grid-flex-col">
              <h1 className="font-bold">color selected : </h1>
              <h1 className="font-bold">size : </h1>
              <h1 className="font-bold">qty : </h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <form action="" onSubmit={formSubmit}>
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
                  id="about"
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
                    className="w-7 h-7 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Second star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Third star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fourth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="w-7 h-7 text-gray-300 dark:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Fifth star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                    4.95 out of 5
                  </p>
                </div>
                <br />
                <h3>Maximum 3 Images can be added</h3>
                <h3>Maximum 1000 characters</h3>
                <h3>Image size should not exceed 2mb</h3>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-flow-col gap-4 2xl:grid-flex-row md:grid-flex-col">
            <div className="grid lg:grid-flow-col gap-12 2xl:grid-flex-row md:grid-flow-col justify-start">
              <div className="bg-gray-100 w-32 h-32">
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-red-600 border-dashed rounded-md w-32 h-32">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 5MB
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 w-32 h-32">
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-red-600 border-dashed rounded-md w-32 h-32">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 5MB
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 w-32 h-32 ">
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-red-600 border-dashed rounded-md w-32 h-32">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 5MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-000 flex items-end lg:justify-end sm:justify-center md:justify-end">
              <div>
                <div>
                  <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow ">
                      <button className="inline-flex w-32 h-12 items-center justify-center px-5 py-3 border border-transparent text-base font-medium text-white bg-stone-900 hover:bg-stone-700 rounded-sm">
                        {" "}
                        Cancel{" "}
                      </button>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                      <button className="inline-flex w-40 h-12 items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-sm text-white bg-red-600 hover:bg-red-800">
                        {" "}
                        Submit Review{" "}
                      </button>
                      {modalOn && (
                        <Success
                          setModalOn={setModalOn}
                          setChoice={setChoice}
                        />
                      )}
                      {modalOn2 && (
                        <Failed
                          setModalOn2={setModalOn2}
                          setChoice2={setChoice2}
                        />
                      )}
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
