import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const Item = ({
  id,
  cart,
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
}) => {
  return (
    <div className="mx-2 mb-1 bg-white p-1">
      <div className="rounded-sm flex gap-1">
        <div className="relative w-full max-w-[30%] h-100">
          <small className="absolute right-0 bg-orange-50 text-orange-400 px-2">
            -70%
          </small>
          <img src={image} alt="Product Image" className=""></img>
        </div>
        <div className="w-70 flex flex-col gap-[1px]">
          <p className="text-xs leading-4">{title}</p>
          <div className="flex items-center gap-1">
            <p className="text-lg">{price}</p>
            <small className="text-gray-600 line-through">{prevPrice}</small>
          </div>
          <p className="text-xs text-gray-600">{status}</p>
        </div>
      </div>
      {type === "cart" ? (
        <div className="flex justify-between mt-3">
          <button
            className="flex items-center"
            onClick={() => handleRemoveFromCart(id)}
          >
            <FaTrash className="text-orange-300" />
            <p className="ml-3 text-orange-400">REMOVE</p>
          </button>
          <div className="flex items-center">
            <button
              onClick={() => handleDecrement(id)}
              className={`p-2 rounded-md text-white ${
                quantity ? "bg-orange-400" : "bg-orange-300"
              }`}
            >
              <FaMinus />
            </button>
            <p className="w-20 flex justify-center">{quantity}</p>
            <button
              onClick={() => handleIncrement(id)}
              className="p-2 rounded-md text-white bg-orange-400"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Item;
