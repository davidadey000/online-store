import React from "react";
import { FaTrash } from "react-icons/fa";
import Title from "./../components/Title";
import ListItem from "./../components/ListItem";

const Account = () => {
  const name = "David";
  const email = "davidadey000@gmail.com";
  const amount = "0.00";
  const options1 = [
    { icon: <FaTrash />, title: "Orders" },
    { icon: <FaTrash />, title: "Inbox" },
    { icon: <FaTrash />, title: "Pending Reviews" },
    { icon: <FaTrash />, title: "Vouchers" },
    { icon: <FaTrash />, title: "Saved Items" },
    { icon: <FaTrash />, title: "Recently Viewed" },
  ];
  const options2 = [
    { title: "Account Management" },
    { title: "Address Book" },
    { title: "Lorem Ipsum" },
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
          {options1.map(({ icon, title }) => (
            <ListItem key={title} icon={icon} title={title} />
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
    </>
  );
};

export default Account;
