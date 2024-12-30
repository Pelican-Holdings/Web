"use client";

import AboutTours from "@/components/AboutTours";
import Destinations from "@/components/Destinations";
import HeroExternalPage from "@/components/HeroExternalPage";
import WhyPelican from "@/components/WhyPelican";
import React from "react";

const page = () => {
  return (
    <div className="mb-8">
      <HeroExternalPage
        imageUrl="https://res.cloudinary.com/midefulness/image/upload/v1735576497/Pelican%20Holdings/tourism/Background_Image_nhuci7.jpg"
        content="Tourism"
      />

        <main className="flex flex-col gap-10">
            <AboutTours />
            <WhyPelican />
            <div>
                <Destinations />
                <footer className="py-6 bg-gray-900 text-center text-white text-sm md:text-base pb-10">
                    VISIT <span className="text-secondary">PELICAN CEYLON TOURS</span> FOR MORE
                    DETAILS!
                </footer>
            </div>
        </main>
    </div>
  );
};

export default page;
