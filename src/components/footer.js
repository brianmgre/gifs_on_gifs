import React from "react";
import { styles } from "./styles/footerStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Footer = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.footerAppBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" className={classes.logo}>
            Copyright Gifs on Gifs 2019
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Footer);
