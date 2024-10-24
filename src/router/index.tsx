import LayoutWrapper from "@/layouts";
import { Center } from "@chakra-ui/react";
import { ROUTES } from "./routes";

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
      {
        path: "services",
        element: <ROUTES.Services />,
      },
      {
        path: "book-an-appointment",
        element: <ROUTES.Appointment />,
      },
      {
        path: "book-an-appointment/success",
        element: <ROUTES.AppointmentSuccess />,
      },
      { path: "*", element: <Center h="85dvh">404 Not Found</Center> },
    ],
  },
  { path: "*", element: <Center h="100vh">404 Not Found</Center> },
];
