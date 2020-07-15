import React from "react";
import Grid from "@material-ui/core/Grid";
import ProductCard from "./ProductCard";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "auto",
    margin: 0,
    width: "100%",
    spacing: "8",
  },
  spacing: {
    padding: "16px",

    [theme.breakpoints.down("sm")]: {
      padding: "6px",
    },
  },
}));

const ProductGrid = ({ products }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${classes.grid}`}>
    <Grid container className={classes.root}>
      {products.length > 0 ? (
        products.map((product) => (
          <Grid key={product.id} item xs={6} md={4} className={classes.spacing}>
            <ProductCard product={product} />
          </Grid>
        ))
      ) : (
        <div style={{ width: "100%" }}>
          <Typography
            color="error"
            variant="body1"
            style={{ textAlign: "center", padding: "1rem" }}
          >
            No Product Available
          </Typography>
        </div>
      )}
    </Grid>
    </div>
  );
};

export default ProductGrid;
