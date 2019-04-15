import React from "react";
import { TextField } from "@material-ui/core";
import { styles } from "../styles/searchStyle";
import withStyles from "@material-ui/core/styles/withStyles";

const Search = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <form onSubmit={props.searchForGif} className={classes.searchForm}>
        <TextField
          placeholder="Search..."
          name="searchTerm"
          type="text"
          value={props.searchTerm}
          onChange={props.handleSearch}
          className={classes.searchInput}
          InputProps={{
            classes: {
              input: classes.resize
            }
          }}
        />
        <div className={classes.searchIcon}>
          <i
            className="material-icons"
            type="submit"
            onClick={props.searchForGif}
            style={{
              fontSize: 30,
              color: "#00AAE7",
              marginLeft: 10
            }}
          >
            search
          </i>
          <i
            className="material-icons"
            onClick={props.clearSearch}
            style={{
              fontSize: 30,
              color: "#00AAE7"
            }}
          >
            close
          </i>
        </div>
      </form>
    </div>
  );
};
export default withStyles(styles)(Search);
