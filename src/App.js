import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";
import "./App.css";
import "./product.css";
// import "./products.css";
import CollectionList from "./components/collectionList";
import About from "./components/about";
import Home from "./components/home";
import Navbar from "./components/navbar";
import TopBanner from "./components/topBanner";
import HeroSection from "./components/heroSection";
import Footer from "./components/footer";
import Product from "./components/product";
import Products from "./components/products";

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
        <Switch>
          {/* <Route exact path="/products/" */}
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/products/:collectionName" component={Products} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
