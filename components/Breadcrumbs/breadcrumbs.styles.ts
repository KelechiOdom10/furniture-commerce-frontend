import { createStyles } from "@mantine/core";

export const useBreadcrumbsStyles = createStyles(theme => ({
  breadcrumbs: {
    marginInline: 12,
    [theme.fn.largerThan("sm")]: {
      marginInline: 24,
    },
  },
  breadcrumbsText: {
    fontSize: 12.5,
    [theme.fn.largerThan("sm")]: {
      fontSize: 15,
    },
    fontWeight: 400,
    color: theme.colors.gray[7],
  },
  breadcrumbsSeparator: {
    color: theme.colors.gray[5],
  },
}));
