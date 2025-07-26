import Image from "next/image";
import Link from "next/link";
import ButtonLink from "../ui/buttons/button-link";
import classNames from "classnames";
import { useEffect, useState } from "react";

interface PortfolioProps {
  categoryData: {
    name: string;
    size: string;
    description: string[];
    prices: {
      name: string;
      amountExVat: number;
      amountInclVat: number;
      note?: string;
    }[];
    images: string[];
    quantity: number;
  }[];
}

export default function CategoryPortfolio({ categoryData }: PortfolioProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, [categoryData]);

  return (
    <div className="grid grid-cols-1 gap-10 tablet:grid-cols-2 tablet:gap-y-[60px] desktop:grid-cols-3 ">
      {categoryData.map(({ images, name, prices }, index) => (
        <div
          key={index}
          className={classNames(
            "bg-white rounded-[6px] overflow-hidden transition-all duration-700 ease-out",
            {
              "translate-y-16 opacity-0 scale-110": !isVisible,
              "translate-y-0 opacity-100 scale-100": isVisible,
            }
          )}
          style={{
            transitionDelay: isVisible ? `${index * 400}ms` : "0ms",
          }}
        >
          <div className="aspect-square">
            <Link
              href={`/heathers-edit/${name.toLowerCase().replace(/\s+/g, "-")}`}
              aria-label={name}
            >
              <Image
                src={images[0]}
                alt={name}
                width={800}
                height={800}
                className="h-full w-full object-cover transition-transform duration-500 min-[1000px]:hover:scale-[102%]"
                sizes="(max-width:800px) 400px, 100vw"
              />
            </Link>
          </div>
          <div className="p-5 space-y-3">
            <h2 className="text-heading font-light text-black">{name}</h2>
            <p className="grid">
              Starting from{" "}
              <span className="text-light-brown font-semibold">
                R{prices[0].amountExVat}
              </span>
            </p>
            <ButtonLink
              href={`/heathers-edit/${name.toLowerCase().replace(/\s+/g, "-")}`}
              ariaLabel={name}
            >
              More info
            </ButtonLink>
          </div>
        </div>
      ))}
    </div>
  );
}
