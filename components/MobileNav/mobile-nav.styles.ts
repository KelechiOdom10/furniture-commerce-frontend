import { createStyles } from "@mantine/core";

export const useMobileNavStyles = createStyles(theme => ({
  link: {
    color: theme.colors.gray[6],
    "&:hover": {
      color: theme.colors.gray[7],
    },
  },
  activeLink: {
    color: "black",
    "&:hover": {
      color: theme.colors.gray[9],
    },
  },
  mobileNav: {
    borderTop: `1px solid ${theme.colors.gray[2]}`,
    backgroundColor: "white",
    minHeight: 52,
    padding: "0 1rem",
    justifyContent: "space-around",
    width: "100%",
    position: "fixed",
    left: 0,
    bottom: 0,
    zIndex: 250,
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },
}));
