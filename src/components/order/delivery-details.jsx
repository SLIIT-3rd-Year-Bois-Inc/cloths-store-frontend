import image2 from "../../../src/image/email.png";
import { useState } from "react";

const DeliveryDetails = (data) => {
  const dataSubmit = (event) => {
    // Do what you want here. send to another page or something.
    event.preventDefault();
  };

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="">
      <div className="flex flex-flow">
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

              <div className=" text-center justify-center items-center">
                <button
                  type="submit"
                  className="p-2 pr-10 pl-10 bg-red-500 rounded hover:bg-red-700 active:bg-stone-700 text-white "
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
              <div>Rs. {data.data.subTotal}</div>
            </div>

            <div className="flex justify-between text-lg">
              <div>Estimated Delivery</div>
              <div>{data.data.delivery}</div>
            </div>

            <div className="flex justify-between mt-8 text-2xl">
              <div className="font-bold">Total</div>
              <div className="font-bold text-red-600">{data.data.total}</div>
            </div>

            <div className="text-center mt-4 mb-4 font-extrabold">
              _________________________________________________
            </div>

            <h1 className=" mt-10 font-bold text-2xl">
              Arrives By {data.data.arrive}
            </h1>
            <h1 className="mb-2 mt-4 font-bold text-lg">{data.data.title}</h1>
            <div className="flex flex-flow mt-4 mb-4">
              <div className="mr-6">
                <img src={data.data.image} className="h-32" />
              </div>
              <div className="mt-4">
                <h1>Size: {data.data.size}</h1>
                <h1>Color: {data.data.color}</h1>
                <h1>Qty: {data.data.qty}</h1>
                <h1>Rs. {data.data.Rs}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
