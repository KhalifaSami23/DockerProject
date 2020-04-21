import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: theme.palette.primary.dark,
    padding: 8,
  },
  brandNameContainer: {
      justifyContent: 'flex-start',
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center'
      }
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  button: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      margin: theme.spacing(2),
      '&:hover': {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.secondary.main,
          transition: '0.5s ease'
      }
  }
}));

const NavBar = () => {
  const classes = useStyles();
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
        <Grid item container  xs={12} sm={12} md={8} lg={8} xl={8} className={classes.brandNameContainer}>
          <Typography variant="h3" color="secondary">
            Docker Blog
          </Typography>
        </Grid>

        <Grid item container  xs={12} sm={12} md={4} lg={4} xl={4} className={classes.buttonContainer}>
          <Button variant="contained" className={classes.button}>Connexion</Button>
          <Button variant="contained" className={classes.button}>Inscription</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavBar;
