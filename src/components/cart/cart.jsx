import React, { useRef, useState, useEffect } from "react";
import "./cartStyle.css";

import useOnClickOutside from "./useOnClickOutside";
import { FiX } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Cart({
  isToggle,
  setToggle,
  cartData,
  setCartData,
  today,
  arrival,
}) {
  const $sideBarRef = useRef();
  useOnClickOutside($sideBarRef, () => setToggle(false));
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [removeItemIndex, setRemoveItemIndex] = useState(null);

  const removeItem = (key) => {
    const newData = cartData.filter((value, index) => {
      return key !== index;
    });
    setCartData(newData);
    setShowModal(false);
  };

  useEffect(() => {
    console.log(cartData);
  });

  const redirectToOrder = () => {
    navigate("/order/details", {
      state: { data: cartData, data2: { today, arrival } },
    });
  };

  // const checkOut = async () => {
  //   let products = [];

  //   for (let c of cartData) {
  //     products.push({
  //       product_id: c.id,
  //       size: c.size,
  //       qty: 1, // TODO
  //     });
  //   }

  //   let request = {
  //     products,
  //     note: "None",
  //   };

  //   try {
  //     let response = await axios.post(`${API_ENDPOINT}/api/order/`, request, {
  //       withCredentials: true,
  //     });

  //     if (response.status != 200)
  //       throw Error("Responded with " + response.status);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const modalOn = () => (
    <div className="  bg-stone-900 opacity-90 fixed  inset-0 z-50   ">
      <div className="flex h-screen justify-center items-center ">
        <div className="flex-col justify-center opacity-100 bg-white py-12 px-24 rounded-xl ">
          <div className="flex  text-lg  text-stone-900  font-bold mb-10">
            Do you wanna remove this product from cart? <br /> This cannot be
            undone.
          </div>
          <div className="flex">
            <button
              onClick={() => removeItem(removeItemIndex)}
              className=" rounded px-4 py-2 text-white  bg-red-600 h-12 w-32"
            >
              Delete
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="rounded px-4 py-2 ml-4 text-white bg-stone-900 h-12 w-32"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div
        ref={$sideBarRef}
        className={isToggle ? "cartSideBar" : "cartSideBarHidden"}
      >
        <div className="sideBarHeader">Shopping cart</div>
        {cartData[0] === undefined ? (
          <div className="cartEmpty">EMPTY</div>
        ) : (
          cartData.map((cartData, index) => (
            <div className="cartItemContainer " key={index}>
              <img className="cartProductImg" src={cartData.img} />
              <div>
                <div className="itemName">{cartData.name}</div>
                <div className="itemSize">Size:{cartData.size}</div>
                <div className="itemPrice">Rs{cartData.price}.00</div>
              </div>
              <div
                className="itemRemove cursor-pointer"
                onClick={() => {
                  setRemoveItemIndex(index);
                  setShowModal(true);
                }}
              >
                <FiX size={15} />
              </div>
            </div>
          ))
        )}
        {cartData[0] !== undefined && (
          <div>
            <button
              onClick={redirectToOrder}
              className="mt-3 w-28 h-9 md:w-40 md:h-12 bg-red-600	 text-white text-center items-center rounded-sm	 float-right	"
            >
              CHECKOUT
            </button>
            {showModal ? modalOn() : <></>}
          </div>
        )}
      </div>
    </div>
  );
}
