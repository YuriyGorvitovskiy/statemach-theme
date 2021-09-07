import React from "react";
import ReactDOM from "react-dom";
import MuiCssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./app";
import theme from "./style/theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <MuiCssBaseline />
    <App />
  </ThemeProvider>,
  document.querySelector("#root")
);
