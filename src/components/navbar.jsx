import React, { useRef, useState } from "react";
import {
  HiMenu,
  HiX,
  HiSearch,
  HiUserCircle,
  HiCollection,
  HiHeart,
  HiChat,
  HiPhone,
  HiKey,
  HiShoppingCart,
} from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import SearchResults from "./SearchResults";
import { Link, useLocation } from "react-router-dom";
import { navbuttonData } from "../mockData/navButtons";
import NavButton from "./navBarComponents/NavButton";
import { productData } from "../mockData/product";
import { categoriesData } from "../mockData/category";
import { useEffect } from "react";
import Logo from "../assets/img/logo.png"


function Navbar({classes}) {
  const navRef2 = useRef();const location = useLocation();

  useEffect(() => {
    setIsAccountOpen(false);
    setIsHelpOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleHoverOutside = (event) => {
      if (navRef2.current && !navRef2.current.contains(event.target)) {
        setIsAccountOpen(false);
        setIsHelpOpen(false);
      }
    };

    document.addEventListener("mouseover", handleHoverOutside);
return () => {
  document.removeEventListener("mouseover", handleHoverOutside);
    };
  }, []);

  const navRef = useRef();
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const [searchResults, setSearchResults] = useState([]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAccountToggle = () => {
    setIsAccountOpen(!isAccountOpen);
    setIsHelpOpen(false);
  };

  const handleHelpToggle = () => {
    setIsHelpOpen(!isHelpOpen);
    setIsAccountOpen(false);
  };

  const handleChange = (e) => {
    const value = e.currentTarget.value;
    if (value) {
      setIsSearchActive(true);
      let results = productData.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
  
      const categoryResults = categoriesData
        .filter((category) =>
          category.collectionName.toLowerCase().includes(value.toLowerCase())
        )
        .flatMap((category) => category.products);
  
  
      results = [...results, ...categoryResults];
  
      // Remove duplicates based on the "id" property
      const uniqueResults = Object.values(
        results.reduce((acc, obj) => {
          acc[obj.id] = obj;
          return acc;
        }, {})
      );
  
      setSearchResults(uniqueResults);
    } else {
      setIsSearchActive(false);
      setSearchResults([]);
    }
  };
  
  

  const handleProductClick = () => {
    setIsSearchActive(false);
    setSearchResults([]);
  };

  const handleBlur = (e) => {
    const relatedTarget = e.relatedTarget;
    if (!relatedTarget || relatedTarget.id !== "search-result-link") {
      setIsSearchActive(false);
      setSearchResults([]);
    }
  };
  

  const searchResultComponent = isSearchActive && (
    <SearchResults
      searchResults={searchResults}
      handleProductClick={handleProductClick}
    />
  );

  return (
    <header ref={navRef2} className={`sticky top-0 left-0 flex items-center justify-between px-3 pt-4 py-2 z-10 bg-white text-black md:px-[2.5%] lg:pt-2 lg:px-[4%] ${classes}`}>
      {isMobile && (
        <div className="flex flex-col w-full gap-2">
          <div className="flex items-center justify-between w-full">
            <button
              className="visible flex opacity-100 cursor-pointer bg-transparent border-none outline-none text-black text-3xl lg:hidden"
              onClick={handleMenuToggle}
            >
              <HiMenu />
            </button>
            <Link to="/">
         <img src={Logo} alt="jumia" className="uppercase h-4 sm:h-5" />
            </Link>
          </div>
          <div className="lg:relative w-full lg:w-[400px]">
            <div className="relative">
              <input
                type="text"
                className="py-2 px-3 w-full text-sm bg-transparent border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
                placeholder="Search for products"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <HiSearch className="absolute top-3 right-3 text-lg text-gray-500" />
            </div>

            {searchResultComponent}
          </div>
          <nav
            className={`fixed top-0 left-0 h-screen w-[80%] sm:w-[65%] pt-20 flex flex-col z-50 gap-6 bg-white transition duration-200 transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            ref={navRef}
          >
            <button
              className="visible flex opacity-100 cursor-pointer bg-transparent border-none outline-none text-black text-3xl lg:hidden absolute top-3 left-2"
              onClick={handleMenuToggle}
            >
              <HiX className="absolute text-gray-500 top-[0.2rem] left-1 sm:left-3 sm:top-[0.5rem]" />
            </button>

            <div className="relative text-black">
              <NavButton
                handleMenuToggle={handleMenuToggle}
                {...navbuttonData[0]}
              />
              <div
                className={`bg-white z-1 gap-3  flex justify-center flex-col text-gray-500`}
              >
                <Link
                  onClick={handleMenuToggle}
                  to="/account"
                  className=" mx-4 sm:text-2xl flex items-center gap-1 font-semibold "
                >
                  <HiUserCircle />
                  My Account
                </Link>
                <Link
                  onClick={handleMenuToggle}
                  to="/orders"
                  className=" sm:text-2xl mx-4 flex items-center gap-1 font-semibold"
                >
                  <HiCollection />
                  Orders
                </Link>
                <Link
                  onClick={handleMenuToggle}
                  to="/saved"
                  className=" mx-4  sm:text-2xl flex items-center gap-1 font-semibold"
                >
                  <HiHeart /> Saved Items
                </Link>
                <Link
                  onClick={handleMenuToggle}
                  to="/signin"
                  className=" mx-4  flex items-center gap-1  sm:text-2xl  font-semibold"
                >
                  <HiKey /> Sign In
                </Link>
                <Link
                  onClick={handleMenuToggle}
                  to="/cart"
                  className=" mx-4  flex items-center gap-1  sm:text-2xl  font-semibold"
                >
                  <HiShoppingCart /> Cart
                </Link>
              </div>
            </div>
            <div className="relative text-black">
              <NavButton
                handleMenuToggle={handleMenuToggle}
                {...navbuttonData[1]}
              />
              <div
                className={`bg-white z-1 gap-3  flex justify-center flex-col text-gray-500`}
              >
                <Link
                  onClick={handleMenuToggle}
                  to="/faq"
                  className="mx-4  sm:text-2xl flex items-center gap-1 font-semibold"
                >
                  <HiChat /> FAQ
                </Link>
                <Link
                  onClick={handleMenuToggle}
                  to="/contact"
                  className=" mx-4  sm:text-2xl flex items-center gap-1 font-semibold"
                >
                  <HiPhone /> Contact Us
                </Link>
              </div>
            </div>
            {/* <div className="relative text-black">
              <NavButton
                handleMenuToggle={handleMenuToggle}
                {...navbuttonData[2]}
              />
            </div> */}
          </nav>
          {isMenuOpen && (
            <div
              className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-40"
              onClick={handleMenuToggle}
            ></div>
          )}
        </div>
      )}

      {!isMobile && (
        <>
          <div className="flex gap-10 items-center">
          <Link to="/">
         <img src={Logo} alt="jumia" className="uppercase h-5" />
            </Link>
            <div className="relative text-black">
              <NavButton
                handleMenuToggle={handleAccountToggle}
                {...navbuttonData[0]}
              />
              <div
                className={`dropdown-menu min-w-[150px] bg-white z-1 rounded-b-md overflow-hidden transition-height duration-300 ease-out flex justify-center flex-col absolute top-full left-0 shadow-lg ${
                  isAccountOpen ? "h-auto" : "h-0"
                }`}
              >
                <Link
                  to="/account"
                  className="py-2 px-5 hover:bg-red-200 whitespace-nowrap"
                >
                  My Account
                </Link>
                <Link to="/orders" className="py-2 px-5 hover:bg-red-200">
                  Orders
                </Link>
                <Link
                  to="/saved"
                  className="py-2 px-5 hover:bg-red-200  whitespace-nowrap"
                >
                  Saved Items
                </Link>
                <Link to="/signin" className="py-2 px-5 hover:bg-red-200">
                  Sign In
                </Link>
              </div>
            </div>
            <div className="relative text-black">
              <NavButton
                handleMenuToggle={handleHelpToggle}
                {...navbuttonData[1]}
              />
              <div
                className={`dropdown-menu min-w-[150px] bg-white z-1 rounded-b-md overflow-hidden transition-height duration-300 ease-out flex justify-center flex-col absolute top-full left-0 shadow-lg ${
                  isHelpOpen ? "h-auto" : "h-0"
                }`}
              >
                <Link
                  to="/faq"
                  className="py-2 px-5 whitespace-nowrap hover:bg-red-200"
                >
                  FAQ
                </Link>
                <Link
                  to="/contact"
                  className="py-2 px-5 whitespace-nowrap hover:bg-red-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative  text-black">
              <NavButton
                handleMenuToggle={handleMenuToggle}
                {...navbuttonData[2]}
              />
            </div>
          </div>
          <div className="relative w-full lg:w-[400px]">
            <div className="relative">
              <input
                type="text"
                className="py-2 px-3 w-full text-sm bg-transparent border border-gray-300 rounded-full focus:outline-none focus:ring-2  focus:ring-red-300 focus:border-transparent"
                placeholder="Search for products"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <HiSearch className="absolute top-3 right-3 text-lg text-gray-500" />
            </div>
            {searchResultComponent}
          </div>
        </>
      )}
    </header>
  );
}

export default Navbar;
