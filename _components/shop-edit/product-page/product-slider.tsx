"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface ProductSliderProps {
  images: string[];
  productName: string;
}

const ProductSlider = ({ images, productName }: ProductSliderProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="w-full overflow-hidden">
      {/* main slider */}
      <Swiper
        modules={[Pagination, Thumbs]}
        pagination={{
          dynamicBullets: true,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        spaceBetween={0}
        slidesPerView={1}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full aspect-square rounded-[6px] overflow-hidden mb-8 desktop:aspect-[3.6/4]">
              <Image
                src={image}
                alt={`${productName} view ${index + 1}`}
                width={800}
                height={343}
                className="h-full w-full object-cover"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* thumbnail */}
      <div className="hidden desktop:block w-full">
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={20}
          slidesPerView={6}
          watchSlidesProgress={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              <div className="w-full h-[110px] rounded-[6px] overflow-hidden">
                <Image
                  src={image}
                  alt={`${productName} thumbnail ${index + 1}`}
                  width={91}
                  height={120}
                  className="h-full w-full object-cover ease-in-out duration-300 desktop:hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}

          {/* navigation */}
          <div>
            <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-light-brown/80 hover:bg-light-brown rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 -ml-4">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-light-brown/80 hover:bg-light-brown rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 -mr-4">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;
