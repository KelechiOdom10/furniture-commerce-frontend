import { GetStaticProps, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import { useCategories } from "@hooks/api/category/useCategories";
import categoryService from "@services/categoryService";

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("categories", categoryService.getCategories);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Products: NextPage = () => {
  const { data: categories } = useCategories();
  return <div>{JSON.stringify(categories, null, 2)}</div>;
};

export default Products;
