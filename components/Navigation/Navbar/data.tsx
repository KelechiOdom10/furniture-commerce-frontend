import { Headset, Heart, Logout, ShoppingCart, User } from "tabler-icons-react";

export const user_profile_links = {
  profile: [
    { title: "Account", href: "/profile", icon: <User size={14} /> },
    { title: "Orders", href: "/orders", icon: <ShoppingCart size={14} /> },
    { title: "Wishlist", href: "/wishlist", icon: <Heart size={14} /> },
    { title: "Logout", href: "/logout", icon: <Logout size={14} /> },
  ],
  help: [{ title: "Contact", href: "/contact", icon: <Headset size={14} /> }],
};
