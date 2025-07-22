import type { Metadata } from "next";

import "@/_styles/globals.css";
import Header from "@/_components/navigation/header/header";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hensleyinteriors.co.za/"),
  title: "Heather Hensley Interiors",
  description:
    "At Heather Hensley Interiors, every project is a testament to our love of layered design— spaces that are timeless, distinct, and brimming with character.",
  keywords:
    "interior design, home decor, layered design, timeless spaces, distinct interiors, character-filled homes, Heather Hensley Interiors",
  openGraph: {
    description:
      "At Heather Hensley Interiors, every project is a testament to our love of layered design— spaces that are timeless, distinct, and brimming with character.",
    type: "website",
    locale: "en_ZA",
    siteName: "Heather Hensley Interiors",
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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
