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
      light: Color.PRIMARY_200,
      dark: Color.PRIMARY_800,
      contrastText: Color.BLACK_900,
    },
    secondary: {
      main: Color.SECONDARY_500,
      light: Color.SECONDARY_200,
      dark: Color.SECONDARY_800,
      contrastText: Color.BLACK_900,
    },
    error: {
      main: Color.ERROR_500,
      light: Color.ERROR_200,
      dark: Color.ERROR_800,
    },
    success: {
      main: Color.SUCCESS_500,
      light: Color.SUCCESS_200,
      dark: Color.SUCCESS_800,
      contrastText: Color.BLACK_900,
    },
    warning: {
      main: Color.WARNING_500,
      light: Color.WARNING_200,
      dark: Color.WARNING_800,
      contrastText: Color.BLACK_900,
    },
    background: {
      default: "#FFFFFF",
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: undefined,
      },
    },
    MuiSwitch: {
      root: {
        padding: "10px",
      },
      thumb: {
        boxShadow: undefined,
        height: "16px",
        margin: "2px",
        width: "16px",
      },
      track: {
        borderRadius: "12px",
      },
    },
  },
});

export default theme;
