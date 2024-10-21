interface IPagination {
  current_page: number;
  per_page: number;
  last_page: number;
  total: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string;
  prev_page_url: string;
}

export interface IStatus {
  is_active: string;
}

export interface RootResponse<T> {
  message?: string;
  status?: boolean;
  data: {
    count: number;
    rows: T[];
    pagination?: IPagination;
  };
}

export interface SingleDataResponse<T> {
  message?: string;
  status?: boolean;
  data: T;
}

export interface UserResponse {
  id: number;
  name: string;
  email: string;
  is_active: boolean;
}

export interface CategoryResponse {
  id: number;
  name: string;
  slug: string;
  description: string;
  is_active: number;
  image: string;
  images: {
    id: number;
    image: string;
  }[];
}
