import { createStyles } from "@mantine/core";

export const useNavBarStyles = createStyles(theme => ({
  nav: {
    color: theme.colors.gray[9],
    padding: theme.spacing.xl,
    paddingBottom: 0,
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
    [theme.fn.largerThan("md")]: {
      paddingInline: 60,
    },
  },
  burgerIcon: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },
  logo: {
    paddingLeft: 60,
    [theme.fn.largerThan("md")]: {
      paddingLeft: 0,
    },
  },
  profileIcon: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
  iconGroup: {
    [theme.fn.largerThan("md")]: {
      order: 1,
    },
  },
  mainMenu: {
    width: "100%",
    [theme.fn.largerThan("md")]: {
      width: "60%",
      marginRight: "auto",
      marginLeft: theme.spacing.xl,
    },
  },
  mainMenuGroup: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
  input: {
    width: "100%",
    [theme.fn.largerThan("md")]: {
      width: "100%",
      maxWidth: 400,
      flex: 1,
    },
  },
  subMenu: {
    width: "100%",
    height: "auto",
    order: 2,
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
  mainLink: {
    fontSize: theme.fontSizes.md,
    fontWeight: 200,
    color: theme.colors.gray[8],
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      color: theme.colors.gray[9],
    },
  },
  activeLink: {
    borderBottom: "1px solid",
    color: theme.colors.gray[9],
  },
}));
