import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ListItem = ({ link, icon, title }) => {
  return (
    <Link to={`/${link}/`}>
      <li className="list-image-none flex items-center py-2 text-sm justify-between">
        <span className="flex items-center">
          {icon}
          <p className="ml-3 capitalize">{title}</p>
        </span>
        <FaChevronRight className="text-xs" />
      </li>
    </Link>
  );
};

export default ListItem;
