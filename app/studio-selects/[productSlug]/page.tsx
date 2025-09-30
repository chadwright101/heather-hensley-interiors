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

  const productName = decodeURIComponent(productSlug)
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

  const mainImage =
    product.images.find((img) => img.mainImage) || product.images[0];

  return {
    title: `${product.name} - Heather Hensley Interiors`,
    description: product.description.join(" "),
    openGraph: {
      title: `${product.name} - Heather Hensley Interiors`,
      description: product.description.join(" "),
      images: mainImage ? [{ url: mainImage.src }] : [],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const result = findProductBySlug(resolvedParams.productSlug);

  if (!result) {
    notFound();
  }

  const { product, category } = result;

  return (
    <div className="flex flex-col gap-10 justify-start px-5 desktop:grid grid-cols-[600px_1fr]">
      <Link
        href={`/?category=${category}#${resolvedParams.productSlug}`}
        className="text-light-brown p-2 -m-2 place-self-start text-left text-paragraph font-light desktop:col-span-2 desktop:p-0 desktop:m-0 inline-block desktop:hover:-translate-y-1.5 transition-transform duration-400 ease-in-out pb-1.5 -mb-1.5"
      >
        ← Back to Shop
      </Link>
      <ProductSlider images={product.images} productName={product.name} />
      <div className="flex flex-col gap-10 items-center justify-start w-full">
        <div className="flex flex-col gap-5 items-start justify-start w-full">
          <div className="flex flex-col gap-1 w-full">
            <h2 className="text-light-brown text-heading uppercase w-full">
              {product.name}
            </h2>
            {product.nameNote && (
              <h3 className="text-paragraph normal-case">{product.nameNote}</h3>
            )}
          </div>
          <div className="flex justify-between w-full gap-10 min-[600px]:justify-start">
            {product.prices &&
              product.prices.map((price, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <p className="text-light-brown text-[16px] font-medium flex flex-col">
                    <span className="text-light-brown text-[16px] font-medium">
                      {price.name}
                      <span className="text-light-brown text-[16px] font-medium">
                        :
                      </span>
                    </span>

                    {price.note && (
                      <span className="text-light-brown text-[16px] font-medium">
                        ({price.note})
                      </span>
                    )}
                    {product.size && index === 0 && (
                      <span className="text-light-brown text-[16px] font-medium">
                        ({product.size})
                      </span>
                    )}
                  </p>
                  {price.amountExVat != null && (
                    <p className="text-light-brown text-[18px] font-semibold">
                      R {price.amountExVat.toFixed(2)}{" "}
                      <span className="font-light">ex. VAT</span>
                    </p>
                  )}
                  {price.amountInclVat != null && (
                    <p className="text-light-brown text-[18px] font-semibold">
                      R {price.amountInclVat.toFixed(2)}{" "}
                      <span className="font-light">incl. VAT</span>
                    </p>
                  )}
                </div>
              ))}
          </div>
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
          {product.size && !product.prices && (
            <div className="flex flex-col gap-1">
              <p className="text-light-brown text-[16px] font-medium">
                Size: {product.size}
              </p>
            </div>
          )}
          <div className="w-full flex flex-wrap gap-x-5 gap-y-3 justify-between items-center min-[700px]:flex-col min-[700px]:justify-start min-[700px]:items-start">
            {product.quantity && (
              <p className="font-medium">Quantity: x {product.quantity}</p>
            )}
            <div className="flex gap-3 items-center">
              <div className="bg-[#f7931a] p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-bitcoin-icon lucide-bitcoin h-4.5 w-4.5"
                >
                  <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
                </svg>
              </div>
              <p>Bitcoin accepted</p>
            </div>
          </div>
          {!product.prices && (
            <p className="text-light-brown italic">
              Contact for more information
            </p>
          )}
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
                <ShowEmailAddress
                  productName={product.name}
                  productCategory={product.category}
                />
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
