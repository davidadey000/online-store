import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ListItem = ({ link, icon, title }) => {
  return (
    <Link to={`/${link}`}>
      <li className="list-image-none flex items-center p-3 sm:py-3 text-sm justify-between lg:hover:bg-red-300">
        <span className="flex items-center">
          <p className="text-lg">{icon}</p>
          <p className="ml-3 capitalize text-[14.5px]">{title}</p>
        </span>
        <FaChevronRight className="text-xs lg:hidden" />
      </li>
    </Link>
  );
};

export default ListItem;
