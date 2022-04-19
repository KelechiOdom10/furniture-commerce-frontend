import {
  Button as MantineButton,
  ButtonProps,
  createStyles,
} from "@mantine/core";
import React from "react";

interface IButtonProps extends ButtonProps<"button"> {
  radius?: number;
}

export const useButtonStyles = createStyles(
  (theme, { radius }: IButtonProps) => ({
    root: {
      minHeight: 44,
      borderRadius: radius,
      fontSize: theme.fontSizes.md,
      border: 0,
      fontWeight: 500,
      textDecoration: "none",
      cursor: "pointer",
      "&:hover": {
        textDecoration: "none",
      },
    },
    default: {
      color: "white",
      backgroundColor: theme.colors.dark[7],
      "&:hover": {
        backgroundColor: theme.colors.dark[8],
      },
    },
    light: {
      color: "black",
      backgroundColor: "#ffee60",
      "&:hover": {
        backgroundColor: "#ffee60",
      },
    },
    subtle: {
      color: "black",
      backgroundColor: theme.colors.gray[3],
      "&:hover": {
        backgroundColor: theme.colors.gray[2],
      },
    },
  })
);

const Button: React.FC<IButtonProps> = ({ children, radius = 4, ...props }) => {
  const { classes } = useButtonStyles({ radius });
  return (
    <MantineButton
      classNames={{
        root: classes.root,
        default: classes.default,
        light: classes.light,
        subtle: classes.subtle,
      }}
      {...props}
    >
      {children}
    </MantineButton>
  );
};

export default Button;
