import React, { useState } from "react";
import OrdersContext from "./OrdersContext";
import { orderData } from "../mockData/order";

const OrdersProvider = ({ children }) => {
  const [orderItems, setOrdersItems] = useState(orderData);

  const total = orderItems.length;
  // const totalPrice = orderItems.reduce((total, item) => {
  //   const itemPrice = item.price;
  //   return total + itemPrice * item.quantity;
  // }, 0);

  const addToOrders = (item) => {
    setOrdersItems((prevItems) => [...prevItems, item]);
  };

  // const removeFromOrders = (itemId) => {
  //   setOrdersItems((prevItems) =>
  //     prevItems.filter((item) => item.id !== itemId)
  //   );
  // };

  // const clearOrders = () => {
  //   setOrdersItems([]);
  // };

  return (
    <OrdersContext.Provider
      value={{
        orderItems,
        addToOrders,
        // removeFromOrders,
        // clearOrders,
        total,
        // totalPrice,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersProvider;
