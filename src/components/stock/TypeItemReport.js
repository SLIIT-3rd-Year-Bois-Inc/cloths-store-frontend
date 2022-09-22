import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";
import { FiChevronUp, FiChevronDown, FiFilter } from "react-icons/fi";

function TypeItemReport() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Users Gained",
        data: [],
        backgroundColor: [],
        borderWidth: 0,
      },
    ],
  });
  const [gender, setGender] = useState("M");
  const [clothneeds, setClothneeds] = useState();
  const [sortby, setSortBy] = useState(false);
  const sortbyClicked = () => setSortBy(!sortby);

  useEffect(() => {
    let tempSearchObj = {};
    if (gender) {
      tempSearchObj.gender = gender;
    }

    axios
      .get("http://localhost:4200/api/clothNeeds/getTags")
      .then(function (response) {
        // handle success
        let mensTags = {};
        setClothneeds(response.data[0]);
        response.data[0].mensTags.forEach((element) => {
          console.log("in clothneed");
          mensTags[element] = 0;
        });
        axios
          .get("http://localhost:4200/api/stock/getTypeCounts", {
            params: { tempSearchObj },
          })
          .then(function (response) {
            // handle success
            response.data.forEach((elem) => {
              console.log("in tag count");
              mensTags[elem._id] = elem.count;
            });

            setChartData({
              labels: Object.keys(mensTags),
              datasets: [
                {
                  label: "Available Items",
                  data: Object.values(mensTags),
                  backgroundColor: ["rgba(75,192,192,1)"],
                  borderWidth: 0,
                },
              ],
              options: {
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        precision: 0,
                      },
                    },
                  ],
                },
              },
            });
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {});
  }, []);

  function buildTagsOnGenderChange() {
    if (clothneeds) {
      let Tags = {};
      let genderForcothneeds;
      let tempSearchObj = { gender };
      if (gender === "M") {
        genderForcothneeds = "mensTags";
      } else if (gender === "W") {
        genderForcothneeds = "womenTags";
      } else if (gender === "K") {
        genderForcothneeds = "childTags";
      } else if (gender === "U") {
        genderForcothneeds = "unisexTags";
      }

      clothneeds[genderForcothneeds].forEach((element) => {
        console.log("in clothneed");
        Tags[element] = 0;
      });
      axios
        .get("http://localhost:4200/api/stock/getTypeCounts", {
          params: { tempSearchObj },
        })
        .then(function (response) {
          // handle success
          response.data.forEach((elem) => {
            console.log("in tag count");
            Tags[elem._id] = elem.count;
          });

          setChartData({
            labels: Object.keys(Tags),
            datasets: [
              {
                label: "Available Items",
                data: Object.values(Tags),
                backgroundColor: ["rgba(75,192,192,1)"],
                borderWidth: 0,
              },
            ],
          });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
  }

  useEffect(() => {
    buildTagsOnGenderChange();
  }, [gender]);

  return (
    <div className="my-10 flex flex-row justify-center">
      <div className="w-[900px] flex flex-col shadow-lg justify-center items-center px-10 pb-10">
        <h1 className="p-5 text-center px-10 font-bold text-xl bg-slate-300 rounded-t-full my-6 ">
          Available Items accordion to Gender and Type
        </h1>
        {/*select gender */}
        <div
          class="relative inline-block text-left hover:cursor-pointer"
          onBlur={sortbyClicked}
        >
          <div
            className="flex w-40 flex-row items-center justify-between px-5 py-3 border rounded-xl my-5"
            onClick={sortbyClicked}
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            <span className="px-2 ">
              {gender === "M"
                ? "Men"
                : gender === "W"
                ? "Women"
                : gender === "K"
                ? "Kids"
                : "Unisex"}
            </span>
            {sortby ? (
              <FiChevronUp
                size={20}
                className="stroke-2"
                // color={`${bg ? "" : "white"}`}
              />
            ) : (
              <FiChevronDown
                size={20}
                className="stroke-2"
                // color={`${bg ? "" : "white"}`}
              />
            )}
          </div>
          <div
            class={
              sortby
                ? "origin-top-right absolute s:left-0 2xl:right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                : "hidden"
            }
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1" role="none">
              <span
                class="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-50"
                onClick={() => setGender("M")}
              >
                Men
              </span>
              <span
                class="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-50"
                onClick={() => setGender("W")}
              >
                Women
              </span>
              <span
                class="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-50"
                onClick={() => setGender("K")}
              >
                Kids
              </span>
              <span
                class="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-50"
                onClick={() => setGender("U")}
              >
                Unisex
              </span>
            </div>
          </div>
        </div>
        <Bar
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    fixedStepSize: 1,
                  },
                },
              ],
            },
          }}
          data={chartData}
        />
      </div>
    </div>
  );
}

export default TypeItemReport;
