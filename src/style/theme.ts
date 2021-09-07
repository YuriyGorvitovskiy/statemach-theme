import { createTheme } from "@material-ui/core/styles";
import * as Color from "./color";

// A custom theme for this app
const theme = createTheme({
  spacing: 3,
  typography: {
    fontFamily: "Montserrat",
    fontSize: 15,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontSize: "27px",
      fontWeight: 500,
      lineHeight: "30px",
    },
    h2: {
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "27px",
    },
    h3: {
      fontSize: "24px",
      fontWeight: 300,
      lineHeight: "27px",
    },
    h4: {
      fontSize: "21px",
      fontWeight: 500,
      lineHeight: "24px",
    },
    h5: {
      fontSize: "21px",
      fontWeight: 300,
      lineHeight: "24px",
    },
    h6: {
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "21px",
    },
    subtitle1: {
      fontSize: "15px",
      fontWeight: 500,
      lineHeight: "18px",
    },
    subtitle2: {
      fontFamily: "Roboto Mono",
      fontWeight: 500,
      lineHeight: "18px",
    },
    body1: {
      fontSize: "15px",
      lineHeight: "18px",
    },
    body2: {
      fontFamily: "Roboto Mono",
      lineHeight: "18px",
    },
    button: {
      fontSize: "15px",
      fontWeight: 500,
      lineHeight: "24px",
      textTransform: undefined,
    },
    caption: {
      fontSize: "12px",
      lineHeight: "21px",
    },
    overline: {
      fontSize: "12px",
      lineHeight: "30px",
      textTransform: undefined,
    },
  },
  palette: {
    primary: {
      main: Color.PRIMARY_500,
    },
    secondary: {
      main: "#9C9A9B",
    },
    error: {
      main: "#B86556",
    },
    background: {
      default: "#FFFFFF",
    },
  },
});

export default theme;
