import HomeLayout from "./_components/HomeLayout";
import BannerImg from "../../../assets/img/banner.png";
import ArrowBackIcon from "../../../assets/svg/arrowBack.svg";
import ArrowRightIcon from "../../../assets/svg/arrowRight.svg";
import CalenderYellowIcon from "../../../assets/svg/calender.svg";
import UserPlus from "../../../assets/svg/userPlus.svg";
import DotThree from "../../../assets/svg/dotThree.svg";
import SettingIcon from "../../../assets/svg/gearSix.svg";
import Avatar2 from "../../../assets/img/avatar2.png";
import { NavLink } from "react-router-dom";
import CustomButton from "../../../components/CustomButton";
import { homeRoutes } from "../../../shared/routes/routes";
import FightsItinerariesCard from "./_components/FightsItinerariesCard";
import HotelsItinerariesCard from "./_components/HotelsItinerariesCard";
import ActivitiesItinerariesCard from "./_components/ActivitiesItinerariesCard";

const HomePage = () => {
  return (
    <HomeLayout>
      <div className="bg-white p-[1.5rem] h-full grow rounded-[0.25rem]">
        <header>
          <section>
            <div className="relative h-[12.5rem] rounded-[0.25rem] overflow-hidden">
              <img
                src={BannerImg}
                className="absolute w-full h-full"
                alt="header banner image"
              />
              <NavLink to="/">
                <img
                  src={ArrowBackIcon}
                  className="absolute left-[1.5rem] top-[1.5rem] w-[3rem] h-[3rem]"
                  alt="go back"
                />
              </NavLink>
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
                  <NavLink
                    to="/"
                    className="w-[2.5rem] h-[2.5rem] rounded-full flex-shrink-0 border-[0.125rem] border-primary-30 flex"
                  >
                    <img
                      src={SettingIcon}
                      className="w-[1rem] h-[1rem] m-auto"
                      alt="setting"
                    />
                  </NavLink>
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
                <NavLink
                  to={homeRoutes.attractionsPage}
                  className="btnClass w-full h-[2.875rem] font-medium !rounded-[0.25rem] mt-[2.25rem] bg-primary text-sm text-white"
                >
                  Add Activities
                </NavLink>
              </div>
              <div className="w-[18rem] rounded-[0.25rem] py-[1rem] px-[0.875rem] bg-primary-30">
                <h4 className="font-semibold text-md text-black-10">Hotels</h4>
                <p className="font-normal text-sm text-black mt-[0.5rem]">
                  Build, personalize, and optimize your itineraries with our
                  trip planner.
                </p>
                <NavLink
                  to={homeRoutes.hotelPage}
                  className="btnClass w-full h-[2.875rem] font-medium !rounded-[0.25rem] mt-[2.25rem] bg-primary text-sm text-white"
                >
                  Add Hotels
                </NavLink>
              </div>
              <div className="w-[18rem] rounded-[0.25rem] py-[1rem] px-[0.875rem] bg-primary">
                <h4 className="font-semibold text-md text-white">Flights</h4>
                <p className="font-normal text-sm text-white mt-[0.5rem]">
                  Build, personalize, and optimize your itineraries with our
                  trip planner.
                </p>
                <NavLink
                  to={homeRoutes.flightPage}
                  className="btnClass w-full h-[2.875rem] font-medium !rounded-[0.25rem] mt-[2.25rem] bg-white text-sm text-primary"
                >
                  Add Flights
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
          <FightsItinerariesCard/>
          

          {/* HOTELS */}
          <HotelsItinerariesCard/>

          {/* ACTIVITIES */}
          <ActivitiesItinerariesCard/>
        </section>
      </div>
    </HomeLayout>
  );
};
export default HomePage;
