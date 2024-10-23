import { Api } from "./service-api";
import { useFetch } from "./service-form-methods";

const useFetchCategoryList = (enabled: boolean) => {
  return useFetch({
    apiEndpoint: Api.Category.getList,
    queryKey: ["categoryList"],
    enabled,
  });
};

export { useFetchCategoryList };
