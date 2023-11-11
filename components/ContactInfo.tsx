import Image from "next/image";

const ContactInfo = () => {
  return (
    <div className="px-8 mt-8 p-6">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        Contact Info
      </h1>
      <div className="text-gray-700 text-base">
        PELICAN HOLDINGS (PVT) LTD is a limited liability company which
        registered under the companies act in Sri Lanka.
      </div>
      <div className="flex flex-col pt-2">
        <div className="flex flex-row gap-4 md:gap-6 items-center">
          <div>
            <Image
              src="/contactUs/phone-call.png"
              alt="logo"
              width={48}
              height={48}
              className="mx-auto pt-6 pb-2"
            />
          </div>
          <div className="text-gray-700 text-base">
            No. 27/A/2, Ranasinghe Road,Ja-Ela,Sri Lanka
          </div>
        </div>

        <div className="flex flex-row gap-4 md:gap-6 items-center">
          <div>
            <Image
              src="/contactUs/mail.png"
              alt="logo"
              width={48}
              height={48}
              className="mx-auto pt-6 pb-2"
            />
          </div>
          <div className="text-gray-700 text-base">
            holdingspelican@gmail.com
          </div>
        </div>

        <div className="flex flex-row gap-4 md:gap-6 items-center">
          <div className="justify-center">
            <Image
              src="/contactUs/location.png"
              alt="logo"
              width={48}
              height={48}
              className="mx-auto pt-6 pb-2"
            />
          </div>
          <div className="text-gray-700 text-base">(+94)76 626 9150</div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
