import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useQuery } from "react-query";
import { AdminAPI } from "../api";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function AdminCustomerStats() {
  const gender_query = useQuery(
    ["admin", "gender_stats"],
    AdminAPI.statsByGender
  );

  const stats_query = useQuery(["total"], AdminAPI.getTotal);

  console.log(stats_query);
  const age_query = useQuery(["admin", "age-stat"], AdminAPI.statsByAge);

  return (
    <>
      <div className="text-lg pl-4 pt-4 font-bold">Customer Statistics</div>
      <div className="flex flex-row flex-wrap bg-gray-200 rounded-2xl">
        <div className="pt-1 ml-4 min-w-[30em] max-w-[40em]">
          <div className="my-2">Current customers by gender</div>
          <Pie
            data={getGenderGraphParams(gender_query.data ?? [])}
            className="p-6"
          />
        </div>
        <div className="pt-1 ml-4 min-w-[30em] max-w-[40em]">
          <div className="my-2">Current customers by gender</div>
          <Pie data={getAgeGraphParams(age_query.data ?? [])} className="p-6" />
        </div>
        <div className="w-[20em] flex flex-row p-6">
          <div className="font-bold text-xl">
            Current Total Customers -{" "}
            {stats_query.data.customer_count_total ?? "N/A"}
          </div>
        </div>
      </div>
    </>
  );
}

function getGenderGraphParams(data: any[]) {
  let c_data = data.map((v) => v.count);
  let labels = data.map((v) => v.gender.toUpperCase());

  return {
    labels: labels,
    datasets: [
      {
        label: "# of Customers",
        data: c_data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
}

function getAgeGraphParams(data: any[]) {
  let c_data = data.map((v) => v.count);
  let labels = data.map((v) => `${v.lowerBound} - ${v.upperBound}`);

  return {
    labels: labels,
    datasets: [
      {
        label: "# of Customers",
        data: c_data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
}
