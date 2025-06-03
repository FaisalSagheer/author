"use client";

import Banner from "@/app/components/Banner";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/navbar";
import React, { useState } from "react";
import Content from "./content";

function TourPage() {
  return (
    <>
      <Navbar />
      <Banner title="Tour" />
      <Content />
      <Footer />
    </>
  );
}

export default TourPage;
