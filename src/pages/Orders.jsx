import React from "react";
import projectImg1 from "../assets/img/project-img1.png";
import OrderItem from "../components/OrderItem";

const Orders = () => {
  const date = '19-06-2023';
  const orderData = [
    {
      title: "Man Slim Fit Tricot Pullover -Beige",
      image: projectImg1,
      id: 1234560,
      status: "Delivered",
      date: date,
      size: "EU M"
    },
    {
      title: "Man Slim Fit Tricot Pullover -Beige",
      image: projectImg1,
      id: 1234560,
      status: "Delivered",
      date: date,
    },
    {
      title: "Man Slim Fit Tricot Pullover -Beige",
      image: projectImg1,
      id: 1234560,
      status: "Delivered",
      date: date,
    },
  ];
  return (
    <div className="px-2 flex flex-col gap-2">
      {orderData.map((item) => (
        <OrderItem key={item.id} {...item} />
      ))}{" "}
    </div>
  );
};

export default Orders;
