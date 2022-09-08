import React, { useEffect, useRef } from "react";
import "./cartStyle.css";

import useOnClickOutside from "./useOnClickOutside";
import { FiX } from "react-icons/fi";

export default function Cart({ isToggle, setToggle, cartData }) {
  const $sideBarRef = useRef();
  console.log();
  useOnClickOutside($sideBarRef, () => setToggle(false));

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
          cartData.map((cartData) => (
            <div className="cartItemContainer ">
              <img className="cartProductImg" src={cartData.img} />
              <div>
                <div className="itemName">{cartData.name}</div>
                <div className="itemSize">Size:{cartData.size}</div>
                <div className="itemPrice">Rs{cartData.price}.00</div>
              </div>
              <div className="itemRemove cursor-pointer">
                <FiX size={15} onClick={() => console.log("hi")} />
              </div>
            </div>
          ))
        )}
        <button className="mt-3 w-28 h-9 md:w-40 md:h-12 bg-red-600	 text-white text-center items-center rounded-sm	 float-right	">
          CHECKOUT
        </button>
      </div>
    </div>
  );
}
