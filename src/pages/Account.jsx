import React from "react";
import { FaTrash } from "react-icons/fa";
import Title from "./../components/Title";
import ListItem from "./../components/ListItem";
import { Link } from 'react-router-dom';

const Account = () => {
  const name = "David";
  const email = "davidadey000@gmail.com";
  const amount = "0.00";
  const options1 = [
    { icon: <FaTrash />, link: "orders", title: "Orders" },
    { icon: <FaTrash />, link: "inbox", title: "Inbox" },
    { icon: <FaTrash />, link: "pending reviews", title: "Pending Reviews" },
    { icon: <FaTrash />, link: "voucher", title: "Vouchers" },
    { icon: <FaTrash />, link: "saved", title: "Saved Items" },
    { icon: <FaTrash />, link: "recently viewed", title: "Recently Viewed" },
  ];
  const options2 = [
    { title: "Account Management" },
    { title: "Address Book" },
    {title: "Newsletter"},
    { title: "Close Account" },
  ];
  return (
    <>
      <div className="p-4 bg-red-400">
        <p className="text-white font-semibold leading-4">Welcome, {name}</p>
        <p className="text-white text-xs">{email}</p>
      </div>
      <div className="px-3 py-2  bg-white text-blue-900 flex items-center">
        <FaTrash />
        <p className="ml-3 font-semibold">₦{amount}</p>
      </div>
      <Title title="my jumia account" />
      <div className="bg-white rounded-sm m-2">
        <ul className="w-full h-full  p-2">
          {options1.map(({ icon, title, link }) => (
            <ListItem key={title} link={link} icon={icon} title={title} />
          ))}
        </ul>
      </div>
      <Title title="account settings" />
      <div className="bg-white rounded-md m-2">
        <ul className="w-full h-full  p-2">
          {options2.map(({ title }) => (
            <ListItem key={title} title={title} />
          ))}
        </ul>
      </div>
      <Link to="/logout/">
        <p className="py-3 uppercase text-red-400 text-center">LOGOUT</p>
      </Link>
    </>
  );
};

export default Account;
