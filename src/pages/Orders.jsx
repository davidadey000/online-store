import React from "react";
import OrderItem from "../components/OrderItem";
import SideBarTemplate from "../components/SideBarTemplate";
import { FaArrowLeft } from 'react-icons/fa';
import NoItemsFound from './../components/NoItemsFound';
import OrdersContext from './../services/OrdersContext';
import { useContext } from "react";

const Orders = () => {
const {orderItems} = useContext(OrdersContext)
  return (
    <SideBarTemplate
      title="Orders"
      content={
        <div className="flex-grow px-2 flex flex-col gap-2">
          {orderItems.length === 0 ? (
            <NoItemsFound title="Orders List" />
          ) : (
            orderItems.map((item) => <OrderItem key={item.id} {...item} />)
          )}
        </div>
      }
    />
  );
};

export default Orders;
