import { Api } from "./service-api";
import { useFetch, useMutate } from "./service-form-methods";
import { RootResponse, UserResponse } from "./service-interface";

interface IUserData {
  name: string;
  email: string;
  is_active: string;
}

const useFetchUsers = () => {
  return useFetch<RootResponse<UserResponse>>({
    apiEndpoint: Api.User.getList,
    queryKey: ["users"],
  });
};

const useAddUser = () => {
  return useMutate<IUserData>({
    apiEndpoint: Api.User.create,
    queryKey: ["addUser"],
    invalidateEndpoints: ["users"],
    message: "User added successfully.",
  });
};

export { useFetchUsers, useAddUser };
