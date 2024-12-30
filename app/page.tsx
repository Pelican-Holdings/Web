import BigSlider from "@/components/BigSlider";
import Camp from "@/components/Camp";
import CompanyImagesSlider from "@/components/CompanyImageSlider";
import CompanyProfile from "@/components/CompanyProfile";
import CompanyValues from "@/components/CompanyValues";
import ContactUsBanner from "@/components/ContactUsBanner";
import Features from "@/components/Features";
import Gears from "@/components/Gears";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import ProductCarousel from "@/components/ProductCarousel";

export default function Home() {
  return (
    <>
      <BigSlider />
      <CompanyValues />
      {/* <Gears /> */}
      <Camp />
      <Features />
      <CompanyProfile />
      <ContactUsBanner />
      {/* <CompanyImagesSlider /> */}
      <ProductCarousel />
      
      {/* <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp /> */}
    </>
  )
}
