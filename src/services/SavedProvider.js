import React, { useState, useEffect } from "react";
import SavedContext from "./SavedContext";
import axios from "axios";
import apiUrl from "../utils/config";
import { toast } from "react-toastify";

const SavedProvider = ({ children }) => {
  const [savedItems, setSavedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [wishlistNotFound, setWishlistNotFound] = useState(false); // State to track if wishlist not found

  // Function to fetch wishlist data from the API and set the savedItems state
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

  useEffect(() => {
    fetchWishlistData();
  }, []); // Empty dependency array to fetch wishlist data only once on component mount

  const total = savedItems.length;

  const toggleSaved = async (item) => {
    const isItemSaved = savedItems.some(
      (savedItem) => savedItem._id === item._id
    );

    if (isItemSaved) {
      removeFromSaved(item._id);
      console.log("Item removed from saved items.");
    } else {
      try {
        // Send the API request to add the item to the saved list
        const token = localStorage.getItem("x-auth-token");
        const response = await axios.post(
          apiUrl + "wishlists/wishlist",
          { productId: item._id },
          {
            headers: {
              "x-auth-token": token,
            },
          }
        );

        // Update the savedItems state with the new data
        setSavedItems(response.data.products);
        setWishlistNotFound(false);
        toast.success("Item added to saved items.");
      } catch (error) {
        console.error("Error adding item to saved items:", error);
        toast.error("Error adding item to saved items.");
      }
    }
  };

  const removeFromSaved = async (itemId) => {
    try {
      // Send the API request to remove the item from the saved list
      const token = localStorage.getItem("x-auth-token");
      const response = await axios.delete(
        apiUrl + `wishlists/wishlist/${itemId}`,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );

      // Update the savedItems state with the new data
      setSavedItems(response.data.products);

      toast.success("Item removed from saved items.");
    } catch (error) {
      console.error("Error removing item from saved items:", error);
      toast.error("Error removing item from saved items.");
    }
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
        fetchWishlistData, // Make the fetchWishlistData function available for use outside the component
      }}
    >
      {children}
    </SavedContext.Provider>
  );
};

export default SavedProvider;
