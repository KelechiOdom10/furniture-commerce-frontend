import { Stack, Title } from "@mantine/core";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput, PasswordInput } from "@components/shared/Input";
import Button from "@components/shared/Button";
import { UserRegisterDto } from "types";

const RegisterForm: React.FC = () => {
  const userRegisterSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    phoneNumber: z.string().optional(),
    password: z.string().min(1, "Password is required"),
    role: z.enum(["Admin", "User"]).default("User").optional(),
  });
  // type UserRegisterDto = z.infer<typeof userRegisterSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterDto>({
    resolver: zodResolver(userRegisterSchema),
  });
  const handleRegister = handleSubmit(data => console.log(data));

  return (
    <Stack align="stretch">
      <Title order={2}>Create a new account</Title>
      <form onSubmit={handleRegister} noValidate>
        <Stack spacing={28}>
          <TextInput
            required
            label="First Name"
            placeholder="First Name"
            error={errors?.firstName?.message}
            {...register("firstName")}
          />
          <TextInput
            required
            label="Last Name"
            placeholder="Last Name"
            error={errors?.lastName?.message}
            {...register("lastName")}
          />
          <TextInput
            required
            type="email"
            label="Email Address"
            placeholder="Enter valid Email Address"
            error={errors?.email?.message}
            {...register("email")}
          />
          <TextInput
            type="tel"
            label="Phone Number"
            placeholder="Phone number (optional)"
            error={errors?.phoneNumber?.message}
            {...register("phoneNumber")}
          />
          <PasswordInput
            size="md"
            label="Password"
            description="Password must include at least one letter, number and special character"
            placeholder="Enter password"
            error={errors?.password?.message}
            {...register("password")}
          />
          <Button
            type="submit"
            variant="light"
            disabled={
              !!errors.firstName ||
              !!errors.lastName ||
              !!errors.email ||
              !!errors.password
            }
          >
            Create Account
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default RegisterForm;
