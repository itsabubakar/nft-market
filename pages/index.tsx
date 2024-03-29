import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import LatestLiveAuction from "@/components/Sections/LatestLiveAuction";
import TextWithImage from "@/components/Sections/TextWithImage";
import SecondTextWithImage from "@/components/Sections/SecondTextWithImage";
import PopularLiveAction from "@/components/Sections/PopularLiveAction";
import Stats from "@/components/Sections/Stats";
import Nft from "@/components/Sections/Nft";
import Hero from "@/components/Sections/Hero";
import ReviewSection from "@/components/Sections/ReviewSection";
import SalesSection from "@/components/Sections/SalesSection";
import { useState } from "react";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      {/* Hero background image */}

      {
        !isMenuOpen && <section className="relative h-full max-h-[1920px]">
          <img
            src="/img/hero-bg.png"
            alt="homepage background"
            className="absolute inset-0 w-full h-full object-cover min-h-[1920px] max-h-[1920px]"
          />

        </section>
      }

      <Navbar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />

      {!isMenuOpen && <>
        <Hero />

        <LatestLiveAuction />
        <TextWithImage />
        <SalesSection />
        <SecondTextWithImage />
        <PopularLiveAction />
        <Stats />
        <ReviewSection />
        <Nft />
        <Footer />

      </>}


    </div >
  );
}
