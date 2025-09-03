import { useRef } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    setShowCategory(category);
    
    router.push("/", { scroll: false });

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
          breakpoints={{
            1000: {
              spaceBetween: 40,
            },
          }}
        >
          {filter.map((category, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div
                className={classNames(
                  "flex gap-5 items-center min-[1000px]:gap-10"
                )}
              >
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
                      "text-[16px] text-light-brown normal-case desktop:text-paragraph desktop:hover:-translate-y-1.5 transition-transform duration-400 ease-in-out",
                      {
                        "underline underline-offset-[6px]":
                          showCategory === category,
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
