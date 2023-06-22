const CategoriesBannerdiv = ({ title, items }) => {
  return (
    <div className="banner-card" border="light">
      <h5 className="banner-card__header font-bold text-sm">{title}</h5>
      <hr />
      <div className="banner-card__body">
        {items.map((item, index) => (
          <a className="banner-card__link hover:font-semibold" key={index} href={`/${item}`}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoriesBannerdiv;