"use client";
import Banner from "@/app/components/Banner";
import BooksSection from "@/app/components/BooksSection";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/navbar";
import NewsLetter from "@/app/components/NewsLetter";
import React from "react";
import Content from "./content";
import ReactLenis from "@studio-freight/react-lenis";

function Books() {
  return (
    <>
      <ReactLenis root>
        <Banner title="Books" />
        <Content />
        <NewsLetter />
      </ReactLenis>
    </>
  );
}

export default Books;
