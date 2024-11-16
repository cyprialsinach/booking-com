import HomeLayout from "./_components/HomeLayout"
import { useLocation } from "react-router-dom";

const HotelPage = () => {
      const location = useLocation();
    const destinations = location.state?.destinations;
    console.log(destinations, "destinations");
   
    return (
      <HomeLayout>
        <div className="bg-white p-[1.5rem] grow rounded-[0.25rem]">
          <h1 className="text-xl font-bold ">Hotel Destinations</h1>
          {destinations ? (
            <div className="flex items-center gap-[0.8rem]">
              {destinations.map((destination: any, index: number) => (
                <div key={index}>
                  <img src={destination.image_url} alt={destination.name} />
                  <h2>{destination.name}</h2>
                  <p>{destination.label}</p>
                  <p>{destination.hotels} hotels available</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No destinations available.</p>
          )}
        </div>
      </HomeLayout>
    );
}
 export default HotelPage;