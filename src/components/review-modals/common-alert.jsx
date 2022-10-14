import ok from "../../../src/image/ok.gif";
import { useNavigate } from "react-router-dom";
import image from "../../../src/image/alert.gif";

const CommonAlert = ({ setCommonAlert, message, topic, link1, link2 }) => {
  let navigate = useNavigate();

  const handleCancelClick = () => {
    if (link1 == "deletedQ") {
      navigate(0);
    }
    if (link1 == "review") {
      navigate(-1);
    }
    setCommonAlert(false);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900/60 to-red-900/50  flex justify-center items-center backdrop-blur-sm">
      <div className="bg-red-000  pt-16 pb-20 p-14  rounded-3xl bg-gradient-to-br from-amber-700/40 to-orange-600/40">
        <div className="flex grid-flow-row ">
          <div className="bg-white p-10 rounded-3xl">
            <div className=" p-4  w-80">
              <div className="">
                <h1 className="text-3xl text-amber-500 text-center font-bold">
                  {topic}
                </h1>
                <h1 className="text-xl  text-gray-500 text-center">
                  {message}
                </h1>
              </div>

              <div className="flex justify-center">
                <img src={image} className="h-48 " />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  onClick={handleCancelClick}
                  className="bg-amber-500 mt-4 rounded-3xl text-white content-center p-3 pl-16 pr-16 bg-fixed  hover:bg-amber-600 active:bg-amber-600"
                >
                  ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonAlert;
