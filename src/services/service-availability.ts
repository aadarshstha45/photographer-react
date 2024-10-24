import { Api } from "./service-api";
import { useFetch, useMutate } from "./service-form-methods";
import { AvailabilityResponse, RootResponse } from "./service-interface";

const useFetchAvailableDates = () => {
  return useFetch<RootResponse<AvailabilityResponse>>({
    apiEndpoint: Api.Availability.get,
    queryKey: ["availableDates"],
  });
};

const useAddAvailableDate = () => {
  return useMutate({
    apiEndpoint: Api.Availability.create,
    queryKey: ["addAvailableDate"],
    invalidateEndpoints: ["availableDates"],
  });
};

const useDeleteAvailableDate = () => {
  return useMutate({
    apiEndpoint: Api.Availability.delete,
    queryKey: ["deleteAvailableDate"],
    invalidateEndpoints: ["availableDates"],
    showMessage: true,
    method: "DELETE",
  });
};

export { useAddAvailableDate, useDeleteAvailableDate, useFetchAvailableDates };
