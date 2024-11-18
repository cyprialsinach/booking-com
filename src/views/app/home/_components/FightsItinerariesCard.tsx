import React from "react";
import FacilitiesUi from "./FacilitiesUi";
import ItinerariesCard from "./ItinerariesCard";
import { homeRoutes } from "../../../../shared/routes/routes";
import { NavLink } from "react-router-dom";
import AirPlaneInFlightIcon from "../../../../assets/svg/airplainInFlight.svg";
import AmericanAirline from "../../../../assets/svg/americanAirlines.svg";
import AirplaneTakeoff from "../../../../assets/svg/airplaneTakeoff.svg";
import AirplaneLanding from "../../../../assets/svg/airplaneLanding.svg";
import Duration from "../../../../assets/svg/duration.svg";
import SuitCaseRolling from "../../../../assets/svg/suitcaseRolling.svg";
import FilmSlate from "../../../../assets/svg/filmSlate.svg";
import ForkKnife from "../../../../assets/svg/forkKnife.svg";
import Usb from "../../../../assets/svg/usb.svg";
import Naira from "../../../../assets/svg/naira.svg";

const FightsItinerariesCard = () => {
     const flightFacilities = [
       {
         icon: SuitCaseRolling,
         facilityName: "Baggage: 20kg, Cabin Baggage: 8kg",
       },
       {
         icon: FilmSlate,
         facilityName: "In flight entertainment",
       },
       {
         icon: ForkKnife,
         facilityName: "In flight meal",
       },
       {
         icon: Usb,
         facilityName: "USB Port",
       },
    ];
    
  return (
    <div className="mt-[1.75rem] bg-greyAsh-30 pt-[1rem] pb-[3.25rem] px-[1.5rem] rounded-[0.25rem]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[0.625rem]">
          <img
            src={AirPlaneInFlightIcon}
            className="w-[1.5rem] h-[1.5rem]"
            alt="flight"
          />
          <span className="font-semibold text-black text-lg">Flights</span>
        </div>
        <NavLink
          to={homeRoutes.flightPage}
          className="btnClass w-[9.563rem] h-[2.875rem] font-semibold !rounded-[0.25rem] text-sm bg-white text-primary"
        >
          Add Flights
        </NavLink>
      </div>
      <ItinerariesCard type="Flights">
        <div className="flex items-center justify-between xl:gap-[2rem] gap-[8.563rem] pl-[1.5rem] pr-[2.625rem] pb-[1.5rem]">
          <div className="flex items-center gap-[0.75rem]">
            <img
              src={AmericanAirline}
              className="w-[1.5rem] h-[1.5rem]"
              alt="american airline"
            />
            <div>
              <h4 className="font-semibold text-xl text-black">
                American Airlines
              </h4>
              <div className="flex items-center gap-[0.75rem] mt-[0.25rem]">
                <span className="font-medium text-md text-greyAsh-10">
                  AA-829
                </span>
                <div className="w-[0.109rem] h-[0.109rem] bg-greyAsh-10" />
                <div className="bg-primary-20 rounded-[0.25rem] px-[0.5rem] py-[0.25rem]">
                  <span className="text-[0.75rem] font-medium text-white">
                    First Class
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center xl:gap-[1.2rem] gap-[2.5rem]">
            <div>
              <h5 className="text-xxl text-black font-semibold letter-default">
                08:35
              </h5>
              <p className="font-medium text-sm text-greyAsh-10 mt-[0.125rem]">
                Sun, 20 Aug
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <img
                  src={AirplaneTakeoff}
                  className="w-[1.25rem] h-[1.25rem]"
                  alt="airplane take off"
                />
                <span className="text-md font-medium text-greyAsh-10">
                  Duration: 1h 45m
                </span>
                <img
                  src={AirplaneLanding}
                  className="w-[1.25rem] h-[1.25rem]"
                  alt="airplane landing"
                />
              </div>
              <img
                src={Duration}
                className="my-[0.688rem] w-[24.188rem] h-[0.5rem]"
              />
              <div className="flex items-center justify-between">
                <span className="text-md font-semibold text-black">LOS</span>
                <span className="text-md font-medium text-greyAsh-10">
                  Direct
                </span>
                <span className="text-md font-semibold text-black">SIN</span>
              </div>
            </div>
            <div>
              <h5 className="text-xxl text-black font-semibold letter-default">
                08:35
              </h5>
              <p className="font-medium text-sm text-greyAsh-10 mt-[0.125rem]">
                Sun, 20 Aug
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[0.25rem]">
            <img src={Naira} className="w-[1.75rem] h-[1.75rem]" alt="naira" />
            <span className="text-2xl font-semibold text-black">
              123,450.00
            </span>
          </div>
        </div>
        <div className="flex items-center pl-[1.5rem] pr-[2.625rem] border-y-[1px] border-y-greyAsh-70 gap-[0.75rem] py-[1.5rem]">
          <span className="font-medium text-lg text-greyAsh">Facilities:</span>
          {flightFacilities.map(({ icon, facilityName }, key) => (
            <FacilitiesUi
              key={key}
              icon={icon as never}
              facilityName={facilityName}
            />
          ))}
        </div>
      </ItinerariesCard>
    </div>
  );
};
export default React.memo(FightsItinerariesCard);
