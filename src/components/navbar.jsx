import { useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaCaretDown,
  FaUser,
  FaQuestionCircle,
  FaShoppingCart,
} from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const navRef = useRef();

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className=" navbar sticky top-0 left-0 flex items-center justify-between h-[60px] px-3 py-2 z-10 bg-white text-black md:p-4 lg:p-7">
      <button
        className="visible flex opacity-100 cursor-pointer bg-transparent border-none outline-none text-black  text-3xl lg:hidden"
        onClick={showNavbar}
      >
        <FaBars />
      </button>

      <nav
        className="items-center z-2  fixed top-[-100vh] left-0 h-screen w-screen text-center flex flex-col justify-center gap-6 bg-white transition duration-1000 lg:static lg:top-auto lg:left-auto lg:h-auto lg:w-auto lg:text-left lg:flex lg:flex-row lg:items-center lg:justify-start lg:gap-0 lg:bg-transparent"
        ref={navRef}
      >
        <button
          className="visible flex opacity-100 cursor-pointer bg-transparent border-none outline-none text-black  text-3xl  lg:hidden absolute top-4 left-2"
          onClick={showNavbar}
        >
          <FaTimes
            className="
    absolute top-1 left-1"
          />
        </button>
        <div className="navbar__dropdown relative mx-4 text-black">
          <button className="navbar__dropdown-btn hidden lg:flex flex-row items-center text-gray-700 border-none">
            <FaUser className="mx-1 mb-[-2px]" />
            Account
          </button>
          <div className="navbar__dropdown-content bg-white z-1 rounded-md overflow-hidden transition-height duration-300 ease-out flex justify-center flex-col lg:absolute lg:top-full lg:left-0 lg:z-1 lg:shadow-lg lg:h-0">
            <a href="#" className="navbar__dropdown-link">
              My Account
            </a>
            <a href="#" className="navbar__dropdown-link">
              Orders
            </a>
            <a href="#" className="navbar__dropdown-link">
              Saved Items
            </a>
            <hr className="navbar__dropdown-divider" />
            <button className="navbar__dropdown-link--btn">sign in</button>
          </div>
        </div>
        <div className="navbar__dropdown  relative mx-4 text-black">
          <button className="navbar__dropdown-btn hidden lg:flex flex-row items-center text-gray-700 border-none">
            <FaQuestionCircle className="mx-1 mb-[-2px]" />
            Help
            {/* <FaCaretDown className="navbar__dropdown-caret" /> */}
          </button>
          <div className=" navbar__dropdown-content bg-white z-1 rounded-md overflow-hidden transition-height duration-300 ease-out flex justify-center flex-col lg:absolute lg:top-full lg:left-0 lg:z-1 lg:shadow-lg lg:h-0">
            <a href="#" className="navbar__dropdown-link">
              Help Center
            </a>
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
            <button className="navbar__dropdown-link--btn">LIVE CHAT</button>
          </div>
        </div>
        <a href="/#" className="navbar__nav-link flex flex-row items-center">
          <FaShoppingCart className="navbar__nav-icon" />
          Cart
        </a>
      </nav>

      <form className="navbar__search-bar">
        <input
          className="navbar__search-box"
          type="text"
          placeholder="Search Products, Brands and Categories"
        />
        <button className="navbar__search-btn" type="submit">
          {isMobile === true ? <FaSearch /> : "search"}
        </button>
      </form>
    </header>
  );
}

export default Navbar;
