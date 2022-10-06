import { createStyles } from "@mantine/core";

export const useAddressFormStyles = createStyles(theme => ({
  formGroupInput: {
    maxWidth: "100%",
    width: "100%",
    [theme.fn.largerThan("sm")]: {
      maxWidth: "50%",
      width: "40%",
    },
  },
}));
