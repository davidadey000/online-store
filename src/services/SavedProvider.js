import React, { useState } from "react";
import SavedContext from "./SavedContext";
import { savedData } from "../mockData/saved";

const SavedProvider = ({ children }) => {
  const [savedItems, setSavedItems] = useState(savedData);

  const total = savedItems.length;

  const toggleSaved = (item) => {
    const isItemSaved = savedItems.some(
      (savedItem) => savedItem.id === item.id
    );

    if (isItemSaved) {
      removeFromSaved(item.id);
      console.log("Item removed from saved items.");
    } else {
      setSavedItems((prevItems) => [...prevItems, item]);
      console.log("Item added to saved items.");
    }
  };

  const removeFromSaved = (itemId) => {
    setSavedItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
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
        clearSaved,
        total,
      }}
    >
      {children}
    </SavedContext.Provider>
  );
};

export default SavedProvider;
