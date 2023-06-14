import React from "react";

const HeroCard = ({ image, onHeroCardEnter }) => {
  const handleMouseEnter =  onHeroCardEnter;
  

  return (
    <div className="hero-card" onMouseEnter={handleMouseEnter}>
      <img src={image} alt="" className="hero-card__image" />
    </div>
  );
};

export default HeroCard;
