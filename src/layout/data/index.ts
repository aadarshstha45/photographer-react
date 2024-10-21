import { Authorities } from "@/services/service-auth";
import {
  AsteriskSimple,
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
    title: "Master",
    icon: AsteriskSimple,
    to: "/master",
    accessor: [Authorities.superadmin, Authorities.admin],
    subItems: [
      {
        title: "Category",
        icon: SquaresFour,
        to: "/master/category",
      },
      {
        title: "Sub Category",
        icon: SquaresFour,
        to: "/master/sub-category",
      },
    ],
  },
  {
    title: "Users",
    icon: User,
    to: "/users",
    accessor: [Authorities.superadmin],
  },
];
