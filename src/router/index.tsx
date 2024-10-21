import { ROUTES } from "./routes";
import LayoutWrapper from "@/layout";
import { Authorities } from "@/services/service-auth";

const appRoutes = [
  {
    path: "/",
    element: <LayoutWrapper />,
    children: [
      {
        index: true,
        element: <ROUTES.Dashboard />,
        accessor: [Authorities.admin, Authorities.superadmin],
      },
      {
        path: "users",
        element: <ROUTES.Users />,
        accessor: [Authorities.superadmin],
      },
    ],
  },
];

export { appRoutes };
