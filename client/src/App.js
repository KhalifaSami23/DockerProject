import React from "react";
import CssBaseLine from "@material-ui/core/CssBaseline";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Register from "./views/Register";
import Share from "./views/Share";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <Grid container className={classes.root}>
        <CssBaseLine />
        <NavBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/share" component={Share} />
        </Switch>
      </Grid>
    </Router>
  );
};
export default App;
