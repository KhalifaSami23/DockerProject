import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import CustomAlert from "../CustomAlert";
import { useStoreDispatch } from "../../container/store";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.main,
      transition: "0.5s ease",
    },
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useStoreDispatch()
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: "",
    severity: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/user/login", form).then((res) => {
      if (res.statusText === "ERROR") {
        setSnackbar({
          open: true,
          message: res.data.message,
          severity: "error",
        });
        return;
      } else {
        setSnackbar({
          open: true,
          message: res.data.message,
          severity: "success",
        });
        dispatch({type: 'ON_LOGIN', user: res.data.user})
      }
    });
  };

  const onSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Grid
      component="form"
      container
      justify="center"
      spacing={2}
      onSubmit={onSubmit}
      className={classes.root}
    >
      <CustomAlert
        open={snackbar.open}
        onClose={onSnackbarClose}
        severity={snackbar.severity}
        message={snackbar.message}
      />
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <TextField
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <TextField
          type="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          fullWidth
          required
        />
      </Grid>
      <Grid
        container
        justify="center"
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
      >
        <Button type="submit" className={classes.button}>
          Connexion
        </Button>
      </Grid>
    </Grid>
  );
};
export default SignIn;
