"use client";

import React from "react";
import Home from "../pages/home/page";
import Contact from "../pages/contact/page";
import { usePathname } from "next/navigation";
import Books from "../pages/books/page";
import AudioBooks from "../pages/audiobooks/page";
import TourPage from "../pages/tour/page";
import Bio from "../pages/bio/page";
function Website() {
  const pathname = usePathname();
  const renderPageContent = () => {
    switch (pathname) {
      case "/contact":
        return <Contact />;
      case "/books":
        return <Books />;
      case "/contact":
        return <AudioBooks />;
      case "/tour":
        return <TourPage />;
      case "/bio":
        return <Bio />;
      case "/":
      default:
        return <Home />;
    }
  };
  return (
    <>
      <main>
        {renderPageContent()}
      </main>
    </>
  );
}

export default Website;
