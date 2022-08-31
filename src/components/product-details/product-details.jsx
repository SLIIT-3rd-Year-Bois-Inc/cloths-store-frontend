import React, { useState } from "react";

const ProductDetails = () => {
  const data = [
    {
      id: "1",
      img: [
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/555bccc0efd24c26b79aaeb500dd25b5_9366/Capable_of_Greatness_Training_Tee_Black_HG7895_01_laydown.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c4efa9f4e66a41ad8979aeb500dce959_9366/Capable_of_Greatness_Training_Tee_Black_HG7895_21_model.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e3dea28f166549f4a787aeb500dd0788_9366/Capable_of_Greatness_Training_Tee_Black_HG7895_41_detail.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/97293103e26045a5a35faeb500dcfc39_9366/Capable_of_Greatness_Training_Tee_Black_HG7895_25_model.jpg",
      ],
      description:
        "Make each rep count in this adidas x Peloton tee. AEROREADY manages moisture, so you can train distraction-free and focus on your form. A droptail hem with side slits adds coverage for deep squats and gives you greater freedom of movement on twisty ab and back exercises. So simple. So stellar Made with a series of recycled materials, and at least 60% recycled content, this product represents just one of our solutions to help end plastic waste.",
      name: "CAPABLE OF GREATNESS TRAINING TEE",
      gender: "m",
      color: "Black",
      brand: "adidas",
      size: ["S", "M", "L"],
      price: "3000",
    },
  ];

  const [availableAmount, setAvailableAmount] = useState("2");
  const [product, setProduct] = useState(data);
  const [mainImage, setMainImage] = useState(data.map((obj) => obj.img[0]));

  const changeImage = (event) => {
    document.querySelector(".main-img").src = event.target.src;
  };
  const changeSize = (event, key) => {
    document.getElementById(key).style.backgroundColor = "black";
    document.getElementById(key).style.color = "white";
  };

  return (
    <>
      <div className="md:flex flex-row  flex-row md:ml-24 md:pt-9">
        <div className="w-0.5/4  flex flex-row md:flex-col ">
          {product.map(({ img }) =>
            img.map((val, index) => (
              <div key={index} className="pt-2 ">
                <img
                  className="object-contain h-16 w-32  flex-row  "
                  src={val}
                  onClick={changeImage}
                  alt="F.jpg"
                />
              </div>
            ))
          )}
        </div>
        <div className="  md:mr-14">
          <div className=" md:ml-0 pt-4 md:pt-0 mb-4">
            <img
              src={mainImage}
              className="main-img  ml-12 md:ml-0 object-contain h-2/4 w-3/4   md:h-3/4  md:w-3/4	"
              alt="F.jpg"
            />
          </div>
        </div>
        <div className=" md:w-2/4  md: -ml-40">
          <div className="ml-44 md:ml-0 text-xs md:text-base">
            {product.map((obj, index) => (
              <div>
                <div className=" font-extrabold italic">
                  <label htmlFor="name" className=" text-xs pb-0">
                    {obj.gender === "m" ? "Men's" : "Women's"}
                  </label>
                  <span className=" pt-0 block">{obj.name} </span>
                </div>
                <div className=" pt-3 ">
                  <label htmlFor="brand ">brand:</label>
                  <span className="font-semibold"> {obj.brand}</span>
                </div>
                <div className=" pt-1 text-xs ">
                  <div>Availability</div>
                </div>
                <div className=" pt-3">
                  <div>Rs {obj.price}.00</div>
                </div>
                <div className=" pt-3">
                  <div>Available color</div>
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: obj.color,
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>
                <div className=" pt-3 ">
                  <div>
                    <div>Size:</div>
                    {obj.size.map((value, index) => (
                      <button
                        key={index}
                        className="sizeSelect inline-block  mr-3 bg-white-50 shadow-lg border w-16 h-7 md:w-24 md:h-9 bg-  text-center items-center"
                        id={index}
                        onClick={(e) => changeSize(e, index)}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div>
              <button className="mt-9 w-28 h-9 md:w-40 md:h-12 bg-black text-white text-center items-center rounded">
                ADD TO BAG{" "}
              </button>
              <button className="border border-red-600 h-9 w-12 ml-1 md:ml-3 md:w-16 md:h-12 rounded ">
                hi
              </button>
            </div>
            <div className=" pt-4 text-xs md:text-base ">
              <div>Only {availableAmount} Available</div>
            </div>
            <div className=" pt-4 text-xs md:text-s ">
              <div>
                Order now to get it between Tuesday, 9th August and Monday, 22nd
                August
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="pt-6 text-xs md:text-base shadow-md  ml-2 mr-2 pt-4 pr-4 pl-4	 pb-4">
          {data.map((obj) => (
            <div>
              <label htmlFor="description" className="font-bold md:text-lg">
                Description:
              </label>
              <div className="pt-2">{obj.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
