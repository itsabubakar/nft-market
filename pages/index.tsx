import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import LatestLiveAuction from "@/components/Sections/LatestLiveAuction";
import TextWithImage from "@/components/Sections/TextWithImage";
import SecondTextWithImage from "@/components/Sections/SecondTextWithImage";
import PopularLiveAction from "@/components/Sections/PopularLiveAction";
import Stats from "@/components/Sections/Stats";
import Nft from "@/components/Sections/Nft";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <section className="relative h-full max-h-[1920px]">
        <img
          src="/img/hero-bg.png"
          alt="homepage background"
          className="absolute inset-0 w-full h-full object-cover min-h-[1920px] max-h-[1920px]"
        />

      </section>
      <Navbar />

      <section className="mt-44 z-10 relative">
        <div className="text-center max-w-[837px] mx-auto text-white">
          <p className="text-gray-white font-inter text-[15px] uppercase ">Non Fungible Tokens</p>
          <h1>A new NFT</h1>
          <h1>Experience</h1>
          <p className="pt-10 text-gray-white font-inter text-[24px] uppercase ">Discover, collect and sell</p>

        </div>

        <div className="font-inter mt-14 py-5 px-7 bg-white max-w-[643px] mx-auto rounded flex justify-between">
          <form action="" className="w-full">

            <input placeholder="Items, collections and creators" type="text" className="w-full" />
          </form>
          <p className="px-2">categories</p>
          <p>search</p>

        </div>
      </section>

      {/* Logo section */}
      <section className="relative z-10 pt-56">
        <div className="flex justify-between max-w-[670px] mx-auto ">
          <Image alt="logo" src={'/img/ritter.png'} width={85} height={45} />
          <Image alt="logo" src={'/img/nike.png'} width={85} height={45} />
          <Image alt="logo" src={'/img/adidas.png'} width={85} height={45} />
          <Image alt="logo" src={'/img/holland.png'} width={85} height={45} />

        </div>
      </section>

      <LatestLiveAuction />
      <TextWithImage />
      <SecondTextWithImage />
      <PopularLiveAction />
      <Stats />
      <Nft />
    </div>
  );
}
