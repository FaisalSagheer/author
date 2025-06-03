"use client";
import { Landmark, MapPin, Minus } from "lucide-react";
import React from "react";

function TourCard(props) {
  const {
    id,
    src,
    alt,
    place,
    eventplace,
    title,
    description,
    month,
    dated,
    slug,
  } = props.data;

  return (
    <>
      <div
        className="flex justify-between py-10 border-b border-gray-100"
       >
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
          <div className="mx-auto">
            <img src={src} alt={alt} className="w-80 lg:w-60 lg:h-50" />
          </div>
          <div className="lg:pl-10 pt-5 text-center lg:text-left flex flex-wrap justify-center lg:justify-start">
            <div className="text-[1rem] gap-x-2 flex">
              <span className="flex gap-x-1">
                <MapPin /> {place}
              </span>{" "}
              <Minus />
              <span className="flex gap-x-1">
                <Landmark /> {eventplace}
              </span>
            </div>
            <div>
              <h2 className="text-4xl font-medium py-3">{title}</h2>
              <p className="text-lg text-gray-500 lg:w-3/4 py-3">
                {description}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:pt-20">
          <h3 className="flex justify-end text-xl">{month}</h3>
          <span className="text-7xl font-medium">{dated}</span>
        </div>
        {/* <div className='relative right-28 top-85 lg:hidden flex'>
                                <h3 className='text-sm'>
                                    Nov
                                </h3>
                                <span className='text-3xl font-medium'>20</span>

                            </div> */}
      </div>
    </>
  );
}

export default TourCard;
