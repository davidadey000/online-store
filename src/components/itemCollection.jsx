import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, CardGroup } from "react-bootstrap";
import ItemCard from "./itemCard";
import RangeCard from "./rangeCard";
import GroupCard from "./groupCard";
import SlideShow from "./slideShow";
import { useState, useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ItemCollection = ({
  type,
  slideImages,
  collectionName,
  products,
  groups,
  headerColor,
  textColor,
}) => {
  const [value, setValue] = useState(0);
  const containerRef = useRef(null);

  const handleScrollLeft = () => {
    containerRef.current.scrollLeft -= 600;
  };

  const handleScrollRight = () => {
    containerRef.current.scrollLeft += 600;
  };

  return (
    <div className="items">
      <div className="items__header p-2">
        <h4 className="items__text--title">{collectionName}</h4>
      </div>
      <div className="items__body" ref={containerRef}>
        {products.slice(0, 12).map((deal, index) => {
          return <ItemCard key={index} {...deal} />;
        })}
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

export default ItemCollection;
