import { AxiosError } from "axios";
import { useQuery } from "react-query";
import productService from "services/productService";
import { ProductReadType } from "types";

export const useFeaturedProducts = () => {
  const queryInfo = useQuery<ProductReadType[], AxiosError>(
    "featuredProducts",
    productService.getProducts,
    {
      select: data => data.slice(0, 4),
      staleTime: Infinity,
    }
  );

  return queryInfo;
};
