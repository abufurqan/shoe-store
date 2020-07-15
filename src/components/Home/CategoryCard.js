import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(2),
    boxShadow: "6px 6px 10px 2px rgba(0, 0, 0, 0.2)",
    background: "linear-gradient(-90deg, rgba(253,187,45,1) 20%, rgba(34,193,195,1) 100%)",
    border: "4px solid #fff",
    borderRadius: "32% 68% 76% 24% / 65% 66% 34% 35%",
    transition: "1s ease",

    "&:hover": {
      cursor: "pointer",
      boxShadow: "none",
      border: "none",
      transform: "scale(1.1)",
      borderRadius: "50%",
      transition: "1s ease",
    },

    [theme.breakpoints.down("sm")]: {
    },
    [theme.breakpoints.down("xs")]: {
      margin: "5px",
      borderRadius: "20px 10px 20px 10px",
      border: "1px solid #fff",
    },
  },
  media: {
    height: 160,
  },

  cardContent: {
  },

  name: {
    textAlign: "center",
    color: "#000",
    textShadow: "1px 1px 1px #fff",


    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
      marginRight: 2,
    },
  },
}));

const CategoryCard = ({ name, imageURL, onClick }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={onClick}>
      <CardMedia className={classes.media} image={imageURL} title={name} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6" component="h4" className={classes.name}>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
