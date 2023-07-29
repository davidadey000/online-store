import React from "react";
import { Link } from "react-router-dom";

const OrderItem = ({ productId, title, _id, status, createdAt }) => {
  // Convert the createdAt string to a Date object
  const dateObject = new Date(createdAt);
  // Format the date and time as a string
  const formattedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = dateObject.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <Link to={`/product/${productId.slug}`}>
      <div className="bg-white p-2 rounded-sm flex gap-2">
        <div className={`max-w-[27%] relative max-h-[90px] sm:w-[100px]`}>
          <img
            src={productId.mainImageUrl}
            alt="Product Image"
            className="h-full rounded-sm"
          />
        </div>
        <div className="w-70 flex flex-col gap-[1px]">
          <p className="text-xs font-semibold text-gray-800">{title}</p>
          <p className="text-xs font-semibold text-gray-500">Order {_id}</p>
          {productId.additionalAttributes.size ? (
            <span className="text-xs font-semibold text-gray-800 flex items-center gap-1 capitalize">
              <p className="text-gray-500">Size:</p>{" "}
              {productId.additionalAttributes.size}
            </span>
          ) : (
            <span className="h-2" />
          )}
          <span
            className={`text-[9px] font-semibold px-1 py-[2px] w-min rounded-sm ${
              status === "pending"
                ? "bg-yellow-500"
                : status === "delivered"
                ? "bg-green-600"
                : "bg-red-400"
            } uppercase text-white mt-1`}
          >
            {status}
          </span>

          {/* Display the formatted date and time */}
          <p className="text-xs font-semibold text-gray-800">
            On {formattedDate} at {formattedTime}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default OrderItem;
