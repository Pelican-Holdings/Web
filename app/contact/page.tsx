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
        imageUrl="https://res.cloudinary.com/ddhygfpyk/image/upload/v1746652781/2148921437_d3ju8z.jpg"
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
                imageUrl="https://res.cloudinary.com/ddhygfpyk/image/upload/v1746646639/phone-call_jipcju.png"
                isEmail={false}
              />
            </div>
            <div className="order-2">
              <Card
                title="Our Mail Box"
                content={["holdingspelican@gmail.com"]}
                imageUrl="https://res.cloudinary.com/ddhygfpyk/image/upload/v1746646637/mail_lvsdxu.png"
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
                imageUrl="https://res.cloudinary.com/ddhygfpyk/image/upload/v1746646638/location_hwes2a.png"
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
