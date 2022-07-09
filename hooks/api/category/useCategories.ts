import { AxiosError } from "axios";
import { useQuery } from "react-query";
import categoryService from "services/categoryService";
import { CategoryReadType } from "types";

export const useCategories = () => {
  const queryInfo = useQuery<CategoryReadType[], AxiosError>(
    "categories",
    categoryService.getCategories
  );

  return queryInfo;
};
