import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

import ProductSlider from "@/_components/shop-edit/product-page/product-slider";
import ShowEmailAddress from "@/_components/ui/contact/show-email-address";
import ShowPhoneNumber from "@/_components/ui/contact/show-phone-number";

import { ProductProps } from "@/_types/general-types";

import productData from "@/_data/product-data.json";

interface ProductPageProps {
  params: Promise<{
    productSlug: string;
  }>;
}

type Product = ProductProps["categoryData"][0];

function findProductBySlug(
  productSlug: string
): { product: Product; category: string } | null {
  const { categories } = productData;

  const productName = productSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  for (const categoryKey in categories) {
    const category = categories[categoryKey as keyof typeof categories];
    const product = category.find(
      (item) => item.name.toLowerCase() === productName.toLowerCase()
    );

    if (product) {
      return {
        product: product as Product,
        category: categoryKey,
      };
    }
  }

  return null;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const result = findProductBySlug(resolvedParams.productSlug);

  if (!result) {
    return {
      title: "Product Not Found",
    };
  }

  const { product } = result;

  return {
    title: `${product.name} - Heather Hensley Interiors`,
    description: product.description.join(" "),
    openGraph: {
      title: `${product.name} - Heather Hensley Interiors`,
      description: product.description.join(" "),
      images: product.images.length > 0 ? [product.images[0]] : [],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const result = findProductBySlug(resolvedParams.productSlug);

  if (!result) {
    notFound();
  }

  const { product } = result;

  return (
    <div className="flex flex-col gap-10 justify-start px-5 desktop:grid grid-cols-[600px_1fr]">
      <Link
        href="/"
        className="text-light-brown p-2 -m-2 place-self-start text-left text-paragraph font-light desktop:col-span-2 desktop:p-0 desktop:m-0 inline-block desktop:hover:-translate-y-1.5 transition-transform duration-400 ease-in-out pb-1.5 -mb-1.5"
      >
        ← Back to Shop
      </Link>
      <ProductSlider images={product.images} productName={product.name} />
      <div className="flex flex-col gap-10 items-center justify-start w-full">
        <div className="flex flex-col gap-5 items-start justify-start w-full">
          <div className="flex flex-col gap-1 w-full">
            <h2 className="text-light-brown text-[30px] font-thin leading-[36px] uppercase w-full">
              {product.name}
            </h2>
            <h3 className="text-paragraph normal-case">{product.nameNote}</h3>
          </div>
          <div className="flex flex-col gap-2 w-full">
            {product.prices[0].amountExVat != null && (
              <p className="text-light-brown text-[18px] font-semibold">
                R {product.prices[0].amountExVat.toFixed(2)}{" "}
                <span className="font-light">ex. VAT</span>
              </p>
            )}
            {product.prices[0].amountInclVat != null && (
              <p className="text-light-brown text-[18px] font-semibold">
                R {product.prices[0].amountInclVat.toFixed(2)}{" "}
                <span className="font-light">incl. VAT</span>
              </p>
            )}
          </div>
          <p className="text-light-brown text-[18px] font-thin w-full">
            {product.category}
          </p>
          <p className="text-light-brown text-[18px] font-thin">
            Size: {product.size}
          </p>
          {!product.inStock && (
            <p className="text-[18px] text-black/50 font-semibold uppercase">
              Sold out
            </p>
          )}
          <div className="text-light-brown text-[18px] font-thin leading-[24px] text-justify w-full">
            {product.description.map((paragraph, index) => (
              <p key={index} className="mb-2 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-5 pt-5 w-full border-t border-light-brown">
            <p className="font-bold">
              For enquiries, please reach out to us over WhatsApp, phone call or
              email.
            </p>
            <ul className="flex flex-col gap-5">
              <li className="inline-block mr-auto transition-transform duration-400 ease-in-out pb-1.5 -mb-1.5 desktop:hover:-translate-y-1.5">
                <Link href="https://wa.me/qr/55ZUDOX422YJJ1" target="_blank">
                  <Image
                    src="/icons/whatsapp.svg"
                    alt="WhatsApp Icon"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li className="mr-auto">
                <ShowEmailAddress />
              </li>
              <li className="mr-auto">
                <ShowPhoneNumber />
              </li>
            </ul>
          </div>
          {/* <ButtonLink
            href={`#${product.name.toLowerCase().replace(/\s+/g, "-")}`}
            cssClasses="w-full desktop:w-auto"
          >
            Enquire now
          </ButtonLink> */}
        </div>
        {/* <div
          id={product.name.toLowerCase().replace(/\s+/g, "-")}
          className="-translate-y-10 -mt-10 desktop:-translate-y-[150px]"
        ></div> */}
        {/* <div
          id="contact"
          className="-translate-y-10 -mt-10 desktop:-translate-y-[150px]"
        ></div> */}
        {/* <ProductEnquiryForm
          productName={product.name}
          category={product.category}
        /> */}
      </div>
    </div>
  );
}
