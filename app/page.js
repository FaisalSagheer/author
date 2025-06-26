"use client";

import React from "react";
import Website from "./website/page";
import ReactLenis from "@studio-freight/react-lenis";

function page() {
  return (
    <>
      <ReactLenis root>
        <Website />
      </ReactLenis>
    </>
  );
}

export default page;
