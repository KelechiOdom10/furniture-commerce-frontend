import { useProduct } from "@hooks/api/useProduct";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import productService from "services/productService";

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
  const { data: product } = useProduct(slug);

  return (
    <>
      <div>Product {slug}</div>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </>
  );
};

export default Product;
