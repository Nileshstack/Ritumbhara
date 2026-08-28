export type DestinationStatus = "open" | "coming-soon";

export type Destination = {
  id: string;
  name: string;
  description: string;
  managedStays: number | null;
  priceFrom: number | null;
  status: DestinationStatus;
  href: string;
  image: string;
  imageAlt: string;
};

export const DESTINATIONS: Destination[] = [
  {
    id: "jaipur",
    name: "Jaipur",
    description:
      "The Pink City, and Ritumbhara's founding destination, with five managed studios.",
    managedStays: 5,
    priceFrom: 2500,
    status: "open",
    href: "https://www.ritumbhara.com/destinations/jaipur",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Hawa Mahal palace in Jaipur at golden hour",
  },
  {
    id: "alwar",
    name: "Alwar",
    description:
      "A historic district of forts and forest, home to four Ritumbhara serviced stays.",
    managedStays: 4,
    priceFrom: 2200,
    status: "open",
    href: "https://www.ritumbhara.com/destinations/alwar",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Historic fort architecture in Alwar",
  },
  {
    id: "sariska",
    name: "Sariska",
    description:
      "Forest-edge stays near Sariska Tiger Reserve, within Alwar district.",
    managedStays: 3,
    priceFrom: 3200,
    status: "open",
    href: "https://www.ritumbhara.com/destinations/sariska",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Sunlit forest trail near Sariska Tiger Reserve",
  },
  {
    id: "agra",
    name: "Agra",
    description:
      "Home of the Taj Mahal, the next Ritumbhara destination, opening soon.",
    managedStays: null,
    priceFrom: null,
    status: "coming-soon",
    href: "https://www.ritumbhara.com/destinations/agra",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Taj Mahal reflected at sunrise in Agra",
  },
];
