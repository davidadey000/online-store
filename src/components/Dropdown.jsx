import React, { useState } from 'react';

const Dropdown = ({ handleOptionSelect, quantity, numberInStock }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setSelectedOption(value);
    handleOptionSelect(value);
    setIsOpen(false);
  };

  // Generate an array of numbers from 0 to numberInStock
  const options = Array.from({ length: numberInStock + 1 }, (_, index) => index);

  return (
    <div className="relative">
      <button
        className="text-left px-3 border border-gray-300 rounded-xl bg-white focus:outline-none"
        onClick={toggleDropdown}
      >
        {selectedOption ? selectedOption : quantity}
      </button>
      {isOpen && (
        <div className="absolute z-10 px-2 mt-2 h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 bg-white border border-gray-300 rounded-sm shadow-lg">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
