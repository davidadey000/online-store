import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TextContentLoader } from "./TextContentLoader";

const RangeCard = ({ slug, description, imgUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = imgUrl;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [imgUrl]);
  return (
    <Link className="block range" to={`products/${slug}/`}>
      <div className="w-full h-[110px] sm:h-[170px] lg:h-[200px]">
        {isLoading ? (
          <TextContentLoader width="100%" height="100%"></TextContentLoader>
        ) : (
          <img src={imgUrl} alt="" className="w-full h-full" />
        )}
      </div>
      <div className="range__footer">
        <small className="range__text">{description}</small>
      </div>
    </Link>
  );
};

export default RangeCard;
