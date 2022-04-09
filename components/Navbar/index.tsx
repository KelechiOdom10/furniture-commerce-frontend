import { Box, Group, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NextLink } from "@mantine/next";
import { useRouter } from "next/router";
import { Basket, Heart, Menu2, User } from "tabler-icons-react";
import { Icon, IconLink } from "@components/shared/Icon";
import Link from "@components/shared/Link";
import { LinkLogo } from "@components/shared/Logo";
import NavDrawer from "@components/NavigationDrawer";
import SearchInput from "@components/SearchInput";
import MobileNav from "@components/MobileNav";
import { main_links, sub_links } from "@data/nav-links";
import { useNavBarStyles } from "./navbar.styles";
import { useWindowScrollShow } from "@hooks/useWindowScrollShow";

function Navbar() {
  const { classes, cx } = useNavBarStyles();
  const router = useRouter();
  const [opened, handlers] = useDisclosure(false);
  const show = useWindowScrollShow();

  return (
    <>
      <Box
        component="nav"
        className={cx(classes.nav, { [classes.navHidden]: !show })}
      >
        <Group position="apart" className={classes.menu}>
          <Icon
            icon={<Menu2 />}
            title="Hamburger Menu"
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
            {sub_links.map(({ name, slug, productTypes }) => {
              const menuItems = productTypes?.map(({ name, slug }) => (
                <Menu.Item component={NextLink} key={name} href={slug}>
                  {name}
                </Menu.Item>
              ));

              if (menuItems) {
                return (
                  <Menu
                    key={name}
                    trigger="hover"
                    delay={100}
                    position="bottom"
                    transitionDuration={0}
                    placement="start"
                    gutter={5}
                    control={
                      <NextLink
                        href={`categories/${slug}`}
                        className={classes.mainLink}
                      >
                        {name}
                      </NextLink>
                    }
                  >
                    {menuItems}
                  </Menu>
                );
              }

              return (
                <Link
                  key={name}
                  href={`categories/${slug}`}
                  className={classes.mainLink}
                >
                  {name}
                </Link>
              );
            })}
          </Group>
        </Group>
      </Box>
      <MobileNav />
      <NavDrawer isOpen={opened} onClose={handlers.close} />
    </>
  );
}

export default Navbar;
