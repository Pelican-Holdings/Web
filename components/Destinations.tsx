import Image from 'next/image';

const Destinations = () => {
    const destinations = [
      { name: 'Coastal Escapes', image: 'https://res.cloudinary.com/ddhygfpyk/image/upload/v1746650231/image_8_ghjoql.png' },
      { name: 'Natural Wonders', image: 'https://res.cloudinary.com/ddhygfpyk/image/upload/v1746650236/image_9_ebzcla.png' },
      { name: 'Cultural Explorations', image: 'https://res.cloudinary.com/ddhygfpyk/image/upload/v1746650410/31618_vtzpig.jpg' },
      { name: 'Eco-Friendly Adventures', image: 'https://res.cloudinary.com/ddhygfpyk/image/upload/v1746650227/image_widtzc.png' },
    ];
  
    return (
        <section className="py-10 bg-gray-900 text-white">
        <h2 className="text-center text-2xl font-bold mb-4">DESTINATIONS</h2>
        <p className="text-center text-gray-400 text-base md:text-lg mb-8">
          JOURNEY THROUGH UNIQUE DESTINATIONS
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-4 md:mx-auto">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="relative h-40 rounded-lg overflow-hidden shadow-lg group"
            >
              <Image
                src={destination.image}
                alt={destination.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-center">
                <h3 className="text-sm md:text-lg font-bold">{destination.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};
  
export default Destinations;
  