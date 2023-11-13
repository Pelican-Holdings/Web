import Image from "next/image";

const Header = () => {
  return (
    <div className="relative">
      <header className="w-full z-40 bg-main">
        <div className="max-w-[1440px] mx-auto sm:px-16 px-6 py-3 bg-transparent text-white">
          <Image
            src="https://res.cloudinary.com/midefulness/image/upload/v1699886718/Pelican%20Holdings/barrel_jpshgf.png"
            alt="menu"
            width={24}
            height={24}
            className="inline-block mx-2"
            // className="inline-block cursor-pointer lg:hidden"
          />
          Bitumen and
          <span className="text-secondary font-bold"> Bituminous products</span>
        </div>
      </header>
    </div>
  );
};

export default Header;
