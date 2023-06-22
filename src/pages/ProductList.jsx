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
import Categories from "../components/categories";
import ProductFilter from "../components/ProductFilter";

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
  const productsPerPage = isMobile | isLaptop ? 3 : 9;
  const totalPages = Math.ceil(products.products.length / productsPerPage);

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
          className={`text-sm ${
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
          <div className="products__sidebar-categories">
            <h5 className="ml-4 font-semibold">CATEGORIES</h5>
            <div>
              <Link to="products/computing">
                <p className="products__sidebar-category">Computing</p>
              </Link>
              <Link to="products/electronics">
                <p className="products__sidebar-category">Electronics</p>
              </Link>
              <Link to="products/sporting-goods">
                <p className="products__sidebar-category">Sporting Goods</p>
              </Link>
              <Link to="products/phonesandtablets">
                <p className="products__sidebar-category">Phones & Tablets</p>
              </Link>
              <Link to="products/pet-supplies">
                <p className="products__sidebar-category">Pet Supplies</p>
              </Link>
              <Link to="products/homeandoffice">
                <p className="products__sidebar-category">Home & Office</p>
              </Link>
              <Link to="products/gaming">
                <p className="products__sidebar-category">Gaming</p>
              </Link>
              <Link to="products/fashion">
                <p className="products__sidebar-category">Fashion</p>
              </Link>
              <Link to="products/toysandgames">
                <p className="products__sidebar-category">Toys & Games</p>
              </Link>
              <Link to="products/automobiles">
                <p className="products__sidebar-category">Automobiles</p>
              </Link>
            </div>
          </div>
          <ProductFilter />
        </div>
        <div className="products__items-col">
          <ItemCollection
            key={products.collectionName + currentPage}
            type={products.type}
            collectionName={products.collectionName}
            headerColor={products.headerColor}
            products={productsOnPage}
          />
          <div className="flex flex-row gap-3">
            {currentPage !== 1 && (
              <>
                <button className="text-xl" onClick={handleClickFirst}>
                  <FaAngleDoubleLeft className="text-md text-gray-600" />
                </button>
                <button onClick={handleClickPrev}>
                  <FaChevronLeft className="text-sm text-gray-600" />
                </button>
              </>
            )}
            {renderPageNumbers()}
            {currentPage !== totalPages && (
              <>
                <button onClick={handleClickNext}>
                  <FaChevronRight className="text-sm text-gray-600" />
                </button>
                <button className="text-xl" onClick={handleClickLast}>
                  <FaAngleDoubleRight className="text-md text-gray-600" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="x-footer"></div>
    </div>
  );
};

export default Products;
