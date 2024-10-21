import { Api } from "./service-api";
import { useFetch, useMutate } from "./service-form-methods";
import { RootResponse, UserResponse } from "./service-interface";

interface IUserData {
  name: string;
  email: string;
  is_active: string;
}

interface IForgotPassword {
  email: string;
}

interface IResetPassword {
  password: string;
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

const useForgotPassword = () => {
  return useMutate<IForgotPassword>({
    apiEndpoint: Api.Auth.forgot,
    queryKey: ["forgotPassword"],
    message: "Password reset link sent to your email.",
  });
};

const useResetPassword = () => {
  return useMutate<IResetPassword>({
    apiEndpoint: Api.Auth.reset,
    queryKey: ["resetPassword"],
    message: "Password reset successfully.",
  });
};

export { useFetchUsers, useAddUser, useForgotPassword, useResetPassword };
