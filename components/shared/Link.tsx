import NextLink from "next/link";
import { Anchor, AnchorProps } from "@mantine/core";

type Props = {
  href: string;
};

const Link: React.FC<Props & AnchorProps<"a">> = ({
  href,
  children,
  ...props
}) => {
  return (
    <NextLink href={href} passHref>
      <Anchor {...props}>{children}</Anchor>
    </NextLink>
  );
};

export default Link;
