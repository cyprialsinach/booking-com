import React from "react";
import CustomButton from "../../customButton";

const NavLists = ({ navPageLinks }: { navPageLinks: INavLinks[] }) => {
  return (
    <div className="flex items-center gap-[1.5rem]">
      {navPageLinks.map(({ label, icon }: INavLinks, key: number) => (
        <div className="flex flex-col items-center" key={key}>
          <img src={icon} className="w-[2rem] h-[2rem]" />
          <span className="mt-[0.5rem] text-greyAsh font-medium text-md letter-default">
            {label}
          </span>
        </div>
      ))}
      <div className="bg-greyAsh-40 w-[1px] h-[2.688rem]" />
      <CustomButton className="w-[6.313rem]">Subscribe</CustomButton>
    </div>
  );
};
export default React.memo(NavLists);
