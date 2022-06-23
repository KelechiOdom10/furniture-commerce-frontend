import { createStyles } from "@mantine/core";

export const useProductDetailStyles = createStyles((theme, _params, getRef) => {
  const control = getRef("control");

  return {
    root: {
      paddingInline: 0,
    },
    container: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      alignItems: "flex-start",
      [theme.fn.largerThan("sm")]: {
        flexDirection: "row",
      },
    },
    carousel: {
      width: "100%",
      [theme.fn.largerThan("sm")]: {
        width: "55%",
      },
    },
    detail: {
      width: "100%",
      position: "sticky",
      top: 12,
      flex: 1,
      [theme.fn.largerThan("sm")]: {
        width: "30%",
      },
    },
    name: {
      fontSize: 28,
      marginTop: theme.spacing.lg,
      [theme.fn.largerThan("sm")]: {
        marginTop: 0,
      },
    },
    title: {
      fontSize: theme.fontSizes.sm,
      fontWeight: 400,
      color: theme.colors.gray[7],
    },
    price: {
      fontSize: 20,
    },
    cartControl: {
      width: "100%",
      [theme.fn.largerThan("xs")]: {
        flexDirection: "row",
      },
    },
    quantityInput: {
      flex: 2,
      [theme.fn.largerThan("md")]: {
        flex: 1,
      },
    },
    cartControlButton: {
      flex: 3,
    },
    accordionDesktop: {
      display: "none",
      [theme.fn.largerThan("md")]: {
        display: "block",
      },
    },
    accordionMobile: {
      display: "block",
      marginTop: theme.spacing.lg,
      [theme.fn.largerThan("md")]: {
        display: "none",
      },
    },
    accordionControl: {
      ref: control,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    accordionShippingItem: {
      fontSize: theme.fontSizes.sm,
      [theme.fn.largerThan("sm")]: {
        fontSize: 15,
      },
    },
  };
});
