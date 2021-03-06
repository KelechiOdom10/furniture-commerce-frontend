import { GetStaticProps, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import productService from "services/productService";
import { useProducts } from "@hooks/api/product/useProducts";
import ProductList from "@components/Product/ProductList";
import ErrorScreen from "@components/Helpers/ErrorScreen";
import LoadingScreen from "@components/Helpers/LoadingScreen";
import Page from "@components/Layout/Page";

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

  return (
    <Page>
      <ProductList products={products ?? []} />
    </Page>
  );
};

export default Products;
