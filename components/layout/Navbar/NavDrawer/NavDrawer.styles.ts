import { createStyles } from "@mantine/core";

export const useNavDrawerStyles = createStyles(theme => ({
  drawer: {
    width: "100%",
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
  closeButton: {
    transform: "scale(1.2)",
    strokeWidth: 4,
  },
}));
