import React, { useState } from "react";
import OrdersContext from "./OrdersContext";
import { orderData } from "../mockData/order";
import { useEffect } from "react";
import apiUrl from "../utils/config";
import axios from "axios";
import { toast } from "react-toastify";

const OrdersProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ordersNotFound, setOrdersNotFound] = useState(false);

  const total = orderItems.length;
  // const totalPrice = orderItems.reduce((total, item) => {
  //   const itemPrice = item.price;
  //   return total + itemPrice * item.quantity;
  // }, 0);

  const fetchOrdersData = async () => {
    try {
      const token = localStorage.getItem("x-auth-token");
      // Make a GET request to fetch wishlist data from the API
      const response = await axios.get(apiUrl + "orders", {
        headers: {
          "x-auth-token": token,
        },
      });

      setOrderItems(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Error fetching orders");
    }
  };

  useEffect(() => {
    fetchOrdersData();
  }, []);

  const addToOrders = async () => {
    try {
      const token = localStorage.getItem("x-auth-token");
      const response = await axios.post(apiUrl + "orders/", null, {
        headers: {
          "x-auth-token": token,
        },
      });
      // After adding the order, fetch the updated orders data
      fetchOrdersData();
      toast.success("Order was placed successfully!");
    } catch (error) {
      console.error("Error occurred while ordering", error);
      toast.error("Error occurred while ordering");
    }
  };

  return (
    <OrdersContext.Provider
      value={{
        orderItems,
        addToOrders,
        total,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersProvider;
