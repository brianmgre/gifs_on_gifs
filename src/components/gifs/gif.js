import React, { Component } from "react";
import GifModal from "../modal/gifModal";
import { styles } from "../styles/gifStyles";
import withStyles from "@material-ui/core/styles/withStyles";

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  open = () => {
    this.setState({ open: !this.state.open });
  };

  close = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.imgContainer}>
        <GifModal
          addToFavorites={this.props.addToFavorites}
          open={this.state.open}
          close={this.close}
          gif={this.props.gif}
          checkInFav={this.props.checkInFav}
        />
        {this.props.gifsOn ? (
          <img
            src={this.props.gif.images.fixed_width.url}
            alt={this.props.gif.title}
            onClick={this.open}
            className={classes.gifImage}
          />
        ) : (
          <img
            src={this.props.gif.images.fixed_height_still.url}
            alt={this.props.gif.title}
            onClick={this.open}
            className={classes.gifImage}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Gif);
