import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#2f3241",
      main: "#2b2e3b",
      dark: "#2b2e3b"
    },
    secondary: {
      light: "#74b1be",
      main: "#74b1be",
      dark: "#74b1be"
    }
  }
});

export default responsiveFontSizes(theme);
