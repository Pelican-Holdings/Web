import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GoUpButton from "@/components/GoUpButton";
import { useState } from "react";
import Loader from "@/components/Loader";
import BackToTopButton from "@/components/BackToTopButton";

export const metadata: Metadata = {
  title: "Pelican Holdings",
  description: "Bitumen and Bituminous products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [showButton, setShowButton] = useState(false);
  // const [showLoader, setShowLoader] = useState(false);

  // if (typeof window !== "undefined") {
  //   window.addEventListener("load", () => {
  //     setShowLoader(false);
  //   });

  //   // Show/Hide scroll to top button
  //   window.addEventListener("scroll", () => {
  //     window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  //   });
  // }

  return (
    <html lang="en">
      <body className="relative overflow-x-hidden scroll-smooth">
        <div className="invisible sm:visible absolute sm:relative">
          <Header />
        </div>
        {/* {showLoader && <Loader />} */}
        {/* <BackToTopButton showButton={showButton} /> */}
        <Navbar />

        <main className="relative overflow-hidden">{children}</main>
        <GoUpButton />
        <Footer />
      </body>
    </html>
  );
}
