import { createStyles } from "@mantine/core";

export const useQuantityInputStyles = createStyles(theme => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `6px ${theme.spacing.xs}px`,
    borderRadius: theme.radius.sm,
    border: `1px solid ${
      theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[3]
    }`,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,

    "&:focus-within": {
      borderColor: theme.colors[theme.primaryColor][6],
    },
  },

  control: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    border: `1px solid ${
      theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[3]
    }`,

    "&:disabled": {
      borderColor:
        theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[3],
      opacity: 0.8,
      backgroundColor: "transparent",
    },
  },

  input: {
    textAlign: "center",
    paddingRight: `${theme.spacing.sm}px !important`,
    paddingLeft: `${theme.spacing.sm}px !important`,
    height: 28,
    flex: 1,
  },
}));
