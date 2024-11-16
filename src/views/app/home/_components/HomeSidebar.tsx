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
import { appRoutes } from "../../../../shared/routes/routes";

const HomeSidebar = () => {
  const SideBarNavLinks: INavLinks[] = [
    {
      slug: appRoutes.attractionsPage,
      label: "Activities",
      icon: RoadHorizonIcon,
    },
    {
      slug: appRoutes.hotelPage,
      label: "Hotels",
      icon: HotelsIcon,
    },
    {
      slug: appRoutes.flightPage,
      label: "Flights",
      icon: FlightsIcon,
    },
    {
      slug: "study",
      label: "Study",
      icon: StudyIcon,
    },
    {
      slug: "visa",
      label: "Visa",
      icon: VisaIcon,
    },
    {
      slug: "immigration",
      label: "Immigration",
      icon: ImmigrationIcon,
    },
    {
      slug: "medical",
      label: "Medical",
      icon: MedicalIcon,
    },
    {
      slug: "vacation-packages",
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
              ({ slug, icon, label }: INavLinks, key: number) => (
                <li key={key}>
                  <NavLink
                    to={`${slug}`}
                    className="py-[0.75rem] px-[0.875rem] flex items-center gap-[0.5rem]"
                  >
                    <img
                      src={icon}
                      className="w-[2rem] h-[2rem]"
                      alt={`${slug} image`}
                    />
                    <span className="navNavLinkText">{label}</span>
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
