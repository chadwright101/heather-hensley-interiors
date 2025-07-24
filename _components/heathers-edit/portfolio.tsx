import Image from "next/image";
import Link from "next/link";
import generalData from "@/_data/general-data.json";
import ButtonLink from "../ui/buttons/button-link";

const { products } = generalData;

export default function Portfolio() {
  return (
    <div className="grid grid-cols-1 gap-10 tablet:grid-cols-2 tablet:gap-y-[60px] desktop:grid-cols-3 ">
      {products.map(({ image, name, price }, index) => (
        <div key={index} className="bg-white rounded-[6px] overflow-hidden">
          <div className="overflow-hidden aspect-square">
            <Link
              href={`/heathers-edit/${name.toLowerCase().replace(/\s+/g, "-")}`}
              aria-label={name}
            >
              <Image
                src={image}
                alt={name}
                width={800}
                height={800}
                className="h-full w-full object-cover transition-transform duration-500 min-[1000px]:hover:scale-[102%]"
                sizes="(max-width:800px) 120vw, (max-width:1280px) 70vw, 700px"
              />
            </Link>
          </div>
          <div className="p-5 space-y-3">
            <h2 className="text-heading font-light text-black">{name}</h2>
            <p className="text-light-brown font-semibold">{price}</p>
            <ButtonLink
              href={`/heathers-edit/${name.toLowerCase().replace(/\s+/g, "-")}`}
              ariaLabel={name}
            >
              Enquire now
            </ButtonLink>
          </div>
        </div>
      ))}
    </div>
  );
}
