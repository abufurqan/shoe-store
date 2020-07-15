import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import GlobalContext from "../../state/GlobalContext";
import { useNavigate } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    position: "relative",
    boxShadow: "6px 6px 10px 2px rgba(0, 0, 0, 0.2)",
    border: "4px solid #fff",
    borderRadius: "32% 68% 76% 24% / 65% 66% 34% 35%",
    background: "linear-gradient(-90deg, rgba(253,187,45,1) 20%, rgba(34,193,195,1) 100%)",
    transition: "1s ease",

    "&:hover": {
      cursor: "pointer",
      boxShadow: "none",
      border: "none",
      transform: "scale(1.05)",
      borderRadius: "50%",
      background: "#ffffff",
      transition: "1s ease",
    },

    [theme.breakpoints.down("md")]: {
    },
    [theme.breakpoints.down("xs")]: {
    },
  },
  media: {
    height: 300,

    "&:hover": {
      //transform: "scale(1.1)",
    },

    [theme.breakpoints.down("md")]: {
      height: 200,
    },
    [theme.breakpoints.down("xs")]: {
      height: 120,
    },
  },

  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    width: "100%",
    margin: "0 auto",

    [theme.breakpoints.only("md")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
  },

  h3ResponsiveText: {
    fontSize: "1.5rem",
    textShadow: "1px 1px 1px rgba(255, 255, 255, 0.5)",

    [theme.breakpoints.only("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.9rem",
    },
  },

  priceResponsive: {
    fontSize: "1.5rem",
    color: "#000",

    [theme.breakpoints.only("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.9rem",
    },
  },

  btnResponsiveText: {
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.8rem",
    },
  },

  row: {
    //display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
  },

  outOfStock: {
    color: "#fff",
    fontSize: "1.2rem",
  },
}));

const ProductCard = ({ product }) => {
  const classes = useStyles();
  const { addToCart } = useContext(GlobalContext);
  const navigate = useNavigate();

  function handleAddToCart(e) {
    e.stopPropagation();
    addToCart(product);
  }

  function handleClick(e) {
    console.log(e.target.value);
    navigate(`/products/${product.slug}`);
  }

  return (
    <Card className={classes.root} onClick={handleClick}>
      <CardMedia
        className={classes.media}
        image={product.imageURL}
        title={product.name}
      />
      <CardContent className={classes.cardContent}>
        <div style={{ width: "100%" }}>
          <div className={classes.row}>
            <Typography
              variant="h6"
              component="h3"
              className={classes.h3ResponsiveText}
            >
              {product.name}
              <div className={classes.priceResponsive}>
                ${product.price}<IconButton color="inherit" onClick={handleAddToCart}>
                  <AddShoppingCartIcon />
                </IconButton>
                <strong>{product.items_left}</strong> item
              </div>
            </Typography>
          </div>
          {product.items_left > 0 ? (
            <div>
            </div>
          ) : (
            <Typography variant="button" component="p" className={classes.outOfStock}>
              Out of Stock
            </Typography>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
