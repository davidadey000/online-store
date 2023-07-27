import React, { useState } from "react";
import OrdersContext from "./OrdersContext";
import { orderData } from "../mockData/order";
import { useEffect } from "react";
import apiUrl from "../utils/config";
import axios from "axios";
import { toast } from "react-toastify";

const OrdersProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [ordersNotFound, setOrdersNotFound] = useState(false)

  const total = orderItems.length;
  // const totalPrice = orderItems.reduce((total, item) => {
  //   const itemPrice = item.price;
  //   return total + itemPrice * item.quantity;
  // }, 0);

  useEffect(() => {
    const fetchOrdersData = async () => {
      try {
        const token = localStorage.getItem("x-auth-token")
          // Make a GET request to fetch wishlist data from the API
          const response = await axios.get(apiUrl + "orders", {
            headers: {
              "x-auth-token": token,
            },
          });
  

        setOrderItems(response.data)
      } catch (error){
        console.log("Error fetching orders:", error)
        toast.error("Error fetching orders");
      }
    };
    
    fetchOrdersData()
  }, []);
  
  console.log(orderItems)


  const addToOrders = (item) => {
    setOrderItems((prevItems) => [...prevItems, item]);
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
