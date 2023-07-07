import React from "react";
import { Link } from "react-router-dom";

const NavButton = ({ link, icon, name, handleMenuToggle }) => {
  const className = "flex lg:flex  mx-4 mb-4 lg:mb-0  lg:mx-0 flex-row items-center text-gray-500 lg:text-gray-700 border-none capitalize font-semibold  sm:text-2xl"
  return link ? (
    <Link
      to={`/${link}/`}
      // onClick={handleMenuToggle}
      className={className}
    >
      {icon}
      {name}
    </Link>
  ) : (
    <div    
      onClick={handleMenuToggle}
      className={className}
    >
      {icon}
      {name}
    </div>
  );
};

export default NavButton;
