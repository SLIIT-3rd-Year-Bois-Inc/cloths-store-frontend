import QuestionCard from "../../components/review-components/cust-questions";
import dataOne from "./dataOne";
import { useState } from "react";
import { API_ENDPOINT } from "../../config";
import CommonSuccess from "../../components/review-modals/common-success";
import { useEffect } from "react";

function Question() {
  const [popOn, setPopOn] = useState(false);
  const handleOnClose = () => setPopOn(false);

  const [question, setQuestion] = useState("");
  const [email, setEmail] = useState("");
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const [commonPop, setCommonPop] = useState(false);

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`${API_ENDPOINT}/api/question/getQuestion`).then(async (response) => {
      let data = await response.json();
      setQuestions(data);
      console.log(data);
    });
  }, []);

  const [currentID, setCurrentID] = useState("96");
  const deleteQuestion = (currentID) => {
    console.log("2");
    console.log(currentID);
    fetch(`${API_ENDPOINT}/api/question/deleteQuestion/` + currentID, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("success");
          // setDeletingM(true)
        } else {
          console.log("Failed");
          // setFailed(true)
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");

    const data = { question, date, email };
    fetch(`${API_ENDPOINT}/api/question/addQuestion`, {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("success");
          setPopOn(false);
          setCommonPop(true);
          //do something
        } else {
          console.log("Failed");
          //do something
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

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
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
                id="about"
                className="shadow-sm focus:ring-red-500 focus:border-red-500 w-full mt-1 block sm:text-sm border border-gray-300 rounded-md h-40"
                placeholder="Type your question here"
              ></textarea>
            </form>
          </div>
          <div className="">
            <button
              onClick={() => setPopOn(true)}
              className="btn px-8 py-2 w-36 border-2 ml-3 h-12 border-red-600 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-red-600 hover:border-red-600  focus:outline-none focus:ring-0  transition duration-150 ease-in-out"
            >
              Ask
            </button>
          </div>
        </div>

        <NotifyMe
          visible={popOn}
          onClose={handleOnClose}
          setEmail={setEmail}
          email={email}
          formSubmit={formSubmit}
        />

        {commonPop && (
          <CommonSuccess
            setCommonSuccess={setCommonPop}
            message={"Your question has been added successfully."}
            topic={"Question Added!"}
            link1={""}
            link2={""}
          />
        )}

        <div>
          {questions.map((user, index) => {
            return (
              <div key={index}>
                <QuestionCard
                  user={user}
                  setCurrentID={setCurrentID}
                  deleteQuestion={deleteQuestion}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Question;

function NotifyMe({ visible, onClose, setEmail, email, formSubmit }) {
  if (!visible) return null;

  return (
    // <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center backdrop-blur-sm">
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900/60 to-red-900/50  flex justify-center items-center backdrop-blur-sm">
      <div className="bg-red-000 bg-opacity-40 pt-16 pb-20 p-14  rounded-3xl bg-white">
        <button
          onClick={onClose}
          className="bg-gray-200 text-black p-2 pl-8 pr-8 active:bg-gray-300"
        >
          {" "}
          Go back
        </button>
        <div className="flex grid-flow-row">
          <div className="bg-white p-10">
            <form onSubmit={formSubmit}>
              <div className="mb-6">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  We'll notify you when your question is answered
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:red-blue-500 dark:focus:border-red-500"
                  placeholder="Enter email"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white p-3 pl-12 pr-12 bg-fixed rounded-3xl hover:bg-red-600 active:bg-red-800"
              >
                Ask and Notify
              </button>
            </form>
          </div>

          <div className="bg-red-300 p-16">
            <p className="pb-3">Dont Notify</p>
            <button
              type="submit"
              onClick={formSubmit}
              className="bg-black text-white p-3 pl-16 pr-16 bg-fixed rounded-3xl hover:bg-red-600 active:bg-red-800"
            >
              Just Ask
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
