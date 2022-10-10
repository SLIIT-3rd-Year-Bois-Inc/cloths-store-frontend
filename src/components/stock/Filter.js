import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import MultiRangeSlider from "./multiRangeSlider";

function Filter({
  filter,
  setGender,
  gender,
  tagsArray,
  setTagsArray,
  colorArray,
  setColorArray,
  setPriceRange,
  minMaxObj,
}) {
  //states for data

  //states for functioning part

  const [genderView, setGenderView] = useState(true);
  const genderViewClicked = () => setGenderView(!genderView);

  const [tagsView, setTagsView] = useState(true);
  const tagsViewClicked = () => setTagsView(!tagsView);

  const [colorView, setColorView] = useState(true);
  const colorViewClicked = () => setColorView(!colorView);

  const [priceRangeView, setPriceRangeView] = useState(true);
  const priceRangeClicked = () => setPriceRangeView(!priceRangeView);

  function tagclicked(index) {
    let temparr = [...tagsArray];
    temparr[index].selected = !temparr[index].selected;
    setTagsArray(temparr);
  }
  function colorClicked(index) {
    let temparr = [...colorArray];
    temparr[index].selected = !temparr[index].selected;
    setColorArray(temparr);
  }

  return (
    <div
      className={
        "absolute pb-5 z-10 top-0 left-0 right-0  overflow-y-auto bg-white 2xl:static 2xl:w-[300px]  2xl:mr-10" +
        (filter
          ? " transition-h flex justify-around flex-wrap 2xl:flex-col "
          : " hidden 2xl:flex 2xl:flex-col transition-h xl:min-h-[400px]")
      }
    >
      {/*Gender filter */}
      <div className="mb-4 w-[300px] mx-2 2xl:mx-0">
        <h2>
          <button
            type="button"
            class="flex border-t-2 items-center justify-between w-full p-2 font-bold  text-left text-gray-500  "
            data-accordion-target="#accordion-open-body-1"
            onClick={genderViewClicked}
          >
            <span class="flex text-xl items-center"> Gender</span>
            <FiChevronDown
              className={
                genderView ? "rotate-180 w-6 h-6 shrink-0" : " w-6 h-6 shrink-0"
              }
            />
          </button>
        </h2>
        <div
          class={genderView ? "pl-4 p-2" : "hidden"}
          aria-labelledby="accordion-open-heading-1"
        >
          <div class="flex items-center py-1">
            <input
              id="default-radio-1"
              type="radio"
              value="M"
              checked={gender === "M"}
              onChange={(e) => setGender(e.target.value)}
              name="default-radio"
              className="w-5 h-5 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-1"
              className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
            >
              Male
            </label>
          </div>
          <div class="flex items-center py-1">
            <input
              id="default-radio-2"
              type="radio"
              value="W"
              checked={gender === "W"}
              onChange={(e) => setGender(e.target.value)}
              name="default-radio"
              className="w-5 h-5 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-2"
              className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
            >
              Female
            </label>
          </div>
          <div class="flex items-center py-1">
            <input
              id="default-radio-2"
              type="radio"
              value="K"
              checked={gender === "K"}
              onChange={(e) => setGender(e.target.value)}
              name="default-radio"
              className="w-5 h-5 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-2"
              className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
            >
              Kids
            </label>
          </div>
          <div class="flex items-center py-1">
            <input
              id="default-radio-2"
              type="radio"
              checked={gender === "U"}
              onChange={(e) => setGender(e.target.value)}
              value="U"
              name="default-radio"
              className="w-5 h-5 text-gray-600 bg-gray-100 border-gray-300 focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-2"
              className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
            >
              Unisex
            </label>
          </div>
        </div>
      </div>
      <div className="mb-5 w-[300px]  mx-2 2xl:mx-0">
        <h2>
          <button
            type="button"
            class="flex border-t-2 items-center justify-between w-full p-2 font-bold text-left text-gray-500  "
            data-accordion-target="#accordion-open-body-1"
            onClick={tagsViewClicked}
          >
            <span class="flex text-xl items-center"> Tags</span>
            <FiChevronDown
              className={
                tagsView ? "rotate-180 w-6 h-6 shrink-0" : " w-6 h-6 shrink-0"
              }
            />
          </button>
        </h2>
        <div
          class={tagsView ? "pl-4 p-2 flex flex-wrap" : "hidden"}
          aria-labelledby="accordion-open-heading-1"
        >
          {tagsArray.map((tag, index) => (
            <span
              key={index}
              className={
                "h-8 m-1 text-base rounded-full px-4 py-1 text-white hover:cursor-pointer  " +
                (tag.selected
                  ? "bg-red-600 hover:bg-red-500"
                  : "bg-black hover:bg-gray-900")
              }
              onClick={() => tagclicked(index)}
            >
              {tag.tagName}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-5 w-[300px] mx-2 2xl:mx-0">
        <h2>
          <button
            type="button"
            class="flex border-t-2 items-center justify-between w-full p-2 font-bold text-lg text-left text-gray-500  "
            data-accordion-target="#accordion-open-body-1"
            onClick={colorViewClicked}
          >
            <span class="flex text-xl items-center"> Colors</span>
            <FiChevronDown
              className={
                colorView ? "rotate-180 w-6 h-6 shrink-0" : " w-6 h-6 shrink-0"
              }
            />
          </button>
        </h2>
        <div
          class={colorView ? "pl-4 flex flex-wrap" : "hidden"}
          aria-labelledby="accordion-open-heading-1"
        >
          {colorArray.map((color, index) => (
            <div
              className={
                " m-1 border border-gray-300 hover:border-2  rounded-full " +
                color.colorName +
                " " +
                (color.selected ? " h-7 w-7" : "h-6 w-6")
              }
              onClick={() => colorClicked(index)}
            ></div>
          ))}
        </div>
      </div>
      <div className="w-[300px]  mx-2 2xl:mx-0">
        <h2>
          <button
            type="button"
            class="flex border-t-2 items-center justify-between w-full p-2 font-bold text-lg text-left text-gray-500  "
            data-accordion-target="#accordion-open-body-1"
            onClick={priceRangeClicked}
          >
            <span class="flex items-center"> Price range</span>
            <FiChevronDown
              className={
                priceRangeView
                  ? "rotate-180 w-6 h-6 shrink-0"
                  : " w-6 h-6 shrink-0"
              }
            />
          </button>
        </h2>
        <div
          class={priceRangeView ? "pl-4" : "hidden"}
          aria-labelledby="accordion-open-heading-1"
        >
          <MultiRangeSlider
            min={minMaxObj.minPrice}
            max={minMaxObj.maxPrice}
            onChange={({ min, max }) => setPriceRange({ min, max })}
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
