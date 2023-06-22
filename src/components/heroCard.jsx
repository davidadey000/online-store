import React from "react";
import { Link } from "react-router-dom";

const HeroCard = ({ image, onHeroCardEnter }) => {
  const handleMouseEnter = onHeroCardEnter;

  return (
    <Link className="h-full w-[48%] hero-card" to="/products/special" onMouseEnter={handleMouseEnter}>
        <img src={image} alt="" className="hero-card__image" />
     
    </Link>
  );
};

export default HeroCard;
