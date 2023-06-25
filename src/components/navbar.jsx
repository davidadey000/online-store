import { useRef, useState } from "react";

import {
  HiMenu,
  HiX,
  HiSearch,
  HiUserCircle,
  HiQuestionMarkCircle,
  HiShoppingCart,
} from "react-icons/hi";

import { useMediaQuery } from "react-responsive";
import SearchResults from "./SearchResults";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [IsSearchActive, setIsSearchActive] = useState(false);

  const handleChange = (e) => {
    const value = e.currentTarget.value;
    value ? setIsSearchActive(true) : setIsSearchActive(false);
  };

  const handleBlur = () => {
    setIsSearchActive(false);
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  function handleSearchChange() {}

  return (
    <header className="navbar sticky top-0 left-0 flex items-center justify-between h-[60px] px-3 py-2 z-10 bg-white text-black md:py-4 md:px-[2.5%] lg:py-7 lg:px-[4%]">
      <button
        className="visible flex opacity-100 cursor-pointer bg-transparent border-none outline-none text-black  text-3xl lg:hidden"
        onClick={showNavbar}
      >
        <HiMenu />
      </button>
      <nav
        className="items-center z-20 overflow-y-hidden lg:overflow-y-visible fixed top-[-100vh] left-0 h-screen w-screen text-center flex flex-col justify-center gap-6 bg-white transition duration-500 lg:static lg:top-auto lg:left-auto lg:h-auto lg:w-auto lg:text-left lg:flex lg:flex-row lg:items-center lg:justify-start lg:gap-0 lg:bg-transparent"
        ref={navRef}
      >
        <button
          className="visible flex opacity-100 cursor-pointer bg-transparent border-none outline-none text-black  text-3xl  lg:hidden absolute top-4 left-2"
          onClick={showNavbar}
        >
          <HiX
            className="
    absolute top-[0.2rem] left-1"
          />
        </button>
        <Link to="/">
          <button className="text-2xl lg:mr-10 uppercase">jumia</button>
        </Link>
        <div className="navbar__dropdown relative mx-4 text-black">
          <button className="navbar__dropdown-btn hidden lg:flex flex-row items-center text-gray-700 border-none">
            <HiUserCircle className="mx-1 mb-[-2px]" />
            Account
          </button>
          <div className="navbar__dropdown-content bg-white z-1 rounded-md overflow-hidden transition-height duration-300 ease-out flex justify-center flex-col lg:absolute lg:top-full lg:left-0 lg:z-1 lg:shadow-lg lg:h-0">
            <Link
              onClick={hideNavbar}
              to="/account/"
              className="navbar__dropdown-link"
            >
              My Account
            </Link>
            <Link
              onClick={hideNavbar}
              to="/orders/"
              className="navbar__dropdown-link"
            >
              Orders
            </Link>
            <Link
              onClick={hideNavbar}
              to="/saved/"
              className="navbar__dropdown-link"
            >
              Saved Items
            </Link>
            <hr className="navbar__dropdown-divider" />
            <Link onClick={hideNavbar} to="/signin/" className="px-2 w-full">
              <button className="uppercase w-full  inline-block my-2 p-3  border-none bg-red-400 text-white text-xs font-bold text-center tracking-wide rounded-md shadow-md transition-all duration-300 lg:hover:bg-black">
                sign in
              </button>
            </Link>
          </div>
        </div>
        <div className="navbar__dropdown  relative mx-4 text-black">
          <button className="navbar__dropdown-btn hidden lg:flex flex-row items-center text-gray-700 border-none">
            <HiQuestionMarkCircle className="mx-1 mb-[-2px]" />
            Help
          </button>
          <div className=" navbar__dropdown-content bg-white z-1 rounded-md overflow-hidden transition-height duration-300 ease-out flex justify-center flex-col lg:absolute lg:top-full lg:left-0 lg:z-1 lg:shadow-lg lg:h-0">
            <Link
              onClick={hideNavbar}
              to="/help/"
              className="navbar__dropdown-link"
            >
              Help Center
            </Link>
            <a href="#" className="navbar__dropdown-link">
              Place & Track Order
            </a>
            <a href="#" className="navbar__dropdown-link">
              Order Cancellation
            </a>
            <a href="#" className="navbar__dropdown-link">
              Return & Refunds
            </a>

            <a href="#" className="navbar__dropdown-link">
              Payment & Jumia account
            </a>
            <hr className="navbar__dropdown-divider" />
            <Link onClick={hideNavbar} to="/chat/" className="px-2 w-full">
              <button className="uppercase w-full  inline-block my-2 p-3 border-none bg-red-400 text-white text-xs font-bold text-center tracking-wide rounded-md shadow-md transition-all duration-300 hover:bg-black">
                LIVE CHAT
              </button>
            </Link>
          </div>
        </div>
        <Link
          to="/cart/"
          className="navbar__nav-link flex flex-row items-center mx-4"
          onClick={hideNavbar}
        >
          <HiShoppingCart className="navbar__nav-icon" />
          Cart
        </Link>
      </nav>
      <form className="w-[85%] sm:w-[65%] lg:w-[40%] flex justify-end items-center relative">
        <input
          className="p-[10px] z-10 w-full h-full border border-transparent border-b-black focus:outline-none"
          type="text"
          placeholder="Search Products, Brands and Categories"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button className="navbar__search-btn" type="submit">
          {isMobile === true ? <HiSearch /> : "search"}
        </button>
        {IsSearchActive && <SearchResults />}
      </form>
    </header>
  );
}

export default Navbar;
