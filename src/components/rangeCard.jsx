import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TextContentLoader } from "./TextContentLoader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const RangeCard = ({ slug, title, image }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [image]);
  return (
    <Link className="block range" to={`products/${slug}/`}>
      <div className="w-full h-[110px] sm:h-[170px] lg:h-[200px]">
        {isLoading ? (
          <TextContentLoader width="100%" height="100%"></TextContentLoader>
        ) : (
          <LazyLoadImage
            threshold={0}
            src={image}
            alt=""
            className="w-full h-full"
          />
        )}
      </div>
      <div className="range__footer">
        <small className="range__text">{title}</small>
      </div>
    </Link>
  );
};

export default RangeCard;
