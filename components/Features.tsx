"use client";

import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Features = () => {
  return (
    // <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-4">
    <section className="flex-col flexCenter overflow-hidden py-4">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="https://res.cloudinary.com/midefulness/image/upload/v1699902418/Pelican%20Holdings/Construction-amico_nmlebf.svg"
            alt="worker"
            width={700}
            height={700}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            {/* <Image
              src="https://res.cloudinary.com/midefulness/image/upload/v1699882114/Pelican%20Holdings/backgrounds/landing-logo_tl6gk8.png"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-15px] top-[-18px] w-10 lg:w-[50px] -rotate-80"
            /> */}
            <Fade>
              <h2 className="bold-40 lg:bold-64">Our Services</h2>
            </Fade>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <Fade cascade damping={0.1}>
                <FeatureItem
                  key={feature.title}
                  title={feature.title}
                  icon={feature.icon}
                  description={feature.description}
                />
              </Fade>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-secondary">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
