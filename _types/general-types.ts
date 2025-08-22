export interface HeaderProps {
  isScrolled: boolean;
  pathname?: string;
}

export interface ProductProps {
  categoryData: {
    name: string;
    nameNote?: string;
    size: string;
    description: string[];
    prices: {
      name: string;
      amountExVat?: number;
      amountInclVat: number;
      note?: string;
    }[];
    images: string[];
    quantity: number;
    inStock: boolean;
    category: string;
  }[];
}
