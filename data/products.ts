import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "prod-001",
    name: "8MP AI IP Bullet Camera",
    slug: "8mp-ai-ip-bullet-camera",

    brand: "Demo Brand",
    category: "IP Cameras",

    price: 8999,
    mrp: 10999,

    image: "/products/placeholder-camera.jpg",

    shortDescription:
      "Outdoor IP camera with AI-powered detection and night vision.",

    description:
      "Professional 8MP IP bullet camera designed for outdoor surveillance with AI-powered detection, high-resolution imaging and night vision capabilities.",

    inStock: true,

    rating: 4.8,
    reviewCount: 24,

    featured: true,

    specifications: [
      {
        label: "Resolution",
        value: "8MP",
      },
      {
        label: "Camera Type",
        value: "IP Bullet Camera",
      },
      {
        label: "Night Vision",
        value: "Yes",
      },
      {
        label: "AI Detection",
        value: "Yes",
      },
      {
        label: "Outdoor Use",
        value: "Yes",
      },
    ],
  },
];