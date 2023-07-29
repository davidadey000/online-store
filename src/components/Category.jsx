import React from "react";
import { Link } from "react-router-dom";

const Category = ({name, slug }) => {
  return (
    <Link className="block" to={`/products/${slug}/`}>
      <p className="products__sidebar-category">{name}</p>
    </Link>
  );
};

export default Category;
