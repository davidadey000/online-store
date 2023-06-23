import React, { useState } from 'react';
import SavedContext from './SavedContext';
import {savedData} from "../mockData/saved";

const SavedProvider = ({ children }) => {
  const [savedItems, setSavedItems] = useState(savedData);

  const total = savedItems.length
  const totalPrice = savedItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace('$', ''));
    return total + itemPrice * item.quantity;
  }, 0);
  

  const increment = (itemId) => {
    const updatedSavedItems = savedItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setSavedItems(updatedSavedItems);
  }

  
  const decrement = (itemId) => {
    const updatedSavedItems = savedItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity > 0 ? item.quantity - 1 : 0,
        };
      }
      return item;
    });
    setSavedItems(updatedSavedItems);
  };
  

  const addToSaved = (item) => {
    setSavedItems((prevItems) => [...prevItems, item]);
  };

  const removeFromSaved = (itemId) => {
    setSavedItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearSaved = () => {
    setSavedItems([]);
  };

  return (
    <SavedContext.Provider
      value={{ savedItems, addToSaved, removeFromSaved, clearSaved , increment, decrement, total, totalPrice}}
    >
      {children}
    </SavedContext.Provider>
  );
};

export default SavedProvider;
