import QuestionAnswerCard from "../../components/review-components/admin-question";
import { useState } from "react";
import { API_ENDPOINT } from "../../config";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import CommonSuccess from "../../components/review-modals/common-success";
import CommonAlert from "../../components/review-modals/common-alert";

function AnswerQuestion() {
  const [totalPage, setTotalPage] = useState();
  const pagesButton = new Array(totalPage).fill(null).map((v, i) => i);
  const [totalQuestion, setTotalQuestions] = useState();
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [currentID, setCurrentID] = useState("");
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const location = useLocation();
  const [commonPop, setCommonPop] = useState(false);
  const [commonPop2, setCommonPop2] = useState(false);
  const [commonPop3, setCommonPop3] = useState(false);
  const [commonPop4, setCommonPop4] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(
      `${API_ENDPOINT}/api/question/getQuestionAdmin?page=${page}&search=${search}`
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
          setCommonPop2(true);
        } else {
          console.log("Failed");
          setCommonPop4(true);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  let templateParams = {
    Question: questions,
    Answer: answer,
    email: email,
  };

  const addAnswer = (
    currentID,
    question,
    date,
    email,
    answer,
    title,
    description
  ) => {
    const data = { question, date, email, answer, title, description };
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
          if (res.status === 200 && email == "") setCommonPop(true);
          if (email != "") {
            templateParams.email = email;
            sendEmail();
            setCommonPop(true);
          }
        }
      })
      .catch((e) => {
        console.error(e);
      });
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
          setCommonPop(true);
        },
        function (error) {
          console.log("FAILED...", error);
          setCommonPop3(true);
        }
      );
  }

  return (
    <div>
      {commonPop2 && (
        <CommonSuccess
          setCommonSuccess={setCommonPop2}
          message={"Question has been removed successfully."}
          topic={"Question Removed!"}
          link1={"deletedQ"}
          link2={""}
        />
      )}

      {questions.map((user, index) => {
        return (
          <div key={index}>
            <QuestionAnswerCard
              user={user}
              setCurrentID={setCurrentID}
              deleteQuestion={deleteQuestion}
              addAnswer={addAnswer}
              setEmail={setEmail}
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

      {commonPop && (
        <CommonSuccess
          setCommonSuccess={setCommonPop}
          message={
            "Your Answer has been added successfully. If Email is available the user will be notified"
          }
          topic={"Answer Added!"}
          link1={"deletedQ"}
          link2={""}
        />
      )}

      {commonPop3 && (
        <CommonAlert
          setCommonAlert={setCommonPop3}
          message={
            "Customer Email is Incorrect or does not exist. User is not notified!"
          }
          topic={"Email Not Sent!"}
          link1={"deletedQ"}
          link2={""}
        />
      )}

      {commonPop4 && (
        <CommonAlert
          setCommonAlert={setCommonPop4}
          message={
            "Deleting this question was not successfull. Please Try again later!"
          }
          topic={"Deletion Failed!"}
          link1={"deletedQ"}
          link2={""}
        />
      )}
    </div>
  );
}

export default AnswerQuestion;
