import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stack, Title } from "@mantine/core";
import { TextInput, PasswordInput } from "@components/shared/Input";
import Button from "@components/shared/Button";
import { UserLoginDto } from "types";
import { useAuth } from "@hooks/useAuth";

const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const userLoginSchema = z.object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    password: z.string().min(1, "Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginDto>({
    resolver: zodResolver(userLoginSchema),
  });

  const handleLogin = handleSubmit(async data => {
    await login(data);
  });

  return (
    <Stack align="stretch">
      <Title order={2}>Sign in</Title>
      <form onSubmit={handleLogin} noValidate>
        <Stack spacing={28}>
          <TextInput
            required
            type="email"
            label="Email Address"
            placeholder="Enter valid email address"
            error={errors?.email?.message}
            {...register("email")}
          />
          <PasswordInput
            required
            size="md"
            label="Password"
            placeholder="Enter Password"
            error={errors?.password?.message}
            {...register("password")}
          />
          <Button
            type="submit"
            variant="light"
            disabled={!!errors.email || !!errors.password}
          >
            Sign in
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default LoginForm;
