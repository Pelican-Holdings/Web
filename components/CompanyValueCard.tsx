// src/components/ProductCard.tsx
import React from "react";
import Image from "next/image";
import { CompanyValue } from "@/types";

interface CompanyValueCardProps {
  companyValue: CompanyValue;
}

const CompanyValueCard: React.FC<CompanyValueCardProps> = ({
  companyValue,
}) => {
  return (
    <div className="bg-main border rounded p-4 md:mb-4 shadow-lg overflow-hidden group transition-transform duration-300 ease-in-out transform hover:scale-105">
      <div className="justify-center py-8">
        <img
          src={companyValue.icon}
          alt={companyValue.name}
          height={128}
          width={128}
          className="mb-2 h-1/2 md:h-1/4 mx-auto rounded-full p-4 lg:p-7 bg-secondary"
        />
      </div>

      <h2 className="text-white text-xl text-center font-semibold">
        {companyValue.name}
      </h2>
      {/* <p className="text-gray-600">${product.price.toFixed(2)}</p> */}
      {/* <p className="text-sm text-gray-500 py-4 px-2 text-center">{companyValue.description}</p> */}
      <p className="text-sm text-white font-normal py-4 px-2 text-center">
        {companyValue.description}
      </p>
    </div>
  );
};

export default CompanyValueCard;
