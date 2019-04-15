import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent, Typography, Avatar } from "@material-ui/core";
import "../styles/modal.css";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../styles/modalStyles";
import SocialShareIcons from "./socialShareIcons";

const GifModal = props => {
  const { classes, close, checkInFav, addToFavorites, ...other } = props;

  return (
    <Dialog {...other} className={classes.root}>
      <div className={classes.likeCancelIcons}>
        <i
          className="material-icons"
          id={checkInFav(props.gif.id) ? "liked" : "notLiked"}
          onClick={addToFavorites(props.gif.id)}
          style={{
            fontSize: 40
          }}
        >
          favorite_border
        </i>
        <div className={props.gif.user ? classes.avatar : classes.hidden}>
          <Avatar className={classes.userAvater}>
            <img
              src={props.gif.user ? props.gif.user.avatar_url : null}
              alt={props.gif.user ? props.gif.user.avatar_url : null}
            />
          </Avatar>
          {props.gif.user ? props.gif.user.username : null}
        </div>
        <i
          className="material-icons"
          onClick={close}
          style={{
            fontSize: 40
          }}
        >
          close
        </i>
      </div>

      <div className={classes.titleImage}>
        <DialogTitle onClick={close} className={classes.gifTitle}>
          <Typography className={classes.gifTitle}>
            {props.gif.title}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <img
            src={props.gif.images.original.url}
            alt={props.gif.title}
            className={classes.modalImage}
          />
        </DialogContent>
      </div>
      <SocialShareIcons gif={props.gif} />
    </Dialog>
  );
};

export default withStyles(styles)(GifModal);
