import { useState, useEffect } from "react";
import ItemCollection from "../components/itemCollection";
import GroupCollection from "../components/groupCollection";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import axios from "axios";
import apiUrl from "../utils/config";
import { toast } from "react-toastify";
import SkeletonLoader from "./../components/SkeletonLoader";
import ObjectNotFound from "../components/ObjectNotFound";
import { collectionData } from "../mockData/collection";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isLaptop = useMediaQuery({ minWidth: 1024 });

  const categories = collectionData[10];

  const { slug } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSimilarProducts = queryParams.get("similarProducts") === "true";
  const isCollection = queryParams.get("collection") === "true";
  const isPriceRange = queryParams.get("priceRange") === "true";
  const [categoryData, setCategoryData] = useState(null);
  const [isCategoryDataLoading, setIsCategoryDataLoading] = useState(true);
  const [categoryDataNotFound, setCategoryDataNotFound] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: "",
    color: "",
    size: "",
    brand: "",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const fetchProductsData = async () => {
    try {
      if (isSimilarProducts) {
        // Fetch similar products based on the product slug
        const productSlug = slug.replace("?similarProducts=true", "");
        const response = await axios.get(
          apiUrl + `products/tags/${productSlug}`
        );
        setCategoryDataNotFound(false);

        setCategoryData(response.data);
        setIsCategoryDataLoading(false);
      } else if (isPriceRange) {
        let productSlug = slug.replace("?priceRange=true", "");
        productSlug = slug.replace("below", "");
        const response = await axios.get(
          apiUrl + `products/price/${productSlug}`
        );
        setCategoryDataNotFound(false);

        setCategoryData(response.data);
        setIsCategoryDataLoading(false);
      } else if (isCollection) {
        // Fetch similar products based on the product slug
        const collectionSlug = slug.replace("?collection=true", "");
        const response = await axios.get(
          apiUrl + `products/collection/${collectionSlug}`
        );
        setCategoryDataNotFound(false);

        setCategoryData(response.data);
        setIsCategoryDataLoading(false);
      } else {
        // Fetch category products based on the category slug
        const response = await axios.get(apiUrl + `products/category/${slug}`);
        setCategoryDataNotFound(false);

        setCategoryData(response.data);
        setIsCategoryDataLoading(false);
      }
    } catch (error) {
      setIsCategoryDataLoading(false);
      if (error.response && error.response.status === 404) {
        // Cart not found
        setCategoryDataNotFound(true);
      } else {
        // Other error occurred
        console.error("Error fetching category data:", error); // Optionally, you can show an error toast message if the request fails
        toast.error("Failed to fetch category data.", {
          autoClose: 1000, // The toast will be displayed for 1 second
          closeOnClick: true,
        });
      }
    }
  };

  useEffect(() => {
    fetchProductsData(); // Pass the function without the parentheses
  }, [slug]);

  const productsPerPage = 6;

  // Before rendering the content, check for data loading and category not found
  if (isCategoryDataLoading) {
    return <SkeletonLoader />;
  }

  if (categoryDataNotFound) {
    return <ObjectNotFound title="Products" />;
  }
  const totalPages = Math.ceil(categoryData.products.length / productsPerPage);

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
  const productsOnPage = categoryData.products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = 3;
    const range = Math.floor(maxPageNumbers / 2);

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

    if (totalPages > 1) {
      // Add this condition to check if totalPages is greater than 1
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handleClickPage(i)}
            className={`text-lg sm:text-lg lg:text-sm ${
              i === currentPage
                ? "text-blue-600 font-semibold"
                : "text-gray-600"
            }`}
          >
            {i}
          </button>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="x flex-grow flex flex-col">
      <GroupCollection key={categories.collectionName} {...categories} />
      <div className="products__collection-list flex flex-col lg:flex-row gap-3 flex-grow">
        <div className="products__sidebar pb-2">
          <div className="products__sidebar-categories sticky top-[60px]">
            <ProductFilter
              filters={filters}
              onFilterChange={handleFilterChange}
            />
            <h5 className="ml-4 font-semibold">CATEGORIES</h5>
            <div>
              {categoryListData.map((item) => (
                <Category {...item} key={item.name} />
              ))}
            </div>
          </div>
        </div>
        <div className="products__items-col  flex-grow flex flex-col items-center">
          <ItemCollection
            key={categoryData.name + currentPage}
            type={categoryData.type}
            collectionName={categoryData.name}
            headerColor={categoryData.headerColor}
            products={productsOnPage}
            filters={filters}
          />
          <div className="flex flex-row gap-3 justify-center items-center sm:justify-start sm:ml-7">
            {currentPage !== 1 && (
              <>
                <button
                  className="text-[15px] lg:text-xs"
                  onClick={handleClickFirst}
                >
                  First
                </button>
                <button onClick={handleClickPrev}>
                  <FaChevronLeft className="text-sm lg:text-[13px] sm:text-md text-gray-600" />
                </button>
              </>
            )}
            {renderPageNumbers()}
            {currentPage !== totalPages && (
              <>
                <button onClick={handleClickNext}>
                  <FaChevronRight className="text-sm lg:text-[13px] sm:text-md text-gray-600" />
                </button>
                <button
                  className="text-[15px] lg:text-xs"
                  onClick={handleClickLast}
                >
                  Last
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 left-0 sm:h-[5%] lg:hidden bg-gray-300">
        {/* <p className="text-xs sm:text-[13px] sm:text-leading-sm leading-xs text-black">
          This website uses cookies. For further information on how we use
          cookies you can read our <a href="">Privacy and Cookie notice.</a>
        </p> */}
        <ProductFilter filters={filters} onFilterChange={handleFilterChange} />
      </div>
    </div>
  );
};

export default Products;
