import Image from "next/image";

const Gears = () => {
  return (
    <div className="relative flex items-center justify-center w-full min-h-screen bg-white">
      {/* Large Gear */}
      <div className="absolute w-[250px] h-[250px] flex items-center justify-center rounded-full border-8 border-blue-900 animate-spin-slow">
        <Image
          src="https://res.cloudinary.com/midefulness/image/upload/v1735592888/Pelican%20Holdings/Pelican-holding-logo_b2sr3v.png"
          alt="Pelican Logo"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>

      {/* Medium Gear */}
      <div className="absolute top-[30%] left-[55%] w-[200px] h-[200px] flex items-center justify-center rounded-full border-8 border-blue-900 animate-spin-medium">
        <Image
          src="https://res.cloudinary.com/midefulness/image/upload/v1735592888/Pelican%20Holdings/Pelican-holding-logo_b2sr3v.png"
          alt="Pelican Industries Logo"
          width={120}
          height={120}
          className="rounded-full"
        />
      </div>

      {/* Small Gear */}
      <div className="absolute top-[60%] left-[20%] w-[100px] h-[100px] flex items-center justify-center rounded-full border-8 border-blue-900 animate-spin-fast">
        <Image
          src="https://res.cloudinary.com/midefulness/image/upload/v1735580529/Untitled_design_sumxn3.png"
          alt="Pelican Ceylon Tours Logo"
          width={60}
          height={60}
          className="rounded-full"
        />
      </div>

      {/* Extra Small Gear */}
      <div className="absolute top-[10%] left-[10%] w-[60px] h-[60px] flex items-center justify-center rounded-full border-8 border-blue-900 animate-spin-reverse">
        <div className="w-4 h-4 bg-blue-900 rounded-full"></div>
      </div>

      {/* Add more gears as needed */}
    </div>
  );
};

export default Gears;
