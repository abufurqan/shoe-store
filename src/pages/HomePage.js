import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import CategoryCard from "../components/Home/CategoryCard";
import { useNavigate } from "react-router-dom";

import Men from './../assets/men.jpg';
import Kids from './../assets/kids.jpg';
import Women from './../assets/women.jpg';

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
    marginTop: theme.spacing(2),

    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },

  subHeading: {
    fontWeight: "100",
    marginBottom: theme.spacing(10),
    fontSize: "3rem",

    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },

  years: {
    fontWeight: "100",
    marginBottom: theme.spacing(10),
    fontSize: "2rem",

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },

  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <Container>
        <Typography
          variant="h1"
          color="primary"
          align="center"
          className={classes.heading}
        >
          Shoe Stunner
        </Typography>
        <Typography
          variant="h2"
          color="primary"
          align="center"
          className={classes.subHeading}
        >
          Sneaker Boutique
        <Typography
          align="center"
          className={classes.years}
        >
          since 1975
        </Typography>
        </Typography>
        <div className={classes.cardContainer}>
          <CategoryCard
            name="Men"
            imageURL={Men}
            onClick={() => navigate("/men")}
          />
          <CategoryCard
            name="Kids"
            imageURL={Kids}
            onClick={() => navigate("/kids")}
          />
          <CategoryCard
            name="Women"
            imageURL={Women}
            onClick={() => navigate("/women")}
          />
        </div>
      </Container>
    </div>
  );
};

export default HomePage;