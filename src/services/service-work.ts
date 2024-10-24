import { Api } from "./service-api";
import { useFetch, useMutate } from "./service-form-methods";
import {
  CategoryResponse,
  IStatus,
  PaginationProps,
  RootResponse,
  SingleDataResponse,
} from "./service-interface";

interface IWorkData {
  name?: string;
  description?: string;
  image?: string;
  is_active?: string;
}

const useAddWork = () => {
  return useMutate<IWorkData>({
    apiEndpoint: Api.Work.create,
    invalidateEndpoints: ["works"],
    message: "Work added successfully",
  });
};

const useFetchWork = ({ page = 1, perPage = 10 }: PaginationProps) => {
  return useFetch<RootResponse<CategoryResponse>>({
    apiEndpoint: Api.Work.get({ page, perPage }),
    queryKey: ["works", page, perPage],
  });
};

const useFetchWorkList = () => {
  return useFetch<RootResponse<CategoryResponse>>({
    apiEndpoint: Api.Work.getList,
  });
};

const useFetchSingleWork = (id: number) => {
  return useFetch<SingleDataResponse<CategoryResponse>>({
    apiEndpoint: Api.Work.getOne.replace(":id", id + ""),
    queryKey: [Api.Work.getOne, id + ""],
    enabled: !!id,
  });
};
const useFetchTrashedWork = () => {
  return useFetch<RootResponse<CategoryResponse>>({
    apiEndpoint: Api.Work.getTrashed,
  });
};

const useUpdateWork = () => {
  return useMutate<IWorkData>({
    apiEndpoint: Api.Work.update,
    invalidateEndpoints: ["works", Api.Work.getOne],
    message: "Work updated successfully",
    method: "POST",
  });
};

const useUpdateWorkStatus = () => {
  return useMutate<IStatus>({
    apiEndpoint: Api.Work.update,
    method: "POST",
    invalidateEndpoints: ["work", Api.Work.getOne],
    message: "Work updated successfully",
  });
};

const useRestoreWork = () => {
  return useMutate({
    apiEndpoint: Api.Work.restore,
    invalidateEndpoints: ["work", Api.Work.getTrashed],
    message: "Work restored successfully",
  });
};

const useDeleteWork = () => {
  return useMutate({
    method: "DELETE",
    apiEndpoint: Api.Work.delete,
    invalidateEndpoints: ["work"],
    message: "Work deleted successfully",
  });
};

export {
  useAddWork,
  useDeleteWork,
  useFetchSingleWork,
  useFetchTrashedWork,
  useFetchWork,
  useFetchWorkList,
  useRestoreWork,
  useUpdateWork,
  useUpdateWorkStatus,
};
