import productData from "@/_data/product-data.json";

export async function generateStaticParams() {
  const { categories } = productData;
  const paths: { productSlug: string }[] = [];

  // Generate paths for all products
  for (const categoryKey in categories) {
    const category = categories[categoryKey as keyof typeof categories];

    category.forEach((product) => {
      const slug = product.name.toLowerCase().replace(/\s+/g, "-");
      paths.push({ productSlug: slug });
    });
  }

  return paths;
}
