import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import Logo from './logo.png';

import NavLink from "./NavLink";
import CartButton from "./CartButton";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    background: "rgba(34,193,195,1)",
    
    [theme.breakpoints.down("sm")]: {
      background: "linear-gradient(90deg, rgba(253,187,45,1) 20%, rgba(34,193,195,1) 100%)",
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
  },
  links: {
    display: "flex",
  },
  menuButton: {
    color: theme.palette.primary.contrastText,
  },
  rightContainer: {
    [theme.breakpoints.up("md")]: {
      marginLeft: 80,
    },
  },
}));

const Navbar = ({ onMenuClickHandler }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar className={classes.container}>
          <Link to="/">
            <img src={Logo} alt="logo" height="64px" />
          </Link>
          <Hidden xsDown>
            <div className={classes.links}>
              <NavLink name="Home" to="/" end={true} />
              <NavLink name="Men" to="men" />
              <NavLink name="Women" to="women" />
              <NavLink name="Kids" to="kids" />
            </div>
          </Hidden>

          <div className={classes.rightContainer}>
            <CartButton />

            <Hidden smUp>
              <IconButton
                className={classes.menuButton}
                edge="end"
                aria-label="menu"
                onClick={onMenuClickHandler}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
