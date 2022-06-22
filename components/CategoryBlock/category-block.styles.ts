import { createStyles } from "@mantine/core";

export const useCategoryBlockStyles = createStyles(theme => ({
  categoryLink: {
    color: theme.colors.gray[9],
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  categoriesContainer: {
    justifyContent: "start",
    overflowX: "auto",
    width: "100%",
    padding: 16,
    gap: 32,
    [theme.fn.largerThan("xs")]: {
      justifyContent: "center",
      width: "80%",
      gap: 48,
    },
  },
}));
