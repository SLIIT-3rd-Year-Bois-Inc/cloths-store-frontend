import React from "react";
import image from "../../../src/image/ti.jpg";

function cusCreateReview() {
  // copy paste code
  return (
    <div>
      <div className=""></div>
      <div class="grid lg:grid-flow-col gap-4 2xl:grid-flex-row md:grid-flow-col">
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
          <div class="grid lg:grid-flow-col gap-4 2xl:grid-flex-row md:grid-flow-col">
            <div class="bg-red-200">
              <h1>Weite a review</h1>
              <textarea name="review" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="bg-red-300">
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
            <div class="bg-red-200">
              <p>image 1</p>
              <p>image 1</p>
              <p>image 1</p>
            </div>
            <div class="bg-red-300">
              <div>
                <div>
                  <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
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
