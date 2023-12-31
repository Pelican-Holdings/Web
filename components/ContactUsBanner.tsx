import React from "react";
import Link from "next/link";

const ContactUsBanner = () => {
  return (
    <div className="padding-container relative">
      <div className="mx-auto flex flex-row justify-between w-full rounded bg-main py-12 mb-12 relative">
        <div className="absolute left-8 top-6 bottom-6 w-1/2">
          <div className="h-full bg-feature-contact-bg bg-left bg-no-repeat bg-contain opacity-25"></div>
        </div>
        <div className="text-white font-semibold text-2xl md:text-4xl px-4 md:px-8 py-2">
          Contact Us Now for Support
        </div>
        <div className="px-4 md:px-8 py-2">
          <Link href="/contact">
            <button
              type="submit"
              className="px-4 md:px-8 py-2 bg-main text-white hover:text-main rounded-md hover:bg-white border-2 hover:border-main text-center"
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBanner;
