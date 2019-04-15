import React from "react";
import { styles } from "../styles/gifContainerStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Navigation from "./navigation";
import Typography from "@material-ui/core/Typography";
import ToggleForm from "./toggleForm";
import { Link } from "react-router-dom";

const Header = props => {
  const { classes } = props;

  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Navigation />
        <Link to="/" className={classes.logo}>
          <Typography variant="h2" className={classes.logo} onClick={scroll}>
            Gifs on Gifs
          </Typography>
        </Link>
        <ToggleForm handleChange={props.handleChange} gifsOn={props.gifsOn} />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
