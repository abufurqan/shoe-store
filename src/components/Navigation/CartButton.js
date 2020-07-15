import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";

import { useNavigate } from "react-router-dom";
import GlobalContext from "../../state/GlobalContext";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  icon: {
    color: "#fff",
  },
  dot: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,.5)",
    borderRadius: "50%",
    width: 18,
    height: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cartItemText: {
    color: "rgba(253,187,45,1)",
    fontSize: "0.85rem",
    fontWeight: "bold",
  },
}));

const CartButton = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { cart } = useContext(GlobalContext);

  const items = cart.map((p) => p.items);
  let numOfItems = 0;
  if (items.length) numOfItems = items.reduce((a, b) => a + b);

  return (
    <IconButton onClick={() => navigate("cart")} className={classes.root}>
      {numOfItems > 0 && (
        <div className={classes.dot}>
          <Typography className={classes.cartItemText}>{numOfItems}</Typography>
        </div>
      )}
      <ShoppingCartIcon className={classes.icon} />
    </IconButton>
  );
};

export default CartButton;
