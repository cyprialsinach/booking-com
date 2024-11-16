import HomeLayout from "./_components/HomeLayout";
import BannerImg from "../../../assets/img/banner.png";
import ArrowBackIcon from "../../../assets/svg/arrowBack.svg";
import ArrowRightIcon from "../../../assets/svg/arrowRight.svg";
import CalenderYellowIcon from "../../../assets/svg/calender.svg";
import UserPlus from "../../../assets/svg/userPlus.svg";
import DotThree from "../../../assets/svg/dotThree.svg";
import SettingIcon from "../../../assets/svg/gearSix.svg";
import AirPlaneInFlightIcon from "../../../assets/svg/airplainInFlight.svg";
import HotelIcon from "../../../assets/svg/warehouse.svg";
import ActivitiesIcon from "../../../assets/svg/roadHorizonWhite.svg";
import AmericanAirline from "../../../assets/svg/americanAirlines.svg";
import AirplaneTakeoff from "../../../assets/svg/airplaneTakeoff.svg";
import AirplaneLanding from "../../../assets/svg/airplaneLanding.svg";
import Naira from "../../../assets/svg/naira.svg";
import Duration from "../../../assets/svg/duration.svg";
import SuitCaseRolling from "../../../assets/svg/suitcaseRolling.svg";
import FilmSlate from "../../../assets/svg/filmSlate.svg";
import ForkKnife from "../../../assets/svg/forkKnife.svg";
import Usb from "../../../assets/svg/usb.svg";
import MapPin from "../../../assets/svg/mapPin.svg";
import Star from "../../../assets/svg/star.svg";
import Bed from "../../../assets/svg/bed.svg";
import Pool from "../../../assets/svg/swimmingPool.svg";
import Wine from "../../../assets/svg/wine.svg";
import CalenderBlank from "../../../assets/svg/calenderBlank.svg";
import CircleUp from "../../../assets/svg/circleUp.svg";
import CircleDown from "../../../assets/svg/circleDown.svg";
import Clock from "../../../assets/svg/clock.svg";
import Avatar2 from "../../../assets/img/avatar2.png";
import { Link, NavLink } from "react-router-dom";
import CustomButton from "../../../components/CustomButton";
import ItinerariesCard from "./_components/ItinerariesCard";
import FacilitiesUi from "./_components/FacilitiesUi";
import { appRoutes } from "../../../shared/routes/routes";
import ChooseLocationModal from "./_components/modals/ChooseLocationModal";
import React from "react";

