import { ReactNode } from "react";
import { components } from "./api";

export interface IMobileNavItem {
  title: string;
  href: string;
  icon: ReactNode;
}

export interface IDesktopNavItem {
  title: string;
  href: string;
  children?: IDesktopNavItem[];
}

export type CategoryReadType = components["schemas"]["CategoryReadDto"];
export type ProductTypeReadType = components["schemas"]["ProductTypeReadDto"];
export type ProductReadType = components["schemas"]["ProductReadDto"];

export type CategoryDetailType = components["schemas"]["CategoryDetailDto"];
export type ProductTypeDetailType =
  components["schemas"]["ProductTypeDetailDto"];
export type ProductDetailType = components["schemas"]["ProductDetailDto"];

export type AuthResponse = components["schemas"]["AuthResponseDto"];
export type UserRegisterDto = components["schemas"]["UserRegisterDto"];
export type UserLoginDto = components["schemas"]["UserLoginDto"];
export type UserReadType = components["schemas"]["UserReadDto"];
