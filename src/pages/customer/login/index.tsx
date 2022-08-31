import React from "react";

export default function Login() {
  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-[50%] flex-shrink-0">
        <img
          src="/philipp-arlt-NmH9A0obon8-unsplash.jpg"
          alt="Welcome"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center w-full">
        <div
          className={`galada-font font-bold text-[42px] text-center mt-[5em]`}
        >
          Cloths
        </div>
        <div className="flex flex-col justify-center items-center my-3">
          <label className="text-sm">Email</label>
          <input
            className="rounded border-black border mx-2 p-3 min-w-[22em]"
            placeholder="Email"
          ></input>
        </div>
        <div className="flex flex-col justify-center items-center">
          <label className="text-sm">Password</label>
          <input
            className="rounded border-black border mx-2 p-3 min-w-[22em] mb-8"
            placeholder="Password"
          ></input>
        </div>
        <button className="bg-red-600 text-white px-8 py-4 line-spacing-main open-sans-font text-sm">
          Login
        </button>
        <div className="min-w-[25em] flex flex-row px-5 mt-10">
          <a>Fogot Password?</a>
          <div className="flex-grow"></div>
          <div className="flex justify-center items-center">
            <input
              id="checked-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="checked-checkbox"
              className="ml-2 text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
        </div>
        <div className="flex-grow"></div>
        <div className="flex flex-row w-full py-4 px-6">
          <div>Trouble Loging in ?</div>
          <div className="flex-grow"></div>
          <div>Back to home</div>
        </div>
      </div>
    </div>
  );
}