const HomePage = () => {
    const [isLocationOpen, setIsLocationOpen] = React.useState(false);
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
    <HomeLayout>
      <div className="bg-white p-[1.5rem] grow rounded-[0.25rem]">
        <header>
          <section>
            <div className="relative h-[12.5rem] rounded-[0.25rem] overflow-hidden">
              <img
                src={BannerImg}
                className="absolute w-full h-full"
                alt="header banner image"
              />
              <Link to="/">
                <img
                  src={ArrowBackIcon}
                  className="absolute left-[1.5rem] top-[1.5rem] w-[3rem] h-[3rem]"
                  alt="go back"
                />
              </Link>
            </div>
            <div className=" flex justify-between mt-[1.25rem]">
              <div>
                <div className="flex items-center gap-[0.25rem]">
                  <img
                    src={CalenderYellowIcon}
                    className="w-[1rem] h-[1rem] mb-[0.063rem]"
                    alt="calender"
                  />
                  <span className="font-medium text-sm letter-spacing3 text-yellow-10">
                    21 March 2024
                  </span>
                  <img
                    src={ArrowRightIcon}
                    className="w-[1rem] h-[1rem] mb-[0.063rem]"
                    alt="calender"
                  />
                  <span className="font-medium text-sm letter-spacing3 text-yellow-10">
                    21 April 2024
                  </span>
                </div>
                <h2 className="text-black-10 font-semibold text-xxl mt-[0.25rem]">
                  Bahamas Family Trip
                </h2>
                <div className="flex items-center gap-[0.25rem]">
                  <span className="text-greyAsh-10 font-medium text-md">
                    New York, United States of America
                  </span>
                  <div className="bg-greyAsh-50 w-[0.125rem] h-[1rem]" />
                  <span className="text-greyAsh-10 font-medium text-md">
                    Solo Trip
                  </span>
                </div>
              </div>
              <div className="grid grid-row-3 grid-flow-col items-center gap-[0.5rem]">
                <CustomButton
                  className="w-[10rem] h-[2.875rem] !rounded-[0.25rem]"
                  bgColor="bg-primary-30"
                >
                  <img
                    src={UserPlus}
                    className="w-[1.25rem] h-[1.25rem] row-start-1 "
                    alt="add user"
                  />
                </CustomButton>
                <div className="mt-[1.5rem] flex items-center row-start-2 ml-auto">
                  <img
                    src={Avatar2}
                    className="w-[2.5rem] h-[2.5rem] rounded-full flex-shrink-0"
                    alt="user profile"
                  />
                  <div className="w-[1.938rem] h-[0.125rem] rounded-[0.5rem] bg-primary-30" />
                  <Link
                    to="/"
                    className="w-[2.5rem] h-[2.5rem] rounded-full flex-shrink-0 border-[0.125rem] border-primary-30 flex"
                  >
                    <img
                      src={SettingIcon}
                      className="w-[1rem] h-[1rem] m-auto"
                      alt="setting"
                    />
                  </Link>
                </div>
                <img
                  src={DotThree}
                  className="w-[2rem] h-[2rem row-start-1"
                  alt="add user"
                />
              </div>
            </div>
            <div className="flex items-center gap-[0.25rem] mt-[-0.75rem]">
              <div className="w-[18rem] rounded-[0.25rem] py-[1rem] px-[0.875rem] bg-primary-40">
                <h4 className="font-semibold text-md text-white">Activities</h4>
                <p className="font-normal text-sm text-white mt-[0.5rem]">
                  Build, personalize, and optimize your itineraries with our
                  trip planner.
                </p>
                <CustomButton
                  className="w-full h-[2.875rem] font-medium !rounded-[0.25rem] mt-[2.25rem]"
                  bgColor="bg-primary"
                >
                  Add Activities
                </CustomButton>
              </div>
              <div className="w-[18rem] rounded-[0.25rem] py-[1rem] px-[0.875rem] bg-primary-30">
                <h4 className="font-semibold text-md text-black-10">Hotels</h4>
                <p className="font-normal text-sm text-black mt-[0.5rem]">
                  Build, personalize, and optimize your itineraries with our
                  trip planner.
                </p>
                <CustomButton
                  onClick={() => setIsLocationOpen(!isLocationOpen)}
                  className="w-full h-[2.875rem] font-medium !rounded-[0.25rem] mt-[2.25rem]"
                  bgColor="bg-primary"
                >
                  Add Hotels
                </CustomButton>
              </div>
              <div className="w-[18rem] rounded-[0.25rem] py-[1rem] px-[0.875rem] bg-primary">
                <h4 className="font-semibold text-md text-white">Flights</h4>
                <p className="font-normal text-sm text-white mt-[0.5rem]">
                  Build, personalize, and optimize your itineraries with our
                  trip planner.
                </p>
                <NavLink to={`${appRoutes.flightPage}`}>
                  {" "}
                  <CustomButton
                    className="w-full h-[2.875rem] font-medium !rounded-[0.25rem] mt-[2.25rem]"
                    bgColor="bg-white"
                    color="text-primary"
                  >
                    Add Flights
                  </CustomButton>
                </NavLink>
              </div>
            </div>
          </section>
        </header>

        <section className="mt-[5.625rem]">
          <h4 className="text-xl text-black font-semibold letter-default">
            Trip itineraries
          </h4>
          <p className="text-greyAsh font-medium text-sm letter-default">
            Your trip itineraries are placed here
          </p>

          {/* FLIGHTS */}
          <div className="mt-[1.75rem] bg-greyAsh-30 pt-[1rem] pb-[3.25rem] px-[1.5rem] rounded-[0.25rem]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[0.625rem]">
                <img
                  src={AirPlaneInFlightIcon}
                  className="w-[1.5rem] h-[1.5rem]"
                  alt="flight"
                />
                <span className="font-semibold text-black text-lg">
                  Flights
                </span>
              </div>
              <NavLink to={`${appRoutes.flightPage}`}>
                <CustomButton
                  className="w-[9.563rem] h-[2.875] font-semibold !rounded-[0.25rem]"
                  bgColor="bg-white"
                  color="text-primary"
                >
                  Add Flights
                </CustomButton>
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
                      <div className="bg-primary-20 rounded-[0.25rem] px-[0.5rem] py-[0.25rem] flex items-center justify-center">
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
                      <span className="text-md font-semibold text-black">
                        LOS
                      </span>
                      <span className="text-md font-medium text-greyAsh-10">
                        Direct
                      </span>
                      <span className="text-md font-semibold text-black">
                        SIN
                      </span>
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
                  <img
                    src={Naira}
                    className="w-[1.75rem] h-[1.75rem]"
                    alt="naira"
                  />
                  <span className="text-2xl font-semibold text-black">
                    123,450.00
                  </span>
                </div>
              </div>
              <div className="flex items-center pl-[1.5rem] pr-[2.625rem] border-y-[1px] border-y-greyAsh-70 gap-[0.75rem] py-[1.5rem]">
                <span className="font-medium text-lg text-greyAsh">
                  Facilities:
                </span>
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

          {/* HOTELS */}
          <div className="mt-[1rem] bg-greyAsh-60 pt-[1rem] pb-[3.25rem] px-[1.5rem] rounded-[0.25rem]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[0.625rem]">
                <img
                  src={HotelIcon}
                  className="w-[1.5rem] h-[1.5rem]"
                  alt="flight"
                />
                <span className="font-semibold text-white text-lg">Hotels</span>
              </div>
              <CustomButton
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className="w-[9.563rem] h-[2.875] font-semibold !rounded-[0.25rem]"
                bgColor="bg-white"
                color="text-black"
              >
                Add Hotels
              </CustomButton>
            </div>
            <ItinerariesCard type="Hotels">
              <div className="flex justify-between pr-[2.625rem] pl-[1rem]">
                <div className="w-1/2">
                  <h4 className="text-black-10 font-semibold text-xl">
                    Riviera Resort, Lekki
                  </h4>
                  <p className="font-medium text-md text-black mt-[0.125rem]">
                    18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way,
                    Lekki Phase1
                  </p>
                  <div className="flex items-center gap-[0.875rem] mt-[0.5rem]">
                    <Link to="" className="flex items-center gap-[0.25rem]">
                      <img src={MapPin} className="w-[1.125rem] h-[1.125rem]" />
                      <span className="text-primary font-medium text-md letter-default cursor-pointer hover:text-primary-10">
                        Show in map
                      </span>
                    </Link>
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
                  <img
                    src={CalenderBlank}
                    className="w-[1.25rem] h-[1.25rem]"
                  />
                  <span className="font-medium text-lg text-greyAsh">
                    Check In: 20-04-2024
                  </span>
                </div>
                <div className="flex items-center gap-[0.375rem]">
                  <img
                    src={CalenderBlank}
                    className="w-[1.25rem] h-[1.25rem]"
                  />
                  <span className="font-medium text-lg text-greyAsh">
                    Check Out: 29-04-2024
                  </span>
                </div>
              </div>
            </ItinerariesCard>
          </div>

          {/* ACTIVITIES */}
          <div className="mt-[1rem] bg-primary-10 pt-[1rem] pb-[3.25rem] px-[1.5rem] rounded-[0.25rem]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[0.625rem]">
                <img
                  src={ActivitiesIcon}
                  className="w-[1.5rem] h-[1.5rem]"
                  alt="flight"
                />
                <span className="font-semibold text-white text-lg">
                  Activities
                </span>
              </div>
              <NavLink to={`${appRoutes.attractionsPage}`}>
                <CustomButton
                  className="w-[9.563rem] h-[2.875] font-semibold !rounded-[0.25rem]"
                  bgColor="bg-white"
                  color="text-primary"
                >
                  Add Activities
                </CustomButton>
              </NavLink>
            </div>
            <ItinerariesCard type="Activities">
              <div className="flex justify-between pr-[2.625rem] pl-[1rem]">
                <div className="w-1/2">
                  <h4 className="text-black-10 font-semibold text-xl">
                    Riviera Resort, Lekki
                  </h4>
                  <p className="font-medium text-md text-black mt-[0.125rem]">
                    18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way,
                    Lekki Phase1
                  </p>
                  <div className="flex items-center gap-[0.875rem] mt-[0.5rem]">
                    <Link to="" className="flex items-center gap-[0.25rem]">
                      <img src={MapPin} className="w-[1.125rem] h-[1.125rem]" />
                      <span className="text-primary font-medium text-md letter-default cursor-pointer hover:text-primary-10">
                        Directions
                      </span>
                    </Link>
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
                  <Link to="">
                    <span className="text-primary font-medium text-md letter-default cursor-pointer hover:text-primary-10">
                      See more
                    </span>
                  </Link>
                </div>
                <div className="flex items-center gap-[0.75rem]">
                  <div className="bg-primary-20 rounded-[0.25rem] px-[0.5rem] py-[0.25rem] flex items-center justify-center">
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
        </section>
        <ChooseLocationModal
          isOpen={isLocationOpen}
          setIsOpen={setIsLocationOpen}
        />
      </div>
    </HomeLayout>
  );
};
export default HomePage;
