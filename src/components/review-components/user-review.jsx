import image from "../../../src/image/ti.jpg";
import image2 from "../../../src/image/2.jpg";
import image3 from "../../../src/image/3.jpg";
import ImageView from "./image-view";
import { useState } from "react";

function ReviewCard() {
  const [showImg, setShowImg] = useState(false);
  const handleOnClose = () => setShowImg(false);
  const [sendImg, setSendImg] = useState();

  const handleDataSend1 = (image) => {
    setSendImg(image);
    setShowImg(true);
  };

  return (
    <div className="mt-12 mb-12 pt-10">
      <article>
        <div classNameName="flex items-center mb-4 space-x-4 ">
          <div className="space-y-1 font-medium dark:text-white ">
            <p>
              Jese Leos{" "}
              <time
                datetime="2014-08-16 19:00"
                className="block text-sm text-gray-500 dark:text-gray-400"
              >
                Date : 2037/12/12
              </time>
            </p>
          </div>
        </div>
        <div className="flex items-center mb-1">
          <svg
            aria-hidden="true"
            className="w-5 h-5  text-red-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>First star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-red-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Second star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5  text-red-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Third star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-red-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fourth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fifth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          {/* <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3> */}
        </div>
        <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
          <p>
            Reviewed in the United Kingdom on{" "}
            <time datetime="2017-03-03 19:00">March 3, 2017</time>
          </p>
        </footer>
        <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
          This is my third Invicta Pro Diver. They are just fantastic value for
          money. This one arrived yesterday and the first thing I did was set
          the time, popped on an identical strap from another Invicta and went
          in the shower with it to test the waterproofing.... No problems.
        </p>
        <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
          It is obviously not the same build quality as those very expensive
          watches. But that is like comparing a Citroën to a Ferrari. This watch
          was well under £100! An absolute bargain.
        </p>

        <div className="grid lg:grid-flow-col gap-4 2xl:grid-flex-row md:grid-flex-col justify-start">
          <div>
            <img
              onClick={() => handleDataSend1(image)}
              src={image}
              className="object-cover h-32 w-32 "
            />
          </div>
          <div>
            <img
              onClick={() => handleDataSend1(image2)}
              src={image2}
              className="object-cover h-32 w-32 "
            />
          </div>
          <div>
            <img
              onClick={() => handleDataSend1(image3)}
              src={image3}
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
