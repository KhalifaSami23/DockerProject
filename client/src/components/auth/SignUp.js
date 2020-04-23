import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import CustomAlert from "../CustomAlert";

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

const SignUp = () => {
  const classes = useStyles();
  const [form, setForm] = React.useState({
    email: "",
    username: "",
    password: "",
    passwordRepeat: "",
  });
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: "",
    severity: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:80/api/user/register", form).then((res) => {
      if (res.statusText === "ERROR") {
        setSnackbar({
          open: true,
          severity: "error",
          message: res.data.message,
        });
        return;
      } else {
        setSnackbar({
          open: true,
          severity: "success",
          message: res.data.message,
        });
      }
    });
  };

  const onSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Grid
      container
      spacing={2}
      className={classes.root}
      component="form"
      onSubmit={onSubmit}
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
          placeholder="Nom d'utilisateur"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          fullWidth
          required
        />
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <TextField
            type="password"
            placeholder="Mot de passe"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <TextField
            type="password"
            placeholder="Repetez le mot de passe"
            value={form.passwordRepeat}
            onChange={(e) =>
              setForm({ ...form, passwordRepeat: e.target.value })
            }
            fullWidth
          />
        </Grid>
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
          Inscription
        </Button>
      </Grid>
    </Grid>
  );
};
export default SignUp;
