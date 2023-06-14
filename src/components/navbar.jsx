import { useRef } from "react";
import { FaBars, FaTimes, FaSearch, FaCaretDown, FaUser, FaQuestionCircle, FaShoppingCart } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const navRef = useRef();

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="navbar" >
      <button className="navbar__nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>

      <nav className="navbar__nav" ref={navRef}>
        <button
          className="navbar__nav-btn navbar__nav-btn--close"
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
        <div className="navbar__dropdown">
          <button className="navbar__dropdown-btn"><FaUser className="navbar__nav-icon"/>
            Account 
            {/* <FaCaretDown className="navbar__dropdown-caret" /> */}
          </button>
          <div className="navbar__dropdown-content">
            <button className="navbar__dropdown-link--btn">sign in</button>

            <hr className="navbar__dropdown-divider" />
            <a href="#" className="navbar__dropdown-link">
              My Account
            </a>
            <a href="#" className="navbar__dropdown-link">
              Orders
            </a>
            <a href="#" className="navbar__dropdown-link">
              Saved Items
            </a>
          </div>
        </div>
        <div className="navbar__dropdown">
          <button className="navbar__dropdown-btn"><FaQuestionCircle className="navbar__nav-icon"/>
            Help
             {/* <FaCaretDown className="navbar__dropdown-caret" /> */}
          </button>
          <div className="navbar__dropdown-content">
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
        <a href="/#" className="navbar__nav-link"><FaShoppingCart className="navbar__nav-icon"/>
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
