import { createStyles } from "@mantine/core";

export const useProductCardStyles = createStyles(theme => ({
  root: {
    // padding: 10,
    maxWidth: 400,
    margin: "0 auto",
    height: "100%",
    borderRadius: 2,
    display: "block",
    border: `0px solid ${theme.colors.gray[3]}`,
    color: theme.colors.dark[9],
    textDecoration: "none",
    transition: "all 150ms ease-in",
    "&:hover": {
      textDecoration: "none",
    },
  },
  details: {
    marginTop: 10,
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },
  detailHeder: {
    width: "100%",
    [theme.fn.largerThan("sm")]: {
      width: "75%",
    },
  },
  text: {
    fontSize: 14,
    [theme.fn.largerThan("sm")]: {
      fontSize: 15,
    },
  },
  title: {
    fontSize: 15,
    [theme.fn.largerThan("sm")]: {
      fontSize: 16,
    },
  },
  price: {
    fontWeight: 600,
  },
  description: {
    fontWeight: "normal",
  },
}));
