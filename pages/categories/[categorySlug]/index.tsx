import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import { useCategory } from "@hooks/api/category/useCategory";
import categoryService from "services/categoryService";
import Breadcrumbs from "@components/Helpers/Breadcrumbs";
import CategoryBlock from "@components/Category/CategoryBlock";
import ProductList from "@components/Product/ProductList";
import Page from "@components/Layout/Page";
import ErrorScreen from "@components/Helpers/ErrorScreen";
import LoadingScreen from "@components/Helpers/LoadingScreen";

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await categoryService.getCategories();

  const paths = categories.map(category => ({
    params: { categorySlug: category.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { categorySlug } = params! as { categorySlug: string };
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["category", categorySlug], () =>
    categoryService.getCategory(categorySlug)
  );

  return {
    props: {
      categorySlug,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Category: NextPage<{ categorySlug: string }> = ({ categorySlug }) => {
  const {
    data: category,
    error,
    isLoading,
    refetch,
  } = useCategory(categorySlug);

  if (error) {
    return (
      <ErrorScreen
        error={error}
        message="Error loading category and products"
        resetErrorBoundary={() => refetch()}
      />
    );
  }

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <Page>
      {category && (
        <>
          <Breadcrumbs
            breadcrumbs={[
              { title: "Home", href: "/" },
              {
                title: category.name,
              },
            ]}
          />
          <CategoryBlock
            categories={category.productTypes!}
            parentSlug={category.slug}
            title={category.name}
          />
          <ProductList products={category.products ?? []} />
        </>
      )}
    </Page>
  );
};

export default Category;
