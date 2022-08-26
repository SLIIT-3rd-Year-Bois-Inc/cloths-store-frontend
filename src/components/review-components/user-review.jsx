import ImageView from "./image-view";
import { useState } from "react";
import Stars from "./stars";

function ReviewCard({ users }) {
  const [showImg, setShowImg] = useState(false);
  const handleOnClose = () => setShowImg(false);
  const [sendImg, setSendImg] = useState();

  const handleDataSend1 = (image) => {
    setSendImg(image);
    setShowImg(true);
  };

  return (
    <div className="mt-12 mb-12 pt-0">
      <article>
        <div classNameName="flex items-center mb-4 space-x-4 ">
          <div className="space-y-1 font-medium dark:text-white ">
            <p>{users.name} </p>
          </div>
        </div>

        <Stars count={users.rating} size="25" />

        <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
          <p>{users.rateText} added on</p>
          <time
            datetime="2014-08-16 19:00"
            className="block text-sm text-gray-500 dark:text-gray-400"
          >
            Date : {users.Date}
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
          <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
            <a
              href="#"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              update
            </a>
          </div>
        </aside>

        <div
          class="fixed hidden inset-0 bg-green-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
        ></div>
      </article>
      <ImageView onClose={handleOnClose} visible={showImg} image={sendImg} />
    </div>
  );
}

export default ReviewCard;
