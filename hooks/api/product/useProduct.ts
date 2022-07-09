import { AxiosError } from "axios";
import { useQuery } from "react-query";
import productService from "services/productService";
import { ProductDetailType } from "types";

export const useProduct = (slug: string) => {
  const queryInfo = useQuery<ProductDetailType, AxiosError>(
    ["product", slug],
    () => productService.getProduct(slug),
    {
      enabled: !!slug,
    }
  );

  return queryInfo;
};
