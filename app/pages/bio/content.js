"use client";
import React from "react";
import { HeroItems } from "../../constant";
import Link from "next/link";
import { Minus } from "lucide-react";

function Content() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-8 lg:px-0 py-25">
        <div className="flex items-center justify-center lg:justify-between flex-wrap lg:flex-nowrap gap-x-10">
          {/* Bio Description */}
          <div className="text-center lg:text-left">
            {/* <p className="text-base/7 text-gray-500 leading-10 flex items-center justify-center lg:justify-start">
              <Minus /> David Sedarisis
            </p> */}
            <div className="border-b border-gray-100 pb-3">
              <h2 className="text-[#111] text-5xl lg:text-6xl font-medium leading-18">
                David Sedaris
              </h2>
              <h4 className="pl-1 text-2xl text-amber-700 leading-10 font-semibold text-pretty">
                Author
              </h4>
            </div>
            <p className="mt-6 lg:text-lg text-gray-400 leading-8">
              <span className="text-black font-semibold text-xl">
                Here's a concise biography of David Sedaris for website content,
                focusing on his listed works : {" "}
              </span>
              David Sedaris is one of America's most celebrated and sharp-witted
              humorists and essayists. Rising to fame through his sardonic,
              self-deprecating, and exquisitely observed readings on NPR's "This
              American Life," Sedaris crafts brilliantly funny essays drawn from
              his own life, eccentric family, keen observations of human
              absurdity, and sharp social commentary. His unique voice
              transforms the mundane – from family vacations and quirky
              neighbors to dental visits and obsessive quirks – into
              laugh-out-loud, yet often surprisingly poignant, narratives. Key
              works exemplifying this include the bestselling essay collections
              Let's Explore Diabetes with Owls and Calypso, the latter delving
              into middle age, loss, and family bonds with his signature dark
              humor. Sedaris's prolific output extends beyond traditional
              essays. Theft by Finding: Diaries (1977-2002) offers a
              fascinating, raw, and often hilarious glimpse into his early
              struggles and development as a writer through meticulously edited
              diary entries. Demonstrating his range, Squirrel Seeks Chipmunk: A
              Modest Bestiary presents a collection of darkly humorous,
              anthropomorphic fables satirizing human behavior through animal
              characters. Across all formats – essays, diaries, and fables –
              Sedaris consistently delivers insightful, bitingly funny, and
              deeply human observations on contemporary life, making him a
              beloved figure in modern literature and a perennial fixture on
              bestseller lists and sold-out reading tours worldwide.
            </p>
            {/* <div className="mt-6 flex items-center justify-center lg:justify-start gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-[#111] px-7.5 py-4.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
              >
                Read More
              </Link>
              <Link
                href="#"
                className="text-[1rem] font-semibold text-gray-900 hover:underline"
              >
                Check My Work
              </Link>
            </div> */}
            {/* Bio-Image */}
          </div>
          {/* Bio Image */}
          <div className="pt-20 -mr-5 ">
            <img
              alt="Author"
              src="/assets/author.png"
              //   width={1800}
              //   height={1080}
              className="relative lg:w-[30rem] w-[20rem] max-w-none rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Content;
