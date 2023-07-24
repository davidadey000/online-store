import React, { useState, useEffect } from "react";
import SavedContext from "./SavedContext";
import axios from "axios";
import apiUrl from "../utils/config";
import NoItemsFound from "./../components/NoItemsFound";
import ObjectNotFound from "../components/ObjectNotFound";
import { toast } from "react-toastify";

const SavedProvider = ({ children }) => {
  const [savedItems, setSavedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [wishlistNotFound, setWishlistNotFound] = useState(false); // State to track if wishlist not found

  // Fetch wishlist data from the API and set the savedItems state
  useEffect(() => {
    const fetchWishlistData = async () => {
      try {
        // Get the token from local storage
        const token = localStorage.getItem("x-auth-token");

        // Make a GET request to fetch wishlist data from the API
        const response = await axios.get(apiUrl + "wishlists/wishlist", {
          headers: {
            "x-auth-token": token,
          },
        });

        // Set the savedItems state with the fetched data
        setSavedItems(response.data.products);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        if (error.response && error.response.status === 404) {
          // Wishlist not found
          setWishlistNotFound(true);
        } else {
          // Other error occurred
          toast.error("Error fetching wishlist data. Please try again later.");
        }
        console.error("Error fetching wishlist data:", error);
      }
    };

    fetchWishlistData();
  }, []); // Empty dependency array to fetch wishlist data only once on component mount

  const total = savedItems.length;

  const toggleSaved = (item) => {
    const isItemSaved = savedItems.some(
      (savedItem) => savedItem._id === item._id
    );

    if (isItemSaved) {
      removeFromSaved(item._id);
      console.log("Item removed from saved items.");
    } else {
      setSavedItems((prevItems) => [...prevItems, item]);
      console.log("Item added to saved items.");
    }
  };

  const removeFromSaved = (itemId) => {
    setSavedItems((prevItems) =>
      prevItems.filter((item) => item._id !== itemId)
    );
  };

  const clearSaved = () => {
    setSavedItems([]);
  };

  return (
    <SavedContext.Provider
      value={{
        savedItems,
        toggleSaved,
        removeFromSaved,
        isLoading,
        wishlistNotFound,
        clearSaved,
        total,
      }}
    >
      {children}
    </SavedContext.Provider>
  );
};

export default SavedProvider;
