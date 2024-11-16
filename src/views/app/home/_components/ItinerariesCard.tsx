import React from "react";
import XCancel from "../../../../assets/svg/xCancel.svg";
import Carousel from "react-multi-carousel";
import ButtonOne from "../../../../assets/svg/circleRight.svg";
import ButtonTwo from "../../../../assets/svg/circleLeft.svg";
import "react-multi-carousel/lib/styles.css";

const detailsStyle =
  "text-primary font-medium text-lg letter-default cursor-pointer hover:text-primary-10";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const ItineriesCard: IItineriesCard = ({ type, children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group w-full absolute flex justify-between">
        <img
          src={ButtonTwo}
          className={`cursor-pointer w-[1rem] h-[1rem] ${currentSlide === 0 ? "disable" : ""}`}
          onClick={() => previous()}
        />
        <img
          src={ButtonOne}
          onClick={() => next()}
          className="cursor-pointer w-[1rem] h-[1rem]"
        />
      </div>
    );
  };

  return (
    <div className="rounded-[0.25rem] overflow-hidden mt-[1.5rem] flex">
      <div className="grow py-[1.5rem] flex bg-white">
        {type !== "Flights" && (
          <div className="pl-[2.625rem] w-[14.5rem] h-[14rem]">
            <Carousel
              responsive={responsive}
              arrows={false}
              customButtonGroup={<ButtonGroup />}
            >
              <div>
                <img src={XCancel} className="w-full h-full" />
              </div>
              <div>
                <img src={XCancel} className="w-full h-full" />
              </div>
              <div>
                <img src={XCancel} className="w-full h-full" />
              </div>
              <div>
                <img src={XCancel} className="w-full h-full" />
              </div>
            </Carousel>
          </div>
        )}

        <div className="grow flex flex-col">
          <div>{children}</div>
          <div className="flex items-center gap-[2rem] pt-[1.5rem] pl-[1.5rem] pr-[2.625rem]">
            <span className={detailsStyle}>{type} details</span>
            <span className={detailsStyle}>Price details</span>
            <span className={`ml-auto ${detailsStyle}`}>Edit details</span>
          </div>
        </div>
      </div>
      <div className="bg-red-10 w-[2.875rem] flex">
        <img src={XCancel} className="m-auto w-[1.5rem] h-[1.5rem]" />
      </div>
    </div>
  );
};
export default React.memo(ItineriesCard);
