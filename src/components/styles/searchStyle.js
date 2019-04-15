export const styles = theme => ({
  root: {
    // width: "100%"
  },

  searchForm: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      paddingTop: 15
    }
  },

  searchIcon: {
    "&:hover": {
      cursor: "pointer"
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 15
    }
  },

  resize: {
    color: theme.palette.primary.main,
    fontSize: "1.6rem",
    border: "1px solid theme.palette.primary.main",
    borderRadius: "25px",
    padding: "10px 10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
      paddingTop: 15
    }
  }
});
