"use client";

import { Landmark, MapPin, Minus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { TourData } from "../../constant";
import TourCard from "@/app/components/TourComponents/tourCard";

function Tour() {
  return (
    <>
      <section className="max-w-2xl lg:max-w-7xl mx-auto lg:py-10 px-6 lg:px-10">
        <div className="py-5">
          <h2 className="text-4xl lg:text-5xl font-bold text-center lg:text-left">Upcoming Events</h2>
        </div>
        {/* Tour-Cards */}
        {TourData.length > 0 ? (
          <section>
            {TourData.slice(0,2).map((item, key) => (
              <TourCard data={item} key={key} />
            ))}
          </section>
        ) : (
          <p>Error</p>
        )}
        <div className="py-10 flex">
          <Link
            href="/pages/tour"
            className="mx-auto border border-gray-300 px-10 py-4.5 text-[1rem] font-semibold text-[#111] shadow-xs hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
          >
            View All
          </Link>
        </div>
      </section>
    </>
  );
}

export default Tour;
