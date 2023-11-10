"use client";
import Image from "next/image";

interface HeroExternalPageProps {
  imageUrl: string;
  content: string;
}

const HeroExternalPage = ({ imageUrl, content }: HeroExternalPageProps) => {
  return (
    <div className="relative">
      <div className="w-screen h-1/2 overflow-hidden">
        <div style={{ width: "100vw", height: "50vh" }} className="">
          <Image
            src={imageUrl}
            alt="Slider 1"
            layout="fill"
            objectFit="cover"
            className="transition-transform transform scale-100 hover:scale-110"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold">
          {content}
        </div>
      </div>
    </div>
  );
};

export default HeroExternalPage;
