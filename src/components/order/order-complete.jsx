import image from "../../../src/image/ok.gif";
import image2 from "../../../src/image/email.png";
import image3 from "../../../src/image/print.png";
import { useNavigate } from "react-router-dom";

const OrderComplete = () => {
  const navigate = useNavigate();

  const buttonClick = () => {
    navigate("/");
  };

  return (
    <div className=" fixed inset-0 bg-gradient-to-br from-stone-300/50 to-stone-300/50 flex justify-center items-center backdrop-blur-sm ">
      <div className="bg-white  justify-center items-center pl-40 pr-40 pb-20 rounded-2xl">
        <img src={image} className="h-48 mx-auto" />
        <h1 className="text-5xl text-center justify-center items-center">
          Thank You.
        </h1>
        <h1 className="text-3xl text-center justify-center items-center">
          Your Order is complete.
        </h1>

        <div className="flex flex-row  mt-10">
          <div>
            <img src={image2} className="h-12 pr-4" />
          </div>
          <div className="">
            <h1>An email receipt has been sent to the email address</h1>
            <h1>provided. Happy Shopping.</h1>
          </div>
        </div>

        <div className="flex flex-row  justify-center items-center mt-8">
          <div className="">
            <h1>Visit Profile to check the status of your order.</h1>
            <h1>Click here to print a copy of your receipt</h1>
          </div>
          <div className="">
            <img src={image3} className="h-12 pl-8" />
          </div>
        </div>

        {/* Button click will trigger LINE 05 put your action there*/}
        <div className="pt-10 text-center justify-center items-center">
          <button
            onClick={buttonClick}
            className="p-2 pr-10 pl-10 bg-stone-400 rounded hover:bg-red-500 active:bg-red-700 text-white "
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
