"use client";
import Image from "next/image";
import HeroExternalPage from "@/components/HeroExternalPage";
import ConstructionServices from "@/components/ConstructionServices";
import ContactUsBanner from "@/components/ContactUsBanner";

const page = () => {
  return (
    <div>
      <HeroExternalPage
        imageUrl="https://res.cloudinary.com/ddhygfpyk/image/upload/v1746651173/night-construction-site_gmpf2b.jpg"
        content="Service Page"
      />
      <div className="padding-container mx-auto xs:pt-4 py-8 relative">
        <div className="py-10">
          <h1 className="text-2xl md:text-4xl font-bold text-center pb-10 text-main">
            NATURE OF BUSINESS
          </h1>
          <p className="text-gray-600 text-justify">
            <span className="font-semibold">PELICAN HOLDINGS (PVT) LTD</span> is
            a limited liability company which registered under the companies act
            in Sri Lanka.{" "}
            <span className="font-semibold">PELICAN HOLDINGS</span> is engaging
            in manufacturing and supplying of construction materials including
            Bitumen and bituminous product, cements blocks, cements and concrete
            curbs, interlocks pawing blocks to the construction industry.We also
            provide bitumen based water proof solutions, landscaping materials,
            road construction and landscaping services tailor-made to the
            customer needs.
          </p>
        </div>

        <div className="py-4">
          <h1 className="text-2xl md:text-4xl font-bold text-center pb-10 text-main">
            OUR PLANT, EQUIPMENTS AND SERVICE
          </h1>
          <div className="flex flex-col md:flex-row padding-container items-start">
            <div className="hidden md:block md:basis-2/5 gap-8">
              <div className="border-4 border-white overflow-hidden bg-clip-content pr-10">
                <img
                  src="https://res.cloudinary.com/ddhygfpyk/image/upload/v1746650978/image_19_zk9o6l.png"
                  alt="Image 1"
                  className="w-full h-full 3xl:h-80 object-cover object-center rounded-lg shadow-lg hover:shadow-xl"
                  placeholder="blur"
                  loading="lazy"
                />
              </div>
              <div className="border-4 border-white overflow-hidden bg-clip-content py-10 pr-10">
                <img
                  src="https://res.cloudinary.com/ddhygfpyk/image/upload/v1746650973/IMG_20200829_092654_mtkosy.jpg"
                  alt="Image 1"
                  className="w-full h-full 3xl:h-80 object-cover object-center rounded-lg shadow-lg hover:shadow-xl"
                  placeholder="blur"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="basis-100 md:basis-3/5">
              <ConstructionServices />
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <ContactUsBanner />
        </div>
      </div>
    </div>
  );
};

export default page;
