import React from "react";
import ProductCollection from "./productCollection";
import RangeCollection from "./rangeCollection";
import CategoryCollection from "./groupCollection";
import SlideShow from "./slideShow";
import { collectionData } from "../mockData/collection";
import AdBanner from "./adBanner";

// an alternative may to separate each collection object, create card for each collection and use on demand with the collections data all in the collectionsList.jsx, this will allow more customizatio as I can add banners in between

const CollectionList = () => {
  return (
    <div className="collection-list">
      <ProductCollection
        key={collectionData[0].collectionName}
        {...collectionData[0]}
      />
      <RangeCollection
        key={collectionData[5].collectionName}
        {...collectionData[5]}
      />
      <ProductCollection
        key={collectionData[1].collectionName}
        {...collectionData[1]}
      />{" "}
      <ProductCollection
        key={collectionData[2].collectionName}
        {...collectionData[2]}
      />
      <CategoryCollection
        key={collectionData[3].collectionName}
        {...collectionData[3]}
      />
      <SlideShow
        key={collectionData[9].collectionName}
        {...collectionData[9]}
      />
      {/* <AdBanner /> */}
    </div>
  );
};

export default CollectionList;
