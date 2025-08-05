"use client";

import { useState } from "react";
import Image from "next/image";

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
      <div className="h-[calc(65px+50vw)] phone:h-[calc(90px+50vw)] min-[1400px]:hidden">
        <div className="w-full h-[calc(65px+50vw)] absolute inset-0 phone:h-[calc(90px+50vw)]">
          <Image
            src="/images/IMG_1152.jpg"
            alt="Heather Hensley Interiors"
            width={1400}
            height={1000}
            className="h-full object-[position:50%_10%] object-cover"
          />
        </div>
        <div className="bg-gradient-to-b from-black/25 to-black/0 absolute inset-0 w-full h-[150px]" />
      </div>
      <div className="hidden min-[1400px]:block h-[750px] min-[1400px]:-mt-[60px] min-[1400px]:-mx-10 min-[1400px]:mb-15 min-[1500px]:h-[800px] relative">
        <div className="w-full hidden min-[1400px]:block h-[750px] min-[1500px]:h-[800px]">
          <Image
            src="/images/IMG_1152.jpg"
            alt="Heather Hensley Interiors"
            width={1600}
            height={1000}
            className="h-full object-[position:50%_30%] object-cover"
          />
          <div className="bg-gradient-to-b from-black/25 to-black/0 absolute inset-0 w-full h-[200px]" />
        </div>
      </div>
      <div className="space-y-15">
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
