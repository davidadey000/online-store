import React from "react";

const NewsletterItem = ({ image, title, description, link }) => {
  return (
    <a href={`${link}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {title}
          </h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default NewsletterItem;
