import { Authorities } from "@/services/service-auth";
import { House, SquaresFour, User } from "@phosphor-icons/react";

export const sidebarItems = [
  {
    title: "Dashboard",
    icon: House,
    to: "",
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
];
