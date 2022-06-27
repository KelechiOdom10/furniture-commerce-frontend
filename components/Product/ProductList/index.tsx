import { Box, Grid } from "@mantine/core";
import { ProductReadType } from "types";
import ProductCard from "@components/Product/ProductCard";

const ProductList: React.FC<{ products: ProductReadType[] }> = ({
  products,
}) => {
  return (
    <Box style={{ paddingTop: 45, paddingBottom: 80 }}>
      <Grid gutter={42} mx="auto" sx={{ width: "100%" }}>
        {products.map(product => (
          <Grid.Col key={product.id} span={12} sm={6} lg={4}>
            <ProductCard product={product} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};
export default ProductList;
