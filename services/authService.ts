import { api } from "api";
import { AuthResponse, UserLoginDto, UserRegisterDto } from "types";

class AuthService {
  async login(values: UserLoginDto) {
    const response = await api.post<AuthResponse>("/auth/login", values);
    return response.data;
  }

  async register(values: UserRegisterDto) {
    const response = await api.post<AuthResponse>("/auth/register", values);
    return response.data;
  }
}

export default new AuthService();
