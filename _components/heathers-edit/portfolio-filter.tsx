import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import categoryData from "@/_data/product-data.json";
import classNames from "classnames";

interface PortfolioFilterProps {
  setShowCategory: (category: string) => void;
  showCategory: string;
}

const { filter } = categoryData;

const PortfolioFilter = ({
  showCategory,
  setShowCategory,
}: PortfolioFilterProps) => {
  return (
    <div className="grid gap-5">
      <h3 className="normal-case text-paragraph">Select your category:</h3>
      <div className="overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          slidesPerView="auto"
          navigation={{
            nextEl: ".swiper-button-next-filter",
            prevEl: ".swiper-button-prev-filter",
          }}
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
            800: {
              spaceBetween: 20,
            },
          }}
          style={
            {
              "--swiper-pagination-color": "#9b6546",
              "--swiper-pagination-bullet-inactive-color": "#4B433E",
              "--swiper-pagination-bullet-inactive-opacity": "0.8",
            } as React.CSSProperties
          }
        >
          {filter.map(({ category, image }, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div
                className={classNames("ease-in-out duration-300 ", {
                  "opacity-40 desktop:hover:opacity-80 scale-90":
                    showCategory !== category,
                })}
              >
                <button
                  onClick={() => setShowCategory(category)}
                  className={classNames(
                    "flex flex-col items-center gap-2 hover:cursor-pointer tablet:flex-row tablet:pb-3",
                    {
                      "border-b-2 border-light-brown ":
                        showCategory === category,
                    }
                  )}
                >
                  <Image
                    src={image}
                    alt={category}
                    width={80}
                    height={80}
                    className="aspect-square object-cover tablet:w-12 h-auto"
                  />
                  <h2 className="text-paragraph">{category}</h2>
                </button>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev-filter hidden desktop:block"></div>
          <div className="swiper-button-next-filter hidden desktop:block"></div>
          <div className="swiper-pagination-filter mt-6 pb-1 flex justify-center gap-2"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default PortfolioFilter;
