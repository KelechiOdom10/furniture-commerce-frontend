import { CloseIcon, Icon } from "@components/shared/Icon";
import Link from "@components/shared/Link";
import {
  Drawer,
  Box,
  Title,
  Group,
  UnstyledButton,
  Divider,
} from "@mantine/core";
import { ChevronLeft } from "tabler-icons-react";
import { CategoryDetailType } from "types";
import { useNavDrawerStyles } from "@components/Navigation/NavigationDrawer/navigation-drawer.styles";
import { useCategoryDetailDrawerStyles } from "./category-detail-drawer.styles";

type Props = {
  opened: boolean;
  category: CategoryDetailType | null;
  onBack: () => void;
  onClose: () => void;
};

const CategoryDetailDrawer = ({ opened, category, onBack, onClose }: Props) => {
  const { classes } = useNavDrawerStyles();
  const { classes: detailClasses, cx } = useCategoryDetailDrawerStyles();
  return (
    <Drawer
      opened={opened}
      withOverlay={false}
      withCloseButton={false}
      classNames={{
        closeButton: classes.closeButton,
        drawer: classes.drawer,
      }}
      onClose={() => {
        onBack();
        onClose();
      }}
    >
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3), rgba(0,0,0,.2)), url(${
            category?.imageUrl ?? "/images/default-category.jpeg"
          })`,
        }}
        className={cx(detailClasses.header, detailClasses.content)}
      >
        <Group className={detailClasses.topHeaderControls} position="apart">
          <UnstyledButton
            component={Group}
            onClick={onBack}
            spacing={2}
            className={detailClasses.backButton}
          >
            <ChevronLeft color="white" strokeWidth={3} />
            Menu
          </UnstyledButton>
          <Icon
            variant="transparent"
            className={detailClasses.closeButton}
            name="Close Category Detail Drawer Button"
            icon={<CloseIcon aria-label="Close Icon" />}
            onClick={onClose}
          />
        </Group>

        <Title order={1}>{category?.name}</Title>
      </Box>
      <Box className={cx(detailClasses.content)}>
        <Title order={6}>By Type</Title>
        <Group direction="column" spacing={12} pt={12} pl={8}>
          {category?.productTypes &&
            category?.productTypes.map(({ id, slug, name }) => (
              <Link
                key={id}
                href={`/categories/${category.slug}/${slug}`}
                size="sm"
                className={detailClasses.productTypeLink}
                onClick={onClose}
              >
                {name}
              </Link>
            ))}
        </Group>
        <Divider my={16} />
        <Link
          href={`/categories/${category?.slug}`}
          pl={8}
          size="sm"
          className={detailClasses.productTypeLink}
          onClick={onClose}
        >
          All {category?.name}
        </Link>
      </Box>
    </Drawer>
  );
};

export default CategoryDetailDrawer;
