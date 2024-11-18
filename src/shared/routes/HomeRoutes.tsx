import { RouteObject } from "react-router-dom";
import { homeRoutes } from "./routes";
import HomePage from "../../views/app/home/Index";
import AttractionsPage from "../../views/app/home/Attractions";
import FlightPage from "../../views/app/home/Flights";
import HotelPage from "../../views/app/home/hotels/Index";
import HotelListPage from "../../views/app/home/hotels/HotelList";

const HomeRouters: RouteObject[] = [
  {
    index: true,
    path: homeRoutes.homepage,
    element: <HomePage />,
  },
  {
    path: homeRoutes.hotelPage,
    element: <HotelPage />,
  },
  {
    path: homeRoutes.HotelListPage,
    element: <HotelListPage />,
  },
  {
    path: homeRoutes.flightPage,
    element: <FlightPage />,
  },
  {
    path: homeRoutes.attractionsPage,
    element: <AttractionsPage />,
  },
  {
    path: homeRoutes.studyPage,
    element: <h1>Study</h1>,
  },
  {
    path: homeRoutes.visaPage,
    element: <h1>Visa</h1>,
  },
  {
    path: homeRoutes.immigrationPage,
    element: <h1>Immigration</h1>,
  },
  {
    path: homeRoutes.medicalPage,
    element: <h1>Medical</h1>,
  },
  {
    path: homeRoutes.vacationPackagesPage,
    element: <h1>Vacation packages</h1>,
  },
];
export default HomeRouters;
