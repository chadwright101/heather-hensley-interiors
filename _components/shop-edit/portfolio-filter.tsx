import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import classNames from "classnames";

import categoryData from "@/_data/product-data.json";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface PortfolioFilterProps {
  setShowCategory: (category: string) => void;
  showCategory: string;
}

const { filter } = categoryData;

const PortfolioFilter = ({
  showCategory,
  setShowCategory,
}: PortfolioFilterProps) => {
  const swiperRef = useRef<any>(null);

  const handleCategoryClick = (category: string) => {
    setShowCategory(category);

    const categoryIndex = filter.indexOf(category);
    if (swiperRef.current && categoryIndex !== -1) {
      setTimeout(() => {
        swiperRef.current?.swiper?.slideTo(categoryIndex);
      }, 0);
    }
  };

  return (
    <div className="flex justify-center relative">
      <div className="overflow-hidden tablet:mx-15">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView="auto"
          centeredSlides={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            dynamicBullets: true,
          }}
          style={
            {
              "--swiper-pagination-color": "#9b6546",
              "--swiper-pagination-bullet-inactive-color": "#4B433E",
              "--swiper-pagination-bullet-inactive-opacity": "0.8",
            } as React.CSSProperties
          }
        >
          {filter.map((category, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div className={classNames("flex gap-5 items-center")}>
                <button
                  onClick={() => handleCategoryClick(category)}
                  className={classNames(
                    "hover:cursor-pointer ease-in-out duration-300",
                    {
                      "opacity-[95%] desktop:hover:opacity-100 scale-[95%]":
                        showCategory !== category,
                    }
                  )}
                >
                  <h2
                    className={classNames(
                      "text-paragraph text-light-brown normal-case text-[16px]",
                      {
                        "font-semibold": showCategory === category,
                      }
                    )}
                  >
                    {category}
                  </h2>
                </button>
                {index !== filter.length - 1 && (
                  <p className="text-light-brown text-[16px]">|</p>
                )}
              </div>
            </SwiperSlide>
          ))}
          <div className="mt-5 pb-1 flex justify-center gap-2"></div>
        </Swiper>
      </div>
      <div className="hidden tablet:block">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default PortfolioFilter;
