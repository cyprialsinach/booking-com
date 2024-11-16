import { RouteObject } from "react-router-dom";
import { appRoutes, authRoutes } from "./routes";
import Layout from "../../components/Layout";
import HomePage from "../../views/app/home/Index";
import HotelPage from "../../views/app/home/Hotels";
import AttractionsPage from "../../views/app/home/Attractions";
import FlightPage from "../../views/app/home/Flights";

const AppRouters: RouteObject[] = [
  {
    path: "/",
    element: <Layout type="app" />,
    // loader: rootLoader,
    children: [
      {
        index: true,
        path: authRoutes.login,
        element: <HomePage />,
      },
      {
        path: appRoutes.hotelPage,
        element: <HotelPage />,
      },
      {
        path: appRoutes.flightPage,
        element: <FlightPage />,
      },
      {
        path: appRoutes.attractionsPage,
        element: <AttractionsPage />,
      },
    ],
  },
];
export default AppRouters;
