"use client";
import React from "react";
import Content from "./content";
import Banner from "@/app/components/Banner";
import NewsLetter from "@/app/components/NewsLetter";
import ReactLenis from "@studio-freight/react-lenis";

function Bio() {
  return (
    <>
      <ReactLenis root>
        <Banner title="Bio" />
        <Content />
        <NewsLetter />
      </ReactLenis>
    </>
  );
}

export default Bio;
