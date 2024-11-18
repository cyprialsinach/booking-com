import HomeLayout from "../_components/HomeLayout";
import HotelListCard from "./components/HotelListCard";
import { useLocation } from "react-router";

const HotelListPage = () => {
  const hotels = useLocation();
  const hotelData = hotels.state.hotels || [];


  return (
    <HomeLayout>
      <div className="bg-white p-[1.5rem] h-full grow flex flex-col rounded-[0.25rem]">
        <h1 className="text-2xl font-bold mb-4">Hotel Search Results</h1>
        <HotelListCard hotels={hotelData} />
      </div>
    </HomeLayout>
  );
};

export default HotelListPage;
