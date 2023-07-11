import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 p-4 rounded">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleAccordion}>
        <h2 className="text-lg font-semibold">{question}</h2>
        <svg
          className={`w-6 h-6 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            className="fill-current text-gray-500"
            d="M7 10l5 5 5-5z"
          />
        </svg>
      </div>
      {isOpen && <p className="mt-4 text-gray-600">{answer}</p>}
    </div>
  );
};

export default FaqItem;
