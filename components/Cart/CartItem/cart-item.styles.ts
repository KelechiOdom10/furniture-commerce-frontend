import { createStyles } from "@mantine/core";

export const useCartItemStyles = createStyles(theme => ({
  root: {
    display: "grid",
    gridTemplateColumns: "7.875rem 1fr .25fr",
    gridTemplateRows: "6.875rem 3rem",
    rowGap: "0.8rem",
  },
  imageWrapper: {
    alignItems: "center",
    width: "100%",
    gridColumn: 1,
    gridRow: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "fill !important" as "fill",
    minHeight: "5.625rem",
  },
  itemAttributes: {
    alignItems: "flex-start",
    gridColumnStart: 2,
    gridColumnEnd: 4,
    gridRow: 1,
    [theme.fn.largerThan("sm")]: {
      gridColumn: 2,
      gridRow: 1,
    },
  },
  totalAmount: {
    gridColumn: 2,
    gridRow: 2,
    alignSelf: "center",
  },
  quantityInput: {
    gridColumn: 1,
    gridRow: 2,
    alignSelf: "center",
  },
  deleteButton: {
    gridColumn: 3,
    gridRow: 2,
    alignSelf: "center",
    justifySelf: "flex-end",
  },
}));
