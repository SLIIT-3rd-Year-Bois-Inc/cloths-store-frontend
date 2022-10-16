import React from "react";
import ReviewCard from "../../components/review-components/user-review";
import Stars from "../../components/review-components/stars";
import { API_ENDPOINT } from "../../config";
import { useEffect, useState } from "react";

function CusViewReview(props) {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState();
  const pagesButton = new Array(totalPage).fill(null).map((v, i) => i);
  const [totalReviews, setTotalReviews] = useState();
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("");
  const [tempSearch, setTempSearch] = useState("");
  const [rates, setRates] = useState([""]);
  const [maxStar, setMaxStar] = useState(0);
  const pid = props.productID;

  function searchActivate() {
    setSearch(tempSearch);
  }

  useEffect(() => {
    fetch(`${API_ENDPOINT}/api/review/getReviewsRate?pid=${pid}`, {
      credentials: "include",
    })
      .then(async (response) => {
        await response.json().then(({ total2, rates, max }) => {
          setTotalReviews(total2);
          setRates(rates);
          setMaxStar(max);
        });
      })
      .catch(console.error);
  }, [maxStar, pid]);

  useEffect(() => {
    if (pid) {
      fetch(
        `${API_ENDPOINT}/api/review/getReviews?page=${page}&search=${search}&rating=${rating}&pid=${pid}`,
        {
          credentials: "include",
        }
      )
        .then(async (response) => {
          await response.json().then(({ review, total }) => {
            setReviews(review);
            setTotalPage(total);
          });
        })
        .catch(console.error);
    }
  }, [page, search, rating, pid]);
  // d
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
                onChange={(e) => {
                  setTempSearch(e.target.value);
                }}
              />
              <button
                className="btn px-8 py-2 w-36 border-2 ml-3 border-black bg-black text-white font-medium text-xs leading-tight uppercase rounded hover:bg-red-600 hover:border-red-600  focus:outline-none focus:ring-0  transition duration-150 ease-in-out"
                onClick={(e) => {
                  searchActivate();
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="grid  lg:grid-flow-col gap-1 2xl:grid-flex-row md:grid-cols-none sm:grid-cols-none md:grid-flex-col divide-x divide-stone-900">
          <div className="col-span-3 mt-10 mb-10">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {totalReviews} Total Reviews
            </p>
            <div className="flex items-center mt-4">
              <span className="text-sm font-medium  dark:text-blue-500">
                5 star
              </span>
              <div
                className="mx-4 w-3/4 h-5 bg-gray-200 rounded dark:bg-gray-700 hover:scale-x-90 "
                onClick={() => setRating("5")}
              >
                <div
                  className="h-5 bg-red-600 rounded"
                  onClick={() => setRating("5")}
                  style={{ width: rates[4] + "%" }}
                ></div>
              </div>
              <span className="text-sm font-medium text-red-600 dark:text-blue-500">
                {Math.round(rates[4])} %
              </span>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-sm font-medium  dark:text-blue-500">
                4 star
              </span>
              <div
                className="mx-4 w-3/4 h-5 bg-gray-200 rounded dark:bg-gray-700 hover:scale-x-90"
                onClick={() => setRating("4")}
              >
                <div
                  className="h-5 bg-red-600 rounded"
                  onClick={() => setRating("4")}
                  style={{ width: rates[3] + "%" }}
                ></div>
              </div>
              <span className="text-sm font-medium text-red-600 dark:text-blue-500">
                {Math.round(rates[3])} %
              </span>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-sm font-medium  dark:text-blue-500">
                3 star
              </span>
              <div
                className="mx-4 w-3/4 h-5 bg-gray-200 rounded dark:bg-gray-700 hover:scale-x-90"
                onClick={() => setRating("3")}
              >
                <div
                  className="h-5 bg-red-600 rounded"
                  onClick={() => setRating("3")}
                  style={{ width: rates[2] + "%" }}
                ></div>
              </div>
              <span className="text-sm font-medium text-red-600 dark:text-blue-500">
                {Math.round(rates[2])} %
              </span>
            </div>
            <div className="flex items-center mt-4">
              <span className="text-sm font-medium  dark:text-blue-500">
                2 star
              </span>
              <div
                className="mx-4 w-3/4 h-5 bg-gray-200 rounded dark:bg-gray-700 hover:scale-x-90"
                onClick={() => setRating("2")}
              >
                <div
                  className="h-5 bg-red-600 rounded"
                  onClick={() => setRating("2")}
                  style={{ width: rates[1] + "%" }}
                ></div>
              </div>
              <span className="text-sm font-medium text-red-600 dark:text-blue-500">
                {Math.round(rates[1])} %
              </span>
            </div>

            <div className="flex items-center mt-4">
              <span className="text-sm font-medium  dark:text-blue-500">
                1 star
              </span>
              <div
                className="mx-4 w-3/4 h-5 bg-gray-200 rounded dark:bg-gray-700 hover:scale-x-90"
                onClick={() => setRating("1")}
              >
                <div
                  className="h-5 bg-red-600 rounded"
                  onClick={() => setRating("1")}
                  style={{ width: rates[0] + "%" }}
                ></div>
              </div>
              <span className="text-sm font-medium text-red-600 dark:text-blue-500">
                {Math.round(rates[0])} %
              </span>
            </div>
          </div>

          <div className="bg-teal-00 m-auto ">
            <Stars count={maxStar} size="60" />
            <p className="ml-2 text-lg font-medium text-gray-900 dark:text-white">
              {maxStar} out of 5
            </p>
            <button
              className="bg-stone-400 hover:bg-stone-600 hover:text-white active:bg-red-500 ml-2 mt-2  p-2 "
              onClick={() => setRating("")}
            >
              Clear Star Filter
            </button>
          </div>
        </div>

        {reviews[0] ? (
          ""
        ) : (
          <div className="font-bold text-3xl m-8 bg-red-200 rounded p-24">
            <h1>No reviews</h1>
            <h1 className="font-normal text-2xl">
              This product doesnt have reviews or your seletced filter doesnt
              have any results.
            </h1>
          </div>
        )}

        <div className="pb-6 text-lg font-bold">
          Showing{" "}
          <div className="text-red-600 font-extrabold inline">
            {" "}
            {rating == "" ? "all" : rating}{" "}
          </div>{" "}
          star reviews
        </div>

        <div className="">
          {reviews.map((user, index) => {
            return (
              <div key={index}>
                <ReviewCard users={user} proData={props.productData} />
              </div>
            );
          })}

          <h1 className="ml-2">Page selected : {page + 1}</h1>

          {pagesButton.map((pageIndex) => {
            return (
              <button
                className={
                  page == pageIndex
                    ? "bg-red-600 text-white p-2 pl-4 pr-4 m-2 hover:bg-red-700 hover:-translate-y-2 transform transition"
                    : "bg-stone-900 text-white p-2 pl-4 pr-4 m-2 hover:bg-red-700 hover:-translate-y-2 transform transition"
                }
                onClick={() => setPage(pageIndex)}
              >
                {" "}
                {pageIndex + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CusViewReview;
