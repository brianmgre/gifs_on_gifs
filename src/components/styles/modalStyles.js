export const styles = theme => ({
  root: {
    overflow: "hidden",
    width: "100%"
  },

  likeCancelIcons: {
    display: "flex",
    justifyContent: "space-between"
  },

  gifImage: {
    width: "100%",
    overflowY: "hidden",
    paddingTop: 6,
    paddingBottom: 6
  },

  modalImage: {
    maxHeight: "480px",
    paddingTop: 6,
    paddingBottom: 6,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "100px"
    }
  },

  titleImage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  shareIcons: {
    display: "flex",
    flexDirection: "row",
    "&:hover": {
      cursor: "pointer"
    }
  },

  gifTitle: {
    padding: "3px 6px",
    fontSize: "1.6rem",
    fontWeight: "bold"
  },

  shareRating: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "13px 20px"
  },

  rating: {
    fontSize: "1.6rem"
  },

  hidden: {
    display: "none"
  },

  avatar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "1.6rem",
    marginTop: 5
  },

  userAvater: {
    marginRight: "10px"
  }
});
