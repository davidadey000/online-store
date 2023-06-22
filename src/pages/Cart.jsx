import React from "react";
import ProductCollection from "./../components/productCollection";
import { categoriesData } from "./../mockData/category";
import Title from "./../components/Title";
import Item from "./../components/Item";
import image from "../assets/img/project-img3.png";
import { FaPhone } from "react-icons/fa";

const Cart = () => {
  const similarItems = categoriesData[categoriesData.length - 3];
  const recommended = categoriesData[categoriesData.length - 2];
  const customerViewed = categoriesData[categoriesData.length - 1];
  return (
    <div>
      <Title title="cart summary" />
      <div className="px-3 py-2 flex justify-between bg-white">
        <p>Subtotal</p> <p className="font-bold">$100</p>
      </div>
      <Title title="cart(#)" />
      <Item
        image={image}
        title="EILIFINTE B05 Casual Crossbody Shoulder Chest Bag-Grey"
        price="$100"
        prevPrice="$1000"
        status="In Stock"
        key="1"
        type="cart"
      />
      <div className="px-4 py-2 flex gap-2 bg-white my-4">
        <button className="p-4 rounded-md border-[1px] border-orange-500 text-orange-400">
          <FaPhone className="transform -scale-x-100" />
        </button>
        <button className="w-80 bg-orange-400 text-white rounded-sm py-3">
          CHECKOUT ($100)
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
