import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import productService from "services/productService";
import { useProduct } from "@hooks/api/useProduct";
import Breadcrumbs from "@components/Breadcrumbs";
import ProductDetail from "@components/ProductDetail";
import Page from "@components/Layout/Page";
import ErrorScreen from "@components/ErrorScreen";
import LoadingScreen from "@components/LoadingScreen";

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await productService.getProducts();

  const paths = products.map(product => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["product", slug], () =>
    productService.getProduct(slug)
  );

  return {
    props: {
      slug,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Product: NextPage<{ slug: string }> = ({ slug }) => {
  const { data: product, error, isLoading, refetch } = useProduct(slug);

  if (error) {
    return (
      <ErrorScreen
        error={error}
        message="Error loading product"
        resetErrorBoundary={() => refetch()}
      />
    );
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Page>
      {product && (
        <>
          <Breadcrumbs
            breadcrumbs={[
              { title: "Home", href: "/" },
              {
                title: product.categoryName!,
                href: `/categories/${product.categorySlug}`,
              },
              {
                title: product.productTypeName!,
                href: `/categories/${product.categorySlug}/${product.productTypeSlug}`,
              },
              { title: product.name },
            ]}
          />
          <ProductDetail product={product} />{" "}
        </>
      )}
    </Page>
  );
};

export default Product;
