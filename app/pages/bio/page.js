"use client";
import React from "react";
import Content from "./content";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import Banner from "@/app/components/Banner";
import NewsLetter from "@/app/components/NewsLetter";

function Bio() {
  return (
    <>
      <Navbar />
      <Banner title="Bio"/>
      <Content />
      <NewsLetter/>
      <Footer/>
    </>
  );
}

export default Bio;
