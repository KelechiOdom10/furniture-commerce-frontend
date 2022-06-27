import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import { useProductType } from "@hooks/api/useProductType";
import productTypeService from "services/productTypeService";
import Breadcrumbs from "@components/Helpers/Breadcrumbs";
import CategoryBlock from "@components/Category/CategoryBlock";
import ProductList from "@components/Product/ProductList";
import Page from "@components/Layout/Page";
import ErrorScreen from "@components/Helpers/ErrorScreen";
import LoadingScreen from "@components/Helpers/LoadingScreen";

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
  const {
    data: productType,
    error,
    isLoading,
    refetch,
  } = useProductType(productTypeSlug);

  if (error) {
    return (
      <ErrorScreen
        error={error}
        message="Error loading subcategories and products"
        resetErrorBoundary={() => refetch()}
      />
    );
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Page>
      {productType && (
        <>
          <Breadcrumbs
            breadcrumbs={[
              { title: "Home", href: "/" },
              {
                title: productType.categoryName,
                href: `/categories/${productType.categorySlug}`,
              },
              {
                title: productType.name,
              },
            ]}
          />
          <CategoryBlock title={productType.name} />
          <ProductList products={productType.products ?? []} />
        </>
      )}
    </Page>
  );
};

export default ProductType;
