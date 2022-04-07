import { Group } from "@mantine/core";
import { Basket, Heart, Home, ListSearch, User } from "tabler-icons-react";
import { useRouter } from "next/router";
import { IMobileNavItem } from "types";
import { useMobileNavStyles } from "./MobileNav.styles";
import { useDisclosure } from "@mantine/hooks";
import NavDrawer from "../NavDrawer/NavDrawer";
import { IconLink } from "@components/shared/Icon";
import { MouseEventHandler } from "react";

const mobileNavLinks: IMobileNavItem[] = [
  { title: "Home", href: "/", icon: <Home /> },
  { title: "Search", href: "#", icon: <ListSearch /> },
  { title: "cart", href: "/cart", icon: <Basket /> },
  { title: "Wishlist", href: "/wishlist", icon: <Heart /> },
  { title: "Profile", href: "/profile", icon: <User /> },
];

type MobileNavItemProps = {
  onHandleOpen: () => void;
};

const MobileNavItem: React.FC<IMobileNavItem & MobileNavItemProps> = ({
  title,
  href,
  icon,
  onHandleOpen,
}) => {
  const router = useRouter();
  const { cx, classes } = useMobileNavStyles();
  const isActive = router.pathname === href;

  const handleDrawerOpen: MouseEventHandler<HTMLAnchorElement> = event => {
    if (title === "Search") {
      event.preventDefault();
      onHandleOpen();
    }
  };

  return (
    <IconLink
      icon={icon}
      variant="transparent"
      title={title}
      href={href}
      className={cx(classes.link, { [classes.activeLink]: isActive })}
      onClick={handleDrawerOpen}
    />
  );
};
const MobileNav: React.FC = () => {
  const { classes } = useMobileNavStyles();
  const [opened, handlers] = useDisclosure(false);

  const handleDrawerOpen = () => {
    handlers.open();
  };

  const handleDrawerClose = () => {
    handlers.close();
  };

  return (
    <Group align="center" className={classes.mobileNav}>
      {mobileNavLinks.map(({ title, href, icon }) => (
        <MobileNavItem
          key={title}
          href={href}
          icon={icon}
          title={title}
          onHandleOpen={handleDrawerOpen}
        />
      ))}
      <NavDrawer isOpen={opened} onClose={handleDrawerClose} />
    </Group>
  );
};

export default MobileNav;
