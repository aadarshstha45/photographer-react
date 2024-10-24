import { Api } from "./service-api";
import { useFetch } from "./service-form-methods";
import { CategoryResponse, RootResponse } from "./service-interface";

const useFetchCategoryList = () => {
  return useFetch<RootResponse<CategoryResponse>>({
    apiEndpoint: Api.Category.getList,
    queryKey: ["categoryList"],
  });
};

export { useFetchCategoryList };
