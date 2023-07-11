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
import SideBarTemplate from "./../components/SideBarTemplate";
import AccountCard from "../components/AccountCard";

const Account = () => {
  const name = "David Adediji";
  const email = "davidadey000@gmail.com";
  const amount = "0.00";
  const address =
    "David Adediji \n Opposite Hilltop Hotel, Lugbe, Abuja Abuja-Lugbe Sector F, Federal Capital Territory +234 7065093454 / +234 7065093454";

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
    { title: "Newsletter", link: "newsletter" },
    { title: "Close Account" },
  ];

  const accountData = [
    { title: "Account Details", heading: name, email: email },
    {
      title: "Address Book",
      heading: "Your default Shipping Address:",
      address: address,
    },
    {
      title: "Jumia Store Credit",
      wallet: amount,
    },
    {
      title: "Newsletter Preferences",
      heading: "You are currently not subscribed to any of our newsletters.",
      link: "edit newsletter preferences",
      linkAddress: "preferences",
    },
  ];

  return (
    <>
      <SideBarTemplate
        title="Account Overview"
        content={
          <div className="flex-grow">
            <div className="p-4">
              <div className="grid grid-cols-2 grid-rows-2 gap-4">
                {accountData.map((item) => (
                  <AccountCard {...item} />
                ))}
              </div>
            </div>
          </div>
        }
        mobileContent={
          <div className="flex-grow lg:hidden">
            <div className="p-4 bg-red-400 ">
              <p className="text-white font-semibold leading-4">
                Welcome, {name}
              </p>
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
          </div>
        }
      />
    </>
  );
};

export default Account;
