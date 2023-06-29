import React, { useState } from 'react';
import CartContext from './CartContext';
import {cartData} from "../mockData/cart";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(cartData);

  const total = cartItems.length
  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace('₦', ''));
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
  }

  
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
  

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart , increment, decrement, total, totalPrice}}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
