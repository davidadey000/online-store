// import { useState, useEffect } from "react";

// const Categories = ({ onCategoryHover }) => {
//   // const [listItemHeight, setListItemHeight] = useState(null);

//   // const handleCategoryHover = (category) => {
//   //   if (onCategoryHover) {
//   //     onCategoryHover(category);
//   //   }
//   // };

//   // useEffect(() => {
//   //   const listGroup = document.querySelector("#category-list");
//   //   const listGroupHeight = listGroup.getBoundingClientRect().height;
//   //   const listItemHeightPercentage = 100 / listGroup.children.length;
//   //   const listItemHeight = (listGroupHeight * listItemHeightPercentage) / 100;
//   //   setListItemHeight(listItemHeight);
//   // }, []);

//   return (
//     // <div

//     //   className="my-category"
//     //   id="category-list"
//     // >
//     //   <a className="my-category-item"
//     //     as="li"
//     //
//     //     onMouseEnter={() => handleCategoryHover("Supermarket")}
//     //   >
//     //     Supermarket
//     //   </a>
//     //   <a className="my-category-item"
//     //     as="li"
//     //
//     //     onMouseEnter={() => handleCategoryHover("Health & Beauty")}
//     //   >
//     //     Health & Beauty
//     //   </a>
//     //   <a className="my-category-item"
//     //     as="li"
//     //
//     //     onMouseEnter={() => handleCategoryHover("Home & Office")}
//     //   >
//     //     Home & Office
//     //   </a>
//     //   <a className="my-category-item"
//     //     as="li"
//     //
//     //     onMouseEnter={() => handleCategoryHover("Phones & Tablets")}
//     //   >
//     //     Phones & Tablets
//     //   </a>
//     //   <a className="my-category-item"
//     //     as="li"
//     //
//     //     onMouseEnter={() => handleCategoryHover("Computing")}
//     //   >
//     //     Computing
//     //   </a>
//     //   <a className="my-category-item"
//     //     as="li"
//     //
//     //     onMouseEnter={() => handleCategoryHover("Electronics")}
//     //   >
//     //     Electronics
//     //   </a>
//     //   <a className="my-category-item" as="li" >
//     //     Fashion
//     //   </a>
//     //   <a className="my-category-item" as="li" >
//     //     Baby Products
//     //   </a>
//     //   <a className="my-category-item" as="li" >
//     //     Gaming
//     //   </a>
//     //   <a className="my-category-item" as="li" >
//     //     Sporting Goods
//     //   </a>
//     //   <a className="my-category-item" as="li" >
//     //     Automobile
//     //   </a>
//     //   <a className="my-category-item" as="li"  disabled>
//     //     Other Categories
//     //   </a>
//     // </div>
//     <div class="categories">
//       <ul>
//         <li className="category">Supermarket</li>
//         <li className="category">Health & Beauty</li>
//         <li className="category">Home & Office</li>
//         <li className="category">Phones & Tablets</li>
//         <li className="category">Computing</li>
//         <li className="category">Electronics</li>
//         <li className="category">Baby Products</li>
//         <li className="category">Gaming</li>
//         <li className="category">Sporting Goods</li>
//         <li className="category" disabled>
//           Automobile
//         </li>
//       </ul>
//     </div>

//   );
// };

// export default Categories;

import { useState, useEffect } from "react";
import { useRef } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

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

  return (
    <div className="categories relative" id="categories">
      <ul className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 scroll-smooth" ref={containerRef}>
        {categories.map((category, index) => (
          <li
            key={index}
            className="bg-gray-400 font-semibold text-white lg:text-[13px] text-sm mr-1 px-5 py-2 rounded-full"
            onMouseEnter={() => handleCategoryHover(category)}
          >
            {category}
          </li>
        ))}
      </ul>
      <div
        className="top-[35%] absolute scroll-arrow-left"
        onClick={handleScrollLeft}
      >
        <FaChevronLeft />
      </div>
      <div
        className="top-[35%] absolute scroll-arrow-right"
        onClick={handleScrollRight}
      >
        <FaChevronRight />
      </div>
    </div>
  );
};

export default Categories;
