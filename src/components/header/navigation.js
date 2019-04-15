import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import { styles } from "../styles/navStyles";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleMenu = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          open={open}
          className={open ? classes.menu : classes.menuClosed}
          variant="persistent"
          anchor="left"
        >
          <div className={classes.menuHeader}>
            <IconButton onClick={this.handleMenu}>
              <i className="material-icons">close</i>
            </IconButton>
          </div>
          <List className={classes.navLinks}>
            <NavLink to="/" className={classes.navLink}>
              <Typography
                variant="h2"
                className={classes.navText}
                onClick={this.handleMenu}
              >
                Home
              </Typography>
            </NavLink>
            <NavLink to="/favorites" className={classes.navLink}>
              <Typography
                variant="h2"
                className={classes.navText}
                onClick={this.handleMenu}
              >
                Favorites
              </Typography>
            </NavLink>
          </List>
        </Drawer>
        <IconButton
          onClick={this.handleMenu}
          className={open ? classes.hidden : classes.menuButton}
        >
          <i className="material-icons mg-100" style={{ fontSize: 40 }}>
            menu
          </i>
        </IconButton>
      </div>
    );
  }
}

export default withStyles(styles)(Navigation);
