import React from "react";
import { useContext } from "react";
import Item from "./../components/Item";
import SavedContext from "./../services/SavedContext";
import CartContext from "./../services/CartContext";
import SideBarTemplate from "../components/SideBarTemplate";
import NoItemsFound from "./../components/NoItemsFound";
import { toast } from "react-toastify";
import ObjectNotFound from "../components/ObjectNotFound";
import SkeletonLoader from "./../components/SkeletonLoader";

const Saved = () => {
  const {
    savedItems,
    total,
    removeFromSaved,
    clearSaved,
    isLoading,
    wishlistNotFound,
  } = useContext(SavedContext);

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (id) => {
    // Find the saved item with the provided id
    const savedItem = savedItems.find((item) => item._id === id);

    if (savedItem) {
      // Create a new item object with quantity set to 1
      const newItem = {
        ...savedItem,
        quantity: 1,
      };

      // Add the new item to the cart
      addToCart(newItem);

      // Show a success toast message
      toast.success("Item has been added to cart.");
    }
  };

  const handleRemoveFromSaved = (itemId) => {
    removeFromSaved(itemId);
  };

  const handleClearSaved = () => {
    clearSaved();
  };

  const savedTitle = `Saved Items (${total})`;

  return (
    <SideBarTemplate
      title={savedTitle}
      content={
        <div className="flex-grow">
          <div className="p-2">
            {isLoading ? (
              <SkeletonLoader /> // SkeletonLoader will be shown when loading
            ) : wishlistNotFound ? (
              <ObjectNotFound title="wishlist" />
            ) : savedItems.length === 0 ? (
              <NoItemsFound title="Saved Items List" /> // NoItemsFound will be shown when the list is empty
            ) : (
              savedItems.map((item) => (
                <Item
                  key={item._id}
                  {...item}
                  type="saved"
                  handleRemoveFromSaved={handleRemoveFromSaved}
                  handleAddToCart={handleAddToCart}
                />
              ))
            )}
          </div>
        </div>
      }
    />
  );
};

export default Saved;
