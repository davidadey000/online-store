import React from "react";
import { FaArrowLeft } from 'react-icons/fa';

const AlternativeNavbar = ({ handleGoBack }) => {
  return (
    <div className="p-3">
      <button className="" onClick={handleGoBack}>
        <FaArrowLeft />
      </button>
    </div>
  );
};

export default AlternativeNavbar;
