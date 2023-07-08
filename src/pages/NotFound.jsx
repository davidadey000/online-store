import React from "react";

import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex-grow flex flex-col items-center justify-center min-h-full bg-gray-100  lg:h-96">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-2xl text-gray-600">Page not found</p>
      <p className="text-lg text-gray-600">
        The requested page does not exist.
      </p>
      <button
        onClick={handleGoBack}
        className="mt-8 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
