import { Center, Flex, Spinner } from "@chakra-ui/react";
import { Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { getAppRoutes, getAuthRoutes } from "./router";
import { useAuthentication, useLogout } from "./services/service-auth";

const renderRoutes = (routes: any) => {
  return routes.map((route: any, index: number) => (
    <Route
      key={index}
      path={route.path}
      element={route.element}
      index={route.index}
    >
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
};

const App = () => {
  const {
    data: isAuthenticated,
    isPending: isAuthLoading,
    isError,
  } = useAuthentication();
  const { mutateAsync: logout } = useLogout();

  useEffect(() => {
    if (typeof isAuthenticated === "boolean" && !isAuthenticated) {
      localStorage.getItem("token") ? logout() : null;
    }
  }, [isAuthenticated]);

  if (isAuthLoading && !isError) {
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
    return <Navigate to={"/"} />;
  }
  const authRoutes = getAuthRoutes();
  const appRoutes = getAppRoutes();

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
        {isAuthenticated ? renderRoutes(appRoutes) : renderRoutes(authRoutes)}
        <Route path="*" element={<MissingRoute />} />
      </Routes>
    </Suspense>
  );
};

export default App;
