import { Button, ButtonProps } from "@mantine/core";
import Link from "./Link";

const ButtonLink: React.FC<ButtonProps<typeof Link>> = ({
  href,
  children,
  ...props
}) => {
  return (
    <Button component={Link} href={href} {...props}>
      {children}
    </Button>
  );
};

export default ButtonLink;
