import { IDesktopNavItem } from "./../types/index";

export const main_links: IDesktopNavItem[] = [
  { title: "Shop", href: "/products" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const sub_links: IDesktopNavItem[] = [
  {
    title: "Sofas",
    href: "/sofas",
    children: [
      { title: "Corner Sofas", href: "/corner-sofas" },
      { title: "3 Seater Sofas", href: "/3-seater-sofas" },
      { title: "Modular Sofas", href: "/modular-sofas" },
    ],
  },
  {
    title: "Kitchen",
    href: "/kitchen",
    children: [
      { title: "Cookware", href: "/cookware" },
      { title: "Tableware", href: "/tableware" },
    ],
  },
  {
    title: "Beds",
    href: "/beds",
    children: [
      { title: "Double Beds", href: "/double-beds" },
      { title: "Single Beds", href: "/single-beds" },
      { title: "King Size Beds", href: "/king-size-beds" },
    ],
  },
  {
    title: "Lighting",
    href: "/lighting",
    children: [
      { title: "Floor Lamps", href: "/floor-lamps" },
      { title: "Ceiling Lights", href: "/ceiling-lights" },
      { title: "Wall Lights", href: "/wall-lights" },
    ],
  },
  {
    title: "Office",
    href: "/office",
    children: [
      { title: "Office Desks", href: "/office-desks" },
      { title: "Office Chairs", href: "/office-chairs" },
    ],
  },
];
