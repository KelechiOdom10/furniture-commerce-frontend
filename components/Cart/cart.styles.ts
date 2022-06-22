import { createStyles } from "@mantine/core";

export const useCartStyles = createStyles(theme => ({
  root: {
    position: "relative",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 24,
    width: "100%",
    [theme.fn.largerThan("sm")]: {
      flexDirection: "row",
    },
  },
  cartItemsContainer: {
    width: "100%",
    [theme.fn.largerThan("sm")]: {
      width: "58%",
    },
  },
  checkoutContainer: {
    position: "sticky",
    top: 12,
    width: "100%",
    padding: "none",
    borderWidth: 0,
    [theme.fn.largerThan("sm")]: {
      borderWidth: 1,
      width: "35%",
      padding: theme.spacing.md,
    },
    [theme.fn.largerThan("md")]: {
      width: "33%",
      paddingInline: theme.spacing.xl,
    },
  },
  orderReceiptLabel: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 600,
  },
  totalReceiptLabel: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 500,
  },
}));
