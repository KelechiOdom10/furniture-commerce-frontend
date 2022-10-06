import { createStyles } from "@mantine/core";

export const useEstimatedDeliveryStyles = createStyles(theme => ({
  paper: {
    backgroundColor: theme.colors.gray[2],
  },

  label: {
    gap: 0,
    paddingLeft: theme.spacing.md,
  },
  labelTitle: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 500,
  },
  labelDescription: {
    fontSize: theme.fontSizes.md,
    fontWeight: 300,
  },
}));
