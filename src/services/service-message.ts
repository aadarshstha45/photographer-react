import { Api } from "./service-api";
import { useMutate } from "./service-form-methods";

const useSendMessage = () => {
  return useMutate({
    apiEndpoint: Api.Message.create,
    message: "Message sent successfully",
  });
};

export { useSendMessage };
