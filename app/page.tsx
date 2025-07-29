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
      <div className="bg-[url(/images/IMG_1152.jpg)] bg-cover bg-[position:50%_25%] h-[500px] absolute w-full max-w-[1600px] left-1/2 -translate-x-1/2 top-0 tablet:h-[600px] desktop:bg-[position:50%_20%] desktop:h-[620px] min-[1400px]:h-[750px] min-[1400px]:bg-[position:50%_25%] min-[1600px]:h-[780px] min-[1600px]:bg-[position:50%_30%]" />

      <div className="space-y-10 mt-[375px] tablet:space-y-5 tablet:mt-[475px] desktop:mt-[650px]">
        <PortfolioFilter
          showCategory={showCategory}
          setShowCategory={handleCategoryChange}
        />
        <CategoryPortfolio
          key={animationKey}
          categoryData={getCategoryData(showCategory)}
        />
      </div>
    </div>
  );
}
