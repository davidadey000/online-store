import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ItemCard = ({ id, price, title, image, handleAddToCart }) => {
  const handleAddToCartClick = (event) => {
    event.preventDefault();
    handleAddToCart(id);
  };

  return (
    <Link className="block item__link" to={`/product/${id}`}>
      <div className="item">
        <img src={image} alt="" className="item__image" />
        <div className="item__body">
          <h6 className="item__text--description">{title}</h6>
          <h4 className="item__text--price font-semibold">₦{price}</h4>
          <small className="item__text--prev-price">#7,000</small>

          <small className="">-50%</small>
          <div
            className="item__footer"
            style={{ backgroundColor: "white" }}
          >
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
