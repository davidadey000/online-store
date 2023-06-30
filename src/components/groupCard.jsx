import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextContentLoader } from "./TextContentLoader";
import { useEffect } from "react";

const GroupCard = ({ price, description, imgUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = imgUrl;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [imgUrl]);

  return (
    <Link className="group" to={`/products/${description}/`}>
      <div className="w-full h-[90px] lg:h-[130px]">
        {isLoading ? (
          <TextContentLoader width="100%" height="100%"></TextContentLoader>
        ) : (
          <img src={imgUrl} alt="" className="w-full h-full" />
        )}
      </div>
      <div className="group__footer">
        <small className="group__text">{description}</small>
      </div>
    </Link>
  );
};

export default GroupCard;
