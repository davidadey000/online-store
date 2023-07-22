import React from "react";
import { TextContentLoader } from "./TextContentLoader";


const EmptyCollectionBody = () => {
  return [...Array(12)].map((_, index) => (
    <div
      key={index}
      className=" flex-shrink-0 flex-grow-0 flex-basis-[200px] w-[200px] rounded-md"
    >
      <TextContentLoader width="100%" height="200px" />
      <div className="product__body">
        <br />
        <br />
      </div>
    </div>
  ));
};

export default EmptyCollectionBody;
