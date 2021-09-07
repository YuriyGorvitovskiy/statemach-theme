import MuiFormControlLabel from "@material-ui/core/FormControlLabel";
import { Variant } from "@material-ui/core/styles/createTypography";
import MuiSwitch from "@material-ui/core/Switch";
import MuiTypography from "@material-ui/core/Typography";
import React from "react";
import MeasuringBox from "./measuring-box";

interface Props {
  variant: Variant;
  showMeasuringBox?: boolean;
}

const DemoSingleLine = (props: Props): React.ReactElement => {
  return (
    <MeasuringBox visible={props.showMeasuringBox}>
      <MuiTypography component="p" variant={props.variant}>
        {`This is ${props.variant} variant. `}
        <b>This is bold, </b>
        <em>and this is emphesized.</em>
      </MuiTypography>
    </MeasuringBox>
  );
};
const DemoMultipleLine = (props: Props): React.ReactElement => {
  return (
    <MeasuringBox visible={props.showMeasuringBox}>
      <MuiTypography component="p" variant={props.variant}>
        It really wasn’t designed for small sizes on screens. Words like
        <br />
        milliliter can be very difficult to decipher. If you ever had to read or
        <br />
        write a password with 1, i, l or I, you know the problem.
      </MuiTypography>
    </MeasuringBox>
  );
};

const DemoTypography = (): React.ReactElement => {
  const [showMeasuringBox, setShowMeasuringBox] = React.useState(false);
  return (
    <React.Fragment>
      <MuiFormControlLabel
        control={
          <MuiSwitch
            checked={showMeasuringBox}
            onChange={(e, v) => setShowMeasuringBox(v)}
            color="primary"
          />
        }
        label="Show Measuring Box"
      />
      <DemoSingleLine variant="h1" showMeasuringBox={showMeasuringBox} />
      <DemoSingleLine variant="h2" showMeasuringBox={showMeasuringBox} />
      <DemoSingleLine variant="h3" showMeasuringBox={showMeasuringBox} />
      <DemoSingleLine variant="h4" showMeasuringBox={showMeasuringBox} />
      <DemoSingleLine variant="h5" showMeasuringBox={showMeasuringBox} />
      <DemoSingleLine variant="h6" showMeasuringBox={showMeasuringBox} />
      <DemoSingleLine variant="subtitle1" showMeasuringBox={showMeasuringBox} />
      <DemoSingleLine variant="body1" showMeasuringBox={showMeasuringBox} />
      <DemoMultipleLine variant="body1" showMeasuringBox={showMeasuringBox} />
      <DemoSingleLine variant="subtitle2" showMeasuringBox={showMeasuringBox} />
      <DemoSingleLine variant="body2" showMeasuringBox={showMeasuringBox} />
      <DemoMultipleLine variant="body2" showMeasuringBox={showMeasuringBox} />
      <DemoSingleLine variant="button" showMeasuringBox={showMeasuringBox} />
      <DemoSingleLine variant="caption" showMeasuringBox={showMeasuringBox} />
      <DemoSingleLine variant="overline" showMeasuringBox={showMeasuringBox} />
    </React.Fragment>
  );
};

export default DemoTypography;
