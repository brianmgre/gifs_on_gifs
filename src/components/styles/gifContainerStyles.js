export const styles = theme => ({
  root: {
    maxWidth: 1030,
    margin: "auto",
    minHeight: "100vh"
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,

    position: "fixed",
    padding: "10px 0"
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    margin: "auto"
  },

  logo: {
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      cursor: "pointer"
    },
    textDecoration: "none"
  },

  searchSort: {
    marginTop: "100px",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    [theme.breakpoints.down("xs")]: {
      padding: "20px",
      flexDirection: "Column",
      alignItems: "center"
    },
    [theme.breakpoints.down("md")]: {
      padding: "20px"
    }
  },

  sort: {
    color: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      cursor: "pointer"
    },
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },

  sortLabel: {
    color: theme.palette.primary.main
  }
});
