import { createStyles } from "@mantine/core";

export const useCategoryDetailDrawerStyles = createStyles(theme => ({
  content: {
    padding: 24,
    [theme.fn.largerThan("xs")]: {
      padding: 16,
    },
  },
  header: {
    height: 250,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    [theme.fn.largerThan("xs")]: {
      height: 240,
    },
  },
  topHeaderControls: {
    position: "absolute",
    justifyContent: "space-between",
    margin: "0 auto",
    width: "100%",
    top: 16,
    left: 16,
    paddingRight: 24,
  },
  backButton: {
    textTransform: "uppercase",
    color: "white",
    fontSize: theme.fontSizes.sm,
  },
  closeButton: {
    color: "white",
    transform: "scale(0.9)",
  },
  productTypeLink: {
    color: theme.colors.gray[9],
  },
}));
