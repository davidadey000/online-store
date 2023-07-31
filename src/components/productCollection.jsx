import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, CardGroup } from "react-bootstrap";
import ProductCard from "./productCard";
import RangeCard from "./rangeCard";
import GroupCard from "./groupCard";
import SlideShow from "./slideShow";
import { useState, useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import EmptyCollectionBody from "./EmptyCollectionBody";

const ProductCollection = ({
  type,
  slideImages,
  use,
  collectionName,
  products,
  groups,
  similarProducts,
  slug,
  headerColor,
  textColor,
}) => {
  // console.log(slug)
  const [value, setValue] = useState(0);
  const containerRef = useRef(null);

  const handleScrollLeft = () => {
    containerRef.current.scrollLeft -= 600;
  };

  const handleScrollRight = () => {
    containerRef.current.scrollLeft += 600;
  };

  return (
    <div className="products lg:shadow-sm">
      <div
        className={`products__header ${
          use === "detail"
            ? "bg-white text-black"
            : "rounded-t-md bg-gray-800 text-white"
        } px-3 py-2`}
      >
        <h4 className="products__text--title">{collectionName}</h4>
        {use === "detail" ? (
          " "
        ) : (
          <Link
            className="block products__all-link"
            to={`/products/${slug}${similarProducts ? `?similarProducts=${similarProducts}`: ""}`}
          >
            <h5 className="products__text--option">SEE ALL</h5>
          </Link>
        )}
      </div>
      <div className="flex overflow-x-auto bg-white p-3 scroll-smooth products__body gap-1" ref={containerRef}>
        {/* Conditionally render the collection body */}
        {products && products.length > 0 ? (
          products.slice(0, 12).map((deal, index) => (
            <ProductCard key={index} {...deal} />
          ))
        ) : (
          <EmptyCollectionBody />
        )}
      </div>
      <div
        className="scroll-arrow scroll-arrow-left"
        onClick={handleScrollLeft}
      >
        <FaArrowLeft />
      </div>
      <div
        className="scroll-arrow scroll-arrow-right"
        onClick={handleScrollRight}
      >
        <FaArrowRight />
      </div>
    </div>
  );
};

export default ProductCollection;
