import { Api } from "./service-api";
import { useMutate } from "./service-form-methods";

const useSendAppointment = () => {
  return useMutate({
    apiEndpoint: Api.Booking.create,
    message: "Appointment sent successfully",
    queryKey: ["appointments"],
  });
};

export { useSendAppointment };
