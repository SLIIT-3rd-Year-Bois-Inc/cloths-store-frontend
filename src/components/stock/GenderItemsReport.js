import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";

function GenderItemsReport() {
  const [userData, setUserData] = useState({
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

  useEffect(() => {
    axios
      .get("http://localhost:4200/api/stock/getGenderCount")
      .then(function (response) {
        // handle success
        let tempData = [0, 0, 0, 0];
        let lables = ["Men", "Women", "Kids", "Unisex"];
        response.data.forEach((element) => {
          if (element._id == "M") {
            tempData[0] = element.count;
          } else if (element._id == "W") {
            tempData[1] = element.count;
          } else if (element._id == "K") {
            tempData[2] = element.count;
          } else if (element._id == "U") {
            tempData[3] = element.count;
          }
        });
        console.log(tempData);
        setUserData({
          labels: lables,
          datasets: [
            {
              label: "Users Gained",
              data: tempData,
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
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
  }, []);

  return (
    <div className="my-10 flex flex-row justify-center">
      <div className="w-[600px] flex flex-col shadow-lg justify-center items-center px-10 pb-10">
        <h1 className="p-5 text-center px-10 font-bold text-xl bg-slate-300 rounded-t-full my-6 ">
          Available Items accordion to Gender
        </h1>

        <Pie className="w-[400px]" data={userData} />
      </div>
    </div>
  );
}

export default GenderItemsReport;
