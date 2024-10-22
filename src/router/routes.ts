import { lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));

export const ROUTES = {
  Home,
};
