import React from "react";
import { FaCreditCard } from "react-icons/fa";
import { Link } from "react-router-dom";

const AccountCard = ({
  title,
  content,
  heading,
  email,
  balance,
  address,
  wallet,
  linkAddress,
  link,
}) => {
  return (
    <div className="border-[1px] border-gray-300 rounded-md">
      <header className="border-b-[1px]  border-gray-300 p-4">
        <p className="uppercase font-semibold text-sm">{title}</p>
      </header>
      <div className="p-4 flex flex-col gap-2">
        {balance && <div>{balance}</div>}
        {heading && <div className="capitalize  text-gray-700">{heading}</div>}
        <div className="text-gray-600 text-sm">{email || address}</div>
        {linkAddress && <Link to={`/${linkAddress}`}>
          <div className="uppercase font-semibold text-red-400 text-sm">
            {link}
          </div>
        </Link>}
        {wallet && (
          <div className="flex gap-2 text-blue-800 font-semibold items-center">
            <FaCreditCard /> ₦{wallet}
          </div>
        )}
        {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
        iusto eveniet incidunt? Magnam saepe odit explicabo perferendis labore
        repellat eaque laborum. Et dolores dolorum ad non aut officiis est
        totam. */}
      </div>
    </div>
  );
};

export default AccountCard;
