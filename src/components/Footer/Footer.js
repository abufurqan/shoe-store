import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { FaGithub, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { githubURL, facebookURL, twitterURL, instagramURL, linkedInURL,  } from "./../../assets/social";

const useStyles = makeStyles((theme) => ({
  footer: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: "rgba(253,187,45,1)",

    [theme.breakpoints.down("sm")]: {
      background: "linear-gradient(90deg, rgba(253,187,45,1) 20%, rgba(34,193,195,1) 100%)",
    },
  },

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: theme.spacing(1),

    [theme.breakpoints.down("sm")]: {
      //flexDirection: "column",
    },
  },

  btn: {
    color: theme.palette.secondary.contrastText,
    padding: "5px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container className={classes.container}>
        <div>
          <IconButton className={classes.btn} aria-label="github">
            <Link href={githubURL} target="_blank">
              <FaGithub />
            </Link>
          </IconButton>
          <IconButton className={classes.btn} aria-label="facebook">
            <Link href={facebookURL} target="_blank">
              <FaFacebookF />
            </Link>
          </IconButton>
          <IconButton className={classes.btn} aria-label="twitter">
            <Link href={twitterURL} target="_blank">
              <FaTwitter />
            </Link>
          </IconButton>
          <IconButton className={classes.btn} aria-label="instagram">
            <Link href={instagramURL} target="_blank">
              <FaInstagram />
            </Link>
          </IconButton>
          <IconButton className={classes.btn} aria-label="linkedin">
            <Link href={linkedInURL} target="_blank">
              <FaLinkedin />
            </Link>
          </IconButton>
        </div>
        <Typography>Fiaz Ahmed</Typography>
      </Container>
    </footer>
  );
};

export default Footer;