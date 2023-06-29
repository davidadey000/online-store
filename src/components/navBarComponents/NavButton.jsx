import React from "react";
import { Link } from "react-router-dom";

const NavButton = ({ link, icon, name, handleMenuToggle }) => {
  return link ? (
    <Link
      to={`/${link}/`}
      onClick={handleMenuToggle}
      className="flex lg:flex mx-4 lg:mx-0 flex-row items-center text-gray-700 border-none capitalize "
    >
      {icon}
      {name}
    </Link>
  ) : (
    <div
      onClick={handleMenuToggle}
      className="flex lg:flex mx-4 lg:mx-0 flex-row items-center text-gray-700 border-none capitalize font-semibold"
    >
      {icon}
      {name}
    </div>
  );
};

export default NavButton;
