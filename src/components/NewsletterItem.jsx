import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TextContentLoader from "./TextContentLoader";

const NewsletterItem = ({ image, title, description, link }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImage = () => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        setIsLoading(false);
      };
    };
    loadImage();
  }, [image]);

  return (
    <a href={`${link}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="w-full h-48">
          {isLoading ? (
            <TextContentLoader width="100%" height="100%"></TextContentLoader>
          ) : (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default NewsletterItem;
