import { Authorities } from "@/services/service-auth";
import {
  CalendarBlank,
  Camera,
  Chat,
  House,
  SquaresFour,
  User,
} from "@phosphor-icons/react";

export const sidebarItems = [
  {
    title: "Dashboard",
    icon: House,
    to: "/",
    accessor: [Authorities.superadmin, Authorities.admin],
  },
  {
    title: "Category",
    icon: SquaresFour,
    to: "/category",
    accessor: [Authorities.superadmin, Authorities.admin],
  },
  {
    title: "My Works",
    icon: Camera,
    to: "/my-works",
    accessor: [Authorities.superadmin, Authorities.admin],
  },
  {
    title: "Users",
    icon: User,
    to: "/users",
    accessor: [Authorities.superadmin],
  },
  {
    title: "Message",
    icon: Chat,
    to: "/messages",
    accessor: [Authorities.superadmin, Authorities.admin],
  },
  {
    title: "Availability",
    icon: CalendarBlank,
    to: "/availability",
    accessor: [Authorities.superadmin, Authorities.admin],
  },
  {
    title: "Bookings",
    icon: CalendarBlank,
    to: "/bookings",
    accessor: [Authorities.superadmin, Authorities.admin],
  },
];
