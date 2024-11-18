import React, { useState } from "react";
// import HomeLayout from "./_components/HomeLayout";
import EmptyHotel from "../../../../assets/svg/emptyHotel.svg";
// import { useGetHotelDestination } from "./services/Home.service";
import ChooseLocationModal from "../../../../components/modals/ChooseLocationModal";
import CustomButton from "../../../../components/CustomButton";
import HotelFilterModal from "../../../../components/modals/HotelFilterModal";
import HomeLayout from "../_components/HomeLayout";
import { useGetHotelDestination, useSearchHotel } from "../services/Home.service";

const HotelPage = () => {
  const [isLocationOpen, setIsLocationOpen] = React.useState(false);
  const [selectDate, setSelectDate] = React.useState(false);
  const [hasSelected, setHasSelected] = useState(false); // Track if a location is selected
  const [currentDestId, setCurrentDestId] = React.useState("");
  const [currentSearchType, setCurrentSearchType] = React.useState("");

  const { data, apiError, getDestination, loading } =
    useGetHotelDestination(onSuccess); // api call get hotel destination
  const {
    searchHotels,
    loading: searchHotelLoading,
    apiError: searchHotelApiError,
  } = useSearchHotel(); // api call get search/filter hotel
  const onClickExplore = ({ dest_id, search_type }: HotelDestinationRes) => {
    // get search_type and dest_id on click
    setCurrentDestId(dest_id);
    setCurrentSearchType(search_type);
    // show date modal
    setSelectDate(!selectDate);
  };

  function onSuccess() {
    setHasSelected(true);
    }

  return (
    <HomeLayout>
      <div className="bg-white p-[1.5rem] h-full grow flex flex-col rounded-[0.25rem]">
        <div className="flex items-center  mb-4">
          <h1 className="text-2xl font-bold  mr-auto">Hotel Destinations</h1>
          {hasSelected && data.length > 0 && (
            <CustomButton
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              className="px-4 py-2 hover:bg-blue-600"
            >
              Change Location
            </CustomButton>
          )}
        </div>

        {!hasSelected ? (
          // Inform the user to select a location
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-lg font-normal text-black mb-4">
              Please select a location to view hotel destinations.
            </p>
            <CustomButton
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              className="px-4 py-2 hover:bg-blue-600"
            >
              Select location
            </CustomButton>
          </div>
        ) : data.length > 0 ? (
          // Display destinations if available
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.map(
              (destination: HotelDestinationRes, index: number) => (
                <div
                  key={index}
                  className="p-4 border rounded-[0.25rem] shadow-lg bg-white transition transform hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    src={destination.image_url}
                    alt={destination.name}
                    className="w-full h-40 object-cover rounded-[0.25rem] mb-4"
                  />
                  <h2 className="text-xl font-semibold mb-2 text-black">
                    {destination.name}
                  </h2>
                  <p className="text-sm font-medium text-greyAsh mb-2">
                    {destination.label}
                  </p>
                  <div className="text-sm font-medium text-greyAsh mb-4">
                    <div className="flex items-center gap-2">
                      <span className="bg-primary-20 rounded-[0.25rem] px-[0.5rem] py-[0.25rem] text-white font-semibold">
                        {destination.hotels}
                      </span>
                      <span className="text-sm font-medium text-greyAsh">
                        hotels available
                      </span>
                    </div>
                    <p className="text-sm font-medium text-greyAsh">
                      Region: {destination.region}
                    </p>
                    <p className="text-sm font-medium text-greyAsh">
                      Country: {destination.country}
                    </p>
                  </div>
                  <CustomButton
                    onClick={() => onClickExplore(destination)}
                    className="px-4 py-2 hover:bg-blue-600"
                  >
                    Explore {destination.name}
                  </CustomButton>
                </div>
              )
            )}
          </div>
        ) : (
          // Display message if no destinations are available
          <div className="flex flex-col items-center justify-center h-full">
            <img
              src={EmptyHotel}
              alt="No destinations found"
              className="w-40 h-40 mb-4"
            />
            <p className="text-lg text-black mb-4">
              No destinations available in the chosen location.
            </p>
            <CustomButton
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              className="px-4 py-2 hover:bg-blue-600"
            >
              Select {hasSelected && " a different"} location
            </CustomButton>
          </div>
        )}
      </div>
      <ChooseLocationModal
        isOpen={isLocationOpen}
        setIsOpen={setIsLocationOpen}
        data={{ getDestination, loading, apiError }}
      />
      <HotelFilterModal
        isOpen={selectDate}
        setIsOpen={setSelectDate}
        data={{
          dest_id: currentDestId,
          search_type: currentSearchType,
          searchHotels,
          searchHotelLoading,
          searchHotelApiError,
        }}
      />
    </HomeLayout>
  );
};

export default HotelPage;
