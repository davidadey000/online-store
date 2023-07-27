import React from "react";

const ObjectNotFound = ({ title }) => {
  return (
    <div className="text-center mt-4 py-16 flex-grow">
      <h3 className="text-2xl md:text-3xl lg:text-4xl capitalize font-bold">
        {title} Not Found
      </h3>
      <p className="text-sm md:text-base lg:text-lg mt-2">
        Sorry, we couldn't find your {title}.
      </p>
    </div>
  );
};

export default ObjectNotFound;
