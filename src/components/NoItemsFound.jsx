import React from "react";
import { Link } from "react-router-dom";

const NoItemsFound = ({title}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h2 className="text-3xl font-semibold mb-4">No items found</h2>
      <p className="text-gray-500 text-lg mb-6">
        Your {title} is empty.
      </p>
      <Link
        to="/"
        className="text-red-400 underline hover:text-red-500 text-lg"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default NoItemsFound;
