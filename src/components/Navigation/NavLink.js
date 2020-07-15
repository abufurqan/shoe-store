import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => {

  return {
    container: {
      padding: theme.spacing(3),
      textDecoration: "none",

      "&:hover": {
        cursor: "pointer",
      },
    },

    active: {
      borderColor: "#fff",
      background: "rgba(253,187,45,1)",
    },

    nameText: {
      color: "#fff",
    },
  };
});

const NavLinkz = ({ name, to, end }) => {
  const classes = useStyles();

  return (
    <NavLink
      to={to}
      className={classes.container}
      activeClassName={classes.active}
      end={end}
    >
      <Typography variant="button" className={classes.nameText}>
        {name}
      </Typography>
    </NavLink>
  );
};

export default NavLinkz;
