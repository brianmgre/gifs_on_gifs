import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { styles } from "../styles/toggleStyles";
import withStyles from "@material-ui/core/styles/withStyles";

const ToggleForm = props => {
  const { classes } = props;
  return (
    <FormGroup row className={classes.root}>
      <FormControlLabel
        control={
          <Switch
            checked={props.gifsOn}
            onChange={props.handleChange("gifsOn")}
            value={props.gifsOn}
            name="gifsOn"
            style={{ fontSize: "1.6rem" }}
          />
        }
        label={<span className={classes.tabLabel}>Turn on Gifs</span>}
        style={{ fontSize: "1.6rem" }}
      />
    </FormGroup>
  );
};

export default withStyles(styles)(ToggleForm);
