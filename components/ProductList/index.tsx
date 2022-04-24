import ProductCard from "@components/ProductCard";
import { Container, Grid } from "@mantine/core";
import { ProductReadType } from "types";

const ProductList: React.FC<{ products: ProductReadType[] }> = ({
  products,
}) => {
  return (
    <Container size={1400} style={{ paddingTop: 80, paddingBottom: 80 }}>
      <Grid gutter={42} mx="auto" sx={{ width: "100%" }}>
        {products.map(product => (
          <Grid.Col key={product.id} span={12} sm={6} lg={4}>
            <ProductCard product={product} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
