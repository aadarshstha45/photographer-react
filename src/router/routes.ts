import { lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Services = lazy(() => import("@/pages/Services"));
const Appointment = lazy(() => import("@/pages/Appointment"));
const AppointmentSuccess = lazy(() => import("@/pages/Appointment/Success"));
export const ROUTES = {
  Home,
  Services,
  Appointment,
  AppointmentSuccess,
};
