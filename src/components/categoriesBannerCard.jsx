import { Link } from "react-router-dom";

const CategoriesBannerdiv = ({ title, items }) => {
  return (
    <div className="banner-card" border="light">
      <Link to={`products/${title}`}>
        <h5 className="banner-card__header  uppercase font-bold text-sm">{title}</h5>
      </Link>
      <hr />
      <div className="banner-card__body">
        {items.map((item, index) => (
          <Link to={`products/${item}`}>
            <p className="banner-card__link hover:font-semibold" key={index}>
              {item}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesBannerdiv;
