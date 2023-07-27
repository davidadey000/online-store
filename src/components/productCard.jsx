import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TextContentLoader } from "./TextContentLoader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProductCard = ({ _id, slug, price, title, mainImageUrl, discountedPrice }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = mainImageUrl;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [mainImageUrl]);

  return (
    <Link className="block" to={`/product/${slug}`}>
      <div className="flex-shrink-0 flex-grow-0 flex-basis-[200px] w-[200px] h-full rounded-md hover:shadow-lg hover:translate-y-1 transition-all duration-300">
        {isLoading ? (
          <TextContentLoader width="100%" height="200px"></TextContentLoader>
        ) : (
          <LazyLoadImage
            src={mainImageUrl}
            alt=""
            threshold={0}
            className="w-full h-[200px] rounded-sm"
          />
        )}
        <div className="product__body ">
          <h6 className="product__text--description">{title}</h6>
          <h4 className="product__text--price font-semibold">
            {/* ₦{discountedPrice} */}
            ₦{discountedPrice}

          </h4>
          <small className="product__text--prev-price">
            {price !== discountedPrice
              ? `₦${price.toLocaleString("en-US")}`
              : null}
          </small>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
