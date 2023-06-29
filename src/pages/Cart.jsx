import React from "react";
import ProductCollection from "./../components/productCollection";
import { categoriesData } from "./../mockData/category";
import Title from "./../components/Title";
import Item from "./../components/Item";
import { FaPhone } from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../services/CartContext";

const Cart = () => {
  const similarItems = categoriesData[categoriesData.length - 3];
  const recommended = categoriesData[categoriesData.length - 2];
  const customerViewed = categoriesData[categoriesData.length - 1];

  const {
    cartItems,
    total,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart,
    increment,
    decrement,
  } = useContext(CartContext);

  const handleAddToCart = () => {
    const newItem = { id: 1, name: "Product", price: 10 };
    addToCart(newItem);
  };
  const handleIncrement = (itemId) => {
    increment(itemId);
  };

  const handleDecrement = (itemId) => {
    decrement(itemId);
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div>
      <Title title="cart summary" />
      <div className="px-3 py-2 flex justify-between bg-white">
        <p>Subtotal</p> <p className="font-bold">₦{totalPrice}</p>
      </div>
      <Title title={`cart(${total})`} />
      {cartItems.map((item) => (
        <Item
          key={item.id}
          {...item}
          type="cart"
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ))}
      <div className="px-4 py-2 flex gap-2 bg-white my-4">
        <button className="p-4 rounded-md border-[1px] border-red-500 text-red-400">
          <FaPhone className="transform -scale-x-100" />
        </button>
        <button className="w-80 bg-red-400 text-white rounded-sm py-3">
          CHECKOUT (₦{totalPrice})
        </button>
      </div>

      <ProductCollection
        use="detail"
        key={similarItems.collectionName}
        {...similarItems}
      />

      <ProductCollection
        use="detail"
        key={recommended.collectionName}
        {...recommended}
      />

      <ProductCollection
        use="detail"
        key={customerViewed.collectionName}
        {...customerViewed}
      />
    </div>
  );
};

export default Cart;
