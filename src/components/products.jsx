import { useState, useEffect } from "react";
import ItemCollection from "./itemCollection";
import GroupCollection from "./groupCollection";
import { useMediaQuery } from "react-responsive";
import { categoriesData } from "../mockData/categories";
import { Link } from "react-router-dom";

import "../products.css";
import Categories from "./categories";

const Products = ({ match }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isLaptop = useMediaQuery({ minWidth: 1200 });

  const productCollectionName = match.params.collectionName;
  const products = categoriesData.find(
    (p) => p.collectionName === productCollectionName
  );

  const categories = categoriesData[1];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = isMobile | isLaptop ? 12 : 9;

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

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsOnPage = products.products.slice(startIndex, endIndex);

  return (
    <div className="x">
      <GroupCollection key={categories.collectionName} {...categories} />

      <div className="products__collection-list">
        <div className="products__sidebar">
          <div className="products__sidebar-categories">
            <h5 className="products__sidebar-title--category">CATEGORIES</h5>
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
        </div>
        <div className="products__items-col">
          <ItemCollection
            key={products.collectionName + currentPage}
            type={products.type}
            collectionName={products.collectionName}
            headerColor={products.headerColor}
            products={productsOnPage}
          />
          <div>
            <button
              className="products__prev"
              onClick={handleClickPrev}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <button
              className="products__next"
              onClick={handleClickNext}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="x-footer"></div>
    </div>
  );
};

export default Products;
