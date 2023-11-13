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
  const imageUrls = ['/backgrounds/our-services.jpg', '/backgrounds/our-services.jpg', '/backgrounds/our-services.jpg'];
  return (
    <div>
      <HeroExternalPage
        imageUrl="https://res.cloudinary.com/midefulness/image/upload/v1699723800/Pelican%20Holdings/construction-workers-yellow-vests-vests-raise-their-hands-air_vntuhp.jpg"
        content="About Us"
      />
      <div className="padding-container mx-auto pt-12 pb-4 md:pt-16 md:mt-2 md:pb-0 relative">
        <div className="py-2 md:py-2">
          <div className="flex flex-col md:flex-row padding-container">
            <div className="hidden md:block md:basis-2/5">
              <AboutUsImages imageUrls={imageUrls} />
            </div>

            <div className="basis-100 md:basis-3/5">
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
