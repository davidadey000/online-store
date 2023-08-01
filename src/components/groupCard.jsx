import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextContentLoader } from "./TextContentLoader";
import { useEffect } from "react";

const GroupCard = ({ price, name, slug, imageUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [imageUrl]);

  return (
    <Link className="group" to={`/products/${slug}/`}>
      <div className="w-full h-[90px] lg:h-[130px]">
        {isLoading ? (
          <TextContentLoader width="100%" height="100%"></TextContentLoader>
        ) : (
          <img src={imageUrl} alt="" className="w-full h-full" />
        )}
      </div>
      <div className="group__footer">
        <small className="group__text font-semibold text-gray-600">{name}</small>
      </div>
    </Link>
  );
};

export default GroupCard;
