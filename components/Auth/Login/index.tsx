import ButtonLink from "@components/shared/ButtonLink";
import { Box, Divider, Group, Stack, Title } from "@mantine/core";
import { useLoginStyles } from "./login.styles";
import LoginForm from "./LoginForm";

const Login: React.FC = () => {
  const { classes } = useLoginStyles();

  return (
    <Group className={classes.loginContainer} spacing={48}>
      <Box className={classes.section}>
        <LoginForm />
      </Box>
      <div>
        <Divider className={classes.verticalDivider} orientation="vertical" />
        <Divider className={classes.horizontalDivider} />
      </div>
      <Stack className={classes.section}>
        <Title order={2}>New to made.com ?</Title>
        <ButtonLink
          className={classes.registerButton}
          href="/auth/register"
          variant="subtle"
        >
          Create an account
        </ButtonLink>
      </Stack>
    </Group>
  );
};

export default Login;
