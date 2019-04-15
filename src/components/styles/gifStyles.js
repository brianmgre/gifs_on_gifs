export const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 1,
    display: "flex",
    justifyContent: "center",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing.unit * 5
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing.unit * 5
    }
  },

  imgContainer: {
    display: "flex",
    justifyContent: "center"
  },

  gifImage: {
    height: "150px",
    "&:hover": {
      cursor: "pointer"
    }
  }
});
