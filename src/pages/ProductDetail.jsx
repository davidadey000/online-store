import React from "react";
import { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { Carousel as LaptopCarousel } from "react-responsive-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData } from "../mockData/product";
import ProductCollection from "../components/productCollection";
import Footer from "../components/footer";
import { useMediaQuery } from "react-responsive";
import Dropdown from "../components/Dropdown";
import { useParams } from "react-router-dom";

import {
  FaHeart,
  FaLocationArrow,
  FaMapMarker,
  FaUpload,
} from "react-icons/fa";

// const { Option } = Select;
const options = [
  { value: "option1", label: "1" },
  { value: "option2", label: "2" },
  { value: "option3", label: "3" },
];

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
};

const Product = ({ match }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const isLaptop = useMediaQuery({ minWidth: 1024 });
  const params = useParams();
  const productId = parseInt(params.id);
  const product = productData.find((p) => p.id === productId);
  const attributes = Object.entries(product.attributes);
  const slideImages = product.image;
  const [showMore, setShowMore] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);
  const toggleShowMore2 = () => setShowMore2(!showMore2);

  const [selectedNumber, setSelectedNumber] = useState(1);

  function handleChange(value) {
    setSelectedNumber(value);
  }

  const similarProducts = {
    type: "product",
    collectionName: "View Similar Items",
    headerColor: "rgb(254, 226, 204)",
    products: [
      {
        id: "1",
        price: "4000",
        description: "Design & Development",
        image:
          "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/4243011/1.jpg?5748",
      },

      {
        id: "2",
        price: "4000",
        description: "Design & Development",
        image:
          "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/3789291/13.jpg?9430",
      },
      {
        id: "3",
        price: "4000",
        description: "Design & Development",
        image:
          "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/3748901/1.jpg?1058",
      },
      {
        id: "4",
        price: "4000",
        description: "Design & Development",
        image:
          "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/114556/1.jpg?8547",
      },

      {
        id: "5",
        price: "4000",
        description: "Design & Development",
        image:
          "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/523389/1.jpg?7424",
      },

      {
        id: "6",
        price: "4000",
        description: "Design & Development",
        image:
          "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/9523401/1.jpg?0847",
      },
      {
        id: "7",
        price: "4000",
        description: "Design & Development",
        image:
          "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/4243011/1.jpg?5748",
      },

      {
        id: "8",
        price: "4000",
        description: "Design & Development",
        image:
          "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/3789291/13.jpg?9430",
      },
      {
        id: "9",
        price: "4000",
        description: "Design & Development",
        image:
          "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/3748901/1.jpg?1058",
      },
      {
        id: "10",
        price: "4000",
        description: "Design & Development",
        image:
          "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/114556/1.jpg?8547",
      },

      {
        id: "11",
        price: "4000",
        description: "Design & Development",
        image:
          "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/523389/1.jpg?7424",
      },

      {
        id: "12",
        price: "4000",
        description: "Design & Development",
        image:
          "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/9523401/1.jpg?0847",
      },
    ],
  };

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      {/* <div>productId</div> */}

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
                  <img key={index} src={item} className="carousel__image" />
                ))}
              </Carousel>
            ) : (
              <LaptopCarousel showThumbs={true}>
                {slideImages.map((item, index) => (
                  <img key={index} src={item} className="carousel__image" />
                ))}
              </LaptopCarousel>
            )}

            <button className="product-det__upload">
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
                    Was: {product.prevPrice}
                  </p>
                </span>
                <span className="product-det__price-terms">
                  <p className="product-det__price-label">Price: </p>
                  <h3 className="product-det__price">{product.price}</h3>
                </span>
                <span className="product-det__price-terms product-det__price-terms--notnes">
                  <p className="product-det__price-label">You save:</p>
                  {parseInt(product.prevPrice) - parseInt(product.price)}
                </span>
              </div>
              <p className="product-det__shipping">
                Shipping & Import Fees deposit to Nigeria.
              </p>
              <h4 className="product-det__stock-state">In Stock</h4>
            </div>
            <div className="product-det__right-div--mobile">
              <div className="product-det__btn-div">
                <button className="product-det__cart-btn rounded-full font-medium">
                  Add to Cart
                </button>
                <button className="product-det__buy-btn  rounded-full font-medium">
                  Buy Now
                </button>

                <button className="product-det__save-btn--tablet rounded-full">
                  Save Item
                </button>
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
                  <button className="product-det__save-btn rounded-full">
                    Save Item
                  </button>
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum necessitatibus neque eaque, distinctio quas eveniet
                  temporibus quae doloribus aspernatur illum ratione, impedit
                  modi voluptates optio ipsam fugit. Rerum incidunt
                  exercitationem ab provident esse ullam nostrum repudiandae
                  deleniti, vel deserunt rem modi est atque inventore nesciunt
                  unde, blanditiis veniam nobis? Commodi aliquam incidunt
                  dignissimos fugit illo labore id minus illum culpa asperiores
                  animi quos deleniti necessitatibus porro expedita doloribus
                  veniam, harum eaque cupiditate? Temporibus tenetur quo saepe.
                  Velit recusandae natus rerum, ipsum obcaecati veritatis nobis
                  quod possimus ad officiis exercitationem architecto ea fugiat?
                  Neque non expedita quos labore dolore, dicta aliquam eos natus
                  consequuntur corporis porro reiciendis at, unde assumenda
                  incidunt sapiente veritatis ullam sed error. Molestias maxime
                  laboriosam sapiente esse similique alias iure eos ipsa sit
                  rerum. Eius eaque ullam illo magnam commodi culpa voluptate
                  cupiditate, eos vel nemo maxime autem, suscipit earum tempore
                  dolor consequuntur facere possimus aliquid aperiam. Aspernatur
                  facere modi commodi, ipsam esse corporis velit delectus
                  dolorem tempore id! Accusantium eligendi quam, est eius
                  distinctio asperiores quas, laboriosam excepturi assumenda,
                  illum voluptate quae sit temporibus necessitatibus ad eos
                  aspernatur id! Quas laudantium impedit, necessitatibus ex
                  saepe eligendi nisi obcaecati, cupiditate enim reiciendis
                  autem accusamus voluptate dicta eum!
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
                  {attributes.map(([key, value]) => (
                    <div className="product-det__detail sm:w-[70%]" key={key}>
                      <h4 className="product-det__detail-name">
                        {productAttributesDatabase[key]}
                      </h4>
                      <p className="product-det__detail-value">{value}</p>
                    </div>
                  ))}
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
              <h3 className="product-det__price">{product.price}</h3>
              <p className="product-det__shipping">
                Shipping & Import Fees deposit to Nigeria.
              </p>
            </div>
            <div className="product-det__btn-div">
              <div className="product-det__quantity">
                <p className="mr-2">Qty: </p>
                <Dropdown options={options} />
              </div>
              <button className="product-det__cart-btn  rounded-full font-medium">
                Add to Cart
              </button>
              <button className="product-det__buy-btn rounded-full font-medium">
                Buy Now
              </button>
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
                <button className="product-det__save-btn rounded-full font-medium">
                  Save Item
                </button>
              </div>
            </div>
          </div>
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
