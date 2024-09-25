import Image from "next/image";
import Hero from "./components/Hero";
import Add1 from "./components/Add1";
import Add2 from "./components/Add2";
import Squares from "./components/Squares";
import Fineprint from "./components/Fineprint";
import FooterNav from "./components/FooterNav";
import CarouselLarge from "./components/CarouselLarge";
import CarouselSmall from "./components/CarouselSmall";

export default function Home() {
  return (
    <main className="max-w-[2580px] mx-auto">
      <Hero />
      <Add1 />
      <Add2 />
      <Squares />
      <CarouselLarge />
      <CarouselSmall />
      <Fineprint />
      <FooterNav />
    </main>
  );
}
