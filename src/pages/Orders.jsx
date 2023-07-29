import React, { useContext } from "react";
import OrderItem from "../components/OrderItem";
import SideBarTemplate from "../components/SideBarTemplate";
import { FaArrowLeft } from 'react-icons/fa';
import NoItemsFound from './../components/NoItemsFound';
import OrdersContext from './../services/OrdersContext';
import SkeletonLoader from "../components/SkeletonLoader";
import ObjectNotFound from './../components/ObjectNotFound';
import { useEffect } from "react";

const Orders = () => {
  const { orderItems, isLoading, ordersNotFound,  fetchOrdersData } = useContext(OrdersContext);
  useEffect(() => {
    fetchOrdersData();
  }, []);
  return (
    <SideBarTemplate
      title="Orders"
      content={
        <div className="flex-grow p-2 flex flex-col gap-2">
          {isLoading ? (
            <SkeletonLoader /> // Use a skeleton loader or loading indicator here
          ) : ordersNotFound ? (
            <ObjectNotFound title="Orders List" />
          ) : orderItems.length === 0 ? (
            <NoItemsFound title="Orders List" />
          ) : (
            orderItems.map((item) => <OrderItem key={item._id} {...item} />)
          )}
        </div>
      }
    />
  );
};

export default Orders;
