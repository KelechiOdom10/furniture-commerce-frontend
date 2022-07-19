import { useQueryClient } from "react-query";
import { UserLoginDto, UserRegisterDto } from "types";
import authService from "@services/authService";
import { setToken, removeToken } from "@utils/jwtToken";
import { handleNotification } from "@utils/notificationHandler";
import { STATUS_CODES } from "@constants/index";

interface UseAuth {
  login: (values: UserLoginDto) => Promise<void>;
  register: (values: UserRegisterDto) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuth = (): UseAuth => {
  const queryClient = useQueryClient();
  const login = async (values: UserLoginDto): Promise<void> => {
    try {
      const response = await authService.login(values);
      setToken(response.token);
      queryClient.setQueryData("me", response.user, {
        updatedAt: Date.now() + 8 * 60 * 60 * 1000,
      });
      handleNotification({
        message: "Login successful",
        type: "success",
      });
    } catch (error: any) {
      if (error.response.status === STATUS_CODES.BAD_REQUEST) {
        handleNotification({
          message: "Invalid email address ",
          type: "error",
        });
      } else if (error?.response?.status === STATUS_CODES.UNAUTHORIZED) {
        handleNotification({
          message: "Invalid email or password",
          type: "error",
        });
      } else {
        handleNotification({ message: "Something went wrong", type: "error" });
      }
    }
  };

  const register = async (values: UserRegisterDto) => {
    try {
      const response = await authService.register(values);
      setToken(response.token);
      queryClient.setQueryData("me", response.user, {
        updatedAt: Date.now() + 8 * 60 * 60 * 1000,
      });
      handleNotification({
        message: "Registration successful",
        type: "success",
      });
    } catch (error: any) {
      if (error?.response?.status === STATUS_CODES.BAD_REQUEST) {
        handleNotification({
          message: "One or more fields are invalid",
          type: "error",
        });
      } else if (error?.response?.status === STATUS_CODES.CONFLICT) {
        handleNotification({
          message: "User already exists",
          type: "error",
        });
      } else {
        handleNotification({ message: "Something went wrong", type: "error" });
      }
    }
  };

  const logout = async () => {
    removeToken();
    queryClient.setQueryData("me", null);
    handleNotification({
      message: "You have been logged out",
      type: "success",
    });
  };

  return {
    login,
    register,
    logout,
  };
};
