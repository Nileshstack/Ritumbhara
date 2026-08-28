import Link from "next/link";
import type { ReactNode } from "react";

type TrustItem = {
  id: string;
  title: string;
  description: string;
  stat?: string;
  link?: {
    href: string;
    label: string;
  };
  icon: ReactNode;
};

function SuperhostIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 4l2.8 6.4 6.9.6-5.2 4.5 1.6 6.7L20 19.8l-6.1 3.4 1.6-6.7-5.2-4.5 6.9-.6L20 4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle
        cx="20"
        cy="20"
        r="14.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeDasharray="3 4"
        opacity="0.55"
      />
      <path
        d="M12 28c2.2 2.4 5 3.8 8 3.8s5.8-1.4 8-3.8"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

function DirectBookingIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="7"
        y="11"
        width="26"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7 17h26"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity="0.55"
      />
      <path
        d="M14 24h5M23 24h3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="30" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M27.5 9h5M30 6.5v5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M11 8l-2.5-2M29 8l2.5-2"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}

function HumanSupportIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 18.5a10 10 0 0 1 20 0v5.5a3 3 0 0 1-3 3h-1.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x="8"
        y="24"
        width="7"
        height="9"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M25 27.5c2.8 1.2 5 3.4 6.5 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="20" cy="14" r="2" fill="currentColor" opacity="0.85" />
      <path
        d="M16.5 11.5c1.2-1.6 3-2.5 5-2.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

const TRUST_ITEMS: TrustItem[] = [
  {
    id: "superhost",
    title: "Airbnb Superhost",
    stat: "4.8★ from 120+ reviews",
    description:
      "Consistently rated for cleanliness, communication and hospitality across our portfolio.",
    link: {
      href: "#testimonials",
      label: "Read guest reviews →",
    },
    icon: <SuperhostIcon className="h-8 w-8" />,
  },
  {
    id: "direct",
    title: "No OTA Booking Fees",
    description:
      "Book direct with Ritumbhara and skip the third-party commission markups.",
    icon: <DirectBookingIcon className="h-8 w-8" />,
  },
  {
    id: "support",
    title: "Real Human Support",
    description:
      "Reach us directly by phone or WhatsApp — no call centers, no chatbots.",
    icon: <HumanSupportIcon className="h-8 w-8" />,
  },
];

function TrustColumn({ item }: { item: TrustItem }) {
  return (
    <div className="group flex flex-col items-center text-center transition-transform duration-300 ease-out hover:-translate-y-0.5">
      <div className="mb-3 text-ritumbhara-gold transition-colors duration-300 group-hover:text-ritumbhara-gold-bright">
        {item.icon}
      </div>

      <h3 className="text-sm font-semibold tracking-tight text-white sm:text-base">
        {item.title}
      </h3>

      {item.stat && (
        <p className="mt-1 text-xs font-semibold text-white/95 sm:text-sm">
          {item.stat}
        </p>
      )}

      <p className="mt-2 max-w-xs text-xs leading-snug text-neutral-400 sm:text-sm">
        {item.description}
      </p>

      {item.link && (
        <Link
          href={item.link.href}
          className="mt-2 text-xs font-medium text-ritumbhara-gold/90 underline decoration-ritumbhara-gold/30 underline-offset-4 transition-colors hover:text-ritumbhara-gold-bright hover:decoration-ritumbhara-gold/60 sm:text-sm"
        >
          {item.link.label}
        </Link>
      )}
    </div>
  );
}

export default function TrustStrip() {
  return (
    <section
      className="bg-ritumbhara-charcoal px-5 py-8 sm:px-8 sm:py-10"
      aria-label="Why book with Ritumbhara"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
        {TRUST_ITEMS.map((item) => (
          <TrustColumn key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
