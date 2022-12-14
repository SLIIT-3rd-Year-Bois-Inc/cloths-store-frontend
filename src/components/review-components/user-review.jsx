import ImageView from "./image-view";
import { useState } from "react";
import Stars from "./stars";
import { useNavigate } from "react-router-dom";

function ReviewCard({ users, proData }) {
  const [showImg, setShowImg] = useState(false);
  const handleOnClose = () => setShowImg(false);
  const [sendImg, setSendImg] = useState();

  const handleDataSend1 = (image) => {
    setSendImg(image);
    setShowImg(true);
  };

  const navigate = useNavigate();

  return (
    <div
      className="p-8 mb-10 rounded-2xl  shadow-md"
      style={{ backgroundColor: "#f7f7f7" }}
    >
      <article>
        <div className="flex items-center mb-4 space-x-4 ">
          <div className="space-y-1 font-medium dark:text-white ">
            <p>
              {" "}
              Review by : {users.fname} {users.lname}{" "}
            </p>
          </div>
        </div>

        <Stars count={users.rating} size="25" />

        <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
          <p>{users.rateText} added on</p>
          <time
            dateTime="2014-08-16 19:00"
            className="block text-sm text-gray-500 dark:text-gray-400"
          >
            Date : {users.date}
          </time>
        </footer>
        <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
          {users.review}
        </p>

        <div className="grid lg:grid-flow-col gap-4 2xl:grid-flex-row md:grid-flex-col justify-start">
          <div>
            <img
              onClick={() => handleDataSend1(users.image1)}
              src={users.image1}
              className="object-cover h-32 w-32 "
            />
          </div>
          <div>
            <img
              onClick={() => handleDataSend1(users.image2)}
              src={users.image2}
              className="object-cover h-32 w-32 "
            />
          </div>
          <div>
            <img
              onClick={() => handleDataSend1(users.image3)}
              src={users.image3}
              className="object-cover h-32 w-32 "
            />
          </div>
        </div>
        <aside>
          <div className="flex items-center mt-3 space-x-3 justify-end">
            {users.logged ? (
              <button
                href="#"
                className="text-white bg-stone-700 border  hover:bg-red-500 focus:ring-4 font-medium rounded text-xs pl-5 pr-5 pt-2 pb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                onClick={() => {
                  navigate("/updateReview", { state: { users, proData } });
                }}
              >
                update
              </button>
            ) : (
              ""
            )}
          </div>
        </aside>

        <div
          className="fixed hidden inset-0bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
        ></div>
      </article>
      <ImageView onClose={handleOnClose} visible={showImg} image={sendImg} />
    </div>
  );
}

export default ReviewCard;
