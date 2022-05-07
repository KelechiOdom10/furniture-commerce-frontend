import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import { useCategory } from "@hooks/api/useCategory";
import categoryService from "services/categoryService";

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
  const { data: category } = useCategory(categorySlug);
  return (
    <>
      <div>Product {categorySlug}</div>
      <pre>{JSON.stringify(category, null, 2)}</pre>
    </>
  );
};

export default Category;
