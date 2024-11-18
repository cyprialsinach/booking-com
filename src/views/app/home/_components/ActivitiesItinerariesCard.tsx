import React from "react";
import { homeRoutes } from "../../../../shared/routes/routes";
import { NavLink } from "react-router-dom";
import ActivitiesIcon from "../../../../assets/svg/roadHorizonWhite.svg";
import Naira from "../../../../assets/svg/naira.svg";
import MapPin from "../../../../assets/svg/mapPin.svg";
import Star from "../../../../assets/svg/star.svg";
import CircleUp from "../../../../assets/svg/circleUp.svg";
import CircleDown from "../../../../assets/svg/circleDown.svg";
import Clock from "../../../../assets/svg/clock.svg";
import ItinerariesCard from "./ItinerariesCard";
const ActivitiesItinerariesCard = () => {
    
  return (
    <div className="mt-[1rem] bg-primary-10 pt-[1rem] pb-[3.25rem] px-[1.5rem] rounded-[0.25rem]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[0.625rem]">
          <img
            src={ActivitiesIcon}
            className="w-[1.5rem] h-[1.5rem]"
            alt="flight"
          />
          <span className="font-semibold text-white text-lg">Activities</span>
        </div>
        <NavLink
          to={homeRoutes.attractionsPage}
          className="btnClass w-[9.563rem] h-[2.875rem] font-semibold !rounded-[0.25rem] bg-white text-primary text-sm"
        >
          Add Activities
        </NavLink>
      </div>
      <ItinerariesCard type="Activities">
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
                  Directions
                </span>
              </NavLink>
              <div className="flex items-center gap-[0.25rem]">
                <img src={Star} className="w-[1.125rem] h-[1.125rem]" />
                <span className="text-greyAsh-10 font-medium text-md letter-default">
                  8.5 (436)
                </span>
              </div>
              <div className="flex items-center gap-[0.25rem]">
                <img src={Clock} className="w-[1.125rem] h-[1.125rem]" />
                <span className="text-greyAsh-10 font-medium text-md letter-default">
                  1 Hour
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
              10:30 AM on Mar 19
            </p>
          </div>
        </div>
        <div className="pl-[1.5rem] pr-[2.625rem] border-y-[1px] border-y-greyAsh-70 flex   items-start gap-[0.75rem] py-[1.5rem]">
          <div className="flex items-center gap-[0.75rem] mr-auto">
            <span className="font-medium text-lg text-greyAsh">
              What's Included:
            </span>
            <span className="font-medium text-lg text-greyAsh">
              Admission to the Empire State Building
            </span>
            <NavLink to="">
              <span className="text-primary font-medium text-md letter-default cursor-pointer hover:text-primary-10">
                See more
              </span>
            </NavLink>
          </div>
          <div className="flex items-center gap-[0.75rem]">
            <div className="bg-primary-20 rounded-[0.25rem] px-[0.5rem] py-[0.25rem]">
              <span className="text-[0.75rem] font-medium text-white">
                Day 1 - (2)
              </span>
            </div>
            <div className="flex flex-col gap-[0.625rem]">
              <img
                src={CircleUp}
                className="w-[1.25rem] h-[1.25rem] cursor-pointer"
              />
              <img
                src={CircleDown}
                className="w-[1.25rem] h-[1.25rem] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </ItinerariesCard>
    </div>
  );
};
export default React.memo(ActivitiesItinerariesCard);
