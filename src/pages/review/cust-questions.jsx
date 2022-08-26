import QuestionCard from "../../components/review-components/cust-questions";
import dataOne from "./dataOne";

function Question() {
  return (
    <div>
      <div className="ml-40 mr-40 mt-12 ">
        <div className="input-group relative flex flex-wrap items-stretch w-full mb-4 ">
          <input
            type="search"
            className="w-2/5 form-control relative min-w-0 block px-3 py-1.5 focus:border-2 text-base font-normal text-gray-700 bg-clip-padding border-solid border-2 h-12 border-gray-400 transition rounded ease-in-out m-0 focus:text-gray-700  focus:border-red-600 border-transparent focus:ring-0 focusoutline-none"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon3"
          />
          <button className="btn px-8 py-2 w-36 border-2 ml-3 border-black bg-black text-white font-medium text-xs leading-tight uppercase rounded hover:bg-red-600 hover:border-red-600  focus:outline-none focus:ring-0  transition duration-150 ease-in-out">
            Search
          </button>
        </div>

        <div className="flex grid-flex-col ">
          <div className="w-2/5">
            <form action="">
              <textarea
                id="about"
                className="shadow-sm focus:ring-red-500 focus:border-red-500 w-full mt-1 block sm:text-sm border border-gray-300 rounded-md h-40"
                placeholder="Type your review here"
              ></textarea>
            </form>
          </div>
          <div className="">
            <button className="btn px-8 py-2 w-36 border-2 ml-3 h-12 border-red-600 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-red-600 hover:border-red-600  focus:outline-none focus:ring-0  transition duration-150 ease-in-out">
              Ask
            </button>
          </div>
        </div>

        <div>
          {dataOne.map((user, index) => {
            return (
              <div key={index}>
                <QuestionCard user={user} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Question;
