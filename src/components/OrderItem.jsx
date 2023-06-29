import React from "react";

const OrderItem = ({ image, title, id, size, status, date }) => (
  <div className="bg-white p-2 rounded-sm flex gap-2">
    <div className={`max-w-[27%] relative w-full  h-100`}>
      <img src={image} alt="Product Image" className="h-full rounded-sm"></img>
    </div>
    <div className="w-70 flex flex-col gap-[1px]">
      <p className="text-xs font-semibold text-gray-800">{title}</p>
      <p className="text-xs font-semibold text-gray-500">Order {id}</p>
      {size ? (
        <span className="text-xs font-semibold text-gray-800  flex items-center gap-1">
          <p className="text-gray-500">Size:</p> {size}
        </span>
      ) : (
        <br />
      )}
      <span className="text-[9px] font-semibold px-1 py-[2px] w-min rounded-sm bg-green-600  uppercase text-white mt-1">
        {status}
      </span>
      <p className="text-xs font-semibold text-gray-800">On {date}</p>
    </div>
  </div>
);

export default OrderItem;
