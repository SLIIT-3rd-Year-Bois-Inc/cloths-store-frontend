import CusViewReview from "./cust-view-review";
import Question from "./cust-questions";
import { API_ENDPOINT } from "../../config";
import { useState } from "react";
import { useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import BarChart from "react-easy-bar-chart";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminReviewReport(props) {
  const [limit, setLimit] = useState(10);
  const [hilon, setHilon] = useState("Higest to Lowest");
  const [hilov, setHilov] = useState(-1);

  function changeData(test) {
    console.log(test);
  }

  function ReportCard(card) {
    console.log(card.card.count[0]);
    const size = card.card.count.length;
    const image = card.card.namess[0].imagesUrls[0];

    var rate1 = 0;
    var rate2 = 0;
    var rate3 = 0;
    var rate4 = 0;
    var rate5 = 0;

    for (var i = 0; i < size; i++) {
      if (card.card.count[i].rating == "1") {
        rate1 = card.card.count[i].count;
      } else if (card.card.count[i].rating == "2") {
        rate2 = card.card.count[i].count;
      } else if (card.card.count[i].rating == "3") {
        rate3 = card.card.count[i].count;
      } else if (card.card.count[i].rating == "4") {
        rate4 = card.card.count[i].count;
      } else if (card.card.count[i].rating == "5") {
        rate5 = card.card.count[i].count;
      }
    }

    const total = rate1 + rate2 + rate3 + rate4 + rate5;
    var rate1per = (rate1 / total) * 100;
    var rate2per = (rate2 / total) * 100;
    var rate3per = (rate3 / total) * 100;
    var rate4per = (rate4 / total) * 100;
    var rate5per = (rate5 / total) * 100;

    const datas = [
      {
        title: "Positive",
        value: rate4 + rate5,
        color: "#7cba00",
      },
      {
        title: "Neutrel",
        value: rate3,
        color: "#f28a13",
      },
      {
        title: "Negative",
        value: rate1 + rate2,
        color: "#e33f1e",
      },
    ];

    return (
      <div>
        <div className="flex grid-flow-row mt-6 mb-6 ml-10 mr-10 bg-gray-200 rounded-3xl shadow-lg">
          <div className="m-12 mr-12 w-3/5 font-semibold border-solid border-b-4 ">
            <h1 className="font-bold text-xl"> {card.card.namess[0].name} </h1>
            {card.card.namess[0].description}
            <img src={image[1]} className="h-72 mt-4 " alt=" Product image" />
          </div>

          <div className=" mt-12 flex grid-flow-row w-full ">
            <div className="w-2/5">
              <h1 className="font-bold text-xl">Ratings chart</h1>
              <PieChart
                lineWidth={55}
                animate
                viewBoxSize={[120, 120]}
                segmentsShift
                labelPosition={75}
                data={[
                  { title: "1 Star", value: rate1per, color: "#c71400" },
                  { title: "2 Star", value: rate2per, color: "#e83200" },
                  { title: "3 Star", value: rate3per, color: "#db8700" },
                  { title: "4 Star", value: rate4per, color: "#c7bd00" },
                  { title: "5 Star", value: rate5per, color: "#8bc700" },
                ]}
                label={({ x, y, dx, dy, dataEntry }) => (
                  <text
                    x={x}
                    y={y}
                    dx={dx}
                    dy={dy}
                    dominant-baseline="central"
                    text-anchor="middle"
                    style={{
                      fill: "#fff",
                      pointerEvents: "none",
                      fontSize: "5px",
                    }}
                  >
                    <tspan x={x} y={y} dx={dx} dy={dy}>
                      {dataEntry.title}
                    </tspan>
                    <tspan x={x} y={y + 5} dx={dx} dy={dy}>{`${Math.round(
                      dataEntry.value
                    )}%`}</tspan>
                  </text>
                )}
              />
            </div>

            <div className="w-3/5 text-xl flex flex-grow ">
              <div>
                <h1 className="font-bold">Total Reviews : {total}</h1>
                <h1>
                  Total Positive Reviews :{" "}
                  <span className="text-lime-600 font-bold">
                    {" "}
                    {rate4 + rate5}{" "}
                  </span>{" "}
                </h1>
                <h1>
                  Total Neutral Reviews :
                  <span className="text-amber-600 font-bold"> {rate3} </span>{" "}
                </h1>
                <h1>
                  Total Negative Reviews :
                  <span className="text-red-600 font-bold">
                    {" "}
                    {rate1 + rate2}{" "}
                  </span>{" "}
                </h1>

                <div className="mt-16">
                  <BarChart
                    xAxis=""
                    Axis="Values"
                    height={150}
                    width={300}
                    data={datas}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const [datatika, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:4200/api/admin/me", { withCredentials: true })
      .then((res) => {
        console.log("ran normal", res);
      })
      .catch((err) => {
        navigate("/admin/login");
      });
  }, []);

  useEffect(() => {
    if (true) {
      fetch(
        `${API_ENDPOINT}/api/review/getAdminReviews?limit=${limit}&hilo=${hilov}`,
        {
          credentials: "include",
        }
      )
        .then(async (response) => {
          await response.json().then(({ adminReviewDataStage1 }) => {
            setData(adminReviewDataStage1);
          });
        })
        .catch(console.error);
    }
  }, [limit, hilov]);

  function rev(event) {
    console.log(event);
    setLimit(event);
  }

  function hilo(event) {
    setHilov(event);
    if (event < 0) {
      setHilon("Higest to Lowest");
    } else {
      setHilon("Lowest to Higest");
    }
  }

  return (
    <div className="bg-stone-500/30 pt-4 mt-4 pb-4 mb-4 rounded-3xl">
      <div className="mr-12 ml-12 mt-6">
        <h1 className="font-bold text-4xl">Review Report</h1>
        <h1 className="font-bold text-lg">
          {" "}
          Showing <span className="text-red-500">{hilon}</span> Top{" "}
          <span className="text-red-500">{limit}</span> results
        </h1>

        <div className="flex grid-flow-row mt-6">
          <div className="font-bold">
            <input type="radio" value="2" name="rev" onChange={() => rev(2)} />{" "}
            Top 2
            <input
              className="ml-12"
              type="radio"
              value="5"
              name="rev"
              onChange={() => rev(5)}
            />{" "}
            Top 5
            <input
              className="ml-12"
              type="radio"
              value="10"
              name="rev"
              onChange={() => rev(10)}
            />{" "}
            Top 10
            <input
              className="ml-12"
              type="radio"
              value="50"
              name="rev"
              onChange={() => rev(50)}
            />{" "}
            Top 50
            <input
              className="ml-12"
              type="radio"
              value="10"
              name="rev"
              onChange={() => rev(100)}
            />{" "}
            Top 100
          </div>
        </div>
        <div className="mt-2 font-bold">
          <input
            type="radio"
            value="Lowest to Higest"
            name="hilo"
            onChange={() => hilo(1)}
          />{" "}
          Lowest to Higest
          <input
            className="ml-12"
            type="radio"
            value="Higest to Lowest"
            name="hilo"
            onChange={() => hilo(-1)}
          />{" "}
          Higest to Lowest
        </div>
      </div>

      <div className=" p-0 w-full ">
        {datatika.map((card, index) => {
          return (
            <div key={index}>
              <ReportCard card={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdminReviewReport;
