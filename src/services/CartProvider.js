import React, { useState, useEffect } from "react";
import CartContext from "./CartContext";
import axios from "axios";
import apiUrl from "./../utils/config";
import { toast } from "react-toastify";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [cartNotFound, setCartNotFound] = useState(false); // State to track cart not found

  // Fetch cart data from the API and set the cartItems state
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        // Get the token from local storage
        const token = localStorage.getItem("x-auth-token");

        // Make a GET request to fetch cart data from the API
        const response = await axios.get(apiUrl + "carts/cart", {
          headers: {
            "x-auth-token": token,
          },
        });

        // Set the cartItems state with the fetched data
        setCartItems(response.data.products);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        if (error.response && error.response.status === 404) {
          // Cart not found
          setCartNotFound(true);
        } else {
          // Other error occurred
          console.error("Error fetching cart data:", error);
        }
      }
    };

    fetchCartData();
  }, []); // Empty dependency array to fetch cart data only once on component mount

  // Calculate total and total price based on cart items
  useEffect(() => {
    let totalItems = 0;
    let totalPrice = 0;

    cartItems.forEach((item) => {
      totalItems += item.quantity;
      totalPrice += item.discountedPrice * item.quantity;
    });

    setTotal(totalItems);
    setTotalPrice(totalPrice.toFixed(2)); // Convert back to Naira (or the original currency)
  }, [cartItems]);

  const increment = async (productId) => {
    try {
      // Send the API request to increment the quantity of the item in the cart
      const token = localStorage.getItem("x-auth-token");
      const response = await axios.put(
        apiUrl + `carts/cart/increment/${productId}`,
        {},
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );

      // Update the cartItems state with the new data from the response
      setCartItems(response.data.products);

      toast.success("Quantity incremented.");
    } catch (error) {
      console.error("Error incrementing item quantity:", error);
      toast.error("Error incrementing item quantity.");
    }
  };

  const decrement = async (productId) => {
    try {
      const token = localStorage.getItem("x-auth-token");
      const response = await axios.put(
        apiUrl + `carts/cart/decrement/${productId}`,
        {},
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      setCartItems(response.data.products);

      toast.success("Quantity decremented.");
    } catch (error) {
      console.error("Error decrementing item quantity:", error);
      toast.error("Error decrementing item quantity");
    }
  };

  const toggleCart = (item) => {
    const isItemInCart = cartItems.some(
      (cartItem) => cartItem._id === item._id
    );

    if (isItemInCart) {
      setCartItems((prevItems) =>
        prevItems.filter((cartItem) => cartItem._id !== item._id)
      );
      console.log("Item removed from cart.");
    } else {
      setCartItems((prevItems) => [...prevItems, item]);
      console.log("Item added to cart.");
    }
  };

  const addToCart = async (item) => {
    try {
      // Send the API request to add the item to the cart
      const token = localStorage.getItem("x-auth-token");
      const response = await axios.post(apiUrl + "carts/cart", item, {
        headers: {
          "x-auth-token": token,
        },
      });

      // Update the cartItems state with the response data
      setCartItems(response.data.products);

      toast.success("Item added to cart.");

      setCartNotFound(false);
    } catch (error) {
      console.error("Error adding item to cart:", error);
      toast.error("Error adding item to cart.");
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      // Send the API request to remove the item from the cart
      const token = localStorage.getItem("x-auth-token");
      await axios.delete(apiUrl + `carts/cart/${itemId}`, {
        headers: {
          "x-auth-token": token,
        },
      });

      // After successful removal, fetch the updated cart data from the API
      const response = await axios.get(apiUrl + "carts/cart", {
        headers: {
          "x-auth-token": token,
        },
      });

      // Update the cartItems state with the new data
      setCartItems(response.data.products);

      toast.success("Item removed from cart.");
    } catch (error) {
      console.error("Error removing item from cart:", error);
      toast.error("Error removing item from cart.");
    }
  };


  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        
        increment,
        decrement,
        toggleCart,
        total,
        totalPrice,
        cartNotFound,
        isLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
