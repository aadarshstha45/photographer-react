import { Navigate } from "react-router-dom";
import { ROUTES } from "./routes";
import { Center } from "@chakra-ui/react";
import LayoutWrapper from "@/layout";

const getAuthRoutes = () => {
  return [
    {
      path: "/login",
      element: <ROUTES.Login />,
    },
    //   {
    //     path: "/register",
    //     element: <ROUTES.Register />,
    //   },
    {
      path: "*",
      element: <Navigate to="/login" />,
    },
  ];
};

const getAppRoutes = () => {
  return [
    {
      path: "/",
      element: <LayoutWrapper />,
      children: [
        {
          index: true,
          element: <ROUTES.Dashboard />,
        },
        {
          path: "/users",
          element: <ROUTES.Users />,
        },
        {
          path: "*",
          element: (
            <Center h={"70dvh"} w={"full"}>
              404
            </Center>
          ),
        },
      ],
    },
  ];
};

export { getAuthRoutes, getAppRoutes };
