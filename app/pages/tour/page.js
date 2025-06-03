"use client";

import Banner from "@/app/components/Banner";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/navbar";
import Search from "@/app/components/Search";
import { TourData } from "@/app/constant";
import TourCard from "@/app/components/TourComponents/tourCard";
import React, { useState } from "react";

function TourPage() {
  // Search Bar Function
  const [search, setSearch] = useState("");
  const [filteredItem, setFilteredItem] = useState([]);
  const handleChange = (e) => {
    const text = e.target.value.toLowerCase();
    setSearch(text);
    if (text === "") {
      setFilteredItem([]);
    } else {
      const filtered = TourData.filter(
        (item) =>
          item.title.toLowerCase().includes(text)|| 
          item.month.toLowerCase().includes(text)||
          item.dated.toLowerCase().includes(text)
      );
      setFilteredItem(filtered);
    }
  };
  return (
    <>
      <Navbar />
      <Banner title="Tour" />
      <section className="max-w-2xl lg:max-w-7xl mx-auto py-10 px-4 lg:px-10">
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold">Upcoming Events</h2>
        </div>
        <Search onChange={handleChange} />
        {/* Tour-Cards */}

        {search ? (
          <section>
            {filteredItem.length > 0 ? (
              <section>
                {filteredItem.map((item, key) => (
                  <TourCard data={item} key={key} />
                ))}
              </section>
            ) : (
              <p className="text-center pt-10">No items found matching "{search}"</p>
            )}
          </section>
        ) : (
          <section>
            {TourData.map((item, key) => (
              <TourCard data={item} key={key} />
            ))}
          </section>
        )}
      </section>

      <Footer />
    </>
  );
}

export default TourPage;
