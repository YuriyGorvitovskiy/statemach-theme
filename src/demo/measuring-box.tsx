import React from "react";
import MuiTypography from "@material-ui/core/Typography";
import MuiGrid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import * as Color from "../style/color";

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: "nowrap",
    alignItems: "center",
  },
  boxHidden: {
    border: "1px solid " + Color.TRANSPARENT,
    margin: theme.spacing(2),
  },
  boxVisible: {
    border: "1px solid " + Color.PRIMARY_200,
    margin: theme.spacing(2),
  },
  measuresHidden: {
    color: Color.TRANSPARENT,
  },
  measuresVisible: {
    color: Color.PRIMARY_500,
  },
}));

export interface Props {
  visible?: boolean;
  children: React.ReactNode;
}

const MeasuringBox = (props: Props): React.ReactElement => {
  const classes = useStyles();
  const [ref, setRef] = React.useState<HTMLDivElement | null>();
  const rect = ref?.getClientRects()[0];
  return (
    <MuiGrid className={classes.root} container>
      <MuiGrid
        ref={(r) => setRef(r)}
        item
        className={props.visible ? classes.boxVisible : classes.boxHidden}
      >
        {props.children}
      </MuiGrid>
      <MuiGrid item>
        <MuiTypography
          variant="body2"
          className={
            props.visible ? classes.measuresVisible : classes.measuresHidden
          }
        >
          {rect ? rect.width - 2 + "x" + (rect.height - 2) : null}
        </MuiTypography>
      </MuiGrid>
    </MuiGrid>
  );
};

export default MeasuringBox;
