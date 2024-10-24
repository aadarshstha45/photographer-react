import { Center } from "@chakra-ui/react";
import { ReactNode, Suspense } from "react";
import { Route, RouteObject, Routes } from "react-router-dom";
import { appRoutes } from "./router";
import { useFetchPhotographer } from "./services/service-photographer";
import Loader from "./utils/Loader";

// Define the shape of your route objects for better type safety
type AppRoute = RouteObject & {
  accessor?: string[];
  element: ReactNode;
  children?: AppRoute[];
};

const renderRoutes = (
  children: AppRoute[] | undefined,
  role: string | null
) => {
  return children
    ?.filter((childRoute) => {
      // Include routes if they have no accessor or the role is included in the accessor
      return (
        !childRoute.accessor || (role && childRoute.accessor.includes(role))
      );
    })
    .map((childRoute, childIndex) => (
      <Route
        key={childIndex}
        path={childRoute.path}
        element={childRoute.element}
        index={childRoute.index}
      />
    ));
};

const App = () => {
  // Fetching initial data in the app
  const { isLoading: isInitDataLoading, isError: isInitDataError } =
    useFetchPhotographer();
  if (isInitDataLoading && !isInitDataError) {
    return (
      <Center h={"100dvh"} w={"100dvw"}>
        <Loader />
      </Center>
    );
  }
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {appRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children && renderRoutes(route.children, null)}
          </Route>
        ))}
      </Routes>
    </Suspense>
  );
};

export default App;
