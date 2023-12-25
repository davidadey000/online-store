import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import TextContentLoader from "./TextContentLoader";

const SearchResults = ({ searchResults, handleProductClick }) => {
  const [isLoading, setIsLoading] = useState(true);
  const contentRef = useRef(null);
  console.log("In search results:", searchResults)

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

    // Measure the height of the content wrapper element
    if (contentRef.current) {
      const contentHeight = contentRef.current.clientHeight;
      // Set the height of the content loader based on the measured height
      // Adding 2px extra to account for any padding/margin
      contentRef.current.style.height = `${contentHeight + 2}px`;
    }
  }, [searchResults]);
// Check if searchResults is empty
if (!searchResults || searchResults.length === 0) {
  return null; // Render nothing if searchResults is empty
}
  return (
    <div
      ref={contentRef} // Assign the ref to the content wrapper element
      className="h-screen w-full rounded-b-md bg-white absolute top-full left-0 p-3 sm:px-5 lg:h-min lg:max-h-96 flex flex-col gap-3 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 shadow-md z-20"
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
