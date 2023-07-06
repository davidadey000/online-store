import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = ({ searchResults,  handleProductClick }) => {
 
  return (
    <div className="h-screen w-full rounded-b-md bg-white absolute top-full left-0 p-3 sm:px-5 lg:h-min lg:max-h-96 flex flex-col gap-3 overflow-y-scroll  scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 shadow-md
    z-20
    " >
      {searchResults && searchResults.map((product) => (
        <Link key={product.id} 
        id="search-result-link" className="flex items-center gap-2" to={`/product/${product.id}`} onClick={handleProductClick} >
          <img src={product.image} alt={product.title} className="w-12 text-xs"/>
          <div className="flex flex-col">
            <h3 className="text-sm">{product.title || product.description}</h3>
            <p className="font-semibold">₦{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
