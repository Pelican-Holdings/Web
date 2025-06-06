import Image from "next/image";

const Header = () => {
  return (
    <div className="relative">
      <header className="w-full z-40 bg-main">
        <div className="max-w-[1440px] mx-auto sm:px-16 px-6 py-3 bg-transparent text-white flex flex-row place-content-between">
          <div>
            <Image
              src="https://res.cloudinary.com/ddhygfpyk/image/upload/v1746646555/barrel_ke1gdv.png"
              alt="menu"
              width={24}
              height={24}
              className="inline-block mx-2"
              // className="inline-block cursor-pointer lg:hidden"
            />
            Bitumen and
            <span className="text-secondary font-bold">
              {" "}
              Bituminous products
            </span>
          </div>
          <div className="flex flex-row gap-6 cursor-pointer">
            <div className="flex flex-row">
              <Image
                src="https://res.cloudinary.com/ddhygfpyk/image/upload/v1746646639/phone-call_jipcju.png"
                alt="menu"
                width={24}
                height={24}
                className="inline-block mx-2"
                // className="inline-block cursor-pointer lg:hidden"
              />
              <a href="tel:+94766269150" className="hover:text-secondary">
                (+94)76 626 9150
              </a>
            </div>
            <div className="flex flex-row">
              <Image
                src="https://res.cloudinary.com/ddhygfpyk/image/upload/v1746646637/mail_lvsdxu.png"
                alt="menu"
                width={24}
                height={24}
                className="inline-block mx-2"
                // className="inline-block cursor-pointer lg:hidden"
              />
              <div className="hover:text-secondary">
                holdingspelican@gmail.com
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
