"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function ProductSection() {
  const Des = useRef();
  const ImgRef = useRef();
  useGSAP(() => {
    gsap.from(Des.current, {
      y: 360,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ImgRef,
        scroller: "body",
        markers: true,
        start: "top 50%",
      },
    });
  });
  return (
    <div className="relative isolate mx-auto max-w-7xl overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0" ref={Des}>
      <div className="mx-auto grid max-w-2xl grid-cols-1 lg:gap-x-60 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:w-lg text-[#111]">
              <h3 className="text-3xl leading-14 font-semibold">
                <span className="text-base/7 leading-10">David Sedaris</span>
                The "champion storyTeller,"
              </h3>
              <h3 className="text-3xl text-[#111] leading-10 font-semibold">
                (Los Angeles Times) returns with his first new collection of
                personal essays since the bestselling Calypso.
              </h3>
              <h2 className="py-6 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Happy-Go-Lucky
              </h2>
              <p className="mt-6 text-2xl text-gray-500 font-sans">
                In{" "}
                <span className="font-medium text-[#111]">Happy-Go-Lucky,</span>
                David Sedarisis once again captures what is most
                unexcepted,hilarious and poignant about these recent upheavels,
                personal and public and expresses in precise language both the
                misanthropy and desire for connection that drive us all. If we
                must live in interesting times, there is no one better to
                chronicle them than the incomparable David Sedaris.
              </p>
            </div>
            <div className="pt-20">
              <h4 className="text-2xl">
                4.5
                <span className="text-gray-400">/5- from 4,114 ratings</span>
              </h4>
              <img className="pt-3" src="assets/Amazon_Logo.png" alt="/" />
            </div>
          </div>
        </div>
        {/* Book Image*/}
        <div className="-mt-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden" ref={ImgRef}>
          <img
            alt="/"
            src="assets/Book.png"
            className="w-lg mx-auto sm:w-[528px] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 "
          />
        </div>

        {/* <div className="lg:col-span-1 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                semper sed amet vitae sed turpis id.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua
                    ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
                    vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
