"use client";
import React, { useState } from "react";
import Search from "@/app/components/Search";
import { TourData } from "@/app/constant";
import TourCard from "@/app/components/TourComponents/tourCard";

function Content() {
  // Search Bar Function
  const [search, setSearch] = useState("");
  const [filteredItem, setFilteredItem] = useState([]);
  const handleChange = (e) => {
    const text = e.target.value.trim().toLowerCase();
    setSearch(text);
    if (text === "") {
      setFilteredItem([]);
    } else {
      const filtered = TourData.filter(
        (item) =>
          item.title.toLowerCase().includes(text) ||
          item.month.toLowerCase().includes(text) ||
          item.dated.toLowerCase().includes(text)
      );
      setFilteredItem(filtered);
    }
  };
  return (
    <>
      <section className="max-w-2xl lg:max-w-7xl mx-auto py-10 lg:py-20">
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold text-center">
            Upcoming Events
          </h2>
        </div>
        <Search onChange={handleChange} />
        {/* Tour-Cards */}

        {search ? (
          <section className="py-10">
            {filteredItem.length > 0 ? (
              <section>
                {filteredItem.map((item, key) => (
                  <TourCard data={item} key={key} />
                ))}
              </section>
            ) : (
              <p className="text-center pt-10">
                No items found matching "{search}"
              </p>
            )}
          </section>
        ) : (
          <section className="py-10">
            {TourData.map((item, key) => (
              <TourCard data={item} key={key} />
            ))}
          </section>
        )}
      </section>
    </>
  );
}

export default Content;
