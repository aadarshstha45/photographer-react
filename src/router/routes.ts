import { lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Photographs = lazy(() => import("@/pages/Photographs"));
const Appointment = lazy(() => import("@/pages/Appointment"));
const AppointmentSuccess = lazy(() => import("@/pages/Appointment/Success"));
export const ROUTES = {
  Home,
  Photographs,
  Appointment,
  AppointmentSuccess,
};
