import { Api } from "./service-api";
import { useFetch, useMutate } from "./service-form-methods";
import {
  MessageResponse,
  PaginationProps,
  RootResponse,
  SingleDataResponse,
} from "./service-interface";

const useFetchMessages = ({ page = 1, perPage = 10 }: PaginationProps) => {
  return useFetch<RootResponse<MessageResponse>>({
    apiEndpoint: Api.Message.get({ page, perPage }),
    queryKey: ["message"],
  });
};

const useFetchSingleMessage = (id: string) => {
  return useFetch<SingleDataResponse<MessageResponse>>({
    apiEndpoint: Api.Message.getOne.replace(":id", id),
    queryKey: ["message", id],
  });
};

const useDeleteMessage = () => {
  return useMutate<{ id: number }>({
    apiEndpoint: Api.Message.delete,
    invalidateEndpoints: ["message"],
    method: "DELETE",
    showMessage: true,
  });
};

export { useFetchMessages, useFetchSingleMessage, useDeleteMessage };
