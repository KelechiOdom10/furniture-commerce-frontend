import { Box } from "@mantine/core";
import Link from "./Link";

export const Logo = () => {
  return (
    <Box
      component="span"
      role="img"
      aria-label="MADE Logo"
      sx={t => ({
        transitionDuration: "400ms",
        transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        transitionProperty: "transform",
        display: "inline-block",
        backgroundImage: `url(${"/images/logo.svg"})`,
        width: "96px",
        height: "25px",
      })}
    />
  );
};

export const LinkLogo: React.FC = () => {
  return (
    <Link href="/">
      <Logo />
    </Link>
  );
};
