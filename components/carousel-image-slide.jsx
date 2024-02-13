"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const data = ["/pic1.jpg", "/pic2.jpg", "/pic3.jpg", "/pic4.jpg"];
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
          {data.map((src, idx) => {
            return (
              <CarouselItem className="relative w-full">
                <Image
                  width={900}
                  height={500}
                  src={src}
                  alt={src}
                  className="w-full object-cover object-bottom "
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        {/* <CarouselPrevious />
      <CarouselNext /> */}
      </Carousel>
    </section>
  );
}
