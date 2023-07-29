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
import { useState } from "react";
import apiUrl from "../utils/config";
import axios from "axios";
import { useEffect } from "react";

const Account = () => {
  const [userData, setUserData] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("x-auth-token");
    // Fetch user data from the API endpoint
    axios
      .get(`${apiUrl}users/me`, {
        headers: {
          "x-auth-token": token, // Replace "YOUR_AUTH_TOKEN_HERE" with the actual auth token
        },
      })
      .then((response) => {
        // Update the state with the fetched data
        setUserData(response.data);
      })
      .catch((error) => {
        // Handle errors if necessary
        console.error("Error fetching user data:", error);
      });
  }, []);

  // const name = "David Adediji";
  const name = userData.name;
  const email = userData.email;
  const amount = "0.00";
  const address =
    "Opposite Hilltop Hotel, Lugbe, Abuja Abuja-Lugbe Sector F, Federal Capital Territory";

  

  const shippingAddress = `${userData.name} \n ${address} +234 7065093454 / +234 7065093454`;

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
      address: shippingAddress,
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
                {accountData.map((item, index) => (
                  <AccountCard {...item} key="index"/>
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
