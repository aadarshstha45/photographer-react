import { useQuery } from "@tanstack/react-query";
import { Api } from "./service-api";
import { ApiClient } from "./service-axios";
import { useStoreInitData } from "@/store";

export interface RootInterface {
  success: boolean;
  message: string;
  user: User;
}

export interface User {
  id: number;
  name: string;
  email: string;
  is_active: number;
  role: string;
}

const fetchInitData = () => {
  return ApiClient.get<RootInterface>(Api.Auth.me);
};

const useFetchInitData = (enabled: boolean) => {
  const { setInitData } = useStoreInitData();

  return useQuery({
    queryKey: ["initData"],
    queryFn: async () => {
      const initData = await fetchInitData();
      setInitData(initData?.data?.user);
      return initData;
    },
    enabled,
    retry: 1,
  });
};

export { useFetchInitData };
