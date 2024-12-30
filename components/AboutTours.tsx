import Image from 'next/image';

const AboutTours = () => {
    return (
        <section className="py-10 bg-gray-100 text-gray-900">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 lg:flex-row lg:items-start">
          <Image
            src="https://res.cloudinary.com/midefulness/image/upload/v1735580529/Untitled_design_sumxn3.png"
            alt="Pelican Ceylon Tours Logo"
            width={120}
            height={120}
            className="w-26 h-26 md:w-36 md:h-36"
          />
          <div className="text-center lg:text-left px-4">
            <h2 className="text-2xl font-bold mb-4">
              PASSIONATE ABOUT{' '}
              <span className="text-secondary">CRAFTING UNFORGETTABLE JOURNEYS</span>
            </h2>
            <p className="text-sm md:text-base">
            Pelican Ceylon Tours specializes in creating unforgettable travel experiences in Sri Lanka. From pristine beaches to cultural landmarks and wildlife adventures, we craft personalized journeys with exceptional service. With local expertise and a passion for showcasing the island’s beauty, we ensure every trip is seamless, enriching, and memorable.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutTours;
  