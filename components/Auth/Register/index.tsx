import ButtonLink from "@components/shared/ButtonLink";
import { Stack, Box, Title, Divider, Group } from "@mantine/core";
import RegisterForm from "./RegisterForm";
import { useRegisterStyles } from "./register.styles";

const Register: React.FC = () => {
  const { classes } = useRegisterStyles();

  return (
    <Group className={classes.registerContainer} spacing={32}>
      <Box className={classes.section}>
        <RegisterForm />
      </Box>
      <div>
        <Divider className={classes.verticalDivider} orientation="vertical" />
        <Divider className={classes.horizontalDivider} />
      </div>
      <Stack className={classes.section}>
        <Title order={2}>Already have an account?</Title>
        <ButtonLink
          href="/auth/login"
          variant="subtle"
          className={classes.signinButton}
        >
          Sign in
        </ButtonLink>
      </Stack>
    </Group>
  );
};

export default Register;
