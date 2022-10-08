import ImageView from "./image-view";
import { useState } from "react";

function QuestionAsnswerCard({
  user,
  setCurrentID,
  deleteQuestion,
  addAnswer,
}) {
  const [adminAnswer, setAdminAnswer] = useState("");

  const handleCancelClick = () => {
    console.log("admin del q worked");
    setCurrentID(user._id);
    deleteQuestion(user._id);
  };

  const handleCancelClick2 = () => {
    console.log("admin add answer worked");
    addAnswer(user._id, user.question, user.date, user.email, adminAnswer);
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
        <div className=" w-full m-4">
          <input
            type="input"
            className="shadow-sm focus:ring-red-500 focus:border-red-500 w-full mt-1 block sm:text-sm border border-gray-300 rounded-md h-20"
            placeholder="Type your answer here"
            onChange={(e) => {
              setAdminAnswer(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-stone-700 hover:bg-rose-600 text-white font-bold py-2 mr-2 px-4 rounded"
          onClick={handleCancelClick}
        >
          {" "}
          Delete Question{" "}
        </button>

        <button
          className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleCancelClick2}
        >
          {" "}
          Add Answer{" "}
        </button>
      </div>
    </div>
  );
}

export default QuestionAsnswerCard;
