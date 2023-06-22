import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const Item = ({ cart, image, title, price, prevPrice, status, type }) => {
  return (
    <div className="mx-2 bg-white p-1">
      <div className="rounded-sm  flex">
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
          <div className="flex items-center">
            <FaTrash className="text-orange-300" />
            <p className="ml-3 text-orange-400">REMOVE</p>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-md text-white bg-orange-300">
              <FaMinus />
            </button>
            <p className="w-20 flex justify-center">1</p>
            <button className="p-2 rounded-md text-white bg-orange-400">
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
