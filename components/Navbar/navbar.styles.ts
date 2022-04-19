import { createStyles } from "@mantine/core";

export const useNavBarStyles = createStyles(theme => ({
  nav: {
    position: "sticky",
    top: 0,
    backgroundColor: "white",
    zIndex: 10,
    transition: `top .45s ease-in-out`,
    borderBottom: `1px solid ${theme.colors.gray[1]}`,
  },
  navHidden: {
    top: "-60px",
    [theme.fn.largerThan("md")]: {
      top: "-134px",
    },
  },
  menu: {
    color: theme.colors.gray[9],
    padding: theme.spacing.xl,
    paddingBottom: 0,
    gap: 8,
    [theme.fn.largerThan("md")]: {
      padding: `${16}px ${48}px`,
      gap: 0,
    },
    [theme.fn.smallerThan("xs")]: {
      justifyContent: "center",
      padding: theme.spacing.sm,
      paddingBottom: 0,
    },
  },
  burgerIcon: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
  logo: {
    paddingLeft: 0,
    [`@media (min-width: ${theme.breakpoints.xs}) and (max-width: ${theme.breakpoints.md}px)`]:
      {
        paddingLeft: 60,
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
    [theme.fn.smallerThan("xs")]: {
      display: "none",
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
    [theme.fn.smallerThan("xs")]: {
      display: "none",
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
    fontWeight: 400,
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
