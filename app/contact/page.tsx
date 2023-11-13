"use client";

import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import HeroExternalPage from "@/components/HeroExternalPage";
import GoogleMap from "@/components/GoogleMap";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <HeroExternalPage
        imageUrl="https://res.cloudinary.com/midefulness/image/upload/v1699297465/Pelican%20Holdings/About_utexgo.jpg"
        content="Contact Us"
      />
      <div className="overflow-hidden bg-feature-bg bg-center bg-no-repeat">
        <div className="container mx-auto py-16 relative">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center gap-8 md:gap-2">
            <div className="order-1">
              <Card
                title="Our Phone"
                content={[
                  "Office-(+94)766269150",
                  "Office-0112450649",
                  "Factory-(+94)714818264",
                ]}
                imageUrl="https://res.cloudinary.com/midefulness/image/upload/v1699882937/Pelican%20Holdings/contactUs/phone-call_ln6gul.png"
                isEmail={false}
              />
            </div>
            <div className="order-2">
              <Card
                title="Our Mail Box"
                content={["holdingspelican@gmail.com"]}
                imageUrl="https://res.cloudinary.com/midefulness/image/upload/v1699882936/Pelican%20Holdings/contactUs/mail_wksglz.png"
                isEmail={true}
              />
            </div>
            <div className="order-3">
              <Card
                title="Our Location"
                content={[
                  "(Office)No. 27/A/2, Ranasinghe Road,Ja-Ela,Sri Lanka",
                  "(Factory)No.209/7 , Pelahela, Dekatana,Sri Lanka.",
                ]}
                imageUrl="https://res.cloudinary.com/midefulness/image/upload/v1699882938/Pelican%20Holdings/contactUs/location_ktfryd.png"
                isEmail={false}
              />
            </div>
          </div>
        </div>

        {/* contact form */}
        <section className="flex flex-col md:flex-row padding-container mb-4">
          <div className="basis-100 md:basis-3/5">
            <ContactForm />
          </div>
          <div className="hidden md:block md:basis-2/5">
            <ContactInfo />
          </div>
        </section>

        {/* Google Map */}
        <section>
          <GoogleMap />
        </section>
      </div>
    </div>
  );
};

export default page;
