"use client";

import React, { useState } from "react";
import BackToTopButton from "./BackToTopButton";
import Navbar from "./Navbar";
import Loader from "./Loader";
import GoUpButton from "./GoUpButton";
import Footer from "./Footer";

const Home = ({ children }: { children: React.ReactNode }) => {
  const [showButton, setShowButton] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("load", () => {
      setShowLoader(false);
    });

    // Show/Hide scroll to top button
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
    });
  }
  return (
    <div className="overflow-hidden">
      {showLoader && <Loader />}
      <BackToTopButton showButton={showButton} />

      <main className="relative overflow-hidden">{children}</main>
      <GoUpButton />
      <Footer />
    </div>
  );
};

export default Home;
