"use client";

import AboutUsImages from "@/components/AboutUsImages";
import CompanyInfo from "@/components/CompanyInfo";
import ContactUsBanner from "@/components/ContactUsBanner";
import HeroExternalPage from "@/components/HeroExternalPage";
import NatureOfBusiness from "@/components/NatureOfBusiness";
import ProductCarousel from "@/components/ProductCarousel";
import {
  companyMission,
  companyPassion,
  companyValues,
  companyVision,
} from "@/constants";

const page = () => {
  const imageUrls = [
    "https://res.cloudinary.com/ddhygfpyk/image/upload/v1746650978/image_19_zk9o6l.png",
    "/backgrounds/our-services.jpg",
    "/backgrounds/our-services.jpg",
    "/backgrounds/our-services.jpg",
  ];
  return (
    <div>
      <HeroExternalPage
        imageUrl="https://res.cloudinary.com/ddhygfpyk/image/upload/v1746651370/16234_1_w8kdh4.jpg"
        content="About Us"
      />
      <div className="padding-container mx-auto pt-12 pb-4 md:pt-16 md:mt-2 md:pb-16 relative">
        <div className="py-2 md:py-2">
          <div className="flex flex-col md:flex-row padding-container gap-8">
            <div className="md:basis-2/6 flex items-center justify-center">
              {/* <AboutUsImages imageUrls={imageUrls} /> */}
              <div className="border-4 border-white overflow-hidden bg-clip-content p-6">
                <img
                  src={imageUrls[0]}
                  alt="Image 1"
                  className="w-full h-full object-cover object-center rounded-lg shadow-lg hover:shadow-xl"
                  placeholder="blur"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="basis-100 md:basis-4/6">
              <NatureOfBusiness />
            </div>
          </div>
        </div>
      </div>

      <div className="pb-3 hidden md:block">
        <ContactUsBanner />
      </div>

      <div className="pb:3 mb-6 md:mb-0 md:py-3">
        <CompanyInfo
          vision={companyVision}
          mission={companyMission}
          passion={companyPassion}
          values={companyValues}
        />
      </div>

      <div className="py-3">
        <ProductCarousel />
      </div>
    </div>
  );
};

export default page;
