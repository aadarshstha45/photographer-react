import LayoutWrapper from "@/layouts";
import { ROUTES } from "./routes";
import { Center } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";

export const appRoutes = [
  {
    path: "/",
    element: <ROUTES.Home />,
  },
  {
    path: "/",
    element: <LayoutWrapper />,
    children: [
      {
        path: "about",
        // element: <ROUTES.About />,
        element: <Center h="100vh">About</Center>,
      },
    ],
  },
  { path: "*", element: <Navigate to="/" /> },
];
