import { isBrowser } from "@utils/isBrowser";

export const getToken = (): string | null =>
  isBrowser ? localStorage.getItem("token") : null;

export const setToken = (token: string): void => {
  if (isBrowser) {
    localStorage.setItem("token", token);
  }
};

export const removeToken = (): void => {
  if (isBrowser) {
    localStorage.removeItem("token");
  }
};
