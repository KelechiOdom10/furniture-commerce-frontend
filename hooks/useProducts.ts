import { AxiosError } from "axios";
import { useQuery } from "react-query";
import productService from "services/productService";
import { ProductReadType } from "types";

export const useProducts = () => {
  const queryInfo = useQuery<ProductReadType[], AxiosError>(
    "products",
    productService.getProducts
  );

  return queryInfo;
};
