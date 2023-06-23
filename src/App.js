import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";
import "./App.css";
import "./product.css";
import Navbar from "./components/navbar";
import TopBanner from "./components/topBanner";
import Footer from "./components/footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/ProductList";
import Help from "./pages/Help";
import Cart from "./pages/Cart";
import Saved from "./pages/Saved";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Orders from './pages/Orders';
import Account from './pages/Account';
import Chat from "./pages/Chat";
import CartProvider from './services/CartProvider';

function App() {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.pathname);
  }, []);

  return (
    <Router>
      <div>
        <TopBanner />
        <Navbar currentUrl={currentUrl} />
       <CartProvider>
        <Switch>
          {/* <Route exact path="/products/" */}
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id/" component={ProductDetail} />
          <Route exact path="/products/:collectionName/" component={Products} />
          <Route exact path="/cart/" component={Cart} />
          <Route exact path="/orders/" component={Orders} />
          <Route exact path="/help/" component={Help} />
          <Route exact path="/saved/" component={Saved} />
          <Route exact path="/signin/" component={Signin} />
          <Route exact path="/signup/" component={Signup} />
          <Route exact path="/account/" component={Account} />
          <Route exact path="/chat/" component={Chat} />
        </Switch>
        </CartProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
