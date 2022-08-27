import React from "react";
import ReviewCard from "../../components/review-components/user-review";
import ImageView from "../../components/review-components/image-view";
import users from "./data";
import Stars from "../../components/review-components/stars";

function CusViewReview() {
  return (
    <div>
      <div className="ml-24 mr-24 mb-24 p-16 bg-gray-000 ">
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
            <Stars count="4" size="60" />
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

        <div className="">
          {users.map((user, index) => {
            return (
              <div key={index}>
                <ReviewCard users={user} />
              </div>
            );
          })}

          <button className="bg-red-400"></button>
          {/* <ImageView /> */}
        </div>
      </div>
    </div>
  );
}

export default CusViewReview;
