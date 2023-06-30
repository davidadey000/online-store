import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Col, Row, ProgressBar, Button } from "react-bootstrap";

const ItemCard = ({ id, price, description, imgUrl }) => {
  const now = 60;
  return (
    <Link className="block item__link" to={`/product/${id}`}>
      <div className="item">
        <img src={imgUrl} alt="" className="item__image" />
        <div className="item__body">
          <h6 className="item__text--description">{description}</h6>
          <h4 className="item__text--price font-semibold">₦{price}</h4>
          <small className="item__text--prev-price">#7,000</small>

          <small className="">-50%</small>
          {/* <small className="">JUMIA EXPRESS</small>
          <small className="">Sponsored</small> */}
          <div className="item__footer" style={{ backgroundColor: "white" }}>
            <Button className="item__footer-btn">ADD TO CART</Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
