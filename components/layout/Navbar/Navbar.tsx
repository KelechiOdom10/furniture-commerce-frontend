import { Icon, IconLink } from "@components/shared/Icon";
import Link from "@components/shared/Link";
import { LinkLogo } from "@components/shared/Logo";
import { Box, Group, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NextLink } from "@mantine/next";
import { main_links, sub_links } from "@data/nav-links";
import { useRouter } from "next/router";
import React from "react";
import { Basket, Heart, Menu2, User } from "tabler-icons-react";
import MobileNav from "./MobileNav/MobileNav";
import { useNavBarStyles } from "./Navbar.styles";
import NavDrawer from "./NavDrawer/NavDrawer";
import SearchInput from "./SearchInput/SearchInput";

function Navbar() {
  const { classes, cx } = useNavBarStyles();
  const router = useRouter();
  const [opened, handlers] = useDisclosure(false);

  return (
    <nav>
      <Group position="apart" className={classes.nav}>
        <Icon
          icon={<Menu2 />}
          variant="transparent"
          onClick={handlers.open}
          className={classes.burgerIcon}
        />
        <Box className={classes.logo}>
          <LinkLogo />
        </Box>
        <Group className={classes.iconGroup}>
          <Icon
            variant="transparent"
            title="User"
            icon={<User />}
            className={classes.profileIcon}
          />
          <IconLink
            title="Wishlist"
            variant="transparent"
            icon={<Heart />}
            href="/wishlist"
          />
          <IconLink
            title="Cart"
            variant="transparent"
            icon={<Basket />}
            href="/cart"
          />
        </Group>
        <Group className={classes.mainMenu}>
          <Group className={classes.mainMenuGroup}>
            {main_links.map(({ href, title }) => {
              const isActive = router.pathname === href;
              return (
                <Link
                  key={title}
                  href={href}
                  className={cx(classes.mainLink, {
                    [classes.activeLink]: isActive,
                  })}
                  style={{ textTransform: "uppercase" }}
                >
                  {title}
                </Link>
              );
            })}
          </Group>
          <Box className={classes.input}>
            <SearchInput />
          </Box>
        </Group>
        <Group align="flex-start" className={classes.subMenu} spacing="xl">
          {sub_links.map(({ title, href, children }) => {
            const menuItems = children?.map(({ title, href }) => (
              <Menu.Item component={NextLink} key={title} href={href}>
                {title}
              </Menu.Item>
            ));

            if (menuItems) {
              return (
                <Menu
                  key={title}
                  trigger="hover"
                  delay={100}
                  position="bottom"
                  transitionDuration={0}
                  placement="start"
                  gutter={5}
                  control={
                    <NextLink href={href} className={classes.mainLink}>
                      {title}
                    </NextLink>
                  }
                >
                  {menuItems}
                </Menu>
              );
            }

            return (
              <Link key={title} href={href} className={classes.mainLink}>
                {title}
              </Link>
            );
          })}
        </Group>
      </Group>

      <MobileNav />
      <NavDrawer isOpen={opened} onClose={handlers.close} />
    </nav>
  );
}

export default Navbar;
