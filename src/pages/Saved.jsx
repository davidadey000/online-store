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
import { useEffect } from "react";

const Saved = () => {
  const {
    savedItems,
    total,
    removeFromSaved,
    clearSaved,
    isLoading,
    fetchWishlistData,
    wishlistNotFound,
  } = useContext(SavedContext);

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (id) => {
    console.log(id)
    const reconciledProduct = {
      productId: id,
      quantity:1, // Set the status based on your business logic
    };

    addToCart(reconciledProduct);
  };

  const handleRemoveFromSaved = (itemId) => {
    removeFromSaved(itemId);
  };

  const handleClearSaved = () => {
    clearSaved();
  };

  useEffect(() => {
    fetchWishlistData();
  }, []);

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
                  key={item.cartId}
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
