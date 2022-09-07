import ImageView from "./image-view";
import { useState } from "react";
import Stars from "./stars";

function QuestionCard({ user, setCurrentID, deleteQuestion }) {
  // function run(){

  //   deleteQuestion();
  // }

  const handleCancelClick = () => {
    console.log("1");
    // setCurrentID(user._id);
    deleteQuestion(user._id);
  };

  return (
    <div
      className=" p-5 mt-8 mb-8 rounded-2xl  border-stone-400  shadow-md"
      style={{ backgroundColor: "#f7f7f7" }}
    >
      <h1> Asked By : {user.name}</h1>
      <h1>Date : {user.date}</h1>

      <div className="flex grid-flow-row items-center ">
        <div className=" font-semibold text-red-600 text-5xl mt-4 mb-4 ml-4 pr-4 border-r border-stone-700">
          Q
        </div>
        <div className=" w-full m-4">{user.question}</div>
      </div>

      <div className="flex grid-flow-row">
        <div className="font-semibold text-5xl mt-4 mb-4 ml-4 pr-5 border-r border-stone-700">
          A
        </div>
        <div className=" w-full m-4">{user.answer}</div>
      </div>
      <div className="flex justify-end">
        <button className="bg-red-400 p-10" onClick={handleCancelClick}>
          {" "}
          test{" "}
        </button>
      </div>
    </div>
  );
}

export default QuestionCard;
