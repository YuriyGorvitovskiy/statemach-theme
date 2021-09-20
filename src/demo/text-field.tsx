import MuiTextField from "@material-ui/core/TextField";
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
  color?: "primary" | "secondary";
  label?: string;
  variant?: "outlined" | "filled" | "standard";
}
const DemoTextFieldCombo = (props: Props): React.ReactElement => {
  const classes = useStyles();
  return (
    <MuiGrid container alignItems="center" spacing={4}>
      <MuiGrid item className={classes.label}>
        <MuiTypography variant="h6">Color: {props.color}</MuiTypography>
        <MuiTypography variant="h6">Variant: {props.variant}</MuiTypography>
      </MuiGrid>
      <MuiGrid item>
        <MuiTextField {...props} placeholder="Placeholder" />
      </MuiGrid>
      <MuiGrid item>
        <MuiTextField {...props} placeholder="Disabled" disabled />
      </MuiGrid>
      <MuiGrid item>
        <MuiTextField {...props} placeholder="Required" required />
      </MuiGrid>
      <MuiGrid item>
        <MuiTextField {...props} placeholder="Error" error />
      </MuiGrid>
    </MuiGrid>
  );
};

const DemoButton = (): React.ReactElement => {
  return (
    <MuiGrid container direction="column" spacing={4}>
      <MuiGrid item>
        <DemoTextFieldCombo color="primary" variant="outlined" />
      </MuiGrid>
      <MuiGrid item>
        <DemoTextFieldCombo color="secondary" variant="outlined" />
      </MuiGrid>
      <MuiGrid item>
        <DemoTextFieldCombo color="primary" variant="filled" />
      </MuiGrid>
      <MuiGrid item>
        <DemoTextFieldCombo color="secondary" variant="filled" />
      </MuiGrid>
      <MuiGrid item>
        <DemoTextFieldCombo color="primary" variant="standard" />
      </MuiGrid>
      <MuiGrid item>
        <DemoTextFieldCombo color="secondary" variant="standard" />
      </MuiGrid>
      <MuiGrid item>
        <DemoTextFieldCombo
          color="primary"
          label="With Label"
          variant="outlined"
        />
      </MuiGrid>
      <MuiGrid item>
        <DemoTextFieldCombo
          color="secondary"
          label="With Label"
          variant="outlined"
        />
      </MuiGrid>
      <MuiGrid item>
        <DemoTextFieldCombo
          color="primary"
          label="With Label"
          variant="filled"
        />
      </MuiGrid>
      <MuiGrid item>
        <DemoTextFieldCombo
          color="secondary"
          label="With Label"
          variant="filled"
        />
      </MuiGrid>
      <MuiGrid item>
        <DemoTextFieldCombo
          color="primary"
          label="With Label"
          variant="standard"
        />
      </MuiGrid>
      <MuiGrid item>
        <DemoTextFieldCombo
          color="secondary"
          label="With Label"
          variant="standard"
        />
      </MuiGrid>
    </MuiGrid>
  );
};

export default DemoButton;
