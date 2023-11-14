"use client";

import HeroExternalPage from "@/components/HeroExternalPage";
import { companyExternalValues } from "@/constants";
import React from "react";
import CompanyValueCard from "./CompanyValueCard";

const CompanyValues = () => {
  return (
    <div className="padding-container md:mx-4 pt-10 mb-6">
      <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {companyExternalValues.map((companyValue) => (
          <CompanyValueCard key={companyValue.id} companyValue={companyValue} />
        ))}
      </div>
    </div>
  );
};

export default CompanyValues;
