import { lazy } from "react";

const Login = lazy(() => import("@/pages/Auth/Login"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Users = lazy(() => import("@/pages/User"));
const ForgotPassword = lazy(() => import("@/pages/Auth/Forgot"));
const ResetPassword = lazy(() => import("@/pages/Auth/Reset"));
const EmailConfirmation = lazy(() => import("@/pages/Auth/EmailConfirmation"));
const Category = lazy(() => import("@/pages/Category"));
const CategoryForm = lazy(() => import("@/pages/Category/Form"));
export const ROUTES = {
  Login,
  Dashboard,
  Users,
  ForgotPassword,
  ResetPassword,
  EmailConfirmation,
  Category,
  CategoryForm,
};
