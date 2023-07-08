import React, { useState } from "react";
import CartContext from "./CartContext";
import { cartData } from "../mockData/cart";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(cartData);

  const total = cartItems.length;
  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = item.price;
    return total + itemPrice * item.quantity;
  }, 0);

  const increment = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decrement = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity > 0 ? item.quantity - 1 : 0,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };
  const toggleCart = (item) => {
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);
  
    if (isItemInCart) {
      setCartItems((prevItems) =>
        prevItems.filter((cartItem) => cartItem.id !== item.id)
      );
      console.log("Item removed from cart.");
    } else {
      setCartItems((prevItems) => [...prevItems, item]);
      console.log("Item added to cart.");
    }
  };
  
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Check if the item already exists in the cart
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
  
      if (existingItem) {
        // If the item exists, increase the quantity
        return prevItems.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity + item.quantity };
          }
          return cartItem;
        });
      } else {
        // If the item does not exist, add it to the cart
        return [...prevItems, item];
      }
    });
  };
  

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        increment,
        decrement,
        toggleCart,
        total,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
