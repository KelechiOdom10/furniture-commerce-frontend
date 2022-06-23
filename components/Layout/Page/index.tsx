import { Container } from "@mantine/core";

type Props = {
  size?: number;
  px?: number;
};
const Page: React.FC<Props> = ({ size = 1920, children }) => {
  return (
    <Container
      size={size}
      sx={theme => ({
        paddingInline: theme.spacing.xl,
        [theme.fn.largerThan("md")]: {
          paddingInline: 48,
        },
      })}
    >
      {children}
    </Container>
  );
};

export default Page;
