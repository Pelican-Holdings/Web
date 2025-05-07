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
        imageUrl="https://res.cloudinary.com/ddhygfpyk/image/upload/v1746650855/2122_tfw6x1.jpg"
        // imageUrl="https://res.cloudinary.com/ddhygfpyk/image/upload/v1746647929/Background_Image_u6pwey.jpg"
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
