import React from "react";
import GenderItemsReport from "../../components/stock/GenderItemsReport";
import TypeItemReport from "../../components/stock/TypeItemReport";

function Reports() {
  return (
    <div className="flex flex-wrap justify-evenly items-center">
      <GenderItemsReport />
      <TypeItemReport />
    </div>
  );
}

export default Reports;
