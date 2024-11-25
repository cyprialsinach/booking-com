import Logo from "../../assets/svg/logo.svg";
import Avatar from "../../assets/img/avatar.png";
import SearchOnNav from "./components/SearchOnNav";
import NavLists from "./components/NavLists";
import { Link } from "react-router-dom";
import ArrowDownIcon from "../../assets/svg/arrowDown.svg";
import HomeIcon from "../../assets/svg/home.svg";
import ChartPieIcon from "../../assets/svg/chartPie.svg";
import WalletIcon from "../../assets/svg/wallet.svg";
import ListCheckIcon from "../../assets/svg/listCheck.svg";
import HandCoinsIcon from "../../assets/svg/handCoins.svg";
import BellIcon from "../../assets/svg/bell.svg";
import BasketIcon from "../../assets/svg/basket.svg";
import PlusSquareIcon from "../../assets/svg/plusSquare.svg";
import { homeRoutes } from "../../shared/routes/routes";

const navPageLinks: INavLinks[] = [
  {
    route: homeRoutes.homepage,
    label: "home",
    icon: HomeIcon,
  },
  {
    route: "dashboard",
    label: "Dashboard",
    icon: ChartPieIcon,
  },
  {
    route: "wallet",
    label: "Wallet",
    icon: WalletIcon,
  },
  {
    route: "plan-a-trip",
    label: "Plan a trip",
    icon: ListCheckIcon,
  },
  {
    route: "commission-for-life",
    label: "Commission for life",
    icon: HandCoinsIcon,
  },
];
const navLinks: INavLinks[] = [
  {
    route: "notification",
    label: "Notification",
    icon: BellIcon,
  },
  {
    route: "cart",
    label: "Cart",
    icon: BasketIcon,
  },
  {
    route: "create",
    label: "Create",
    icon: PlusSquareIcon,
  },
];
const Navbar: INavbar = () => {
  return (
    <nav className="w-full bg-white fixed z-50">
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
            <ul className="flex items-center gap-[1.5rem]">
              {navLinks.map(({ label, icon }: INavLinks, key: number) => (
                <li key={key}>
                  <Link to="/" className="flex flex-col items-center">
                    <img
                      src={icon}
                      className="w-[2rem] h-[2rem]"
                      alt={`${label} icon`}
                    />
                    <span className="mt-[0.5rem] text-greyAsh font-medium text-md letter-default">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
              <Link to="/" className="flex items-center gap-[0.938rem]">
                
                <img
                  src={Avatar}
                  className="w-[3.25rem] h-[3.25rem] rounded-full flex-shrink-0"
                  alt="profile picture"
                />
                <img
                  src={ArrowDownIcon}
                  className="w-[1.5rem] h-[1.5rem]"
                  alt="profile dropdown"
                />
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
