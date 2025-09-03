"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import CategoryPortfolio from "@/_components/shop-edit/category-portfolio";
import PortfolioFilter from "@/_components/shop-edit/portfolio-filter";

import categoryData from "@/_data/product-data.json";

const { categories } = categoryData;

const reverseMapping: { [key: string]: string } = {
  scatters: "Scatters",
  ottomans: "Ottomans",
  bedsidePedestals: "Bedside Pedestals",
  cabinets: "Cabinets",
  headboards: "Headboards",
  sofas: "Sofas",
};

function SearchParamsWrapper({
  onCategoryChange,
}: {
  onCategoryChange: (category: string) => void;
}) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const initialCategory =
    categoryParam && reverseMapping[categoryParam]
      ? reverseMapping[categoryParam]
      : "Scatters";

  useEffect(() => {
    onCategoryChange(initialCategory);
  }, [initialCategory, onCategoryChange]);

  return null;
}

export default function Home() {
  const [showCategory, setShowCategory] = useState("Scatters");
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 500);
      }
    }
  }, [showCategory]);

  const handleCategoryChange = (category: string) => {
    setShowCategory(category);
    setAnimationKey((prev) => prev + 1);
  };

  const getCategoryData = (category: string) => {
    const mapping: { [key: string]: string } = {
      Scatters: "scatters",
      Ottomans: "ottomans",
      "Bedside Pedestals": "bedsidePedestals",
      Cabinets: "cabinets",
      Headboards: "headboards",
      Sofas: "sofas",
    };
    return (
      categories[mapping[category] as keyof typeof categories] ||
      categories.scatters
    );
  };

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsWrapper onCategoryChange={setShowCategory} />
      </Suspense>
      <div className="h-[calc(100px+50vw)] min-[325px]:h-[calc(80px+50vw)] min-[380px]:h-[calc(80px+45vw)] phone:h-[calc(250px+20vw)] min-[1400px]:hidden">
        <div className="w-full h-[calc(100px+50vw)] min-[325px]:h-[calc(80px+50vw)] min-[380px]:h-[calc(80px+45vw)] absolute inset-0 phone:h-[calc(250px+20vw)]">
          <Image
            src="/images/IMG_1152.jpg"
            alt="Heather Hensley Interiors"
            width={1400}
            height={1000}
            className="h-full object-[position:50%_10%] object-cover"
          />
        </div>
        <div className="bg-gradient-to-t from-black/0 to-25% to-black/25 absolute inset-0 w-full h-[calc(100px+50vw)] min-[325px]:h-[calc(80px+50vw)] min-[380px]:h-[calc(80px+45vw)] phone:h-[calc(60px+50vw)]" />
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
          <div className="bg-gradient-to-b from-black/25 to-black/0 absolute inset-0 w-full h-[300px]" />
        </div>
      </div>
      <div className="space-y-15">
        <PortfolioFilter
          showCategory={showCategory}
          setShowCategory={handleCategoryChange}
        />
        <hr className="text-light-brown w-full" />
        {showCategory !== "Scatters" && (
          <div className="grid gap-5">
            <h4 className="text-center">Crafted With Purpose</h4>
            <div className="text-center grid gap-4">
              <p>
                Rather than chasing trends, we’ve always focused on designing
                pieces that feel considered, lived-in, and lasting. Over time,
                certain sofas, daybeds, and chairs have stood out — not just to
                us, but to the many homes they’ve found themselves in.
              </p>
              <p>
                These are the designs we return to time and again. They carry a
                quiet versatility that fits naturally into a wide range of
                interiors, whether classic or contemporary.
              </p>
              <p>
                Each piece is made to order, with options to customise
                materials, sizing, and finishes. If you’d like to learn more or
                begin a bespoke project, just reach out — we’ll guide you
                through the details and cover everything you need to know,
                including terms and conditions.
              </p>
            </div>
          </div>
        )}
        <CategoryPortfolio
          key={animationKey}
          categoryData={getCategoryData(showCategory)}
        />
      </div>
    </div>
  );
}
