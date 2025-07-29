"use client";

import { useState } from "react";

import CategoryPortfolio from "@/_components/shop-edit/category-portfolio";
import PortfolioFilter from "@/_components/shop-edit/portfolio-filter";

import categoryData from "@/_data/product-data.json";

const { categories } = categoryData;

export default function Home() {
  const [showCategory, setShowCategory] = useState("Scatters");
  const [animationKey, setAnimationKey] = useState(0);

  const handleCategoryChange = (category: string) => {
    setShowCategory(category);
    setAnimationKey((prev) => prev + 1);
  };

  const getCategoryData = (category: string) => {
    const mapping: { [key: string]: string } = {
      Scatters: "scatters",
      Ottomans: "ottomans",
      "Bedside pedestals": "bedside pedestals",
      Cabinets: "cabinets",
      Headboards: "headboards",
    };
    return (
      categories[mapping[category] as keyof typeof categories] ||
      categories.scatters
    );
  };

  return (
    <div>
      <div className="bg-[url(/images/IMG_1243.jpg)] bg-cover bg-[position:50%_100%] h-[500px] absolute w-full max-w-[1600px] left-1/2 -translate-x-1/2 top-0 tablet:h-[600px] tablet:bg-[position:50%_75%] min-[1050px]:bg-[position:50%_75%] min-[1200px]:bg-[position:50%_70%] desktop:bg-[position:50%_65%] desktop:h-[620px] min-[1400px]:h-[750px] min-[1400px]:bg-[position:50%_85%] min-[1500px]:bg-[position:40%_80%] min-[1500px]:h-[780px]" />

      <div className="space-y-15 mt-[400px] tablet:mt-[500px] min-[1400px]:mt-[625px] min-[1500px]:mt-[655px]">
        {/* <h2 className="w-full text-light-brown text-center border-b border-light-brown py-10">
          Shop Edit
        </h2> */}
        <PortfolioFilter
          showCategory={showCategory}
          setShowCategory={handleCategoryChange}
        />
        <hr className="text-light-brown w-full" />
        <CategoryPortfolio
          key={animationKey}
          categoryData={getCategoryData(showCategory)}
        />
      </div>
    </div>
  );
}
