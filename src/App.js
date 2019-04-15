import React, { Component } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import GifContainer from "./components/gifContainer";
import { styles } from "./AppStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import Footer from "./components/footer";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    secondary: {
      main: "#E1C62C"
    },

    primary: {
      main: "#00AAE7"
    }
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <GifContainer />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
