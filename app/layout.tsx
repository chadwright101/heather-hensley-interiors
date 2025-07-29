import type { Metadata } from "next";

import Header from "@/_components/navigation/header/header";
import { Footer } from "@/_components/navigation/footer/footer";

import "@/_styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hensleyinteriors.co.za/"),
  title: "Shop - Heather Hensley Interiors",
  description:
    "At Heather Hensley Interiors, every project is a testament to our love of layered design— spaces that are timeless, distinct, and brimming with character.",
  keywords:
    "interior design, home decor, layered design, timeless spaces, distinct interiors, character-filled homes, Heather Hensley Interiors",
  openGraph: {
    description:
      "At Heather Hensley Interiors, every project is a testament to our love of layered design— spaces that are timeless, distinct, and brimming with character.",
    type: "website",
    locale: "en_ZA",
    siteName: "Shop - Heather Hensley Interiors",
    images: [
      {
        url: "/open-graph-image.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-beige relative">
        <Header />
        <div className="max-w-[1600px] mx-auto pt-[60px] pb-10 px-5 desktop:px-10">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
