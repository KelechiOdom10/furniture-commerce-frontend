import { Button, ButtonProps } from "@mantine/core";
import { useButtonStyles } from "./Button";
import Link from "./Link";

const ButtonLink: React.FC<ButtonProps<typeof Link>> = ({
  href,
  children,
  ...props
}) => {
  const { classes } = useButtonStyles({ radius: 4 });
  return (
    <Button
      component={Link}
      href={href}
      classNames={{
        root: classes.root,
        default: classes.default,
        light: classes.light,
        subtle: classes.subtle,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonLink;
