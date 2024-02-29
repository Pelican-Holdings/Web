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
        <div
          style={{ width: "100vw", height: "50vh" }}
          className="brightness-50"
        >
          <Image
            src={imageUrl}
            alt="Slider 1"
            layout="fill"
            objectFit="cover"
            // className="transition-transform transform scale-100 hover:scale-110"
            className="transition-transform transform scale-100"
            placeholder="blur" // Show a blurred placeholder while loading
            blurDataURL={`data:image/svg+xml;base64,${imageUrl}`}
            loading="lazy"
          />
        </div>
        <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl font-bold text-center">
          {content}
        </div>
      </div>
    </div>
  );
};

export default HeroExternalPage;
