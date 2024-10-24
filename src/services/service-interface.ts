import { Row } from "@tanstack/react-table";

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

export interface PaginationProps {
  page: number;
  perPage: number;
}
export interface IRow<T> {
  row: Row<T>;
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
  title?: string;
  name: string;
  slug: string;
  description: string;
  is_active: number;
  image: string;
  icon: string;
  images: {
    id: number;
    image: string;
  }[];
}

export interface PhotographerResponse {
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

export interface MessageResponse {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  messaged_at: string;
}

export interface BookingResponse {
  id: number;
  availability_id?: any;
  ticket_number: string;
  name: string;
  phone: string;
  address: string;
  message: string;
  status: string;
  booked_at: string;
  date?: any;
}

export interface AvailabilityResponse {
  id: number;
  date: string;
}
