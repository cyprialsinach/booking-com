import React from "react";
// import CustomButton from "../../customButton";
import { Link } from "react-router-dom";
import CustomButton from "../../CustomButton";

const NavLists = ({ navPageLinks }: { navPageLinks: INavLinks[] }) => {
  return (
    <ul className="flex items-center gap-[1.5rem]">
      {navPageLinks.map(({ label, icon }: INavLinks, key: number) => (
        <li key={key}>
          <Link to="/" className="flex flex-col items-center">
            <img
              src={icon}
              className="w-[2rem] h-[2rem]"
              alt={`${label} icon`}
            />
            <span className="mt-[0.5rem] navLinkText">{label}</span>
          </Link>
        </li>
      ))}
      <div className="bg-greyAsh-40 w-[1px] h-[2.688rem]" />
      <CustomButton className="w-[6.313rem] font-normal">
        Subscribe
      </CustomButton>
    </ul>
  );
};
export default React.memo(NavLists);
