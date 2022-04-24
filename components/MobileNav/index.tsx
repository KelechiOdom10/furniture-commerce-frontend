import { MouseEventHandler } from "react";
import { Group } from "@mantine/core";
import { Basket, Heart, Home, ListSearch, User } from "tabler-icons-react";
import { useRouter } from "next/router";
import { IMobileNavItem } from "types";
import { useMobileNavStyles } from "./mobile-nav.styles";
import { useDisclosure } from "@mantine/hooks";
import NavDrawer from "@components/NavigationDrawer";
import { IconLink } from "@components/shared/Icon";

const mobileNavLinks: IMobileNavItem[] = [
  { title: "Home", href: "/", icon: <Home /> },
  { title: "Search", href: "#", icon: <ListSearch /> },
  { title: "cart", href: "/cart", icon: <Basket /> },
  { title: "Wishlist", href: "/wishlist", icon: <Heart /> },
  { title: "Profile", href: "/profile", icon: <User /> },
];

type MobileNavItemProps = {
  onHandleOpen: () => void;
  onHandleClose: () => void;
};

const MobileNavItem: React.FC<IMobileNavItem & MobileNavItemProps> = ({
  title,
  href,
  icon,
  onHandleOpen,
  onHandleClose,
}) => {
  const router = useRouter();
  const { cx, classes } = useMobileNavStyles();
  let isActive = router.pathname === href;

  if (
    !mobileNavLinks.some(link => link.href === router.pathname) &&
    title === "Home"
  ) {
    isActive = true;
  }

  const handleDrawerToggle: MouseEventHandler<HTMLAnchorElement> = event => {
    if (title === "Search") {
      event.preventDefault();
      onHandleOpen();
    }
    onHandleClose();
  };

  return (
    <IconLink
      icon={icon}
      variant="transparent"
      title={title}
      href={href}
      className={cx(classes.link, { [classes.activeLink]: isActive })}
      onClick={handleDrawerToggle}
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
    <nav>
      <Group align="center" className={classes.mobileNav}>
        {mobileNavLinks.map(({ title, href, icon }) => (
          <MobileNavItem
            key={title}
            href={href}
            icon={icon}
            title={title}
            onHandleOpen={handleDrawerOpen}
            onHandleClose={handleDrawerClose}
          />
        ))}
        <NavDrawer isOpen={opened} onClose={handleDrawerClose} />
      </Group>
    </nav>
  );
};

export default MobileNav;
