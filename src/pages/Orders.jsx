import React from "react";
import projectImg1 from "../assets/img/project-img1.png";
import OrderItem from "../components/OrderItem";
import SideBarTemplate from "../components/SideBarTemplate";
import { FaArrowLeft } from 'react-icons/fa';

const Orders = () => {
  const date = "19-06-2023";
  const orderData = [
    {
      title: "Man Slim Fit Tricot Pullover -Beige",
      image: projectImg1,
      id: 1234560,
      status: "Delivered",
      date: date,
      size: "EU M",
    },
    {
      title: "Man Slim Fit Tricot Pullover -Beige",
      image: projectImg1,
      id: 1234561,
      status: "Delivered",
      date: date,
    },
    {
      title: "Man Slim Fit Tricot Pullover -Beige",
      image: projectImg1,
      id: 1234562,
      status: "Delivered",
      date: date,
    },
  ];

  return (
    <SideBarTemplate title="Orders"
      content={
        
          <div className="flex-grow px-2 flex flex-col gap-2">
            {orderData.map((item) => (
              <OrderItem key={item.id} {...item} />
            ))}{" "}
          </div>
        
      }
    />
  );
};

export default Orders;
