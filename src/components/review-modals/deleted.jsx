import image from "../../../src/image/delete.gif";
import { useNavigate } from "react-router-dom";

const Deleted = () => {
  let navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className=" fixed inset-0 bg-gradient-to-br from-gray-900/60 to-red-900/50  flex justify-center items-center backdrop-blur-sm ">
      <div className="flex h-screen justify-center items-center ">
        <div className="flex-col justify-center opacity-100 bg-white py-12 px-20 rounded-xl ">
          <div className="flex  text-lg  text-stone-900  font-bold mb-2 justify-center ">
            Your Review is Deleted
          </div>

          <div className="flex  justify-center">
            <img src={image} className="h-48 " />
          </div>

          <div className="flex p-10 ">
            <button
              type="button"
              onClick={goHome}
              className="rounded px-4 py-2 ml-4 text-white bg-stone-900 h-12 w-48"
            >
              Back to home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deleted;
