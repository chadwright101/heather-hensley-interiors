"use client";

import { useState } from "react";

import CategoryPortfolio from "@/_components/heathers-edit/category-portfolio";
import PortfolioFilter from "@/_components/heathers-edit/portfolio-filter";

import categoryData from "@/_data/product-data.json";

const { categories } = categoryData;

export default function Home() {
  const [showCategory, setShowCategory] = useState("scatters");
  const [animationKey, setAnimationKey] = useState(0);

  const handleCategoryChange = (category: string) => {
    setShowCategory(category);
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <div className="space-y-10">
      <h1 className="text-light-brown text-[50px] leading-[50px] border-b-2 border-light-brown pb-5 tablet:text-center">
        Heather&apos;s Edit
      </h1>
      <PortfolioFilter
        showCategory={showCategory}
        setShowCategory={handleCategoryChange}
      />
      <CategoryPortfolio
        key={animationKey}
        categoryData={
          showCategory === "scatters"
            ? categories.scatters
            : categories.ottomans
        }
      />
    </div>
  );
}
