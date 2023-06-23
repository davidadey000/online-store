import { useState, useEffect } from "react";
import ItemCollection from "../components/itemCollection";
import GroupCollection from "../components/groupCollection";
import { useMediaQuery } from "react-responsive";
import { categoriesData } from "../mockData/category";
import { collectionData } from "../mockData/collection";
import { Link } from "react-router-dom";
import React from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

import "../products.css";
import ProductFilter from "../components/ProductFilter";
import Category from "../components/Category";
import { categoryListData } from "../mockData/categoryList";

const Products = ({ match }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isLaptop = useMediaQuery({ minWidth: 1024 });

  const productCollectionName = match.params.collectionName;
  const products = categoriesData.find(
    (p) => p.collectionName === productCollectionName
  );

  const categories = collectionData[10];
  console.log(categories);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = isMobile | isLaptop ? 12 : 9;
  const totalPages = Math.ceil(products.products.length / productsPerPage);

  const [filters, setFilters] = useState({
    priceRange: "",
    color: "",
    size: "",
    brand: "",
  });

  const handleFilterChange = (newFilters) => {
    setCurrentPage(1);
    setFilters(newFilters);
  };

  const handleClickPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClickNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClickPage = (page) => {
    setCurrentPage(page);
  };

  const handleClickFirst = () => {
    setCurrentPage(1);
  };

  const handleClickLast = () => {
    setCurrentPage(totalPages);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const productsOnPage = products.products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = 3; // Maximum number of page numbers to display
    const range = Math.floor(maxPageNumbers / 2); // Number of page numbers on each side of the current page

    let startPage = currentPage - range;
    let endPage = currentPage + range;

    if (startPage <= 0) {
      startPage = 1;
      endPage = startPage + maxPageNumbers - 1;
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = endPage - maxPageNumbers + 1;
      if (startPage <= 0) {
        startPage = 1;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleClickPage(i)}
          className={`text-xl sm:text-lg lg:text-sm ${
            i === currentPage ? "text-blue-600 font-semibold" : "text-gray-600"
          }`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="x">
      <GroupCollection key={categories.collectionName} {...categories} />
      <div className="products__collection-list">
        <div className="products__sidebar">
          <div className="products__sidebar-categories sticky top-[60px]">
            <ProductFilter filters={filters} onFilterChange={handleFilterChange} />
            <h5 className="ml-4 font-semibold">CATEGORIES</h5>
            <div>
              {categoryListData.map((title) => (
                <Category title={title} key={title} />
              ))}
            </div>
          </div>
        </div>
        <div className="products__items-col flex flex-col items-center">
          <ItemCollection
            key={products.collectionName + currentPage}
            type={products.type}
            collectionName={products.collectionName}
            headerColor={products.headerColor}
            products={productsOnPage}
            filters={filters}
          />
          <div className="flex flex-row gap-3 justify-center sm:justify-start sm:ml-7">
            {currentPage !== 1 && (
              <>
                <button className="text-xl" onClick={handleClickFirst}>
                  <FaAngleDoubleLeft className="text-md lg:text-md sm:text-xl text-gray-600" />
                </button>
                <button onClick={handleClickPrev}>
                  <FaChevronLeft className="text-sm lg:text-sm sm:text-md text-gray-600" />
                </button>
              </>
            )}
            {renderPageNumbers()}
            {currentPage !== totalPages && (
              <>
                <button onClick={handleClickNext}>
                  <FaChevronRight className="text-sm lg:text-sm sm:text-md text-gray-600" />
                </button>
                <button className="text-xl" onClick={handleClickLast}>
                  <FaAngleDoubleRight className="text-md sm:text-xl lg:text-md text-gray-600" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 left-0 h-[6.5%] sm:h-[5%] lg:hidden bg-gray-300">
        <small className="leading-3 text-black">
          This website uses cookies. For further information on how we use
          cookies you can read our <a href="">Privacy and Cookie notice.</a>
        </small>
      </div>
    </div>
  );
};

export default Products;
