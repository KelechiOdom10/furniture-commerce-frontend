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

export interface Category {
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  id: number;
  createdAt: string;
  productTypes?: ProductType[];
}

export interface ProductType {
  name: string;
  categoryName: string;
  slug: string;
  imageUrl: string;
  id: number;
  createdAt: string;
}
