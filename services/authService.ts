import { api } from "api";
import { getToken } from "@utils/jwtToken";
import {
  AuthResponse,
  UserLoginDto,
  UserRegisterDto,
  UserReadType,
} from "types";

class AuthService {
  async login(values: UserLoginDto) {
    const response = await api.post<AuthResponse>("/auth/login", values);
    return response.data;
  }

  async register(values: UserRegisterDto) {
    const response = await api.post<AuthResponse>("/auth/register", values);
    return response.data;
  }

  async getCurrentUser() {
    const response = await api.get<UserReadType>("/auth/currentUser", {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    return response.data;
  }
}

export default new AuthService();
