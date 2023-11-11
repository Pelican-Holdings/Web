"use client";

import Card from "@/components/Card";
import HeroExternalPage from "@/components/HeroExternalPage";

const page = () => {
  return (
    <div>
      <HeroExternalPage
        imageUrl="https://res.cloudinary.com/midefulness/image/upload/v1699297465/Pelican%20Holdings/About_utexgo.jpg"
        content="Contact Us"
      />
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
              imageUrl="/contactUs/phone-call.png"
              isEmail={false}
            />
          </div>
          <div className="order-2">
            <Card
              title="Our Mail Box"
              content={["holdingspelican@gmail.com"]}
              imageUrl="/contactUs/mail.png"
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
              imageUrl="/contactUs/location.png"
              isEmail={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
