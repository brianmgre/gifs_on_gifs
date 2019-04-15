import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { styles } from "../styles/modalStyles";
import { Typography } from "@material-ui/core";
import {
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  EmailShareButton,
  FacebookShareButton,
  EmailIcon
} from "react-share";

const SocialShareIcons = props => {
  const { classes } = props;

  return (
    <div className={classes.shareRating}>
      <div className={classes.shareIcons}>
        <FacebookShareButton
          quote={props.gif.title}
          url={props.gif.images.original.url}
          round={true}
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={props.gif.images.original.url}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <EmailShareButton
          url={props.gif.images.original.url}
          subject={props.gif.title}
          image={props.gif.images.original.url}
        >
          <EmailIcon size={32} round={true} />
        </EmailShareButton>
      </div>
      <Typography className={classes.rating}>
        Rating: {props.gif.rating.toUpperCase()}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(SocialShareIcons);
