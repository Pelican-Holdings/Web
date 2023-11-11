"use client";
import Image from "next/image";
import HeroExternalPage from "@/components/HeroExternalPage";
import ConstructionServices from "@/components/ConstructionServices";

const page = () => {
  return (
    <div>
      <HeroExternalPage
        imageUrl="/backgrounds/our-services.jpg"
        content="Service Page"
      />
      <div className="padding-container mx-auto py-8 relative">
        <div className="py-10">
          <h1 className="text-2xl md:text-4xl font-bold text-center pb-6 text-main">
            NATURE OF BUSINESS
          </h1>
          <p className="text-gray-600">
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
          <div className="flex flex-col md:flex-row padding-container mb-4">
            <div className="hidden md:block md:basis-2/5"></div>
            <div className="basis-100 md:basis-3/5">
              <ConstructionServices />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
