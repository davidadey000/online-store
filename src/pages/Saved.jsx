import React from "react";
import { useContext } from "react";
import Item from "./../components/Item";
import SavedContext from "./../services/SavedContext";
import CartContext from "./../services/CartContext";
import image3 from "../assets/img/project-img3.png";

const Saved = () => {
  const {
    savedItems,
    total,
    totalPrice,
    addToSaved,
    removeFromSaved,
    clearSaved,
    increment,
    decrement,
  } = useContext(SavedContext);

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const newItem = {
      id: 3,
      image: image3,
      title: "EILIFINTE B05 Casual Crossbody Shoulder Chest Bag-Grey",
      price: "10",
      prevPrice: "15",
      status: "In Stock",
      quantity: 1,
    };
    addToCart(newItem);
  };

  const handleAddToSaved = () => {
    const newItem = { id: 1, name: "Product", price: 10 };
    addToSaved(newItem);
  };
  const handleIncrement = (itemId) => {
    increment(itemId);
  };

  const handleDecrement = (itemId) => {
    decrement(itemId);
  };

  const handleRemoveFromSaved = (itemId) => {
    removeFromSaved(itemId);
  };

  const handleClearSaved = () => {
    clearSaved();
  };

  return (
    <div>
      <div className="px-4 py-2 text-xl">Saved Items ({total})</div>
      <div className="p-2">
        {savedItems.map((item) => (
          <Item
            key={item.id}
            {...item}
            type="saved"
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleRemoveFromSaved={handleRemoveFromSaved}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Saved;
