import React from "react";
import SwiperCard from "./SwiperCard";

const CompanyProfile = () => {
  return (
    <div>
      <div className="pb-10">
        {/* <h1 className="text-2xl md:text-4xl font-bold text-center pb-10 text-main">
          OUR PLANT, EQUIPMENTS AND SERVICE
        </h1> */}
        {/* <section className="overflow-hidden bg-company-profile-bg bg-center bg-no-repeat"> */}
        <div className="flex flex-col md:flex-row padding-container mb-4 items-center justify-center">
          <div className="block md:basis-2/5 order-1 pb-12 pt-8 md:py-0">
            <SwiperCard />
          </div>
          {/* <div className="basis-100 md:basis-3/5 overflow-hidden bg-company-profile-bg bg-center bg-no-repeat"> */}
          <div className="basis-100 md:basis-3/5 order-2">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Pelican Holdings(PVT)LTD
            </h1>
            <h2 className="text-lg md:text-xl italic font-semibold mb-2 py-2">
              Our Passion to deliver quality products
            </h2>
            <div className="text-gray-500 leading-relaxed">
              <p className="pb-4">
                We are an ISO 9001 certified limited liability company which
                registered under the companies act in Sri Lanka. PELICAN
                HOLDINGS is engaging in manufacturing and supplying Bitumen and
                bituminous product to the construction industry for more than
                six years period. Our Bitumen production plant is located at
                209/7, Palahela, Dekatana and We are specializing in supplying
                the entire range of Bitumen Emulsion, Cutback Bitumen, 60/70 and
                80/100 penetration grade Bitumen, Bitumen based waterproof
                coating, cold premix, construction solutions and construction
                materials for road and other construction projects.
              </p>
              <p className="pb-4">
                Our Bitumen Plant supported by two decanting plants which could
                produce 100,000 liters of 60/70 and 80/100 grade bitumen per
                day. And the production capacity of cutback bitumen will be
                about 60,000 liters per day. We have fully equipped 60/70 and
                80/100 bulk Bitumen transport bowsers, MC 30, MC 70, and
                Bituminous Emulsion Transport tankers and Barrell transport
                trucks to distribute our products islandwide. The Plant is
                supported by laboratory facilities and all our products are
                manufactured to meet ASTM specifications and tested at the R & D
                Laboratory of Road Development Authority in Sri Lanka.
              </p>
            </div>
          </div>
        </div>
        <div className="padding-container text-gray-500 leading-relaxed">
          <p className="pb-4">
            We supply our products high way projects, A grade and B grade road
            construction and rehabilitation projects, C grade road projects,
            Provincial road projects, and Asphalt producing plants in Island
            wide. Our customer base consists of local and foreign construction
            companies and government authorities. Our products are well known in
            the market and we are geared to deliver the products at any time of
            the day to any part of the country.
          </p>
        </div>
        {/* </section> */}
      </div>
    </div>
  );
};

export default CompanyProfile;
