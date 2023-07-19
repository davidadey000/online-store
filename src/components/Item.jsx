import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import TextContentLoader from "./TextContentLoader";

const Item = ({
  id,
  image,
  title,
  price,
  prevPrice,
  status,
  type,
  quantity,
  handleIncrement,
  handleDecrement,
  handleRemoveFromCart,
  handleRemoveFromSaved,
  handleAddToCart,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [image]);

  return (
    <div
      className={`${
        type === "cart" ? "mx-2 mb-1" : "mx-1 mb-2 shadow-sm"
      }  bg-white p-2 rounded-sm `}
    >
      <div className="rounded-sm flex gap-2 justify-between">
        <div className="flex gap-2">
          <div className={`max-w-[31%] sm:w-[100px] sm:h-28 max-h-20 relative`}>
            <small className="lg:hidden absolute right-0 bg-red-50 text-red-400 px-2">
              -70%
            </small>
            {isLoading ? (
              <TextContentLoader
                width="100%"
                height="100%"
              ></TextContentLoader>
            ) : (
              <img
                src={image}
                alt="Product Image"
                className="w-full h-full rounded-sm"
              ></img>
            )}
          </div>
          <div className="w-70 lg:w-[70%] flex flex-col gap-[1px]">
            <p
              className={`${
                type === "cart" ? "text-xs" : "text-sm"
              }  leading-4 lg:text-[16px] lg:w-80 lg:leading-snug`}
            >
              {title}
            </p>
            <div
              className={`${
                type === "cart" ? "gap-1 items-center" : "flex-col"
              } flex lg:hidden`}
            >
              <p className="text-lg">₦{price}</p>
              <p
                className={`${
                  type === "cart" ? "text-xs" : "text-md"
                } text-gray-600 line-through`}
              >
                ₦{prevPrice}
              </p>
            </div>
            <p className="text-xs text-green-700">{status}</p>
          </div>
        </div>
        <div
          className={`${
            type === "cart" ? "gap-1 items-center lg:flex-col" : "flex-col"
          } hidden lg:flex lg:items-end`}
        >
          <p className="text-lg">₦{price}</p>
          <p
            className={`${
              type === "cart" ? "text-xs" : "text-md"
            } text-gray-600 line-through`}
          >
            ₦{prevPrice}
          </p>
          <small className=" bg-red-50 text-red-400 px-2 mt-2">-70%</small>
        </div>
      </div>

      <div className="flex justify-between mt-3">
        <button
          className="flex items-center"
          onClick={() =>
            type === "cart"
              ? handleRemoveFromCart(id)
              : handleRemoveFromSaved(id)
          }
        >
          <FaTrash className="text-red-400" />
          <p className="ml-3 text-red-400">REMOVE</p>
        </button>
        <div className="flex justify-end items-center w-[50%] lg:w-32">
          {type === "cart" ? (
            <>
              <button
                onClick={() => handleDecrement(id)}
                className={`p-2 shadow-xl rounded-md text-white ${
                  quantity ? "bg-red-400" : "bg-red-300"
                }`}
              >
                <FaMinus />
              </button>
              <p className="flex justify-center w-full">{quantity}</p>
              <button
                onClick={() => handleIncrement(id)}
                className="p-2 shadow-xl rounded-md text-white bg-red-400"
              >
                <FaPlus />
              </button>
            </>
          ) : (
            <button
              className="bg-red-400 text-white text-xs py-2 px-3 rounded-sm shadow-xl font-semibold"
              onClick={() => handleAddToCart(id)}
            >
              BUY NOW
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
