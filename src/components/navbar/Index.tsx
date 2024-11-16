import React from "react";
import Logo from "../../assets/svg/logo.svg";
import Avatar from "../../assets/img/avatar.png";
import SearchOnNav from "./components/SearchOnNav";
import NavLists from "./components/NavLists";
import { Link, useNavigate } from "react-router-dom";
import ArrowDownIcon from "../../assets/svg/arrowDown.svg";
import HomeIcon from "../../assets/svg/home.svg";
import ChartPieIcon from "../../assets/svg/chartPie.svg";
import WalletIcon from "../../assets/svg/wallet.svg";
import ListCheckIcon from "../../assets/svg/listCheck.svg";
import HandCoinsIcon from "../../assets/svg/handCoins.svg";
import BellIcon from "../../assets/svg/bell.svg";
import BasketIcon from "../../assets/svg/basket.svg";
import PlusSquareIcon from "../../assets/svg/PlusSquare.svg";

const navPageLinks: INavLinks[] = [
  {
    slug: "home",
    label: "home",
    icon: HomeIcon,
  },
  {
    slug: "dashboard",
    label: "Dashboard",
    icon: ChartPieIcon,
  },
  {
    slug: "wallet",
    label: "Wallet",
    icon: WalletIcon,
  },
  {
    slug: "plan-a-trip",
    label: "Plan a trip",
    icon: ListCheckIcon,
  },
  {
    slug: "commission-for-life",
    label: "Commission for life",
    icon: HandCoinsIcon,
  },
];
const navLinks: INavLinks[] = [
  {
    slug: "notification",
    label: "Notification",
    icon: BellIcon,
  },
  {
    slug: "cart",
    label: "Cart",
    icon: BasketIcon,
  },
  {
    slug: "create",
    label: "Create",
    icon: PlusSquareIcon,
  },
];
const Navbar: INavbar = () => {
  
  return (
    <nav className="w-full bg-white fixed">
      <div className="container">
        <div className="flex items-center justify-between h-[8.375rem] py-[2.5rem] gap-[1.75rem]">
          <div className="flex items-center gap-[1.75rem]">
            <Link to="/">
              <img src={Logo} className="w-[3.5rem] h-[3.5rem]" />
            </Link>
            <div className="w-[25rem]">
              <SearchOnNav />
            </div>
          </div>
          <div className="flex items-center gap-[1.75rem]">
            <NavLists navPageLinks={navPageLinks} />
            <div className="flex items-center gap-[1.5rem]">
              {navLinks.map(({ label, icon }: INavLinks, key: number) => (
                <div className="flex flex-col items-center" key={key}>
                  <img src={icon} className="w-[2rem] h-[2rem]" />
                  <span className="mt-[0.5rem] text-greyAsh font-medium text-md letter-default">
                    {label}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-[0.938rem]">
                <img
                  src={Avatar}
                  className="w-[3.25rem] h-[3.25rem] rounded-full"
                />
                <img src={ArrowDownIcon} className="w-[1.5rem] h-[1.5rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
