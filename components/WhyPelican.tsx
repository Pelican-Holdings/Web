import Image from 'next/image';

const WhyPelican = () => {
  const features = [
    { icon: 'https://res.cloudinary.com/midefulness/image/upload/v1735576496/Pelican%20Holdings/tourism/money_hcyvxc.png', label: 'Affordable Pricing' },
    { icon: 'https://res.cloudinary.com/midefulness/image/upload/v1735576496/Pelican%20Holdings/tourism/itinerary_u2eiqo.png', label: 'Tailored Itineraries' },
    { icon: 'https://res.cloudinary.com/midefulness/image/upload/v1735576496/Pelican%20Holdings/tourism/van_bjwnet.png', label: 'Transportation' },
    { icon: 'https://res.cloudinary.com/midefulness/image/upload/v1735576496/Pelican%20Holdings/tourism/best-customer-experience_rlwmn0.png', label: 'Local Expertise' },
    { icon: 'https://res.cloudinary.com/midefulness/image/upload/v1735576496/Pelican%20Holdings/tourism/hotel_1_gvseix.png', label: 'Accommodation' },
  ];

  return (
    <section className="py-10 bg-white">
      <h2 className="text-center text-xl md:text-2xl font-bold text-gray-900 mb-8">
        WHY PELICAN CEYLON TOURS?
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-2 p-4 w-[45%] sm:w-[30%] lg:w-[15%] shadow-md rounded-lg hover:bg-main text-gray-700 hover:text-white"
          >
            <Image src={feature.icon} alt={feature.label} width={40} height={40} />
            <p className="text-sm md:text-base font-medium">{feature.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyPelican;
