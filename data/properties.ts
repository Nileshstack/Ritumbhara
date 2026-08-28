export type PropertyCategory = "Studio" | "Serviced Apartment" | "Villa";

export type Property = {
  id: string;
  name: string;
  category: PropertyCategory;
  location: string;
  amenities: string[];
  priceFrom: number;
  rating: number;
  photoCount: number;
  image: string;
  imageAlt: string;
  href: string;
};

export const FEATURED_PROPERTIES: Property[] = [
  {
    id: "studio-505",
    name: "Studio 505",
    category: "Studio",
    location: "Jaipur",
    amenities: ["Queen bed", "Air Conditioning", "Private Bathroom"],
    priceFrom: 2500,
    rating: 4.9,
    photoCount: 6,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Bright boutique studio interior in Jaipur",
    href: "https://www.ritumbhara.com/stays/studio-505",
  },
  {
    id: "studio-301",
    name: "Studio 301",
    category: "Studio",
    location: "Jaipur",
    amenities: ["King bed", "Kitchenette", "Work desk"],
    priceFrom: 2800,
    rating: 4.8,
    photoCount: 5,
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Minimalist studio bedroom with warm lighting",
    href: "https://www.ritumbhara.com/stays/studio-301",
  },
  {
    id: "alwar-serviced",
    name: "Heritage Serviced Apartment",
    category: "Serviced Apartment",
    location: "Alwar",
    amenities: ["2 Bedrooms", "Full Kitchen", "Living area"],
    priceFrom: 3200,
    rating: 4.8,
    photoCount: 8,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Elegant serviced apartment living room in Alwar",
    href: "https://www.ritumbhara.com/stays/heritage-serviced-apartment",
  },
  {
    id: "villa-65-sariska",
    name: "Villa 65 Sariska",
    category: "Villa",
    location: "Sariska",
    amenities: ["Private pool", "3 Bedrooms", "Garden terrace"],
    priceFrom: 8500,
    rating: 4.9,
    photoCount: 10,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Luxury villa with pool near Sariska forest",
    href: "https://www.ritumbhara.com/stays/villa-65-sariska",
  },
  {
    id: "pink-city-studio",
    name: "Pink City Studio",
    category: "Studio",
    location: "Jaipur",
    amenities: ["Queen bed", "Rooftop access", "Wi-Fi"],
    priceFrom: 2400,
    rating: 4.7,
    photoCount: 5,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Stylish studio with Jaipur city views",
    href: "https://www.ritumbhara.com/stays/pink-city-studio",
  },
  {
    id: "forest-edge-villa",
    name: "Forest Edge Villa",
    category: "Villa",
    location: "Sariska",
    amenities: ["2 Bedrooms", "Outdoor dining", "Nature views"],
    priceFrom: 7200,
    rating: 4.8,
    photoCount: 7,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Modern villa nestled at the forest edge",
    href: "https://www.ritumbhara.com/stays/forest-edge-villa",
  },
];
