import image2 from "../../../src/image/email.png";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_ENDPOINT } from "../../config";
import axios from "axios";
import Header from "../header";
const DeliveryDetails = (data) => {
  const dataSubmit = (event) => {
    // Do what you want here. send to another page or something.
    event.preventDefault();
  };
  const navigate = useNavigate();

  const location = useLocation();
  const deliveryFee = 500;
  var total = 0;
  const [error, setError] = useState("");
  const calculateTotal = () => {
    for (let c of location.state.data) {
      total = total + c.price;
    }
    return total;
  };

  const checkOut = async () => {
    if (fname && lname && address && phone && email !== "") {
      setError("");
      let products = [];

      for (let c of location.state.data) {
        products.push({
          product_id: c.id,
          size: c.size,
          qty: 1, // TODO
        });
      }

      let request = {
        products,
        note: "None",
        placed_time: location.state.data2?.today,
      };

      try {
        let response = await axios.post(`${API_ENDPOINT}/api/order/`, request, {
          withCredentials: true,
        });

        if (response.status == 200) {
          navigate("/order/order-success");
        }
        if (response.status != 200)
          throw Error("Responded with " + response.status);
      } catch (err) {
        console.error(err);
      }
    } else {
      setError("Fill all the fields");
    }
  };

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="">
      <Header />
      <div className="flex flex-flow ml-96 mt-32">
        <div className="mr-8">
          <div className="bg-stone-800 text-white pt-4 pb-4">
            <h1 className="ml-20">DELIVERY DETAILS</h1>
          </div>

          <div className="bg-gray-100 p-8 pr-32 pl-32">
            <form class="w-full max-w-lg" onSubmit={dataSubmit}>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    required
                    onChange={(e) => {
                      setfname(e.target.value);
                    }}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    required
                    onChange={(e) => {
                      setlname(e.target.value);
                    }}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-address"
                  >
                    Address
                  </label>
                  <input
                    required
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Address"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-address"
                  >
                    Email
                  </label>
                  <input
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-address"
                  >
                    Phone Number
                  </label>
                  <input
                    required
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    pattern="[0-9]{10}"
                    title="Enter Numbers only. 10 Numbers Needed"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-red-700 text-xs font-bold mb-2 text-center	"
                    for="grid-address"
                  >
                    {error}
                  </label>
                </div>
              </div>

              <div className=" text-center justify-center items-center">
                <button
                  type="submit"
                  className="p-2 pr-10 pl-10 bg-red-500 rounded hover:bg-red-700 active:bg-stone-700 text-white "
                  onClick={checkOut}
                >
                  Save and Order
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="">
          <div className="bg-stone-400 text-white pt-4 pb-4 pl-4 pr-64">
            <h1>IN YOUR BAG</h1>
          </div>

          <div className="bg-gray-100 p-4">
            <div className="flex justify-between mt-12 text-lg">
              <div>Subtotal</div>
              <div>Rs.{total === 0 && calculateTotal()}</div>
            </div>

            <div className="flex justify-between text-lg">
              <div>Estimated Delivery</div>
              <div>{deliveryFee}</div>
            </div>

            <div className="flex justify-between mt-8 text-2xl">
              <div className="font-bold">Total</div>
              <div className="font-bold text-red-600">
                {deliveryFee + total}
              </div>
            </div>

            <div className="text-center mt-4 mb-4 font-extrabold">
              _________________________________________________
            </div>

            <h1 className=" mt-10 font-bold text-2xl">
              Arrives By{" "}
              {location.state.data2.arrival.toLocaleString("en-us", {
                day: "2-digit",
              })}
              &nbsp;
              {location.state.data2.arrival.toLocaleString("en-us", {
                month: "long",
              })}
              , &nbsp;
              {location.state.data2.arrival.getFullYear()}
            </h1>
            <h1 className="mb-2 mt-4 font-bold text-lg">
              {location.state.data[0].name}
            </h1>
            <div className="flex flex-flow mt-4 mb-4">
              <div className="mr-6">
                <img src={location.state.data[0].img} className="h-40" />
              </div>
              <div className="mt-4">
                <h1>Size: {location.state.data[0].size}</h1>

                <h1>Rs. {location.state.data[0].price}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
