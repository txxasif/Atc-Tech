"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const data = ["/helvi.png", "/pic1.jpg", "/pic2.jpg", "/pic3.jpg", "/pic4.jpg"];
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
        <CarouselContent className="md:h-[600px] h-[200px] mt-4">
          {data.map((src, idx) => {
            return (
              <CarouselItem
                key={idx}
                className="relative w-full overflow-hidden"
              >
                <Image
                  width={900}
                  height={600}
                  src={src}
                  alt={src}
                  className="w-full object-fill object-bottom "
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
