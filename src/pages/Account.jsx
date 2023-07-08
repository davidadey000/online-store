import React from "react";
import { HiCreditCard } from "react-icons/hi";
import Title from "./../components/Title";
import ListItem from "./../components/ListItem";
import { Link } from "react-router-dom";
import {
  HiShoppingCart,
  HiInboxIn,
  HiStar,
  HiTicket,
  HiHeart,
  HiEye,
} from "react-icons/hi";

import ListItemsSection from "./../components/ListItemSection";
import SideBarTemplate from './../components/SideBarTemplate';

const Account = () => {
  const name = "David";
  const email = "davidadey000@gmail.com";
  const amount = "0.00";

  const options1 = [
    { icon: <HiShoppingCart />, link: "orders", title: "Orders" },
    { icon: <HiInboxIn />, link: "inbox", title: "Inbox" },
    { icon: <HiStar />, link: "pending reviews", title: "Pending Reviews" },
    { icon: <HiTicket />, link: "voucher", title: "Vouchers" },
    { icon: <HiHeart />, link: "saved", title: "Saved Items" },
    { icon: <HiEye />, link: "recently viewed", title: "Recently Viewed" },
  ];

  // ...

  const options2 = [
    { title: "Account Management" },
    { title: "Address Book" },
    { title: "Newsletter" },
    { title: "Close Account" },
  ];
  return (
    <>
    <SideBarTemplate mobileContent={ <div className="flex-grow lg:hidden">
        <div className="p-4 bg-red-400 ">
          <p className="text-white font-semibold leading-4">Welcome, {name}</p>
          <p className="text-white text-xs">{email}</p>
        </div>
        <div className="px-3 py-2  bg-white text-blue-900 flex items-center">
          <HiCreditCard />
          <p className="ml-3 font-semibold">₦{amount}</p>
        </div>
        <Title title="my jumia account" />
        <ListItemsSection options={options1} />
        <Title title="account settings" />
        <ListItemsSection options={options2} />

        <Link to="/logout/">
          <p className="py-3 uppercase text-red-400 text-center">LOGOUT</p>
        </Link>
      </div>}/>
     
    
    </>
  );
};

export default Account;
