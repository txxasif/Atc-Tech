"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
        <CarouselContent className="md:h-[70vh]">
          <CarouselItem className="relative w-full">
            <Image
              width={900}
              height={500}
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="w-full object-cover object-bottom "
            />
          </CarouselItem>
          <CarouselItem className="relative  w-full h-full">
            <Image
              width={900}
              height={500}
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="w-full object-cover object-bottom"
            />
          </CarouselItem>
          <CarouselItem className="relative  w-full">
            <Image
              width={900}
              height={500}
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="w-full object-cover object-bottom"
            />
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious />
      <CarouselNext /> */}
      </Carousel>
    </section>
  );
}
