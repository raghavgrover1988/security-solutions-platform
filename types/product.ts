export type Product = {
  id: string;
  name: string;
  slug: string;

  brand: string;
  category: string;

  price: number;
  mrp?: number;

  image: string;

  shortDescription: string;
  description?: string;

  inStock: boolean;

  rating?: number;
  reviewCount?: number;

  featured?: boolean;

  specifications?: {
    label: string;
    value: string;
  }[];
};