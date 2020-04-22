import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useStore } from "../container/store";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: theme.palette.primary.dark,
    padding: 8,
  },
  brandNameContainer: {
    justifyContent: "flex-start",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  brandName: {
    textDecoration: "none",
  },
  buttonContainer: {
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },

  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    margin: theme.spacing(2),
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.main,
      transition: "0.5s ease",
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [user, dispatch] = useStore();

  const onLogout = () => {
    dispatch({type :'ON_LOGOUT'})
  }
  return (
    <Grid container className={classes.root}>
      <Grid
        item
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.navbar}
      >
        <Grid
          item
          container
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          className={classes.brandNameContainer}
        >
          <Typography
            variant="h3"
            color="secondary"
            component={Link}
            to="/"
            className={classes.brandName}
          >
            Docker Blog
          </Typography>
        </Grid>

        <Grid
          item
          container
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
          className={classes.buttonContainer}
        >
          <Button
            variant="contained"
            component={Link}
            to="/share"
            className={classes.button}
          >
            Poster
          </Button>
          {user._id !== undefined ? (
            <Button variant="contained" className={classes.button} onClick={onLogout}>
              Deconnexion
            </Button>
          ) : (
            <Button
              variant="contained"
              component={Link}
              to="/register"
              className={classes.button}
            >
              Inscription
            </Button>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavBar;
