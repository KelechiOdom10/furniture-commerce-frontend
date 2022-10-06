import { createStyles } from "@mantine/core";

export const useOrderSummaryStyles = createStyles(theme => ({
  container: {
    position: "sticky",
    top: 12,
    width: "100%",
    padding: "none",
    borderWidth: 0,
    [theme.fn.largerThan("sm")]: {
      borderWidth: 1,
      width: "40%",
      padding: theme.spacing.md,
    },
    [theme.fn.largerThan("md")]: {
      width: "38%",
      paddingInline: theme.spacing.xl,
    },
  },
  orderReceiptLabel: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 600,
  },
  heading: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 500,
  },
}));
