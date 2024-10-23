import { Api } from "./service-api";
import { useFetch } from "./service-form-methods";
import { AvailabilityResponse, RootResponse } from "./service-interface";

const useFetchAvailableDates = (enabled: boolean) => {
  return useFetch<RootResponse<AvailabilityResponse>>({
    apiEndpoint: Api.Availability.get,
    queryKey: ["availableDates"],
    enabled,
  });
};

export { useFetchAvailableDates };
