import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import GlobalContext from "../state/GlobalContext";
import { Grid, Container, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100wh",
    padding: theme.spacing(2),
    flexGrow: 10,
    color: "#fff",
    textShadow: "1px 1px 1px #000",
    background: "linear-gradient(90deg, rgba(253,187,45,1) 20%, rgba(34,193,195,1) 100%)",

    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  container: {
    padding: theme.spacing(2),
    flexGrow: 10,
  },
  image: {
    width: "100%",
    height: "auto",
    boxShadow: "6px 6px 10px 2px rgba(0, 0, 0, 0.2)",
    border: "4px solid #fff",
    borderRadius: "32% 68% 76% 24% / 65% 66% 34% 35%",
    transition: "1s ease",

    "&:hover": {
      cursor: "pointer",
      boxShadow: "none",
      border: "none",
      borderRadius: "50%",
      transition: "1s ease",
    },
  },
  button: {
    marginTop: theme.spacing(5),
    background: "linear-gradient(-90deg, rgba(253,187,45,1) 20%, rgba(34,193,195,1) 100%)",
    boxShadow: "6px 6px 10px 2px rgba(0, 0, 0, 0.2)",
    textShadow: "1px 1px 1px #fff",
    transition: "1s ease",

    "&:hover": {
      top: "2px",
      boxShadow: "none",
      color: "#fff",
      textShadow: "none",
      transition: "1s ease",
    },
  },
  name: {

    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
    },
  },
}));

const ProductDetailPage = () => {
  const classes = useStyles();
  const { slug } = useParams();
  const { products, addToCart } = useContext(GlobalContext);
  const [rating] = useState(3.5);

  const product = products.find((p) => p.slug === slug);

  if (!product) return <p>Product not found</p>;

  function handleAddToCart() {
    addToCart(product);
  }

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <img
              className={classes.image}
              src={product.imageURL}
              alt={product.name}
            />
          </Grid>
          <Grid item xs={12} md={6} container direction="column">
            <Grid item>
              <Typography variant="h4" className={classes.name}>
                {product.name}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {product.brand}
              </Typography>
            </Grid>
            <Grid
              item
              container
              justify="center"
              spacing={1}
              style={{ marginTop: 20 }}
            >
              <Grid item xs={6}>
                <Typography variant="button">Price</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="button"> ${product.price}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="button">Items left</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="button">{product.items_left}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="button">Rating</Typography>
              </Grid>
              <Grid item xs={6}>
                <Rating value={rating} precision={0.5} readOnly />
              </Grid>
            </Grid>
            <Grid item container>
              <Button
                className={classes.button}
                startIcon={<AddShoppingCartIcon />}
                onClick={handleAddToCart}
                disabled={product.items_left <= 0}
                fullWidth
              >
                Add to Cart
            </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductDetailPage;