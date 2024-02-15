import { Achievement } from "@/components/achievement";
import { Facilities } from "@/components/card-facilities";
import { CarouselCustomNavigation } from "@/components/carousel-image-slide";
import { Career } from "@/components/carrer";
import CompanyLogos from "@/components/companies-logos";
import { Contact } from "@/components/contact";
import MissionVisionCard from "@/components/mission-vision";
import Mock from "@/components/mock";
import { Partnership } from "@/components/partnership";
import { CeoQuote } from "@/components/quote-ceo";
import {
  RevealFromBottom,
  RevealFromLeft,
  RevealFromRight,
} from "@/components/shared/reveal";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen max-container padding-container space-y-3 ">
      <CarouselCustomNavigation />
      <CeoQuote />
      {/* <div className="flex flex-col md:flex-row  border py-3">
        <RevealFromLeft>
          <div className="w-full flex-1 h-36 border-2 text-center ">Asif</div>
        </RevealFromLeft>
        <RevealFromRight>
          <div className="w-full h-36 border-2 text-center">Sakib</div>
        </RevealFromRight>
      </div> */}
      <Facilities />
      <MissionVisionCard />
      <Career />
      <Achievement />
    </main>
  );
}
