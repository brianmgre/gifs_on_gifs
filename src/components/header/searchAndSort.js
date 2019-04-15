import React from "react";
import { styles } from "../styles/gifContainerStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Search from "./search";

const SearchAndSort = props => {
  const { classes } = props;
  return (
    <div className={classes.searchSort}>
      <div className={classes.sort}>
        <i
          className="material-icons"
          onClick={props.sortArray}
          style={{ fontSize: 40, color: "#00AAE7" }}
        >
          sort
        </i>
        <Typography variant="h5" className={classes.sortLabel}>
          {props.sorted ? "Newest->Oldest" : "Oldest->Newest"}
        </Typography>
      </div>

      <Search
        searchTerm={props.searchTerm}
        handleSearch={props.handleSearch}
        searchForGif={props.searchForGif}
        clearSearch={props.clearSearch}
      />
    </div>
  );
};

export default withStyles(styles)(SearchAndSort);
