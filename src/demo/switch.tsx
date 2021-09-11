import MuiGrid from "@material-ui/core/Grid";
import MuiSwitch from "@material-ui/core/Switch";
import MuiTypography from "@material-ui/core/Typography";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  label: {
    width: "180px",
  },
}));

interface Props {
  color?: "primary" | "secondary" | "default";
}
const DemoSwitchColor = (props: Props): React.ReactElement => {
  const classes = useStyles();
  const [state, setState] = React.useState(false);
  return (
    <MuiGrid container alignItems="center" spacing={4}>
      <MuiGrid item className={classes.label}>
        <MuiTypography variant="h6">
          Color: {props.color || "default"}
        </MuiTypography>
      </MuiGrid>
      <MuiGrid item>
        <MuiSwitch
          color={props.color}
          checked={state}
          onChange={(e, v) => setState(v)}
        />
      </MuiGrid>
      <MuiGrid item>
        <MuiSwitch
          color={props.color}
          checked={!state}
          onChange={(e, v) => setState(!v)}
        />
      </MuiGrid>
      <MuiGrid item>
        <MuiSwitch
          color={props.color}
          disabled
          checked={state}
          onChange={(e, v) => setState(v)}
        />
      </MuiGrid>
      <MuiGrid item>
        <MuiSwitch
          color={props.color}
          disabled
          checked={!state}
          onChange={(e, v) => setState(!v)}
        />
      </MuiGrid>
    </MuiGrid>
  );
};

const DemoSwitch = (): React.ReactElement => {
  return (
    <MuiGrid container direction="column" spacing={4}>
      <MuiGrid item>
        <DemoSwitchColor color="primary" />
      </MuiGrid>
      <MuiGrid item>
        <DemoSwitchColor color="secondary" />
      </MuiGrid>
      <MuiGrid item>
        <DemoSwitchColor />
      </MuiGrid>
    </MuiGrid>
  );
};

export default DemoSwitch;
