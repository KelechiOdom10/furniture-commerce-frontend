import { createStyles } from "@mantine/core";

export const useSearchInputStyles = createStyles(theme => ({
  inputContainer: {
    width: "auto",
    padding: theme.spacing.sm,
  },
  icon: {
    color: theme.colors.gray[9],
    padding: 8,
  },
  input: {
    backgroundColor: theme.colors.gray[0],
    outline: "none",
    ":focus": {
      border: `1px solid ${theme.colors.blue[5]}`,
      outline: "none",
    },
  },
}));
