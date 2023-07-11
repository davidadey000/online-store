import React from 'react';

const InboxItem = ({ data }) => {
  const { id, subject, sender, message, date, read } = data;

  return (
    <div
      className={`bg-white rounded p-4 ${
        read ? 'border-gray-400' : 'border-blue-500'
      } border`}
    >
      <div className="font-bold mb-2">{subject}</div>
      <div className="text-sm text-gray-600 mb-2">{sender}</div>
      <div className="text-sm mb-4">{message}</div>
      <div className="text-xs text-gray-500">{date}</div>
    </div>
  );
};

export default InboxItem;
