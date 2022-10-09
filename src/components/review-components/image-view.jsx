import React from "react";
import bg1 from "../../../src/image/bg.png";

function ImageView({ visible, onClose, image }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center backdrop-blur-sm">
      <div
        className="bg-red-500 bg-opacity-20 p-14  rounded-3xl"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: `cover`,
        }}
      >
        <div className="h-4/5 w-4/5 bg-stone-700 rounded-3xl bg-bg1 ">
          <img
            src={image}
            onClick={() => window.open(image, "_blank")}
            className="w-[650px] rounded-t-3xl"
          />
          <div className="flex flex-row ">
            <div>
              <button
                onClick={onClose}
                className="bg-black text-white p-3 pl-16 pr-16 bg-fixed rounded-bl-3xl"
              >
                Go back
              </button>
            </div>

            <div>
              <button
                onClick={() => window.open(image, "_blank")}
                className="bg-red-800 text-white p-3 pl-16 pr-16 bg-fixed animate-pulse"
              >
                Enlarge Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageView;
