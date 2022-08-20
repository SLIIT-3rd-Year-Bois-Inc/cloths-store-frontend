import React from "react";
import image from "../../../src/image/ti.jpg";

function cusCreateReview() {
  // copy paste code
  return (
    <div className="m-10">
      <div className=""></div>
      <div class="grid lg:grid-flow-col gap-10 2xl:grid-flex-row md:grid-flow-col pb-5">
        <div class="bg-red-200">
          <img src={image} className="object-cover h-48 w-96 " />
        </div>
        <div class="bg-red-300">
          <div className="">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
              <span className="block">Denim Look Genes</span>
              <span className="block text-red-600">RS. 6500</span>
            </h1>

            <p>
              Merge pull request #3 from SLIIT-3rd-Year-Merge pull request #3
              from SLIIT-3rd-Year-Merge pull request #3 from
              SLIIT-3rd-Year-Merge pull request #3 from SLIIT-3rd-Year-Merge
              pull request #3 from SLIIT-3rd-Year-Merge pull request #3 from
              SLIIT-3rd-Year-Merge pull request #3 from SLIIT-3rd-Year-Merge
              pull request #3 from SLIIT-3rd-Year-Merge pull request #3 from
              SLIIT-3rd-Year-Merge pull request #3 from SLIIT-3rd-Year-Merge
              pull request #3 from SLIIT-3rd-Year-Merge pull request #3 from
              SLIIT-3rd-Year-
            </p>
            <h1>color selected : </h1>
            <h1>size : </h1>
            <h1>qty : </h1>
          </div>
        </div>
      </div>

      {/* <div class="grid lg:grid-flow-col gap-4 2xl:grid-flex-row md:grid-flow-col">
            <div class="bg-red-200">01
            </div> 
            <div class="bg-red-300">02</div>
        </div> */}

      <div>
        <form action="">
          <div class="grid lg:grid-flow-col gap-4 2xl:grid-flex-row md:grid-flow-col pb-5">
            <div class="bg-green-200">
              <h1>Weite a review</h1>
              <textarea name="review" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="bg-teal-300">
              <div>
                <h1>Rate your review</h1>
                {/* put star picker */}
                <h3>Maximum 3 Images can be added</h3>
                <h3>Maximum 1000 characters</h3>
                <h3>Image size should not exceed 2mb</h3>
              </div>
            </div>
          </div>

          <div class="grid lg:grid-flow-col gap-4 2xl:grid-flex-row md:grid-flow-col">
            <div class="grid lg:grid-flow-col gap-4 2xl:grid-flex-row md:grid-flow-col">
              <div class="bg-orange-100">
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-red-900 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </div>
                    <p class="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                  </div>
                </div>
              </div>

              <div class="bg-orange-300">
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-red-900 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </div>
                    <p class="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                  </div>
                </div>
              </div>

              <div class="bg-orange-100">
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-red-900 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </div>
                    <p class="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-blue-300">
              <div>
                <div>
                  <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0 justify-end ">
                    <div class="inline-flex rounded-md shadow">
                      <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium text-white bg-stone-900 hover:bg-stone-700 rounded-sm">
                        {" "}
                        Cancel{" "}
                      </button>
                    </div>
                    <div class="ml-3 inline-flex rounded-md shadow">
                      <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-sm text-white bg-red-600 hover:bg-red-800">
                        {" "}
                        Submit Review{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default cusCreateReview;
