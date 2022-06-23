import Link from "@components/shared/Link";
import { Grid, Group, Image, Stack, Text, Title } from "@mantine/core";
import { ProductTypeReadType } from "types";
import { useCategoryBlockStyles } from "./category-block.styles";

type Props = {
  title: string;
  parentSlug?: string;
  categories?: ProductTypeReadType[];
};

const CategoryBlock: React.FC<Props> = ({ title, categories, parentSlug }) => {
  const { classes } = useCategoryBlockStyles();

  return (
    <Stack align="center" sx={{ width: "100%" }}>
      <Title order={2}>{title}</Title>
      {categories && (
        <Group align="flex-end" noWrap className={classes.categoriesContainer}>
          {categories.map(category => (
            <Link
              href={`/categories/${parentSlug}/${category.slug}`}
              className={classes.categoryLink}
              key={category.id}
            >
              <Grid sx={{ width: 120, alignItems: "flex-end" }}>
                <Grid.Col>
                  <Image src={category.imageUrl} alt={category.name} />
                </Grid.Col>
                <Grid.Col sx={{ alignItems: "center" }}>
                  <Text size="sm" align="center" sx={{ fontWeight: 500 }}>
                    {category.name}
                  </Text>
                </Grid.Col>
              </Grid>
            </Link>
          ))}
        </Group>
      )}
    </Stack>
  );
};

export default CategoryBlock;
