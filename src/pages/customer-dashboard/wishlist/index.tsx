import { Dropdown } from "flowbite-react";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { CustomerAPI } from "../../customer/api";

export default function WishList() {
  const wish_query = useQuery(
    ["customer", "wishlist"],
    CustomerAPI.getWishlist
  );
  const data = wish_query.data || [];
  console.log(data);
  return (
    <>
      <h1 className="font-bold text-2xl mb-4">Wish List</h1>
      <div className="w-full flex-grow">
        <WishFunctionBar />
        <div className="flex w-full">
          {data.map((w: any) => {
            return (
              <WishProduct
                name={w.result[0].name}
                image={w.result[0].imagesUrls[0][1]}
                id={w.result[0]._id}
                price={w.result[0].price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

interface IWishProductsProps {
  name?: string;
  image?: string;
  id?: string;
  price?: number;
}

function WishProduct({ name, image, id, price }: IWishProductsProps) {
  const query_client = useQueryClient();

  const delete_wish = useMutation(CustomerAPI.removeFromWishList, {
    onSuccess: () => {
      query_client.invalidateQueries(["customer", "wishlist"]);
    },
  });

  return (
    <div className="flex flex-col p-8 w-full shadow-lg">
      <div className="flex flex-row">
        <div className="h-[9em] w-[9em] mr-2 flex-shrink-0 inline-block">
          <img
            src={image}
            className="w-full h-full object-contain"
            alt="Product"
          ></img>
        </div>
        <div className="flex flex-col">
          <div className="flex-grow mb-1 cursor-pointer hover:text-red-500">
            {name}
          </div>
          <div className="flex-grow mb-1 cursor-pointer hover:text-red-500">
            Rs. {price}
          </div>
          <div className="flex-grow"></div>
          <div className="ml-2">
            <Link
              to={`/product/${id}`}
              className="bg-black text-white py-2 px-4 mr-2 rounded"
            >
              Buy Now
            </Link>
            <button
              onClick={() => {
                delete_wish.mutate({ id: id });
              }}
              className="bg-red-600 text-white py-2 px-4 rounded"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function WishFunctionBar() {
  return (
    <div className="w-full px-4">
      <div className="inline-block">
        <Dropdown label="Category">
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
}
