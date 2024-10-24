import { lazy } from "react";

const Login = lazy(() => import("@/pages/Auth/Login"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Users = lazy(() => import("@/pages/User"));
const ForgotPassword = lazy(() => import("@/pages/Auth/Forgot"));
const ResetPassword = lazy(() => import("@/pages/Auth/Reset"));
const EmailConfirmation = lazy(() => import("@/pages/Auth/EmailConfirmation"));
const Category = lazy(() => import("@/pages/Category"));
const CategoryForm = lazy(() => import("@/pages/Category/Form"));
const Settings = lazy(() => import("@/pages/Settings"));
const Messages = lazy(() => import("@/pages/Messages"));
const Bookings = lazy(() => import("@/pages/Bookings"));
const Availability = lazy(() => import("@/pages/Availability"));
const MyWorks = lazy(() => import("@/pages/MyWorks"));
const WorkForm = lazy(() => import("@/pages/MyWorks/Form"));
export const ROUTES = {
  Login,
  Dashboard,
  Users,
  ForgotPassword,
  ResetPassword,
  EmailConfirmation,
  Category,
  CategoryForm,
  Settings,
  Messages,
  Bookings,
  Availability,
  MyWorks,
  WorkForm,
};
