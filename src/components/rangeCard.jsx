import { Link } from "react-router-dom";

const RangeCard = ({slug, description, imgUrl }) => {
  return (
    
    <Link to={`products/${slug}/`}>
      <div className="range">
        <img src={imgUrl} alt="" className="range__image" />
        <div className="range__footer">
          <small className="range__text">{description}</small>
        </div>
      </div>
    </Link>
  );
};

export default RangeCard;