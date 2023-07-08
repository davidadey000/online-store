import React from "react";
import { useState } from "react";

const ProductFilter = ({ filters, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const handlePriceRangeChange = (event) => {
    const value = event.target.value;
    onFilterChange({ ...filters, priceRange: value });
  };

  const handleColorChange = (event) => {
    const value = event.target.value;
    onFilterChange({ ...filters, color: value });
  };

  const handleSizeChange = (event) => {
    const value = event.target.value;
    onFilterChange({ ...filters, size: value });
  };

  const handleBrandChange = (event) => {
    const value = event.target.value;
    onFilterChange({ ...filters, brand: value });
  };

  return (
    <div>
      <div className={`${isOpen ? "block" : "hidden"} lg:block bg-gray-200 p-4 sm:px-8 lg:p-4`}>
        <h2 className="text-xl font-semibold mb-4">Filter</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="priceRange" className="text-sm font-medium">
              Price Range
            </label>
            <select
              id="priceRange"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={filters.priceRange}
              onChange={handlePriceRangeChange}
            >
              <option value="">All</option>
              <option value="0-500">$0 - $500</option>
              <option value="501-3000">$501 - $3000</option>
              <option value="3001-6000">$3001 - $6000</option>
            </select>
          </div>
          <div>
            <label htmlFor="color" className="text-sm font-medium">
              Color
            </label>
            <select
              id="color"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={filters.color}
              onChange={handleColorChange}
            >
              <option value="">All</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
          <div>
            <label htmlFor="size" className="text-sm font-medium">
              Size
            </label>
            <select
              id="size"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={filters.size}
              onChange={handleSizeChange}
            >
              <option value="">All</option>
              <option value="s">Small</option>
              <option value="m">Medium</option>
              <option value="l">Large</option>
            </select>
          </div>
          <div>
            <label htmlFor="brand" className="text-sm font-medium">
              Brand
            </label>
            <select
              id="brand"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={filters.brand}
              onChange={handleBrandChange}
            >
              <option value="">All</option>
              <option value="nike">Nike</option>
              <option value="adidas">Adidas</option>
              <option value="puma">Puma</option>
            </select>
          </div>
        </div>
      </div>
      <div className=" bg-gray-200 p-3 lg:hidden sm:px-8">
        <button
          className="w-full bg-red-400 text-white font-semibold py-2 rounded-md focus:outline-none"
          onClick={handleToggleFilter}
        >
          {isOpen ? "Close Filter" : "Open Filter"}
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
