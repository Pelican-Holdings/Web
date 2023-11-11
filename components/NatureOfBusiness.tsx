import React from "react";

const NatureOfBusiness = () => {
  return (
    <div className="flex flex-col">
      <div className="text-xl text-secondary font-semibold pb-4">
        NATURE OF BUSINESS
      </div>
      <div className="font-bold pb-8 text-main flex flex-row">
        <div className="text-2xl md:text-4xl basis-3/4">
          Our <span className="text-secondary">passion to deliver</span> quality
          products...
        </div>
        <div>
          <div className="text-lg basis-1/4 inline-block p-2 px-4 rounded-full bg-main text-white">
            Pelican Holdings
          </div>
        </div>
      </div>

      <div className="text-gray-500">
        PELICAN HOLDINGS (PVT) LTD is a limited liability company which
        registered under the companies act in Sri Lanka. PELICAN HOLDINGS is
        engaging in manufacturing and supplying of construction materials
        including Bitumen and bituminous product, cements blocks, cements and
        concrete curbs, interlocks pawing blocks to the construction industry.
        We also provide bitumen based water proof solutions, landscaping
        materials, road construction and landscaping services tailor-made to the
        customer needs
      </div>
    </div>
  );
};

export default NatureOfBusiness;
