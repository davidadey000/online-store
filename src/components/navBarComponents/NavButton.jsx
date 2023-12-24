import React from "react";
import { Link } from "react-router-dom";

const NavButton = ({ link, icon, name, handleMenuToggle }) => {
  const className = "flex cmd:flex  mx-4 mb-4 sm:mb-7 cmd:mb-0  cmd:mx-0 flex-row items-center text-gray-500 cmd:text-gray-700 border-none capitalize font-semibold text-[18px] sm:text-2xl cmd:text-[16px] cursor-pointer"
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
