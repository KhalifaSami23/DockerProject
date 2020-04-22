import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 780,
    paddingRight: 32,
    paddingLeft: 32,
  },
}));

const Register = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="space-between"
      className={classes.root}
      alignItems="center"
    >
      <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
        <SignIn />
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
        <SignUp />
      </Grid>
    </Grid>
  );
};
export default Register;
