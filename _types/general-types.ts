export interface HeaderProps {
  isScrolled: boolean;
  pathname?: string;
}

export interface ProductProps {
  categoryData: {
    name: string;
    nameNote?: string;
    size?: string;
    description: string[];
    prices?: {
      name: string;
      amountExVat?: number;
      amountInclVat: number;
      note?: string;
    }[];
    images: {
      src: string;
      mainImage?: boolean;
      hoverImage?: boolean;
    }[];
    quantity?: number;
    inStock: boolean;
    preOrder?: boolean;
    category: string;
  }[];
}
