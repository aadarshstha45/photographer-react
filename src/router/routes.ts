import { lazy } from "react";

const Login = lazy(() => import("@/pages/Auth/Login"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Users = lazy(() => import("@/pages/User"));
export const ROUTES = {
  Login,
  Dashboard,
  Users,
};
