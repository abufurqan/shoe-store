import React, { useState, useContext } from "react";
import ProductGrid from "../components/Products/ProductGrid";
import { makeStyles } from "@material-ui/core/styles";

import GlobalContext from "../state/GlobalContext";
import { Outlet } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(90deg, rgba(253,187,45,1) 20%, rgba(34,193,195,1) 100%)",
    display: "flex",
    minHeight: "80vh",
    padding: "100px",
    margin: "0",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: "20px",
      margin: "0",
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function getProductsByCategory(index, products) {
  switch (index) {
    case 0:
      return products;

    default:
      break;
  }
}

const ShopingPage = ({ category }) => {
  const classes = useStyles();
  const [selectedIndex] = useState(0);
  const { products } = useContext(GlobalContext);

  const allProductsForGender = products.filter(
    (p) => p.gender.toLowerCase() === category.toLowerCase()
  );

  const productsByCategory = getProductsByCategory(
    selectedIndex,
    allProductsForGender
  );

  return (
    <div className={classes.root}>
        <ProductGrid products={productsByCategory} />
      <Outlet />
    </div>
  );
};

export default ShopingPage;