import React from "react";

export default function TopSection() {
  return (
    <div className="h-[calc(80vh+10em)] lg:h-[calc(100vh-2em)] overflow-hidden w-full z-0">
      <img
        src="lindsay-martin-2WHey8IZcLw-unsplash.jpg"
        alt="cool girl"
        className="object-cover w-full brightness-75 relative lg:top-[-10em]"
      />
      <div className="w-full h-[calc(100%-9em)] flex flex-col absolute bottom-0">
        <div className="flex-grow"></div>
        <div className="mb-[6em] ml-[5em]">
          <div className="mb-8 text-white open-sans-font text-2xl line-spacing-main">
            Your Style, Your way.<br></br>Don’t wait for your dress,We deliver
            fast.
          </div>
          <button className="bg-white text-black px-8 py-4 line-spacing-main open-sans-font text-sm">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
}
