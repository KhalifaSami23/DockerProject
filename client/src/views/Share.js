import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 32,
    paddingRight: 32,
    paddingLeft: 32,
  },
}));

const Share = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid xs={12} sm={12} md={5} lg={5} xl={5}>
        <TextField
          variant="outlined"
          placeholder="titre du blog"
          style={{ marginBottom: 8 }}
          fullWidth
        />
      </Grid>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>

      </Grid>
    </Grid>
  );
};
export default Share;
