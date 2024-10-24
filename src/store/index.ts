import { create } from "zustand";

export interface IInitData {
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

interface IInitDataStore {
  initData?: IInitData;
  setInitData: (initData: IInitData) => void;
}

export const useStoreInitData = create<IInitDataStore>((set) => ({
  initData: undefined,
  setInitData: (initData) => set((state) => ({ ...state, initData })),
}));
