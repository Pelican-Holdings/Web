"use client";

import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Gears = () => {
  return (
    <section className="mt-14 lg:mt-16">
      {/* Header Section */}
      <div className="text-center px-4">
        <Fade>
          <h1 className="text-3xl sm:text-5xl font-bold">
            <span className="text-secondary">Our Trusted Brands,</span>
            <span className="text-main"> United Under One Vision</span>
          </h1>
        </Fade>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-[30vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden mt-8">
        <div className="relative w-full h-full">
          <Fade cascade damping={0.1} triggerOnce>
            <Image
              src="https://res.cloudinary.com/ddhygfpyk/image/upload/v1746647664/A4_-_3_vcimqa.png"
              alt="Descriptive Alt Text"
              layout="fill"
              className="object-contain"
              priority
            />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Gears;
