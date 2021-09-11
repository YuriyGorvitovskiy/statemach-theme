import MuiContainer from "@material-ui/core/Container";
import MuiGrid from "@material-ui/core/Grid";
import MuiTab from "@material-ui/core/Tab";
import MuiTabs from "@material-ui/core/Tabs";
import MuiTypography from "@material-ui/core/Typography";
import React from "react";
import DemoButton from "./demo/button";
import DemoSwitch from "./demo/switch";
import DemoTypography from "./demo/typography";

function Copyright() {
  return (
    <MuiTypography variant="body2" color="textSecondary" align="center">
      Copyright © StateMach 2021.
    </MuiTypography>
  );
}
enum Tab {
  BUTTON,
  SWITCH,
  TYPOGRAPHY,
}
export default function App() {
  const [tab, setTab] = React.useState<Tab>(0);
  return (
    <MuiContainer>
      <MuiTypography variant="h1" component="h1" gutterBottom>
        StateMach Theme v0.0.1
      </MuiTypography>
      <MuiGrid container wrap="nowrap" spacing={3}>
        <MuiGrid item>
          <MuiTabs
            orientation="vertical"
            value={tab}
            onChange={(e, v) => setTab(v)}
          >
            <MuiTab label="Button" />
            <MuiTab label="Switch" />
            <MuiTab label="Typography" />
          </MuiTabs>
        </MuiGrid>
        <MuiGrid item hidden={tab !== Tab.BUTTON}>
          <DemoButton />
        </MuiGrid>
        <MuiGrid item hidden={tab !== Tab.SWITCH}>
          <DemoSwitch />
        </MuiGrid>
        <MuiGrid item hidden={tab !== Tab.TYPOGRAPHY}>
          <DemoTypography />
        </MuiGrid>
      </MuiGrid>
      <Copyright />
    </MuiContainer>
  );
}
