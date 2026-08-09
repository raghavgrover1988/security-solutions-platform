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
  inStock: boolean;
  rating?: number;
  reviewCount?: number;
};