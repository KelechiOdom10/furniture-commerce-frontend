import ProductCard from "@components/ProductCard";
import LoadingScreen from "@components/LoadingScreen";
import { useCategory } from "@hooks/api/useCategory";
import React from "react";
import { Box, Group, Title } from "@mantine/core";
import { useMoreLikeThisStyles } from "./more-like-this.styles";

type Props = {
  categorySlug: string;
  productId: number;
};

const MoreLikeThis: React.FC<Props> = ({ categorySlug, productId }) => {
  const { data: category, isLoading, error } = useCategory(categorySlug);
  const { classes } = useMoreLikeThisStyles();
  const filteredProducts = category?.products?.filter(
    product => product.id !== productId
  );

  if (error) {
    return null;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Box className={classes.root}>
      <Title order={2}>More like this</Title>
      <Group align="stretch" noWrap className={classes.productsContainer}>
        {filteredProducts &&
          filteredProducts.map(product => {
            return (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          })}
      </Group>
    </Box>
  );
};

export default MoreLikeThis;
