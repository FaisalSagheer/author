"use client";
import React from "react";

export default function NewsLetter() {
  return (
    <>
      <section className="py-10">
        <div className="mx-auto text-center max-w-7xl">
          <h2 className="text-5xl max-w-4xl mx-auto font-medium">
            Sign up for the NewsLetter for updates on writing, tours, and more.
          </h2>
          <p className="text-xl max-w-2xl text-gray-500 mx-auto py-10">
            David Sedaris is the bestselling author of the books Calypso, Theft
            By Finding, Let's Explore Diabete's with Owls, Squirls Seeks etc.
          </p>
          <div className="mt-6 mx-auto flex max-w-xl">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="min-w-0 flex-auto bg-white/5 px-5 py-5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-500 sm:text-lg/6 border border-gray-300"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-[#111] px-20 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
            >
              Sign Up
            </button>
          </div>
        </div>
        <div className="">
          <img src="assets/Banner.png" className="w-[120rem]" alt="/" />
        </div>
      </section>
    </>
  );
}
