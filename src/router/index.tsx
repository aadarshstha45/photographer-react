import { ROUTES } from "./routes";
import LayoutWrapper from "@/layout";
import { Authorities } from "@/services/service-auth";
import { Center } from "@chakra-ui/react";

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
      {
        path: "category",
        element: <ROUTES.Category />,
        accessor: [Authorities.admin, Authorities.superadmin],
      },
      {
        path: "category/add",
        element: <ROUTES.CategoryForm />,
        accessor: [Authorities.admin, Authorities.superadmin],
      },
      {
        path: "category/edit/:id",
        element: <ROUTES.CategoryForm />,
        accessor: [Authorities.admin, Authorities.superadmin],
      },
      {
        path: "*",
        element: (
          <Center h={"70dvh"} w={"full"}>
            404 Not Found
          </Center>
        ),
        accessor: [Authorities.superadmin, Authorities.admin],
      },
    ],
  },
];

export { appRoutes };
