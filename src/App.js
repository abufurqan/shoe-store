import React, { useEffect, useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

import Footer from "./components/Footer/Footer";
import ShopingPage from "./pages/ShopingPage";
import CartPage from "./pages/CartPage";

import GlobalContext from "./state/GlobalContext";
import { products as mockProducts } from "./assets/apiSource";
import ProductDetailPage from "./pages/ProductDetailPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

function App() {
  const { recieveProducts, products } = useContext(GlobalContext);
  const classes = useStyles();

  useEffect(() => {
    recieveProducts(mockProducts);
    //   fetch(dataURL)
    //     .then((res) => res.json())
    //     .then((products) => recieveProducts(products))
    //     .catch((err) => {
    //       console.error("Error: ", err);
    //       setError(true);
    //     });
    //eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      <Navigation />

      {products.length > 0 ? (
        <Routes className={classes.content}>
          <Route path="/" element={<HomePage />} />
          <Route path="/men" element={<ShopingPage category="men" />} />
          <Route path="/women" element={<ShopingPage category="women" />} />
          <Route path="/kids" element={<ShopingPage category="kids" />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      ) : (
        <p>Fetching data...</p>
      )}

      <Footer />
    </div>
  );
}

export default App;