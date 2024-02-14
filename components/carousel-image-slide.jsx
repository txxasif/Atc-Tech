"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const data = [
  {
    src: "/helvi1.png",
    heading: "HELVI",
    text: "A One Stop Solution for Every Sector’s People of Bangladesh.",
  },
  {
    src: "/pic1.jpg",
    heading: "Optimize Performance",
    text: "Streamline Operations with Agile Project Management Tools.",
  },
  {
    src: "/pic2.jpg",
    heading: "Stay Ahead of the Curve",
    text: "Harness the Potential of Blockchain Technology.",
  },
  {
    src: "/pic3.jpg",
    heading: "Empower Your Team",
    text: "Enhance Productivity with Cutting-edge Collaboration Tools.",
  },
  {
    src: "/pic4.jpg",
    heading: "Secure Your Digital Assets",
    text: "Defend Against Cyber Threats with Advanced Security Solutions.",
  },
];

import Autoplay from "embla-carousel-autoplay";
export function CarouselCustomNavigation() {
  return (
    <section className="">
      <Carousel
        className="shadow-lg rounded-xl"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="">
          {data.map((item, idx) => {
            return (
              <CarouselItem
                key={idx}
                className="relative w-full h-full overflow-hidden"
              >
                <Image
                  width={900}
                  height={400}
                  src={item.src}
                  alt={item.src}
                  className="w-full object-contain object-bottom"
                />

                <div className="absolute w-full md:w-full  p-3 top-20 md:top-3/4 h-full  md:p-4 lg:p-6 flex flex-col    bg-black bg-opacity-60 ">
                  <h1 className=" text-white text-xl font-medium md:text-2xl  lg:text-4xl ">
                    {item.heading}
                  </h1>

                  <h3 className="text-white md:text-lg ">{item.text}</h3>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        {}
      </Carousel>
    </section>
  );
}
