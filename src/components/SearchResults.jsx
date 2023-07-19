import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import TextContentLoader from "./TextContentLoader";

const SearchResults = ({ searchResults, handleProductClick }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImage = async (image) => {
      const img = new Image();
      img.src = image;
      await img.decode();
      setIsLoading(false);
    };

    searchResults.forEach((product) => {
      loadImage(product.image);
    });
  }, [searchResults]);

  return (
    <div
      className="h-screen w-full rounded-b-md bg-white absolute top-full left-0 p-3 sm:px-5 lg:h-min lg:max-h-96 flex flex-col gap-3 overflow-y-scroll  scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 shadow-md
    z-20
    "
    >
      {searchResults &&
        searchResults.map((product) => (
          <Link
            key={product.id}
            id="search-result-link"
            className="flex items-center gap-2 flex-grow"
            to={`/product/${product.id}`}
            onClick={handleProductClick}
          >
            <div className="w-12 text-xs h-full">
              {isLoading ? (
                <TextContentLoader
                  width="100%"
                  height="100%"
                ></TextContentLoader>
              ) : (
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full"
                />
              )}
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm">
                {product.title || product.description}
              </h3>
              <p className="font-semibold">₦{product.price}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default SearchResults;
