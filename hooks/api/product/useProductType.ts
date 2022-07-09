import { AxiosError } from "axios";
import { useQuery } from "react-query";
import productTypeService from "services/productTypeService";
import { ProductTypeDetailType } from "types";

export const useProductType = (slug: string) => {
  const queryInfo = useQuery<ProductTypeDetailType, AxiosError>(
    ["productType", slug],
    () => productTypeService.getProductType(slug),
    {
      enabled: !!slug,
    }
  );

  return queryInfo;
};
