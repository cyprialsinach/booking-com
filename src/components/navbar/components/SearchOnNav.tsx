import React from "react";
import CustomInput from "../../customInputs/Index";
import MagnifyingGlass from "../../../assets/svg/magnifyingGlass.svg";

const SearchOnNav = () => {
  return (
    <CustomInput
      leftImage={<img src={MagnifyingGlass} className="w-[1.5rem] h-[1.5rem]" />}
      placeholder="Search"
    />
  );
};
export default React.memo(SearchOnNav);
