import { Link } from "react-router-dom";

const ProductCard = ({ id, price, description, imgUrl }) => {
  return (
    <div className="flex-shrink-0 flex-grow-0 flex-basis-[200px] w-[200px] rounded-md hover:shadow-lg hover:translate-y-2 transition-all duration-700">
      <Link to={`/product/${id}`} className="w-full block">
        <img src={imgUrl} alt="" className="w-full rounded-sm" />
        <div className="product__body ">
          <h6 className="product__text--description  ">{description}</h6>
          <h4 className="product__text--price font-semibold">{price}</h4>
          <small className="product__text--prev-price">#7,000</small>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
