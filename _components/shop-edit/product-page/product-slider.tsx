"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Thumbs } from "swiper/modules";
import classNames from "classnames";

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
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          700: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 1,
            pagination: false,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full bg-white aspect-square rounded-[6px] overflow-hidden mb-8 desktop:mb-5">
              <Image
                src={image}
                alt={`${productName} view ${index + 1}`}
                width={700}
                height={1000}
                className="h-full w-full object-cover"
                priority={index === 0}
                sizes="(max-width: 700px) 100vw, (min-width: 700px) 50vw, 650px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* thumbnail slider */}
      <div
        className={classNames("hidden desktop:block w-full relative", {
          "px-10": images.length > 6,
          "px-0": images.length <= 6,
        })}
      >
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
              <div className="w-full aspect-square bg-white rounded-[6px] overflow-hidden">
                <Image
                  src={image}
                  alt={`${productName} thumbnail ${index + 1}`}
                  width={100}
                  height={110}
                  className="h-full w-full object-cover ease-in-out duration-300 desktop:hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* navigation */}
        <div>
          <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/75 hover:bg-light-brown/75 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300">
            <svg
              className="w-5 h-5 text-white"
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
          <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/75 hover:bg-light-brown/75 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300">
            <svg
              className="w-5 h-5 text-white"
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
      </div>
    </div>
  );
};

export default ProductSlider;
