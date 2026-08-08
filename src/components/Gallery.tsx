"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";

export default function Gallery() {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
  });

  const images = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561",
    "https://images.unsplash.com/photo-1455390582262-044cdead277a",
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
  ];

  return (
    <section className="w-full py-16" id="gallery">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <div className="mb-12 border-b border-gray-200 pb-4">
          <h2 className="text-4xl font-bold text-gray-900">Our Gallery</h2>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div
                key={index}
                className="min-w-0 flex-[0_0_100%] px-2 md:flex-[0_0_50%]"
              >
                <img
                  src={image}
                  alt="Gallery"
                  className="h-[450px] w-full rounded-xl object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="mt-6 flex gap-4 hidden">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className="h-20 w-28 cursor-pointer rounded-lg object-cover"
              alt="thumbnail"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
