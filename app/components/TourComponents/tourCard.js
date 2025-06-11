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
      <div className="flex py-10 border-b border-gray-100">
        <div className="flex justify-between items-center flex-wrap lg:flex-nowrap">
          <div className="mx-auto">
            <img src={src} alt={alt} className="w-80 lg:w-60 lg:h-50" />
          </div>
          <div className="lg:pl-10 pt-5 text-center lg:text-left flex flex-wrap justify-center lg:justify-start">
            <div className="text-[1rem] gap-x-2 flex">
              <div className="lg:flex hidden">
                <span className="flex gap-x-1">
                  <MapPin /> {place}
                </span>{" "}
                <Minus />
                <span className="flex gap-x-1">
                  <Landmark /> {eventplace}
                </span>
              </div>
              <div className="flex lg:hidden">
                <span className="flex gap-x-1">
                  <MapPin /> {place}
                </span>{" "}
                <Minus />
                <span className="flex gap-x-1">
                  <Landmark /> {eventplace}
                </span>
                <Minus />
                <span className="flex gap-x-1">
                  <h3 className="">{month}</h3>
                  <span className="">{dated}</span>
                </span>
              </div>
            </div>
            <div className="flex justify-between px-6 lg:px-0">
              <div>
                <h2 className="text-2xl lg:text-4xl font-medium py-3">
                  {title}
                </h2>
                <p className="lg:text-lg text-gray-500 lg:w-3/4 py-3">
                  {description}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:pt-20 hidden lg:flex">
            <h3 className="text-lg lg:text-xl">{month}</h3>
            <span className="text-7xl font-medium">{dated}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TourCard;
