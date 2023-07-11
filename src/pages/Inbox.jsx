import React from "react";
import InboxItem from "../components/InboxItem";
import SideBarTemplate from "../components/SideBarTemplate";

const mockData = [
  {
    id: 1,
    subject: "Order Confirmation",
    sender: "Acme Store",
    message: "Your order has been confirmed and is being processed.",
    date: "2023-07-10",
    read: false,
  },
  {
    id: 2,
    subject: "Shipment Update",
    sender: "Acme Store",
    message: "Your order has been shipped. Tracking number: 1234567890",
    date: "2023-07-09",
    read: true,
  },
  // Add more mock data items as needed
];

const Inbox = () => {
  return (
    <SideBarTemplate  title="Inbox"
      content={
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockData.map((item) => (
              <InboxItem key={item.id} data={item} />
            ))}
          </div>
        </div>
      }
    />
  );
};

export default Inbox;
