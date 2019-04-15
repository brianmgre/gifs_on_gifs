const menuWidth = 240;

export const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row"
  },

  navLink: {
    textDecoration: "none",
    "&hover": {
      cursor: "pointer"
    }
  },

  menu: {
    flexShrink: 0,
    zIndex: "100"
  },

  navText: {
    color: theme.palette.primary.main,
    marginBottom: 30
  },

  hidden: {
    visibility: "hidden"
  },

  menuClosed: {
    width: 0
  },

  drawerPaper: {
    width: menuWidth
  },

  iconButton: {
    alignText: "left"
  },

  navLinks: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  menuButton: {
    color: "white",
    fontSize: 100
  },

  menuHeader: {
    display: "flex",
    alignItems: "center",
    padding: "10px 8px",
    justifyContent: "flex-end"
  }
});
