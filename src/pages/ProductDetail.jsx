import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "react-responsive";
import { Carousel as LaptopCarousel } from "react-responsive-carousel";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import ProductCollection from "../components/productCollection";
import CartContext from "../services/CartContext";
import SavedContext from "../services/SavedContext";
import apiUrl from "../utils/config";
import { useAsync } from "react-async"; // Import useAsync
import { useContext } from "react";
import { FaMapMarker, FaUpload } from "react-icons/fa";
import { toast } from "react-toastify";
import NotFound from "./NotFound";
import SkeletonLoader from "../components/SkeletonLoader";
import ObjectNotFound from "../components/ObjectNotFound";

const productAttributesDatabase = {
  model: "Model Name",
  operatingSystem: "Operating System",
  storageCapacity: "Storage Database",
  screenSize: "Screen Size",
  brand: "Brand",
  expiryDate: "Expiry Date",
  nutritionalInfo: "Nutritional Information",
  size: "Size",
  coolantType: "Coolant Type",
  color: "Color",
};

const Product = () => {
  // State to hold the fetched product data
  const [showMore, setShowMore] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const isLaptop = useMediaQuery({ minWidth: 1024 });
  // const params = useParams();
  // const productId = params.id;
  const { slug } = useParams();
  console.log(slug)

  
  // Context
  const { cartItems, addToCart } = useContext(CartContext);
  const { toggleSaved, savedItems } = useContext(SavedContext);

  // Navigation
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`${apiUrl}products/${slug}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
        setLoading(false);
        setError("Failed to fetch product data. Please try again later.");
      }
    };

    fetchProductData();
  }, [slug]);

  const attributes = Object.entries(product?.additionalAttributes || {});
  const slideImages = product?.imageUrls || [];

  const toggleShowMore = () => setShowMore(!showMore);
  const toggleShowMore2 = () => setShowMore2(!showMore2);

  const handleBuyNow = () => {
    const isAlreadyInCart = cartItems.some((item) => item._id === product?._id);

    const reconciledProduct = {
      productId: product._id,
      quantity: 1, // Set the status based on your business logic
    };

    if (!isAlreadyInCart) {
      addToCart(reconciledProduct);
      // toast.success("Item has been added to Cart.");
    }
    navigate("/cart");
  };

  const handleAddToCart = () => {
    const reconciledProduct = {
      productId: product._id,
      quantity, // Set the status based on your business logic
    };

    addToCart(reconciledProduct);
    // toast.success("Item has been added to Cart.");
  };

  const handleToggleSaved = () => {
    const isAlreadyInSaved = savedItems.some(
      (item) => item._id === product?._id
    );

    toggleSaved(product);
   
  };

  const similarProducts = {
    type: "product",
    collectionName: "View Similar Items",
    headerColor: "rgb(254, 226, 204)",
    products: [
      // ... (similar products data)
    ],
  };

  if (loading) {
    return <SkeletonLoader />;
  }

  if (error) {
    // Display error message to the user using react-toastify or any other library
    toast.error(error);

    return <ObjectNotFound title="product" />;
  }

  if (!product) {
    return <ObjectNotFound title="product" />;
  }

  const handleOptionSelect = (value) => {
    setQuantity(Number(value)); // Convert the value to a number if needed
  };

  return (
    <div>
      <div className="product-details">
        <div className="product-det__loc">
          <FaMapMarker />
          <p className="product-det__loc-text">Deliver to Nigeria</p>
        </div>
        <div className="product-det__top-content">
          <hr className="product-det__line" />
          <p className="product-det__importlink">Visit the Renewed Store</p>
          <h2 className="product-det__title">{product.title}</h2>
        </div>
        <div className="product-det__content">
          <div className="product-details__carousel-div">
            {!isLaptop ? (
              <Carousel
                responsive={{
                  desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 1,
                    slidesToSlide: 1, // optional
                    showThumbs: true,
                  },
                  tablet: {
                    breakpoint: { max: 1024, min: 767 },
                    items: 2,
                    slidesToSlide: 2, // optional
                    showThumbs: true,
                  },
                  mobile: {
                    breakpoint: { max: 767, min: 0 },
                    items: 1,
                    slidesToSlide: 1, // optional
                  },
                }}
              >
                {slideImages.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    alt={`Image ${index + 1}`}
                    className="carousel__image"
                  />
                ))}
              </Carousel>
            ) : (
              <LaptopCarousel showThumbs={true}>
                {slideImages.map((item, index) => (
                  <img key={index} src={item} className="carousel__image" />
                ))}
              </LaptopCarousel>
            )}

            <button className="absolute top-[6vh] right[4vw] p-[3%] rounded-full bg-white sm:p-[2%] lg:top-16 lg:right-6">
              <FaUpload />
            </button>
          </div>
          <div className="product-det__mid-content">
            <div className="product-det__price-details">
              {isMobile ? (
                void 0
              ) : (
                <div>
                  <h2 className="product-det__title--large">{product.title}</h2>
                  <div className="product-det__top-content--large">
                    <hr className="product-det__line" />
                    <p className="product-det__importlink">
                      Visit the Renewed Store
                    </p>
                    <div>
                      <p></p>
                    </div>
                  </div>
                  <div>
                    <div className="product-det__price-terms-container">
                      <p className="product-det__price-terms--other">
                        Available at a lower price from other sellers that may
                        not offer free Prime shipping.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <div className="product-det__price-terms-container">
                <span className="product-det__price-terms product-det__price-terms--notnes">
                  <p className="product-det__price-label">
                    Was: ₦{product.price.toLocaleString("en-US")}
                  </p>
                </span>
                <span className="product-det__price-terms">
                  <p className="product-det__price-label">Price: </p>
                  <h3 className="product-det__price">
                    ₦{product.discountedPrice.toLocaleString("en-US")}
                  </h3>
                </span>
                <span className="product-det__price-terms product-det__price-terms--notnes">
                  <p className="product-det__price-label">You save:</p> ₦
                  {product.savedAmount.toLocaleString("en-US")}
                </span>
              </div>
              <p className="product-det__shipping">
                Shipping & Import Fees deposit to Nigeria.
              </p>
              <h4
                className={`font-semibold ${
                  product.numberInStock > 0 ? "text-green-700" : "text-red-700"
                }`}
              >
                {product.numberInStock > 0 ? "In Stock" : "Out of Stock"}
              </h4>
            </div>
            <div className="product-det__right-div--mobile">
              <div className="p-2 flex flex-col gap-3 sm:flex-row  sm:p-5">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <BuyButton
                    handleBuyNow={handleBuyNow}
                    productId={product._id}
                    cartItems={cartItems}
                  />
                </div>
                <div className="hidden sm:block">
                  <SaveButton
                    handleToggleSaved={handleToggleSaved}
                    productId={product._id}
                    savedItems={savedItems}
                  />
                </div>
              </div>
              <div className="product-det__transaction-details">
                <div className="product-det__transaction-details-grid w-[70%]">
                  <div className="product-det__transaction-detail">
                    <p className="font-semibold">Payment</p>
                    <p>Secure transaction</p>
                  </div>
                  <div className="product-det__transaction-detail">
                    <p className="font-semibold">Ships from</p> <p>Amazon</p>
                  </div>
                  <div className="product-det__transaction-detail">
                    <p className="font-semibold">Sold by</p>
                    <p>Amazon</p>
                  </div>

                  <div className="product-det__transaction-detail">
                    <p className="font-semibold">Return</p>
                    <p>
                      Eligible for Return, Refund or Replacement withing 30 days
                      of receipt.
                    </p>
                  </div>
                </div>

                <div className="product-det__transaction-details-flex">
                  <SaveButton
                    handleToggleSaved={handleToggleSaved}
                    productId={product._id}
                    savedItems={savedItems}
                  />
                </div>
              </div>
            </div>
            <div className="product-details__info">
              <div
                className={`product-det__about ${
                  showMore2 ? "product-det__about--show-more" : ""
                }`}
              >
                <hr className="my-2" />
                <h3 className="text-black text-lg font-semibold my-3">
                  About this Item
                </h3>
                <p className="product-det__about-content">
                  {product.description}{" "}
                </p>
              </div>
              <button
                className={`product-det__details-toggle-button ${
                  showMore2
                    ? "product-det__details-toggle-button--less"
                    : "product-details__toggle-button--more"
                }`}
                onClick={toggleShowMore2}
              >
                {showMore2 ? "Show less" : "Show more"}
              </button>
              <div className="product-details__sidebar">
                <div
                  className={`product-det__details-list ${
                    showMore ? "product-det__details-list--show-more" : ""
                  }`}
                >
                  <h3 className="product-det__detail-title font-bold">
                    Details
                  </h3>
                  <hr className="product-det__detail-line" />
                  {attributes.map(([key, value]) =>
                    productAttributesDatabase[key] ? (
                      <div className="product-det__detail sm:w-[70%]" key={key}>
                        <h4 className="product-det__detail-name capitalize">
                          {productAttributesDatabase[key]}
                        </h4>
                        <p className="product-det__detail-value capitalize">
                          {value}
                        </p>
                      </div>
                    ) : null
                  )}
                </div>
                <button
                  className={`product-det__details-toggle-button ${
                    showMore
                      ? "product-det__details-toggle-button--less"
                      : "product-details__toggle-button--more"
                  }`}
                  onClick={toggleShowMore}
                >
                  {showMore ? "Show less" : "Show more"}
                </button>
              </div>
            </div>
          </div>
          <div className="product-det__right-div--large">
            <div className="product-det__price-details--large">
              <h3 className="product-det__price">
                ₦{product.price.toLocaleString("en-US")}
              </h3>
              <p className="product-det__shipping">
                Shipping & Import Fees deposit to Nigeria.
              </p>
            </div>
            <div className="product-det__btn-div">
              <div className="product-det__quantity">
                <p className="mr-2">Qty: </p>
                <Dropdown
                  quantity={quantity}
                  numberInStock={product.numberInStock}
                  handleOptionSelect={handleOptionSelect}
                />
              </div>
              <CartButton
                handleAddToCart={handleAddToCart}
                productId={product._id}
                cartItems={cartItems}
              />
              <BuyButton
                handleBuyNow={handleBuyNow}
                productId={product._id}
                cartItems={cartItems}
              />
            </div>
            <div className="product-det__transaction-details">
              <div className="product-det__transaction-details-grid">
                <div className="product-det__transaction-detail">
                  <p className="font-poppins font-medium">Payment</p>
                  <p className="text-gray-500 font-semibold">
                    Secure transaction
                  </p>
                </div>

                <div className="product-det__transaction-detail">
                  <p className="font-medium">Ships from</p>{" "}
                  <p className="text-gray-500 font-semibold">Amazon</p>
                </div>
                <div className="product-det__transaction-detail">
                  <p className="font-medium">Sold by</p>
                  <p className="text-gray-500 font-semibold">Amazon</p>
                </div>
                <hr className="my-1" />
                <div className="product-det__transaction-detail">
                  <p className="font-medium">Return</p>
                  <p className="text-gray-500 font-semibold">
                    Eligible for Return, Refund or Replacement withing 30 days
                    of receipt.
                  </p>
                </div>
              </div>

              <div className="product-det__transaction-details-flex">
                <SaveButton
                  handleToggleSaved={handleToggleSaved}
                  productId={product._id}
                  savedItems={savedItems}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sticky bottom-0 left-0 sm:h-[5%] sm:px-5 lg:hidden bg-white p-2">
          {/* <p className="text-xs sm:text-[13px] sm:text-leading-sm leading-xs text-black">
          This website uses cookies. For further information on how we use
          cookies you can read our <a href="">Privacy and Cookie notice.</a>
        </p> */}
          <CartButton
            handleAddToCart={handleAddToCart}
            productId={product._id}
            cartItems={cartItems}
          />
        </div>
        <div className="product-det__similar-product-div">
          <ProductCollection
            key={similarProducts.collectionName}
            {...similarProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;

const SaveButton = ({ handleToggleSaved, productId, savedItems }) => (
  <button
    className=" py-3  font-semibold  w-full bg-black sm:text-sm text-white rounded-full sm:w-auto sm:px-7 sm:py-[6px] lg:ml-0 lg:text-[12px] lg:w-full"
    onClick={handleToggleSaved}
  >
    {savedItems.some((savedItem) => savedItem._id === productId)
      ? "Remove from Saved"
      : "Add to Saved"}
  </button>
);

const CartButton = ({ handleAddToCart }) => (
  <button
    className="py-3 sm:text-sm  font-semibold  w-full  bg-red-400  rounded-lg  text-white lg:rounded-full sm:px-7 sm:py-[6px] lg:ml-0 lg:text-[12px]  lg:w-full"
    onClick={handleAddToCart}
  >
    Add to Cart
  </button>
);

const BuyButton = ({ handleBuyNow }) => (
  <button
    className="py-3 font-semibold  w-full sm:text-sm border-black border-[1px]  text-black rounded-full sm:w-auto sm:px-7 sm:py-[6px] lg:ml-0 lg:text-[12px]  lg:w-full"
    onClick={handleBuyNow}
  >
    Buy Now
  </button>
);
