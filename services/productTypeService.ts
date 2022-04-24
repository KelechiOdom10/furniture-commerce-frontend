import { ProductTypeReadType, ProductTypeDetailType } from "./../types/index";
import { api } from "api";

class ProductTypeService {
  async getProductTypes() {
    const response = await api.get<ProductTypeReadType[]>("/productTypes");
    return response.data;
  }

  async getProductType(slug: string) {
    const response = await api.get<ProductTypeDetailType>(
      `/productTypes/${slug}`
    );
    return response.data;
  }
}

export default new ProductTypeService();
