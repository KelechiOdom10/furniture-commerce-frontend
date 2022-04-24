import { AxiosError } from "axios";
import { useQuery } from "react-query";
import categoryService from "services/categoryService";
import { CategoryDetailType } from "types";

export const useCategory = (slug: string) => {
  const queryInfo = useQuery<CategoryDetailType, AxiosError>(
    ["category", slug],
    () => categoryService.getCategory(slug),
    {
      enabled: !!slug,
    }
  );

  return queryInfo;
};
