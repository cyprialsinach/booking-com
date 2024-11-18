import React from "react";
import FacilitiesUi from "./FacilitiesUi";
import ItinerariesCard from "./ItinerariesCard";
import { homeRoutes } from "../../../../shared/routes/routes";
import { NavLink } from "react-router-dom";
import Bed from "../../../../assets/svg/bed.svg";
import Pool from "../../../../assets/svg/swimmingPool.svg";
import Wine from "../../../../assets/svg/wine.svg";
import CalenderBlank from "../../../../assets/svg/calenderBlank.svg";
import Naira from "../../../../assets/svg/naira.svg";
import HotelIcon from "../../../../assets/svg/warehouse.svg";
import Star from "../../../../assets/svg/star.svg";
import MapPin from "../../../../assets/svg/mapPin.svg";

const HotelsItinerariesCard = () => {
 const hotelFacilities = [
   {
     icon: Pool,
     facilityName: "Pool",
   },
   {
     icon: Wine,
     facilityName: "Bar",
   },
 ];

  return (
    <div className="mt-[1rem] bg-greyAsh-60 pt-[1rem] pb-[3.25rem] px-[1.5rem] rounded-[0.25rem]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[0.625rem]">
          <img src={HotelIcon} className="w-[1.5rem] h-[1.5rem]" alt="flight" />
          <span className="font-semibold text-white text-lg">Hotels</span>
        </div>
        <NavLink
          to={homeRoutes.hotelPage}
          className="btnClass w-[9.563rem] h-[2.875rem] font-semibold !rounded-[0.25rem] text-sm bg-white text-black"
        >
          Add Hotels
        </NavLink>
      </div>
      <ItinerariesCard type="Hotels">
        <div className="flex justify-between pr-[2.625rem] pl-[1rem]">
          <div className="w-1/2">
            <h4 className="text-black-10 font-semibold text-xl">
              Riviera Resort, Lekki
            </h4>
            <p className="font-medium text-md text-black mt-[0.125rem]">
              18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, Lekki
              Phase1
            </p>
            <div className="flex items-center gap-[0.875rem] mt-[0.5rem]">
              <NavLink to="" className="flex items-center gap-[0.25rem]">
                <img src={MapPin} className="w-[1.125rem] h-[1.125rem]" />
                <span className="text-primary font-medium text-md letter-default cursor-pointer hover:text-primary-10">
                  Show in map
                </span>
              </NavLink>
              <div className="flex items-center gap-[0.25rem]">
                <img src={Star} className="w-[1.125rem] h-[1.125rem]" />
                <span className="text-greyAsh-10 font-medium text-md letter-default">
                  8.5 (436)
                </span>
              </div>
              <div className="flex items-center gap-[0.25rem]">
                <img src={Bed} className="w-[1.125rem] h-[1.125rem]" />
                <span className="text-greyAsh-10 font-medium text-md letter-default">
                  King size room
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-[0.25rem]">
              <img
                src={Naira}
                className="w-[1.75rem] h-[1.75rem]"
                alt="naira"
              />
              <span className="text-2xl font-semibold text-black">
                123,450.00
              </span>
            </div>
            <p className="text-black font-medium text-md mt-[0.25]">
              Total Price: NGN 560,000
            </p>
            <p className="text-black font-medium text-md mt-[0.25]">
              1 room x 10 nights incl. taxes
            </p>
          </div>
        </div>
        <div className="pl-[1.5rem] pr-[2.625rem] border-y-[1px] border-y-greyAsh-70 flex items-center gap-[0.75rem] py-[1.5rem]">
          <div className="flex items-center gap-[0.75rem] mr-auto">
            <span className="font-medium text-lg text-greyAsh">
              Facilities:
            </span>
            {hotelFacilities.map(({ icon, facilityName }, key) => (
              <FacilitiesUi
                key={key}
                icon={icon as never}
                facilityName={facilityName}
              />
            ))}
          </div>

          <div className="flex items-center gap-[0.375rem]">
            <img src={CalenderBlank} className="w-[1.25rem] h-[1.25rem]" />
            <span className="font-medium text-lg text-greyAsh">
              Check In: 20-04-2024
            </span>
          </div>
          <div className="flex items-center gap-[0.375rem]">
            <img src={CalenderBlank} className="w-[1.25rem] h-[1.25rem]" />
            <span className="font-medium text-lg text-greyAsh">
              Check Out: 29-04-2024
            </span>
          </div>
        </div>
      </ItinerariesCard>
    </div>
  );
};
export default React.memo(HotelsItinerariesCard);
