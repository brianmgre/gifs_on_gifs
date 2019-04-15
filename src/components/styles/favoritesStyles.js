export const styles = theme => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing.unit * 5
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing.unit * 5
    }
  },

  favImages: {
    height: 300
  },

  imageAndIcon: {
    display: "flex",
    flexDirection: "column"
  },

  favTitle: {
    textAlign: "center",
    margin: "30px 0",
    fontWeight: "bold",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      margin: "15px 0"
    }
  }
});
