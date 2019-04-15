import React from "react";
import Grid from "@material-ui/core/Grid";
import { styles } from "../styles/favoritesStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";

const Favorites = props => {
  const { classes } = props;
  const favs = (
    <Grid container spacing={8}>
      {props.favorites.map((fav, index) => (
        <Grid
          item
          lg={4}
          xs={12}
          md={5}
          sm={6}
          key={index}
          className={classes.imageAndIcon}
        >
          <i className="material-icons" onClick={props.removeFavorite(index)}>
            delete_outline
          </i>
          <img
            src={props.gifsOn ? fav.original : fav.original_still}
            alt={fav.title}
            className={classes.favImages}
          />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.favTitle}>
        Your Favorite Gifs!
      </Typography>
      {favs}
    </div>
  );
};

export default withStyles(styles)(Favorites);
