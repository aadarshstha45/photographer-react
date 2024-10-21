import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { ApiClient } from "./service-axios";

interface IQueryProps {
  apiEndpoint: string;
  invalidateEndpoints?: string[];
  showMessage?: boolean;
  message?: string;
  enabled?: boolean;
  queryKey?: (string | number)[];
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
}

export interface IData<T> {
  id?: string | number | null;
  data?: T;
}

//getMethod

const useFetch = <T>({ apiEndpoint, enabled, queryKey }: IQueryProps) => {
  const fetchData = (): Promise<AxiosResponse<T>> => {
    return ApiClient.get(apiEndpoint);
  };
  return useQuery({
    queryKey: queryKey ?? [apiEndpoint],
    queryFn: fetchData,
    select: (response) => response.data,
    placeholderData: keepPreviousData,
    enabled: enabled ?? true,
  });
};

const useMutate = <T>({
  apiEndpoint,
  invalidateEndpoints,
  showMessage,
  message,
  method,
}: IQueryProps) => {
  const queryClient = useQueryClient();
  const sendData = ({ id, data }: IData<T>): Promise<AxiosResponse<any>> => {
    return method === "PUT"
      ? ApiClient.put(apiEndpoint.replace(":id", id as string), data)
      : method === "DELETE"
      ? ApiClient.delete(apiEndpoint.replace(":id", id as string))
      : method === "PATCH"
      ? ApiClient.patch(apiEndpoint.replace(":id", id as string), data)
      : method === "POST" && id
      ? ApiClient.post(apiEndpoint.replace(":id", id as string), data)
      : ApiClient.post(apiEndpoint, data);
  };

  return useMutation({
    mutationKey: [apiEndpoint],
    mutationFn: sendData,
    onSuccess: (response) => {
      if (invalidateEndpoints) {
        invalidateEndpoints.forEach((endpoint) => {
          queryClient.invalidateQueries({
            queryKey: [endpoint],
          });
        });
      }
      if (!showMessage && message) {
        toast.success(message);
      } else if (showMessage && !message) {
        toast.success((response.data as { message: string }).message);
      }
    },
    onError: (error: AxiosError<{ error: string; message: string }>) => {
      toast.error(
        !showMessage
          ? null
          : error?.response?.data?.error ??
              error?.response?.data?.message ??
              "An error occurred. Please try again later"
      );
    },
  });
};

export { useFetch, useMutate };
