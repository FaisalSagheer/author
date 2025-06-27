"use client";
import React, { useEffect, useState } from "react";
import { navItems } from "@/app/constant";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";

function Navbar() {
  const [MobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!MobileDrawerOpen);
  };
  const [color, setColor] = useState(false);
  const changeColor = () => {
    setColor(window.scrollY >= 500);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
//   const router = useTransitionRouter();
//   function slideInOut() {
//     document.documentElement.animate(
//       [
//         {
//           opacity: 1,
//           transform: "translateY(0)",
//         },
//         {
//           opacity: 0.2,
//           transform: "translateY(-35%)",
//         },
//       ],
//       {
//         duration: 1500,
//         easing: "cubic-bezier(0.87,0,0.13,1)",
//         fill: "forwards",
//         pseudoElement: "::view-transition-old(root)",
//       }
//     );
//     document.documentElement.animate(
//       [
//         {
//           clippath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
//         },
//         {
//           clippath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
//         },
//       ],
//       {
//         duration: 1500,
//         easing: "cubic-bezier(0.87,0,0.13,1)",
//         fill: "forwards",
//         pseudoElement: "::view-transition-new(root)",
//       }
//     );
//   }
  return (
    <nav
      className={`sticky top-0 z-50 border-b border-neutral-200 text-black ${
        color ? "bg-[#f8fafb]" : ""
      }`}
    >
      <div className="container lg:px-28 mx-auto relative text-sm backdrop-blur-lg">
        <div className="flex justify-between items-center py-6">
          <Link
            className="pl-5 lg:pl-0 text-2xl"
            // onClick={(e) => {
            //   e.preventDefault();
            //   router.push("/");
            //   onTransitionReady: slideInOut;
            // }}
            href="/"
          >
            {/* <img src='/' alt="Logo" /> */}
            Author Name
          </Link>
          <ul className="hidden lg:flex ml-14 space-x-12 -my-8 font-medium items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  aria-current="page"
                  className="cursor-pointer"
                //   onClick={(e) => {
                //     e.preventDefault();
                //     router.push(item.href);
                //     onTransitionReady: slideInOut;
                //   }}
                  href={item.href}
                >
                  {item.prop}
                </Link>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex justify-end pr-5 pt-2">
            <button onClick={toggleNavbar} aria-label="Toggle navigation">
              {MobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {MobileDrawerOpen && (
          <div className="fixed right-0 flex flex-col justify-center items-center lg:hidden w-full p-5 text-center bg-[#f8fafb]">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-2">
                  <Link aria-current="page" href={item.href}>
                    {item.prop}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
