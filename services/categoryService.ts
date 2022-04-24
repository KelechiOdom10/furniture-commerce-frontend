import { api } from "api";
import { CategoryDetailType, CategoryReadType } from "types";

class CategoryService {
  async getCategories() {
    const response = await api.get<CategoryReadType[]>("/categories");
    return response.data;
  }

  async getCategory(slug: string) {
    const response = await api.get<CategoryDetailType>(`/categories/${slug}`);
    return response.data;
  }
}

export default new CategoryService();
