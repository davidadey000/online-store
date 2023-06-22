import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";
import "./App.css";
import "./product.css";
// import "tailwindcss/tailwind.css";

// import "./products.css";
import CollectionList from "./components/CollectionList";
import About from "./components/about";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import TopBanner from "./components/topBanner";
import HeroSection from "./components/heroSection";
import Footer from "./components/footer";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/ProductList";

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
          <Route exact path="/product/:id" component={ProductDetail} />
          <Route exact path="/products/:collectionName" component={Products} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
