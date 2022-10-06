import { createStyles } from "@mantine/core";

export const useCheckoutStyles = createStyles(theme => ({
  root: {
    width: "100%",
    margin: "1rem auto 4rem auto",
  },
  shippingAddress: {
    position: "relative",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 48,
    gap: "4rem",
    width: "100%",
    [theme.fn.largerThan("sm")]: {
      flexDirection: "row",
    },
  },
  addressForm: {
    width: "100%",
    [theme.fn.largerThan("sm")]: {
      width: "55%",
    },
  },
}));
