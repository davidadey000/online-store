import React from "react";
import { FaChevronRight } from "react-icons/fa";

const ListItem = ({ icon, title }) => {
  return (
    <li className="list-image-none flex items-center py-2 text-sm justify-between">
      <span className="flex items-center">
        {icon}
        <p className="ml-3 capitalize">{title}</p>
      </span>
      <FaChevronRight className="text-xs" />
    </li>
  );
};

export default ListItem;
