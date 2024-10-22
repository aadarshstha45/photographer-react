import { Api } from "./service-api";
import { useFetch, useMutate } from "./service-form-methods";
import { PhotographerResponse, SingleDataResponse } from "./service-interface";

const useGetPhotographer = () => {
  return useFetch<SingleDataResponse<PhotographerResponse>>({
    apiEndpoint: Api.Photographer.get,
    queryKey: ["photographer"],
  });
};

const useUpdatePhotographer = () => {
  return useMutate({
    apiEndpoint: Api.Photographer.update,
    queryKey: [Api.Photographer.update],
    invalidateEndpoints: ["photographer"],
    message: "Update Succesas",
  });
};

export { useGetPhotographer, useUpdatePhotographer };
