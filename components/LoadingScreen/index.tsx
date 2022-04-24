import { Container, Loader, Stack, Title } from "@mantine/core";

const LoadingScreen: React.FC = () => {
  return (
    <Container>
      <Stack
        sx={{
          width: "100%",
          height: "100%",
        }}
        spacing={12}
        pt={80}
        align="center"
        mx="auto"
      >
        <Loader color="dark" variant="bars" />
        <Title order={4}>Loading</Title>
      </Stack>
    </Container>
  );
};

export default LoadingScreen;
