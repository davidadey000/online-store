import React from "react";
import {
  HiEye,
  HiHeart,
  HiInboxIn,
  HiShoppingCart,
  HiStar,
  HiTicket,
} from "react-icons/hi";
import ListItemsSection from "./ListItemSection";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SideBarTemplate = ({ title, content, mobileContent }) => {
  const options1 = [
    { icon: <HiShoppingCart />, link: "orders", title: "Orders" },
    { icon: <HiInboxIn />, link: "inbox", title: "Inbox" },
    { icon: <HiStar />, link: "pending reviews", title: "Pending Reviews" },
    { icon: <HiTicket />, link: "voucher", title: "Vouchers" },
    { icon: <HiHeart />, link: "saved", title: "Saved Items" },
    { icon: <HiEye />, link: "recently viewed", title: "Recently Viewed" },
  ];
  const options2 = [
    { title: "Address Book" },
    { title: "Newsletter" },
    { title: "Close Account" },
  ];

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex-grow lg:hidden">
          {title && (
        <div className="p-3 pt-4 bg-white sticky top-0 w-full  z-40">
            <button
              className="flex items-center text-black text-xl lg:hidden p-1"
              onClick={handleGoBack}
            >
              <FaArrowLeft className="mr-2" /> {title}
            </button>
        </div>
          ) }
        {mobileContent || content}
      </div>
      <div className="hidden px-12 lg:flex gap-4 py-4">
        <div className="flex flex-col gap-4 w-[25%] max-w-[250px]">
          <ListItemsSection options={options1} />
          <p className="text-sm text-gray-600 px-2">Account Management</p>
          <ListItemsSection options={options2} />
          
          <p className="text-red-400 px-2">LOG OUT</p>
        </div>
        <div className="h-min flex-grow bg-white ">
          <div className="px-4 py-2 text-xl flex items-center gap-2">
            {title}
          </div>
          {content}
        </div>
      </div>
    </>
  );
};

export default SideBarTemplate;
