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
  },
  {
    title: "Master",
    icon: AsteriskSimple,
    to: "/master",
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
  },
];
