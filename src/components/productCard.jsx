import { Link } from "react-router-dom";

const ProductCard = ({id, price, description, imgUrl }) => {
  return (

    
    <Link to={`/product/${id}`} className="product__link">
      <div className="product">
        <img src={imgUrl} alt="" className="product__image" />
        <div className="product__body">
          <h6 className="product__text--description">{description}</h6>
          <h4 className="product__text--price">{price}</h4>
          <small className="product__text--prev-price">#7,000</small>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
