import Link from "@components/shared/Link";
import { Box, Group, Image, Stack, Text, Title } from "@mantine/core";
import { ProductReadType } from "types";
import { useProductCardStyles } from "./product-card.styles";

const ProductCard: React.FC<{ product: ProductReadType }> = ({ product }) => {
  const { classes, cx } = useProductCardStyles();
  return (
    <Box
      component={Link}
      className={classes.root}
      href={`/products/${product.slug}`}
    >
      <Box>
        {" "}
        <Image
          src={product.defaultImage}
          alt={product.title}
          radius={2}
          sx={{ maxWidth: 400, maxHeight: 500 }}
        />
      </Box>
      <Box>
        <Group
          position="apart"
          spacing={6}
          align="flex-start"
          className={classes.details}
        >
          <Stack spacing={2} className={classes.detailHeder}>
            <Title order={5}>{product.name}</Title>
            <Text
              className={cx(classes.description, classes.text)}
              lineClamp={2}
            >
              {product.title}
            </Text>
          </Stack>

          <Title order={5} className={cx(classes.price, classes.text)}>
            £{" "}
            {product.price.toLocaleString("en-GB", {
              maximumFractionDigits: 2,
            })}
          </Title>
        </Group>
      </Box>
    </Box>
  );
};

export default ProductCard;
