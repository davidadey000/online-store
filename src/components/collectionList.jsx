import React from "react";
import ProductCollection from "./productCollection";
import RangeCollection from "./rangeCollection";
import CategoryCollection from "./groupCollection";
import SlideShow from "./slideShow";
import { collectionData } from "../mockData/collection";
import AdBanner from "./adBanner";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import apiUrl from "../utils/config";

// an alternative may to separate each collection object, create card for each collection and use on demand with the collections data all in the collectionsList.jsx, this will allow more customizatio as I can add banners in between

const CollectionList = () => {
  const [limitedStoreDeals, setLimitedStoreProducts] = useState([]);
  const [officeStoreDeals, setOfficeStoreProducts] = useState([]);
  const [largeApplicances, setLargeApplicances] = useState([]);

  // Fetch products from the API endpoint using useEffect
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}products/category/limited-store-deals`
        );
        setLimitedStoreProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Fetch products from the API endpoint using useEffect
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}products/category/64bd917745f2f4d8d81c43ac`
        );
        setOfficeStoreProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Fetch products from the API endpoint using useEffect
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}products/category/64bd932c45f2f4d8d81c43b5`
        );
        setLargeApplicances(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="collection-list">
      <ProductCollection
        key={collectionData[0].collectionName}
        type="products"
        collectionName="Limited Store Deals"
        slug="limited-store-deals"
        headerColor="rgb(254, 226, 204)"
        products={limitedStoreDeals}
      />
      <RangeCollection
        key={collectionData[5].collectionName}
        {...collectionData[5]}
      />
      <ProductCollection
        key="Office Store Deals"
        type="products"
        collectionName="Office Store Deals"
        headerColor="rgb(254, 226, 204)"
        products={officeStoreDeals}
      />
      <ProductCollection
        key="Large Applicances"
        type="products"
        collectionName="Large Applicances"
        headerColor="rgb(254, 226, 204)"
        products={largeApplicances}
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
