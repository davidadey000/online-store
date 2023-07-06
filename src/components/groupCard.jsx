import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextContentLoader } from "./TextContentLoader";
import { useEffect } from "react";

const GroupCard = ({ price, title, image }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [image]);

  return (
    <Link className="group" to={`/products/${title}/`}>
      <div className="w-full h-[90px] lg:h-[130px]">
        {isLoading ? (
          <TextContentLoader width="100%" height="100%"></TextContentLoader>
        ) : (
          <img src={image} alt="" className="w-full h-full" />
        )}
      </div>
      <div className="group__footer">
        <small className="group__text">{title}</small>
      </div>
    </Link>
  );
};

export default GroupCard;
