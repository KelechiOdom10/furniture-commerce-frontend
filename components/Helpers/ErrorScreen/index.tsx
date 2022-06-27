import Button from "@components/shared/Button";
import { Box, Container, createStyles, Group, Title } from "@mantine/core";
import type { FallbackProps } from "react-error-boundary";

const useStyles = createStyles(theme => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },
  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 60,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors.red[6],

    [theme.fn.smallerThan("sm")]: {
      fontSize: 36,
    },
  },
  icon: {
    fontSize: 80,
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 32,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },
}));

type Props = FallbackProps & {
  message?: string;
};

const ErrorScreen: React.FC<Props> = ({
  error,
  message,
  resetErrorBoundary,
}) => {
  const { classes } = useStyles();
  const errorMessage = message || error.message;

  return (
    <Container className={classes.root}>
      <Box role="img" aria-label="Sad emoji" className={classes.icon}>
        😥
      </Box>
      <Title className={classes.label}>Oops an error occurred!</Title>
      <Title className={classes.title}>{errorMessage}</Title>
      <Group position="center">
        <Button
          variant="default"
          size="lg"
          my={24}
          onClick={resetErrorBoundary}
        >
          Refresh the page
        </Button>
      </Group>
    </Container>
  );
};

export default ErrorScreen;
