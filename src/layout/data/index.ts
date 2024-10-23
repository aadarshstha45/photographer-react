import { Authorities } from "@/services/service-auth";
import {
  CalendarBlank,
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
    title: "Bookings",
    icon: CalendarBlank,
    to: "/bookings",
    accessor: [Authorities.superadmin, Authorities.admin],
  },
];
