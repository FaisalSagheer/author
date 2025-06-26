"use client";

import React from "react";
import Email from "./Email";
import Banner from "@/app/components/Banner";
import ReactLenis from "@studio-freight/react-lenis";

function Contact() {
  return (
    <>
      <ReactLenis root>
        <Banner title="Contact Me" />
        <Email />
      </ReactLenis>
    </>
  );
}

export default Contact;
