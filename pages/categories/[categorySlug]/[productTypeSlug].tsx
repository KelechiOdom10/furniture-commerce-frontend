import { useProductType } from "@hooks/useProductType";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import productTypeService from "services/productTypeService";

type Props = {
  categorySlug: string;
  productTypeSlug: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const productTypes = await productTypeService.getProductTypes();
  const paths = productTypes.map(productType => ({
    params: {
      productTypeSlug: productType.slug,
      categorySlug: productType.categorySlug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { productTypeSlug, categorySlug } = params! as Props;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["productType", productTypeSlug], () =>
    productTypeService.getProductType(productTypeSlug)
  );

  return {
    props: {
      categorySlug,
      productTypeSlug,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const ProductType: NextPage<Props> = ({ productTypeSlug }) => {
  const { data: productType } = useProductType(productTypeSlug);
  return (
    <>
      <h1>productTypeSlug: {productTypeSlug}</h1>
      <pre>{JSON.stringify(productType, null, 2)}</pre>
    </>
  );
};

export default ProductType;
