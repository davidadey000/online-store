import React from "react";
import { Link } from 'react-router-dom';

const Category = ({ title }) => {
  return (
    <Link to={`/products/${title}`}>
      <p className="products__sidebar-category">{title}</p>
    </Link>
  );
};

export default Category;
