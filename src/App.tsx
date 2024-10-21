import { Center, Flex, Spinner } from "@chakra-ui/react";
import { ReactNode, Suspense, useEffect } from "react";
import { Navigate, Outlet, Route, RouteObject, Routes } from "react-router-dom";
import { appRoutes } from "./router";
import {
  Authorities,
  getRole,
  useAuthentication,
  useLogout,
} from "./services/service-auth";
import { useFetchInitData } from "./services/service-init";
import { ROUTES } from "./router/routes";

// Define the shape of your route objects for better type safety
type AppRoute = RouteObject & {
  accessor?: string[];
  element: ReactNode;
  children?: AppRoute[];
};

const renderRoutes = (children: AppRoute[] | undefined, role: string) => {
  return children
    ?.filter((childRoute) => childRoute.accessor?.includes(role))
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
  const {
    data: isAuthenticated,
    isPending: isAuthLoading,
    isError,
  } = useAuthentication();
  const { mutateAsync: logout } = useLogout();

  // Fetching initial data in the app
  const { isLoading: isInitDataLoading, isError: isInitDataError } =
    useFetchInitData(!!isAuthenticated);

  useEffect(() => {
    if (typeof isAuthenticated === "boolean" && !isAuthenticated) {
      localStorage.getItem("token") ? logout() : null;
    }
  }, [isAuthenticated, logout]);

  const { isAdmin } = getRole();

  if ((isAuthLoading || isInitDataLoading) && !isError && !isInitDataError) {
    return (
      <Flex h={"100dvh"} w={"100dvw"} justify={"center"} align={"center"}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          size={"xl"}
          emptyColor="gray.200"
          color="primary.500"
        />
      </Flex>
    );
  }

  function MissingRoute() {
    return <Navigate to={{ pathname: "/" }} />;
  }

  return (
    <Suspense
      fallback={
        <Center h={"100dvh"} w={"100dvw"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            size={"xl"}
            emptyColor="gray.200"
            color="primary.500"
          />
        </Center>
      }
    >
      <Routes>
        {isAuthenticated ? (
          <>
            {appRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children &&
                  renderRoutes(
                    route.children,
                    isAdmin ? Authorities.superadmin : Authorities.admin
                  )}
              </Route>
            ))}
          </>
        ) : (
          <Route path="/" element={<Outlet />}>
            <Route index element={<ROUTES.Login />} />
            <Route path={"/login"} element={<ROUTES.Login />} />
            <Route
              path={"/forgot-password"}
              element={<ROUTES.ForgotPassword />}
            />
            <Route
              path={"/reset-password"}
              element={<ROUTES.ResetPassword />}
            />
            <Route
              path="/email-confirmation"
              element={<ROUTES.EmailConfirmation />}
            />
            <Route path="*" element={<MissingRoute />} />
          </Route>
        )}
      </Routes>
    </Suspense>
  );
};

export default App;
