import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TextContentLoader } from "./TextContentLoader";

const ProductCard = ({ id, price, description, imgUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = imgUrl;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [imgUrl]);

  return (
    <Link className="block" to={`/product/${id}`}>
      <div className="flex-shrink-0 flex-grow-0 flex-basis-[200px] w-[200px] rounded-md hover:shadow-lg hover:translate-y-1 transition-all duration-300">
        {isLoading ? (
          <TextContentLoader width="100%" height="200px"></TextContentLoader>
        ) : (
          <img src={imgUrl} alt="" className="w-full h-[200px] rounded-sm" />
        )}
        <div className="product__body ">
          <h6 className="product__text--description  ">{description}</h6>
          <h4 className="product__text--price font-semibold">{price}</h4>
          <small className="product__text--prev-price">#7,000</small>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
