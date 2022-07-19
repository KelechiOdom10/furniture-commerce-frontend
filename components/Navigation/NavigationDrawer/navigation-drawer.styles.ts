import { createStyles } from "@mantine/core";

export const useNavDrawerStyles = createStyles(theme => ({
  drawer: {
    width: "100%",
    height: "100%",
    overflowY: "scroll",
    [theme.fn.largerThan("xs")]: {
      width: "45%",
    },
    [theme.fn.largerThan("md")]: {
      width: "25%",
    },
  },
  header: {
    padding: 16,
    paddingBottom: 4,
  },
  mainContent: {
    marginBottom: 52,
    minHeight: "100vh",
    [theme.fn.largerThan("xs")]: {
      margin: 0,
    },
  },
  productLink: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  closeButton: {
    transform: "scale(1.2)",
    strokeWidth: 4,
  },
  footer: {
    padding: 16,
    background: theme.colors.gray[0],
    minHeight: 80,
    flex: 1,
    width: "100%",
  },
  footerButton: {
    fontSize: 14,
  },
}));
