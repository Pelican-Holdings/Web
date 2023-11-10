"use client";

import HeroExternalPage from "@/components/HeroExternalPage";

const page = () => {
  return (
    <div>
      <HeroExternalPage
        imageUrl="https://res.cloudinary.com/midefulness/image/upload/v1657441707/cld-sample-5.jpg"
        content="About Us"
      />
      <div className="container mx-auto py-8 relative">
        About Us
      </div>
    </div>
  )
}

export default page