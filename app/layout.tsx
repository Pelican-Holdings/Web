import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GoUpButton from "@/components/GoUpButton";

export const metadata: Metadata = {
  title: "Pelican Holdings",
  description: "Bitumen and Bituminous products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <div className="invisible sm:visible absolute sm:relative">
          <Header />
        </div>
        <Navbar />

        <main className="relative overflow-hidden">{children}</main>
        <GoUpButton />
        <Footer />
      </body>
    </html>
  );
}
