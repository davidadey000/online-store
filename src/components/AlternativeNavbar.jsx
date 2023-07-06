import React from "react";
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const AlternativeNavbar = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-3 pt-4 bg-white sticky top-0 w-full  z-40">
      <button className="flex items-center text-black text-xl lg:hidden p-1" onClick={handleGoBack}>
        <FaArrowLeft className="mr-2" />
      </button>
    </div>
  );
};

export default AlternativeNavbar;
