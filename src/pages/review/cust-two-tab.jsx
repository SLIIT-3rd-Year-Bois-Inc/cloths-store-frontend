import CusViewReview from "./cust-view-review";
import Question from "./cust-questions";
import { useState } from "react";
// import { Session } from "";
let pid;

function CustTwoTab(props) {
  const [ShowTab, setShowTab] = useState("rev");
  const [revButtonColor, setRevButtonColor] = useState("red");
  const [quesButtonColor, setQuesButtonColor] = useState("#b8b8b8");
  const [rc, setRc] = useState("#ff5959");
  const [qc, setQc] = useState("#c9c9c9");
  pid = props.productID._id;
  console.log("pid" + pid);
  // const test = session.req.customer_id;
  // console.log(test);

  const revButton = () => {
    setShowTab("rev");
    setRevButtonColor("red");
    setQuesButtonColor("#b8b8b8");
    setRc("#ff5959");
    setQc("#c9c9c9");
  };

  const quesButton = () => {
    setShowTab("ques");
    setRevButtonColor("#b8b8b8");
    setQuesButtonColor("red");
    setRc("#c9c9c9");
    setQc("#ff5959");
  };

  //   style={{ width: "89%" }}

  return (
    <div>
      <div className=" pt-10 w-full">
        <div className="flex grid-flow-row ml-40 mr-40 bg-gray-100">
          <div
            className="w-full text-3xl font-semibold border-solid border-b-4"
            style={{ color: revButtonColor, borderColor: rc }}
            onClick={revButton}
          >
            Reviews
          </div>
          <div
            className="w-full text-3xl font-semibold border-solid border-b-4"
            style={{ color: quesButtonColor, borderColor: qc }}
            onClick={quesButton}
          >
            Questions
          </div>
        </div>
      </div>
      <div className=" p-0 w-full bg-orange-00">
        {/* <Tabs TabSelect={ShowTab} /> */}
        {ShowTab == "rev" ? <CusViewReview productID={pid} /> : <Question />}
      </div>
    </div>
  );
}

function Tabs({ TabSelect }) {
  if (TabSelect == "rev") return <CusViewReview productID={pid} />;

  if (TabSelect == "ques") return <Question />;
}

export default CustTwoTab;
