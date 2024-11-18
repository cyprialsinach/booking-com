import React from "react";
import CustomButton from "../../../../../components/CustomButton";
import utils from "../../../../../shared/Utils";

const HotelCard = ({ hotel }:any) => {

  const {
    name,
    reviewScore,
    reviewScoreWord,
    reviewCount,
    priceBreakdown,
    photoUrls,
    checkin,
    checkoutDate,
    currency,
    wishlistName,
    } = hotel.property;
    
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col">
      <img
        src={photoUrls[0]}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-bold text-black">{name}</h3>
      <p className="text-sm text-greyAsh font-medium">{wishlistName}</p>
      <div className="flex justify-between items-center mt-2">
        <div>
          <p className="text-sm text-greyAsh font-medium">
            {reviewScoreWord} ({reviewCount} reviews)
          </p>
          <p className="text-xl font-bold text-green-600">{reviewScore}</p>
        </div>
        <div className="text-right">
          {priceBreakdown?.strikethroughPrice && (
            <p className="text-sm line-through font-medium text-greyAsh-60">
              {utils.numberWithCommas(priceBreakdown?.strikethroughPrice?.value)}{" "}
              {currency}
            </p>
          )}
          <p className="text-xl font-bold text-black">
            {utils.numberWithCommas(priceBreakdown?.grossPrice?.value)}{" "}
            {currency}
          </p>
        </div>
      </div>
      <p className="text-sm text-greyAsh font-medium mt-2">
        Check-in: {checkin?.fromTime} - {checkin?.untilTime}
      </p>
      <p className="text-sm text-greyAsh font-medium">
        Check-out: {checkoutDate}
      </p>
      <CustomButton className="w-full hover:bg-blue-600 mt-4">
        Add to itinerary
      </CustomButton>
    </div>
  );
};

const HotelListCard = ({ hotels }:any) => {
    
    console.log(hotels, "hotelhotelhotel");

  if (!hotels || hotels.length === 0) {
    return (
      <p className="text-lg text-black mb-4">
        No hotels found. Please refine your search.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {hotels.map((hotel:any) => (
        <HotelCard key={hotel.hotel_id} hotel={hotel} />
      ))}
    </div>
  );
};

export default React.memo(HotelListCard);
