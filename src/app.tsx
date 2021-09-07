import MuiBox from "@material-ui/core/Box";
import MuiContainer from "@material-ui/core/Container";
import MuiLink from "@material-ui/core/Link";
import MuiTypography from "@material-ui/core/Typography";
import React from "react";
import DemoTypography from "./demo/typography";

function Copyright() {
  return (
    <MuiTypography variant="body2" color="textSecondary" align="center">
      Copyright © StateMach 2021.
    </MuiTypography>
  );
}

export default function App() {
  return (
    <MuiContainer>
      <MuiTypography variant="h4" component="h1" gutterBottom>
        StateMach Theme v0.0.1
      </MuiTypography>
      <DemoTypography />
      <Copyright />
    </MuiContainer>
  );
}
