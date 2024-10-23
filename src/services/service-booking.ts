import { Api } from "./service-api";
import { useFetch, useMutate } from "./service-form-methods";
import {
  BookingResponse,
  PaginationProps,
  RootResponse,
  SingleDataResponse,
} from "./service-interface";

const useFetchBookings = ({ page, perPage }: PaginationProps) => {
  return useFetch<RootResponse<BookingResponse>>({
    apiEndpoint: Api.Booking.get({ page, perPage }),
    queryKey: ["booking", page, perPage],
  });
};

const useFetchSingleBooking = (id: string) => {
  return useFetch<SingleDataResponse<BookingResponse>>({
    apiEndpoint: Api.Booking.getOne.replace(":id", id),
    queryKey: ["booking", id],
    enabled: !!id,
  });
};

const useUpdateBooking = () => {
  return useMutate({
    apiEndpoint: Api.Booking.update,
    invalidateEndpoints: ["booking"],
    showMessage: true,
    method: "POST",
  });
};

const useDeleteBooking = () => {
  return useMutate({
    apiEndpoint: Api.Booking.delete,
    invalidateEndpoints: ["booking"],
    method: "DELETE",
    showMessage: true,
  });
};

export {
  useFetchBookings,
  useFetchSingleBooking,
  useDeleteBooking,
  useUpdateBooking,
};
