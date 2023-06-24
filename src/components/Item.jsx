import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

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
  return (
    <div
      className={`${
        type === "cart" ? "mx-2 mb-1" : "mx-1 mb-2 shadow-sm"
      }  bg-white p-2 rounded-sm`}
    >
      <div className="rounded-sm flex gap-2">
        <div className={`max-w-[31%] relative w-full  h-100`}>
          <small className="absolute right-0 bg-red-50 text-red-400 px-2">
            -70%
          </small>
          <img src={image} alt="Product Image" className="h-full"></img>
        </div>
        <div className="w-70 flex flex-col gap-[1px]">
          <p
            className={`${type === "cart" ? "text-xs" : "text-sm"}  leading-4`}
          >
            {title}
          </p>
          <div
            className={`${
              type === "cart" ? "gap-1 items-center" : "flex-col"
            } flex`}
          >
            <p className="text-lg">{price}</p>
            <p
              className={`${
                type === "cart" ? "text-xs" : "text-md"
              } text-gray-600 line-through`}
            >
              {prevPrice}
            </p>
          </div>
          <p className="text-xs text-gray-600">{status}</p>
        </div>
      </div>

      <div className="flex justify-between mt-3">
        <button
          className="flex items-center"
          onClick={() => handleRemoveFromCart(id)}
        >
          <FaTrash className="text-red-400" />
          <p className="ml-3 text-red-400">REMOVE</p>
        </button>
        <div className="flex items-center">
          {type === "cart" ? (
            <>
              <button
                onClick={() => handleDecrement(id)}
                className={`p-2 rounded-md text-white ${
                  quantity ? "bg-red-400" : "bg-red-300"
                }`}
              >
                <FaMinus />
              </button>
              <p className="w-20 flex justify-center">{quantity}</p>
              <button
                onClick={() => handleIncrement(id)}
                className="p-2 rounded-md text-white bg-red-400"
              >
                <FaPlus />
              </button>
            </>
          ) : (
            <button
              className="bg-red-400 text-white text-xs py-2 px-3 rounded-sm shadow-xl font-semibold"
              onClick={handleAddToCart}
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
