import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import TextContentLoader from "./TextContentLoader";

const Item = ({
  _id,
  mainImageUrl,
  title,
  discountedPrice,
  price,
  numberInStock,
  discount,
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
    img.src = mainImageUrl;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [mainImageUrl]);

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
              -{discount}%
            </small>
            {isLoading ? (
              <TextContentLoader width="100%" height="100%"></TextContentLoader>
            ) : (
              <img
                src={mainImageUrl}
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
              <p className="text-lg">₦{discountedPrice.toLocaleString("en-US")}</p>
              <p
                className={`${
                  type === "cart" ? "text-xs" : "text-md"
                } text-gray-600 line-through`}
              >
 {price !== discountedPrice ?  `₦${price.toLocaleString("en-US")}`: null}              </p>
            </div>
            <p
              className={`text-xs ${
                numberInStock > 0 ? "text-green-700" : "text-red-700"
              }`}
            >
              {numberInStock > 0 ? "In Stock" : "Out of Stock"}
            </p>
          </div>
        </div>
        <div
          className={`${
            type === "cart" ? "gap-1 items-center lg:flex-col" : "flex-col"
          } hidden lg:flex lg:items-end`}
        >
          <p className="text-lg">₦{discountedPrice.toLocaleString("en-US")}</p>
          <p
            className={`${
              type === "cart" ? "text-xs" : "text-md"
            } text-gray-600 line-through`}
          >
        {price !== discountedPrice ?  `₦${price.toLocaleString("en-US")}`: null}
          </p>
          <small className=" bg-red-50 text-red-400 px-2 mt-2">-{discount}%</small>
        </div>
      </div>

      <div className="flex justify-between mt-3">
        <button
          className="flex items-center"
          onClick={() =>
            type === "cart"
              ? handleRemoveFromCart(_id)
              : handleRemoveFromSaved(_id)
          }
        >
          <FaTrash className="text-red-400" />
          <p className="ml-3 text-red-400">REMOVE</p>
        </button>
        <div className="flex justify-end items-center w-[50%] lg:w-32">
          {type === "cart" ? (
            <>
              <button
                onClick={() => handleDecrement(_id)}
                className={`p-2 shadow-xl rounded-md text-white ${
                  quantity > 1 ? "bg-red-400" : "bg-red-300"
                }`}
              >
                <FaMinus />
              </button>
              <p className="flex justify-center w-full">{quantity}</p>
              <button
                onClick={() => handleIncrement(_id)}
                className="p-2 shadow-xl rounded-md text-white bg-red-400"
              >
                <FaPlus />
              </button>
            </>
          ) : (
            <button
              className="bg-red-400 text-white text-xs py-2 px-3 rounded-sm shadow-xl font-semibold"
              onClick={() => handleAddToCart(_id)}
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
