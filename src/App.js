import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import "./App.css";
import "./product.css";
import Navbar from "./components/navbar";
import AlternativeNavbar from "./components/AlternativeNavbar"; // Import the alternative Navbar component
import TopBanner from "./components/topBanner";
import Footer from "./components/footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/ProductList";
import Help from "./pages/Help";
import Cart from "./pages/Cart";
import Saved from "./pages/Saved";
import Signin from "./pages/Signin";
import Orders from "./pages/Orders";
import Account from "./pages/Account";
import Chat from "./pages/Chat";
import CartProvider from "./services/CartProvider";
import SavedProvider from "./services/SavedProvider";
import NotFound from "./pages/NotFound";

function Layout({ children }) {
  const location = useLocation();
  const hideFooterRoutes = ["/signin", "/404"]; // Add the routes where you want to hide the footer
  const alternativeNavbarRoutes = ["/saved", "/signin", "/cart"]; // Add the routes where you want to use the alternative Navbar

  useEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <TopBanner />
      {alternativeNavbarRoutes.includes(location.pathname) ? (
        <AlternativeNavbar currentUrl={location.pathname} />
      ) : (
        <Navbar currentUrl={location.pathname} />
      )}
      <ToastContainer />
      {children}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.pathname);
  }, []);

  return (
    <Router>
      <CartProvider>
        <SavedProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/products/:collectionName" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/help" element={<Help />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/account" element={<Account />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </Layout>
        </SavedProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
