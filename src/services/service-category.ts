import { Api } from "./service-api";
import { useFetch, useMutate } from "./service-form-methods";
import {
  CategoryResponse,
  IStatus,
  PaginationProps,
  RootResponse,
  SingleDataResponse,
} from "./service-interface";

interface ICategoryData {
  name?: string;
  description?: string;
  image?: string;
  is_active?: string;
}

const useAddCategory = () => {
  return useMutate<ICategoryData>({
    apiEndpoint: Api.Category.create,
    invalidateEndpoints: ["categorys"],
    message: "Category added successfully",
  });
};

const useFetchCategory = ({ page = 1, perPage = 10 }: PaginationProps) => {
  return useFetch<RootResponse<CategoryResponse>>({
    apiEndpoint: Api.Category.get({ page, perPage }),
    queryKey: ["categorys", page, perPage],
  });
};

const useFetchCategoryList = () => {
  return useFetch<RootResponse<CategoryResponse>>({
    apiEndpoint: Api.Category.getList,
  });
};

const useFetchSingleCategory = (id: number) => {
  return useFetch<SingleDataResponse<CategoryResponse>>({
    apiEndpoint: Api.Category.getOne.replace(":id", id + ""),
    queryKey: [Api.Category.getOne, id + ""],
    enabled: !!id,
  });
};
const useFetchTrashedCategory = () => {
  return useFetch<RootResponse<CategoryResponse>>({
    apiEndpoint: Api.Category.getTrashed,
  });
};

const useUpdateCategory = () => {
  return useMutate<ICategoryData>({
    apiEndpoint: Api.Category.update,
    invalidateEndpoints: ["categorys", Api.Category.getOne],
    message: "Category updated successfully",
    method: "POST",
  });
};

const useUpdateCategoryStatus = () => {
  return useMutate<IStatus>({
    apiEndpoint: Api.Category.update,
    method: "POST",
    invalidateEndpoints: ["category", Api.Category.getOne],
    message: "Category updated successfully",
  });
};

const useRestoreCategory = () => {
  return useMutate({
    apiEndpoint: Api.Category.restore,
    invalidateEndpoints: ["category", Api.Category.getTrashed],
    message: "Category restored successfully",
  });
};

const useDeleteCategory = () => {
  return useMutate({
    method: "DELETE",
    apiEndpoint: Api.Category.delete,
    invalidateEndpoints: ["category"],
    message: "Category deleted successfully",
  });
};

export {
  useAddCategory,
  useDeleteCategory,
  useFetchCategory,
  useFetchCategoryList,
  useFetchSingleCategory,
  useFetchTrashedCategory,
  useRestoreCategory,
  useUpdateCategory,
  useUpdateCategoryStatus,
};
