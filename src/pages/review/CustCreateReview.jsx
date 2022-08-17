import React from "react";
import image from "../../../src/image/ti.jpg";

function cusCreateReview() {
  // copy paste code
  return (
    <div>
      <h1>HI SEMPRA</h1>
      <div>
        <img src={image} alt="temp Image" />
        <h1>Denim Look Jeans</h1>
        <p>
          Merge pull request #3 from SLIIT-3rd-Year-Merge pull request #3 from
          SLIIT-3rd-Year-Merge pull request #3 from SLIIT-3rd-Year-Merge pull
          request #3 from SLIIT-3rd-Year-Merge pull request #3 from
          SLIIT-3rd-Year-Merge pull request #3 from SLIIT-3rd-Year-Merge pull
          request #3 from SLIIT-3rd-Year-Merge pull request #3 from
          SLIIT-3rd-Year-Merge pull request #3 from SLIIT-3rd-Year-Merge pull
          request #3 from SLIIT-3rd-Year-Merge pull request #3 from
          SLIIT-3rd-Year-Merge pull request #3 from SLIIT-3rd-Year-
        </p>
        <h1>color selected : </h1>
        <h1>size : </h1>
        <h1>qty : </h1>
      </div>

      <div>
        <form action="">
          <div>
            <h1>Weite a review</h1>
            <textarea name="review" id="" cols="30" rows="10"></textarea>
          </div>
          <div>
            <h1>Rate your review</h1>
            {/* put star picker */}
            <h3>Maximum 3 Images can be added</h3>
            <h3>Maximum 1000 characters</h3>
            <h3>Image size should not exceed 2mb</h3>
          </div>
          <div>
            <button> Cancel </button>
            <button> Submit Review </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default cusCreateReview;
