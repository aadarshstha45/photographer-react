import { useStoreInitData } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { Api } from "./service-api";
import { ApiClient } from "./service-axios";
export interface RootInterface {
  status: boolean;
  message: string;
  data: Data;
}

export interface Data {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  facebook: string;
  instagram: string;
  youtube: string;
}

const fetchInitData = () => {
  return ApiClient.get<RootInterface>(Api.Photographer.get);
};

const useFetchPhotographer = () => {
  const { setInitData } = useStoreInitData();

  return useQuery({
    queryKey: ["initData"],
    queryFn: async () => {
      const initData = await fetchInitData();
      setInitData(initData?.data?.data);
      return initData;
    },
    retry: 1,
  });
};

export { useFetchPhotographer };
