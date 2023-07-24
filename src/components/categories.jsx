import { useState, useEffect } from "react";
import { useRef } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Categories = ({ onCategoryHover }) => {
  const [categories, setCategories] = useState([
    "Supermarket",
    "Health & Beauty",
    "Home & Office",
    "Phones & Tablets",
    "Computing",
    "Electronics",
    "Baby Products",
    "Gaming",
    "Sporting Goods",
    "Automobile",
  ]);

  const handleCategoryHover = (category) => {
    onCategoryHover(category);
  };

  const containerRef = useRef(null);

  const handleScrollLeft = () => {
    containerRef.current.scrollLeft -= 600;
  };

  const handleScrollRight = () => {
    containerRef.current.scrollLeft += 600;
  };

  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const handleClickCategory = (event) => {
    if (isSmallScreen) {
      event.preventDefault();
    }
  };

  return (
    <div className="categories relative" id="categories">
      <ul
        className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 scroll-smooth"
        ref={containerRef}
      >
        {categories.map((category, index) => (
          <Link
            to={`products/${category}`}
            key={index}
            onClick={handleClickCategory}
          >
            <li
              className="bg-gray-400 font-semibold text-white lg:text-[13px] text-sm mr-1 px-5 py-2 rounded-full"
              onMouseEnter={() => handleCategoryHover(category)}
            >
              {category}
            </li>
          </Link>
        ))}
      </ul>
      <div
        className="hidden lg:block bg-white rounded-full p-1 top-[25%] absolute  left-1"
        onClick={handleScrollLeft}
      >
        <FaChevronLeft />
      </div>
      <div
        className="hidden lg:block bg-white rounded-full p-1 top-[25%] absolute right-1"
        onClick={handleScrollRight}
      >
        <FaChevronRight />
      </div>
    </div>
  );
};

export default Categories;
