import React from "react";
import {
  HiArrowLeft,
  HiEye,
  HiHeart,
  HiInboxIn,
  HiShoppingCart,
  HiStar,
  HiTicket,
  HiUserCircle,
} from "react-icons/hi";
import ListItemsSection from "./ListItemSection";
import { useNavigate } from "react-router-dom";

const SideBarTemplate = ({ title, content, mobileContent }) => {
  const options1 = [
    
    { icon: <HiUserCircle />, link: "account", title: "My Account" },
    { icon: <HiShoppingCart />, link: "orders", title: "Orders" },
    { icon: <HiInboxIn />, link: "inbox", title: "Inbox" },
    { icon: <HiStar />, link: "pending reviews", title: "Pending Reviews" },
    { icon: <HiTicket />, link: "voucher", title: "Vouchers" },
    { icon: <HiHeart />, link: "saved", title: "Saved Items" },
    { icon: <HiEye />, link: "recently viewed", title: "Recently Viewed" },
  ];
  const options2 = [
    { title: "Address Book" },
    { title: "Newsletter" , link: "newsletter"},
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
          <div className="px-3 py-2 pt-3 bg-white sticky top-0 w-full  z-40">
            <button
              className="flex items-center text-black text-xl lg:hidden p-1"
              onClick={handleGoBack}
            >
              <HiArrowLeft className="mr-2" /> {title}
            </button>
          </div>
        )}
        {mobileContent || content}
      </div>
      <div className="hidden px-12 lg:flex gap-4 py-4 ">
        <div className="flex flex-col gap-4 min-w-[25%] bg-white max-w-[250px h-min rounded-sm shadow-sm lg:gap-0">
          <ListItemsSection options={options1} />          
          <ListItemsSection options={options2} />

          <button className="text-red-400 p-4 text-center font-semibold">LOG OUT</button>
        </div>
        <div className="h-min flex-grow bg-white shadow-sm rounded-md">
          <div className="px-4 py-2 text-xl flex items-center gap-2 font-semibold capitalize">
            {title}
          </div>
          {content}
        </div>
      </div>
    </>
  );
};

export default SideBarTemplate;
