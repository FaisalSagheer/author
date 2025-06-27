"use client";

import Banner from "@/app/components/Banner";
import React from "react";
import Content from "./content";
import ReactLenis from "@studio-freight/react-lenis";
import NewsLetter from "@/app/components/NewsLetter";

function TourPage() {
  return (
    <>
    <ReactLenis root>
      <Banner title="Tour" />
      <Content />
      <NewsLetter/>
    </ReactLenis>
    </>
  );
}

export default TourPage;
