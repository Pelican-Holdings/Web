// components/ThreeImages.tsx
import React from "react";

interface ThreeImagesProps {
  imageUrls: string[];
}

const AboutUsImages: React.FC<ThreeImagesProps> = ({ imageUrls }) => {
  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Container for the shaped images */}
      <div className="flex justify-center items-center h-full space-x-8">
        {/* Shaped image 1 */}
        <div className="clip-shape-1 w-24 h-24 border-4 border-white overflow-hidden">
          <img
            src={imageUrls[0]}
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Shaped image 2 */}
        <div className="clip-shape-2 w-24 h-24 border-4 border-white overflow-hidden">
          <img
            src={imageUrls[1]}
            alt="Image 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Shaped image 3 */}
        <div className="clip-shape-3 w-24 h-24 border-4 border-white overflow-hidden">
          <img
            src={imageUrls[2]}
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsImages;
