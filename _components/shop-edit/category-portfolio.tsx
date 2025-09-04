import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { ProductProps } from "@/_types/general-types";

export default function CategoryPortfolio({ categoryData }: ProductProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [categoryData]);

  return (
    <div className="grid grid-cols-1 gap-10 min-[600px]:grid-cols-2 min-[1000px]:grid-cols-3 tablet:gap-y-[60px] desktop:grid-cols-4">
      {categoryData.map(
        ({ images, name, prices, inStock, preOrder }, index) => (
          <Link
            href={`/studio-selects/${name.toLowerCase().replace(/\s+/g, "-")}`}
            aria-label={name}
            key={index}
          >
            <div
              id={name.toLowerCase().replace(/\s+/g, "-")}
              className={classNames(
                "overflow-hidden transition-all duration-700 ease-out",
                {
                  "translate-y-16 opacity-0 scale-110": !isVisible,
                  "translate-y-0 opacity-100 scale-100": isVisible,
                }
              )}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="aspect-square rounded-[6px] overflow-hidden relative">
                <Image
                  src={
                    images.find((img) => img.mainImage)?.src || images[0].src
                  }
                  alt={name}
                  width={800}
                  height={800}
                  className={classNames("h-full bg-white w-full object-cover", {
                    "opacity-100 ease-in-out duration-400 delay-75 desktop:hover:opacity-0":
                      images.find((img) => img.hoverImage),
                    "transition-transform duration-500 desktop:hover:scale-[102%]":
                      !images.find((img) => img.hoverImage),
                  })}
                  sizes="(max-width:800px) 400px, 100vw"
                />
                <Image
                  src={
                    images.find((img) => img.hoverImage)?.src || images[0].src
                  }
                  alt={name}
                  width={800}
                  height={800}
                  className="absolute h-full inset-0 bg-white w-full object-cover -z-10"
                  sizes="(max-width:800px) 400px, 100vw"
                />
              </div>
              <div className="p-5 space-y-1">
                <h3 className="text-paragraph font-thin">{name}</h3>
                {prices && (
                  <div className="flex items-center justify-between">
                    {prices[0].amountExVat != null ? (
                      <p className="text-light-brown font-semibold">
                        R {prices[0].amountExVat.toFixed(2)}
                      </p>
                    ) : (
                      <p className="text-light-brown font-semibold">
                        R {prices && prices[0].amountInclVat.toFixed(2)}
                      </p>
                    )}
                    {!inStock && (
                      <p className="uppercase font-semibold text-black/50">
                        {preOrder ? "Preorder Only" : "Sold out"}
                      </p>
                    )}
                  </div>
                )}
                {!prices && (
                  <p className="text-light-brown italic">
                    Contact for more information
                  </p>
                )}
              </div>
            </div>
          </Link>
        )
      )}
    </div>
  );
}
