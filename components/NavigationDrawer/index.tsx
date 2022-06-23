import { forwardRef, useState } from "react";
import { CategoryDetailType, IMobileNavItem } from "types";
import {
  Box,
  Drawer,
  Group,
  Image,
  UnstyledButton,
  Text,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Logo } from "@components/shared/Logo";
import SearchInput from "@components/SearchInput";
import CategoryDetailDrawer from "@components/CategoryDetailDrawer";
import { sub_links } from "@data/nav-links";
import { useNavDrawerStyles } from "./navigation-drawer.styles";
import { ChevronRight, Help, UserCircle } from "tabler-icons-react";
import Link from "@components/shared/Link";
import ButtonLink from "@components/shared/ButtonLink";

const footer_links: IMobileNavItem[] = [
  {
    title: "Login / Register",
    icon: <UserCircle strokeWidth={1.2} />,
    href: "/login",
  },
  { title: "Help Centre", icon: <Help strokeWidth={1.3} />, href: "/contact" },
];

interface UserButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  image: string | undefined;
  name: string;
  description?: string;
  icon?: React.ReactNode | null;
}

const CategoryDrawerButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  (
    {
      image,
      name,
      description,
      icon = <ChevronRight size={16} />,
      ...others
    }: UserButtonProps,
    ref
  ) => (
    <UnstyledButton
      ref={ref}
      sx={theme => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.md,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      {...others}
    >
      <Group>
        <Image
          width={55}
          height={50}
          withPlaceholder
          src={image}
          alt={image ? `${name} img` : ""}
          placeholder={
            <Image
              width={55}
              height={50}
              src="/images/default-category.jpeg"
              alt={`Default img`}
              radius="sm"
            />
          }
          radius="sm"
        />

        <div style={{ flex: 1 }}>
          <Text size="md" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" size="sm" lineClamp={2}>
            {description}
          </Text>
        </div>

        {icon}
      </Group>
    </UnstyledButton>
  )
);

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NavDrawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  const { classes, cx } = useNavDrawerStyles();
  const [opened, handlers] = useDisclosure(false);
  const [selectedCategoryDetail, setSelectedCategoryDetail] =
    useState<CategoryDetailType | null>(null);

  const handleCategoryClick = (category: CategoryDetailType) => {
    setSelectedCategoryDetail(category);
    handlers.open();
  };
  return (
    <Drawer
      opened={isOpen}
      onClose={onClose}
      title={<Logo />}
      transition="slide-right"
      transitionDuration={400}
      transitionTimingFunction="ease-in"
      classNames={{
        header: classes.header,
        closeButton: classes.closeButton,
        drawer: classes.drawer,
      }}
      closeButtonLabel="Close menu drawer"
    >
      <SearchInput />
      <Group direction="column" className={classes.mainContent}>
        <Box>
          <Link
            href="/products"
            className={classes.productLink}
            onClick={onClose}
          >
            <CategoryDrawerButton
              name="All Products"
              description="View All products"
              image={undefined}
              icon={null}
            />
          </Link>
          {sub_links.map(category => {
            const { name, description, id, imageUrl } = category;
            return (
              <CategoryDrawerButton
                key={id}
                name={name}
                description={description}
                image={imageUrl}
                onClick={() => handleCategoryClick(category)}
              />
            );
          })}
        </Box>
        <Stack className={classes.footer} align="flex-start">
          {footer_links.map(({ title, icon, href }) => (
            <UnstyledButton
              key={title}
              variant="white"
              component={ButtonLink}
              href={href}
              leftIcon={icon}
              onClick={onClose}
              className={cx(classes.productLink, classes.footerButton)}
              styles={{
                leftIcon: { paddingRight: 8, strokeWidth: 1 },
              }}
            >
              {title}
            </UnstyledButton>
          ))}
        </Stack>
      </Group>
      <CategoryDetailDrawer
        opened={opened}
        onClose={onClose}
        onBack={handlers.close}
        category={selectedCategoryDetail}
      />
    </Drawer>
  );
};

export default NavDrawer;
