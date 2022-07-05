import { createStyles } from "@mantine/core";

export const useLoginStyles = createStyles(theme => ({
  loginContainer: {
    flexDirection: "column",
    padding: 8,
    width: "100%",
    margin: "0 auto",
    alignItems: "stretch",
    [theme.fn.largerThan("sm")]: {
      padding: 24,
      width: "80%",
      flexDirection: "row",
      alignItems: "stretch",
      justifyContent: "space-around",
    },
  },
  section: {
    alignSelf: "stretch",
    flex: 1,
  },

  horizontalDivider: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  verticalDivider: {
    display: "none",
    [theme.fn.largerThan("sm")]: {
      display: "block",
    },
  },
  registerButton: {
    width: "100%",
    [theme.fn.largerThan("sm")]: {
      width: "fit-content",
    },
  },
}));
