import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 10,
    background: "linear-gradient(90deg, rgba(253,187,45,1) 20%, rgba(34,193,195,1) 100%)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
    },
  },

  heading: {
    fontWeight: "bold",
    color: "#000",
    marginTop: theme.spacing(2),
    textShadow: "1px 1px 1px #fff",

    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Typography
          variant="h1"
          color="primary"
          align="center"
          className={classes.heading}
        >
          Page Not Found
        </Typography>
      </Container>
    </div>
  );
};

export default NotFound;