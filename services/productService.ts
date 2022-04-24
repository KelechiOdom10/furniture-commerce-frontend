import { api } from "api";
import { ProductDetailType, ProductReadType } from "types";

class ProductService {
  async getProducts() {
    const response = await api.get<ProductReadType[]>("/products");
    return response.data;
  }

  async getProduct(slug: string) {
    const response = await api.get<ProductDetailType>(`/products/${slug}`);
    return response.data;
  }
}

export default new ProductService();
