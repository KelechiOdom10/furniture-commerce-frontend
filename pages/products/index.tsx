import { GetStaticProps, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import productService from "services/productService";
import { useProducts } from "@hooks/useProducts";
import ProductList from "@components/ProductList";
import ErrorScreen from "@components/ErrorScreen";
import LoadingScreen from "@components/LoadingScreen";

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("products", productService.getProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Products: NextPage = () => {
  const { data: products, error, isLoading, refetch } = useProducts();

  if (error) {
    return (
      <ErrorScreen
        error={error}
        message="Error loading products"
        resetErrorBoundary={() => refetch()}
      />
    );
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <ProductList products={products!} />;
};

export default Products;
