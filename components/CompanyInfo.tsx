// components/CompanyInfo.tsx
import React from "react";

interface CompanyInfoProps {
  vision: string;
  mission: string;
  passion: string;
  values: string[];
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({
  vision,
  mission,
  passion,
  values,
}) => {
  return (
    <div className="padding-container mx-auto py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-r from-main to-orange-500 p-6 rounded-lg text-white shadow-lg">
        {/* <div className="bg-white p-6 shadow-lg rounded-lg text-black"> */}
          <h2 className="text-3xl font-bold mb-4">Vision</h2>
          {/* <h2 className="text-3xl font-bold mb-4 text-main">Vision</h2> */}
          {/* <p className="text-gray-600">{vision}</p> */}
          <p>{vision}</p>
        </div>
        <div className="bg-gradient-to-r from-main to-orange-500 p-6 rounded-lg text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Mission</h2>
          <p>{mission}</p>
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-r from-main to-orange-500 p-6 rounded-lg text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Passion</h2>
        <p>{passion}</p>
      </div>

      <div className="mt-12 bg-gradient-to-r from-main to-orange-500 p-6 rounded-lg text-white shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Values</h2>
        <ul className="list-disc pl-6">
          {values.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyInfo;
