import React from "react";
import Gif from "./gif";
import Grid from "@material-ui/core/Grid";
import { styles } from "../styles/gifStyles";
import withStyles from "@material-ui/core/styles/withStyles";

const GifList = props => {
  const { classes } = props;
  return (
    <Grid container spacing={8} className={classes.root}>
      {props.gifs.map(gif => (
        <Grid item lg={2} xs={12} md={2} sm={3} key={gif.id}>
          <Gif
            gif={gif}
            gifsOn={props.gifsOn}
            addToFavorites={props.addToFavorites}
            checkInFav={props.checkInFav}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(GifList);
