import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextContentLoader from "./TextContentLoader";
import { useMediaQuery } from "react-responsive";

const HeroCard = ({ image, onHeroCardEnter }) => {
  const handleMouseEnter = onHeroCardEnter;
  const [isLoading, setIsLoading] = useState(true);

  const isLaptop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    const loadImage = () => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        setIsLoading(false);
      };
    };

    loadImage();
  }, [image]);

  return (
    // <Link

    //   to="/products/special"
    //   onMouseEnter={handleMouseEnter}
    // >
    <div className="sm:w-full sm:h-[48%]">
      <img src={image} alt="" className="w-full h-full" 
      onMouseEnter={handleMouseEnter}/>
      {/* <TextContentLoader width="100%" height="100%" /> */}
    </div>
    // </Link>
  );
};

export default HeroCard;
