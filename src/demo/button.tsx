import MuiButton from "@material-ui/core/Button";
import MuiGrid from "@material-ui/core/Grid";
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
const DemoButtonColor = (props: Props): React.ReactElement => {
  const classes = useStyles();
  return (
    <MuiGrid container alignItems="center" spacing={4}>
      <MuiGrid item className={classes.label}>
        <MuiTypography variant="h6">
          Color: {props.color || "default"}
        </MuiTypography>
      </MuiGrid>
      <MuiGrid item>
        <MuiButton color={props.color} variant="contained">
          Contained
        </MuiButton>
      </MuiGrid>
      <MuiGrid item>
        <MuiButton color={props.color} variant="contained" disabled>
          Disabled
        </MuiButton>
      </MuiGrid>
      <MuiGrid item>
        <MuiButton color={props.color} variant="outlined">
          Outlined
        </MuiButton>
      </MuiGrid>
      <MuiGrid item>
        <MuiButton color={props.color} variant="outlined" disabled>
          Disabled
        </MuiButton>
      </MuiGrid>
      <MuiGrid item>
        <MuiButton color={props.color} variant="text">
          Text
        </MuiButton>
      </MuiGrid>
      <MuiGrid item>
        <MuiButton color={props.color} variant="text" disabled>
          Disabled
        </MuiButton>
      </MuiGrid>
    </MuiGrid>
  );
};

const DemoButton = (): React.ReactElement => {
  return (
    <MuiGrid container direction="column" spacing={4}>
      <MuiGrid item>
        <DemoButtonColor color="primary" />
      </MuiGrid>
      <MuiGrid item>
        <DemoButtonColor color="secondary" />
      </MuiGrid>
      <MuiGrid item>
        <DemoButtonColor />
      </MuiGrid>
    </MuiGrid>
  );
};

export default DemoButton;
