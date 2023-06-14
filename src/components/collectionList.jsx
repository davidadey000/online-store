import React from "react";
import ProductCollection from "./productCollection";
import RangeCollection from "./rangeCollection";
import CategoryCollection from "./groupCollection";
import SlideShow from "./slideShow";
import AdBanner from "./adBanner";

// an alternative may to separate each collection object, create card for each collection and use on demand with the collections data all in the collectionsList.jsx, this will allow more customizatio as I can add banners in between

const CollectionList = () => {
  const collectionList = [
    {
      type: "product",
      collectionName: "Limited Store Deals",
      headerColor: "rgb(254, 226, 204)",
      products: [
        {
          id: "1",
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/4243011/1.jpg?5748",
        },

        {
          id: "2",
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/3789291/13.jpg?9430",
        },
        {
          id: "3",
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/3748901/1.jpg?1058",
        },
        {
          id: "4",
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/114556/1.jpg?8547",
        },

        {
          id: "5",
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/523389/1.jpg?7424",
        },

        {
          id: "6",
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/9523401/1.jpg?0847",
        },
        {
          id: "7",
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/4243011/1.jpg?5748",
        },

        {
          id: "8",
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/3789291/13.jpg?9430",
        },
        {
          id: "9",
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/3748901/1.jpg?1058",
        },
        {
          id: "10",
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/114556/1.jpg?8547",
        },

        {
          id: "11",
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/523389/1.jpg?7424",
        },

        {
          id: "12",
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/9523401/1.jpg?0847",
        },
      ],
    },
    {
      type: "product",
      collectionName: "Official Store Deals",
      headerColor: "rgb(254, 226, 204)",
      products: [
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/4243011/1.jpg?5748",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/3789291/13.jpg?9430",
        },
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/3748901/1.jpg?1058",
        },
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/114556/1.jpg?8547",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/523389/1.jpg?7424",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/9523401/1.jpg?0847",
        },
      ],
    },
    {
      type: "product",
      collectionName: "Large Applicances (Pay On Delivery)",
      headerColor: "rgb(254, 226, 204)",
      products: [
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/4243011/1.jpg?5748",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/3789291/13.jpg?9430",
        },
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/3748901/1.jpg?1058",
        },
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/114556/1.jpg?8547",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/523389/1.jpg?7424",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/9523401/1.jpg?0847",
        },
      ],
    },
    {
      type: "category",
      collectionName: "Shop From Our Collections!",
      headerColor: "#403B3B",
      textColor: "white",
      groups: [
        {
          description: "Phones & Tablets",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },

        {
          description: "Home & Office",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Health & Beauty",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Groceries",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },

        {
          description: "Video Games",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },

        {
          description: "Mobile Accessories",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Half Price Store",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Computing",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Electronics",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Fashion",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Portable Power",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Iphones and IOS Devices",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Phones & Tablets",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },

        {
          description: "Home & Office",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Health & Beauty",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Groceries",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },

        {
          description: "Video Games",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },

        {
          description: "Mobile Accessories",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Half Price Store",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Computing",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Electronics",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Fashion",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Portable Power",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Iphones and IOS Devices",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
      ],
    },
    {
      type: "product",
      collectionName: "Exclusive Deals",
      headerColor: "rgb(254, 226, 204)",
      products: [
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/4243011/1.jpg?5748",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/3789291/13.jpg?9430",
        },
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/3748901/1.jpg?1058",
        },
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/114556/1.jpg?8547",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/523389/1.jpg?7424",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/9523401/1.jpg?0847",
        },
      ],
    },
    {
      type: "price-points",
      collectionName: "Trend Spotting",
      headerColor: "#403B3B",
      textColor: "white",
      products: [
        {
          description: "Below ₦20,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/4243011/1.jpg?5748",
        },

        {
          description: "Below ₦250,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/3789291/13.jpg?9430",
        },
        {
          description: "Below ₦10,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/3748901/1.jpg?1058",
        },
        {
          description: "Below ₦150,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/114556/1.jpg?8547",
        },

        {
          description: "Below ₦400,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/523389/1.jpg?7424",
        },

        {
          description: "Below ₦20,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/9523401/1.jpg?0847",
        },
      ],
    },
    {
      type: "product",
      collectionName: "Top Deals",
      headerColor: "#B177DA",
      products: [
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/4243011/1.jpg?5748",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/3789291/13.jpg?9430",
        },
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/3748901/1.jpg?1058",
        },
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/114556/1.jpg?8547",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/523389/1.jpg?7424",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/9523401/1.jpg?0847",
        },
      ],
    },
    {
      type: "price-points",
      collectionName: "Budget Phones & Accessories",
      headerColor: "#403B3B",
      textColor: "white",
      products: [
        {
          description: "Below ₦20,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/4243011/1.jpg?5748",
        },

        {
          description: "Below ₦250,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/3789291/13.jpg?9430",
        },
        {
          description: "Below ₦10,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/3748901/1.jpg?1058",
        },
        {
          description: "Below ₦150,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/114556/1.jpg?8547",
        },

        {
          description: "Below ₦400,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/523389/1.jpg?7424",
        },

        {
          description: "Below ₦20,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/9523401/1.jpg?0847",
        },
      ],
    },
    {
      type: "product",
      collectionName: "Top Budget Phone Deals",
      headerColor: "rgb(254, 226, 204)",
      products: [
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/4243011/1.jpg?5748",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/3789291/13.jpg?9430",
        },
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/3748901/1.jpg?1058",
        },
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/114556/1.jpg?8547",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(w1200hite)/product/74/523389/1.jpg?7424",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/9523401/1.jpg?0847",
        },
      ],
    },
    {
      type: "slideshow",
      collectionName: "Our Official Store ",
      headerColor: "#403B3B",
      textColor: "white",
      slideImages: [
        {
          ImgUrl:
            "https://ng.jumia.is/cms/0-1-initiatives/jbps/updated-jbp-2022/adidas/mlp.jpg",
        },

        {
          ImgUrl:
            "https://ng.jumia.is/cms/0-1-initiatives/jbps/updated-jbp-2022/Diageo/Desktop-MLP-slider_-1168x384-(Show-Now).jpg",
        },

        {
          ImgUrl:
            "https://ng.jumia.is/cms/0-1-initiatives/jbps/updated-jbp-2022/samsung/Desktop_MLP_slider__1168x384_(Show_Now).jpg",
        },
      ],
    },

    {
      type: "category",
      collectionName: "Official Stores",
      headerColor: "#403B3B",
      textColor: "white",
      groups: [
        {
          description: "Phones & Tablets",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },

        {
          description: "Home & Office",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Health & Beauty",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Groceries",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },

        {
          description: "Video Games",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },

        {
          description: "Mobile Accessories",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Half Price Store",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Computing",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Electronics",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Fashion",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Portable Power",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Iphones and IOS Devices",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
      ],
    },

    {
      type: "category",
      collectionName: "",
      headerColor: "#403B3B",
      textColor: "white",
      groups: [
        {
          description: "Phones & Tablets",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },

        {
          description: "Home & Office",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Health & Beauty",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Groceries",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },

        {
          description: "Video Games",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },

        {
          description: "Mobile Accessories",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Half Price Store",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Computing",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Electronics",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Fashion",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Portable Power",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
        {
          description: "Iphones and IOS Devices",
          imgUrl:
            "https://ng.jumia.is/cms/0-0-black-friday/2021/userneeds/un/home-appliances_260x144v2.png",
        },
      ],
    },

    {
      type: "product",
      collectionName: "Large Appliances (Pay on Delivery)",
      headerColor: "#B177DA",
      products: [
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/4243011/1.jpg?5748",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/3789291/13.jpg?9430",
        },
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/3748901/1.jpg?1058",
        },
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/114556/1.jpg?8547",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/523389/1.jpg?7424",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/9523401/1.jpg?0847",
        },
      ],
    },
    {
      type: "product",
      collectionName: "Large Appliances (Pay on Delivery)",
      headerColor: "#C3DEF0",
      products: [
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/4243011/1.jpg?5748",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/3789291/13.jpg?9430",
        },
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/3748901/1.jpg?1058",
        },
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/114556/1.jpg?8547",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/523389/1.jpg?7424",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/9523401/1.jpg?0847",
        },
      ],
    },

    {
      type: "price-points",
      collectionName: "Health & Beauty",
      headerColor: "#403B3B",
      textColor: "white",
      products: [
        {
          description: "Below ₦20,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/4243011/1.jpg?5748",
        },

        {
          description: "Below ₦250,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/3789291/13.jpg?9430",
        },
        {
          description: "Below ₦10,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/3748901/1.jpg?1058",
        },
        {
          description: "Below ₦150,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/114556/1.jpg?8547",
        },

        {
          description: "Below ₦400,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/523389/1.jpg?7424",
        },

        {
          description: "Below ₦20,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/9523401/1.jpg?0847",
        },
      ],
    },

    {
      type: "price-points",
      collectionName: "Home & Office",
      headerColor: "#403B3B",
      textColor: "white",
      products: [
        {
          description: "Below ₦20,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/4243011/1.jpg?5748",
        },

        {
          description: "Below ₦250,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/3789291/13.jpg?9430",
        },
        {
          description: "Below ₦10,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/3748901/1.jpg?1058",
        },
        {
          description: "Below ₦150,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/114556/1.jpg?8547",
        },

        {
          description: "Below ₦400,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/523389/1.jpg?7424",
        },

        {
          description: "Below ₦20,000",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/9523401/1.jpg?0847",
        },
      ],
    },

    {
      type: "product",
      collectionName: "Large Appliances (Pay on Delivery)",
      headerColor: "#B177DA",
      products: [
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/4243011/1.jpg?5748",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/3789291/13.jpg?9430",
        },
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/3748901/1.jpg?1058",
        },
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/114556/1.jpg?8547",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/523389/1.jpg?7424",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/9523401/1.jpg?0847",
        },
      ],
    },
    {
      type: "product",
      collectionName: "Large Appliances (Pay on Delivery)",
      headerColor: "#B177DA",
      products: [
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/4243011/1.jpg?5748",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/3789291/13.jpg?9430",
        },
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/3748901/1.jpg?1058",
        },
        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/59/114556/1.jpg?8547",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/523389/1.jpg?7424",
        },

        {
          price: "₦4,000",
          description: "Design & Development",
          imgUrl:
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/9523401/1.jpg?0847",
        },
      ],
    },
  ];

  return (
    <div className="collection-list">
      <ProductCollection
        key={collectionList[0].collectionName}
        {...collectionList[0]}
      />

      <RangeCollection
        key={collectionList[5].collectionName}
        {...collectionList[5]}
      />

      <CategoryCollection
        key={collectionList[3].collectionName}
        {...collectionList[3]}
      />

      <SlideShow
        key={collectionList[9].collectionName}
        {...collectionList[9]}
      />

      {/* <AdBanner /> */}
    </div>
  );
};

export default CollectionList;
