import React from "react";
import RoadHorizonIcon from "../../../../assets/svg/roadHorizon.svg";
import HotelsIcon from "../../../../assets/svg/hotel.svg";
import FlightsIcon from "../../../../assets/svg/flight.svg";
import StudyIcon from "../../../../assets/svg/study.svg";
import VisaIcon from "../../../../assets/svg/newspaper.svg";
import ImmigrationIcon from "../../../../assets/svg/suitcase.svg";
import MedicalIcon from "../../../../assets/svg/firstAidKit.svg";
import VacationPackageIcon from "../../../../assets/svg/package.svg";
import UpDownIcon from "../../../../assets/svg/upDown.svg";
import CustomButton from "../../../../components/CustomButton";
import { NavLink } from "react-router-dom";
import { homeRoutes } from "../../../../shared/routes/routes";

const HomeSidebar = () => {
  const SideBarNavLinks: INavLinks[] = [
    {
      route: homeRoutes.attractionsPage,
      label: "Activities",
      icon: RoadHorizonIcon,
    },
    {
      route: homeRoutes.hotelPage,
      label: "Hotels",
      icon: HotelsIcon,
    },
    {
      route: homeRoutes.flightPage,
      label: "Flights",
      icon: FlightsIcon,
    },
    {
      route: homeRoutes.studyPage,
      label: "Study",
      icon: StudyIcon,
    },
    {
      route: homeRoutes.visaPage,
      label: "Visa",
      icon: VisaIcon,
    },
    {
      route: homeRoutes.immigrationPage,
      label: "Immigration",
      icon: ImmigrationIcon,
    },
    {
      route: homeRoutes.medicalPage,
      label: "Medical",
      icon: MedicalIcon,
    },
    {
      route: homeRoutes.vacationPackagesPage,
      label: "Vacation Packages",
      icon: VacationPackageIcon,
    },
  ];
  return (
    <div className="h-full overflow-y-scroll">
      <div className="bg-white rounded-[0.25rem] px-[1.5rem]  pt-[1.5rem]  pb-[5.875rem]">
        <nav>
          <ul className="flex flex-col gap-[0.75rem]">
            {SideBarNavLinks.map(
              ({ route, icon, label }: INavLinks, key: number) => (
                <li key={key}>
                  <NavLink
                    to={`${route}`}
                    className="py-[0.75rem] px-[0.875rem] flex items-center gap-[0.5rem]"
                  >
                    <img
                      src={icon}
                      className="w-[2rem] h-[2rem]"
                      alt={`${route} image`}
                    />
                    <span className="navLinkText">{label}</span>
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>
        <div className="bg-greyAsh-30 mt-[4rem] py-[1.125rem] px-[0.875rem] flex items-center rounded-[0.25rem] gap-[0.5rem]">
          <CustomButton
            className="w-[3.125rem] h-[3.125rem] font-medium"
            fontSize="text-md"
          >
            Go
          </CustomButton>
          <span className="text-sm font-medium text-greyAsh letter-default">
            Personal Account
          </span>
          <img
            src={UpDownIcon}
            className="w-[1.5rem] h-[1.5rem] ml-auto"
            alt="change accou"
          />
        </div>
      </div>
    </div>
  );
};
export default React.memo(HomeSidebar);
