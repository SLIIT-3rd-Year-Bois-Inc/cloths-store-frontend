import React from "react";
import ReviewCard from "../../components/review-components/user-review";
import ImageView from "../../components/review-components/image-view";

function CusViewReview() {
  return (
    <div>
      <div className="m-24 p-16 bg-gray-100 ">
        <div className="">
          <div>
            <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
              <input
                type="search"
                className="w-3/5 form-control relative min-w-0 block px-3 py-1.5 focus:border-2 text-base font-normal text-gray-700 bg-clip-padding border-solid border-2 h-12 border-gray-400 transition rounded ease-in-out m-0 focus:text-gray-700  focus:border-red-600 border-transparent focus:ring-0 focusoutline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon3"
              />
              <button className="btn px-8 py-2 w-36 border-2 ml-3 border-black bg-black text-white font-medium text-xs leading-tight uppercase rounded hover:bg-red-600 hover:border-red-600  focus:outline-none focus:ring-0  transition duration-150 ease-in-out">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="grid  lg:grid-flow-col gap-1 2xl:grid-flex-row md:grid-cols-none sm:grid-cols-none md:grid-flex-col divide-x divide-stone-900">
          <div className="col-span-3 mt-10 mb-10">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
              1,745 Total
            </p>
            <div class="flex items-center mt-4">
              <span class="text-sm font-medium  dark:text-blue-500">
                5 star
              </span>
              <div class="mx-4 w-3/4 h-5 bg-gray-200 rounded dark:bg-gray-700">
                <div
                  className="h-5 bg-red-600 rounded"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <span class="text-sm font-medium text-red-600 dark:text-blue-500">
                70%
              </span>
            </div>
            <div class="flex items-center mt-4">
              <span class="text-sm font-medium  dark:text-blue-500">
                4 star
              </span>
              <div class="mx-4 w-3/4 h-5 bg-gray-200 rounded dark:bg-gray-700">
                <div
                  class="h-5 bg-red-600 rounded"
                  style={{ width: "17%" }}
                ></div>
              </div>
              <span class="text-sm font-medium text-red-600 dark:text-blue-500">
                17%
              </span>
            </div>
            <div class="flex items-center mt-4">
              <span class="text-sm font-medium  dark:text-blue-500">
                3 star
              </span>
              <div class="mx-4 w-3/4 h-5 bg-gray-200 rounded dark:bg-gray-700">
                <div
                  class="h-5 bg-red-600 rounded"
                  style={{ width: "8%" }}
                ></div>
              </div>
              <span class="text-sm font-medium text-red-600 dark:text-blue-500">
                8%
              </span>
            </div>
            <div class="flex items-center mt-4">
              <span class="text-sm font-medium  dark:text-blue-500">
                2 star
              </span>
              <div class="mx-4 w-3/4 h-5 bg-gray-200 rounded dark:bg-gray-700">
                <div
                  class="h-5 bg-red-600 rounded"
                  style={{ width: "4%" }}
                ></div>
              </div>
              <span class="text-sm font-medium text-red-600 dark:text-blue-500">
                4%
              </span>
            </div>

            <div class="flex items-center mt-4">
              <span class="text-sm font-medium  dark:text-blue-500">
                1 star
              </span>
              <div class="mx-4 w-3/4 h-5 bg-gray-200 rounded dark:bg-gray-700">
                <div
                  class="h-5 bg-red-600 rounded"
                  style={{ width: "89%" }}
                ></div>
              </div>
              <span class="text-sm font-medium text-red-600 dark:text-blue-500">
                89%
              </span>
            </div>
          </div>

          <div className="bg-teal-00 m-auto ">
            <div class="flex items-center mb-3  justify-center">
              <svg
                aria-hidden="true"
                class="w-12 h-12 text-red-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-12 h-12 text-red-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Second star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-12 h-12 text-red-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Third star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-12 h-12 text-red-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fourth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="w-12 h-12 text-gray-300 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Fifth star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <br />
              <br />
            </div>
            <p class="ml-2 text-lg font-medium text-gray-900 dark:text-white">
              4.95 out of 5
            </p>
          </div>
        </div>

        {/* <div className="grid lg:grid-flow-col gap-1 2xl:grid-flex-row md:grid-flex-col">
            <div className="bg-teal-200 col-span-3"></div>
            <div className="bg-yellow-100"> <h1>hello</h1></div>
            <div className="bg-blue-200"> <h1>hello</h1></div>
            <div className="bg-red-200"> <h1>hello</h1></div>
        </div> */}

        <div className=" divide-y divide-stone-300">
          <ReviewCard />
          <ReviewCard />

          <button className="bg-red-400"></button>
          {/* <ImageView /> */}
        </div>
      </div>
    </div>
  );
}

export default CusViewReview;
