import QuestionAnswerCard from "../../components/review-components/admin-question";
import { useState } from "react";
import { API_ENDPOINT } from "../../config";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

function AnswerQuestion() {
  const [totalPage, setTotalPage] = useState();
  const pagesButton = new Array(totalPage).fill(null).map((v, i) => i);
  const [totalQuestion, setTotalQuestions] = useState();
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [currentID, setCurrentID] = useState("");
  const [answer, setAnswer] = useState("");
  const location = useLocation();

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(
      `${API_ENDPOINT}/api/question/getQuestion?page=${page}&search=${search}`
    ).then(async (response) => {
      await response.json().then(({ question, total2, total }) => {
        setQuestions(question);
        setTotalPage(total);
        setTotalQuestions(total2);
      });
    });
  }, [page, search]);

  const deleteQuestion = (currentID) => {
    fetch(`${API_ENDPOINT}/api/question/deleteQuestion/` + currentID, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("success del");
        } else {
          console.log("Failed");
          // setFailed(true)
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const addAnswer = (currentID, question, date, email, answer) => {
    const data = { question, date, email, answer };
    fetch(`${API_ENDPOINT}/api/question/addAnswerToQuestion/` + currentID, {
      method: "put",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("success");
          //   setPopOn(false);
          //   setCommonPop(true);
          //do something
          if (email != "") {
            sendEmail();
          }
        } else {
          console.log("Failed");
          //do something
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  var templateParams = {
    Question: questions,
    Answer: answer,
    email: "senalweerasekara@gmail.com",
  };

  function sendEmail() {
    // e.preventDetault();
    emailjs
      .send(
        "service_3zwlcgd",
        "template_p2awpvb",
        templateParams,
        "1eMzREVGbJJEYZVri"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }

  return (
    <div>
      {questions.map((user, index) => {
        return (
          <div key={index}>
            <QuestionAnswerCard
              user={user}
              setCurrentID={setCurrentID}
              deleteQuestion={deleteQuestion}
              addAnswer={addAnswer}
            />
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
  );
}

export default AnswerQuestion;
