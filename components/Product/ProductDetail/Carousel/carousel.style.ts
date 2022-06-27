import { createStyles } from "@mantine/core";

export const useCarouselStyles = createStyles(theme => ({
  root: {
    maxWidth: 1200,
  },
  thumbnailCarousel: {
    overflowX: "hidden",
    minWidth: 120,
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));
