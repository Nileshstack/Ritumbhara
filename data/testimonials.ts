export type ReviewPlatform = "airbnb" | "google";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  city: string;
  rating: number;
  platform: ReviewPlatform;
  avatarColor: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "kunal-jaipur",
    quote:
      "Best place at really affordable prices and the staff is helpful and studio is really tidy.",
    name: "Kunal G.",
    city: "Jaipur",
    rating: 5,
    platform: "airbnb",
    avatarColor: "#7a1f3d",
  },
  {
    id: "akshay-alwar",
    quote: "Great to spend your weekends with family and friends.",
    name: "Akshay K.",
    city: "Alwar",
    rating: 5,
    platform: "google",
    avatarColor: "#961a3c",
  },
  {
    id: "rekha-sariska",
    quote:
      "A wonderful experience, and I'd definitely recommend this place for a peaceful mountain getaway!",
    name: "Rekha G.",
    city: "Sariska",
    rating: 5,
    platform: "airbnb",
    avatarColor: "#5c4a3d",
  },
  {
    id: "priya-jaipur",
    quote:
      "Impeccably clean, beautifully designed, and the host was incredibly responsive throughout our stay.",
    name: "Priya S.",
    city: "Jaipur",
    rating: 5,
    platform: "google",
    avatarColor: "#8b6914",
  },
  {
    id: "rahul-alwar",
    quote:
      "Felt like a boutique hotel but with the warmth of a home. Will absolutely book direct again.",
    name: "Rahul M.",
    city: "Alwar",
    rating: 5,
    platform: "airbnb",
    avatarColor: "#651a33",
  },
  {
    id: "anjali-jaipur",
    quote:
      "Every detail was thought through — from check-in to local recommendations. A genuinely cared-for stay.",
    name: "Anjali T.",
    city: "Jaipur",
    rating: 5,
    platform: "google",
    avatarColor: "#7a1f3d",
  },
];

export const AGGREGATE_RATING = 4.8;
export const TOTAL_REVIEWS = 120;
