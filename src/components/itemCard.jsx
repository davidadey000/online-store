import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import TextContentLoader from "./TextContentLoader";
import { useEffect } from "react";
import { useState } from "react";

const ItemCard = ({ id, slug, discountedPrice, discount, price, title, mainImageUrl, handleAddToCart }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = mainImageUrl;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [mainImageUrl]);

  const handleAddToCartClick = (event) => {
    event.preventDefault();
    handleAddToCart(id);
  };

  return (
    <Link className="block item__link" to={`/product/${slug}`}>
      <div className="item h-full flex flex-col">
        <div className="h-[150px] sm:h-[200px]">
          {isLoading ? (
            <TextContentLoader width="100%" height="100%"></TextContentLoader>
          ) : (
            <img src={mainImageUrl} alt="" className="item__image" />
          )}
        </div>
        <div className="item__body  flex-grow flex flex-col">
          <h6 className="item__text--description">{title}</h6>
          <h4 className="item__text--price font-semibold">₦{discountedPrice.toLocaleString("en-US")}</h4>
          <small className="item__text--prev-price">₦{price.toLocaleString("en-US")}</small>

          <small className="">-{discount}%</small>
          <div className="item__footer mt-auto" style={{ backgroundColor: "white" }}>
            <Button className="item__footer-btn" onClick={handleAddToCartClick}>
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
