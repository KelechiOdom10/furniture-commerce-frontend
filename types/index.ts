import { ReactNode } from "react";

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
