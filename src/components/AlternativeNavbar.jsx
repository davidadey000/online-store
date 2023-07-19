import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const AlternativeNavbar = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-3 pt-4 bg-white sticky top-0 w-full  z-40">
      <button className="flex items-center text-black text-xl p-1" onClick={handleGoBack}>
        <HiArrowLeft className="mr-2 lg:text-2xl" />
      
      </button>
    </div>
  );
};

export default AlternativeNavbar;
