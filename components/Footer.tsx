import Link from "next/link";
import type { ReactNode } from "react";
import FooterSubscribe from "./FooterSubscribe";

const DESTINATIONS = [
  { label: "Jaipur", href: "https://www.ritumbhara.com/destinations/jaipur" },
  { label: "Alwar", href: "https://www.ritumbhara.com/destinations/alwar" },
  { label: "Sariska", href: "https://www.ritumbhara.com/destinations/sariska" },
  {
    label: "Agra (Coming Soon)",
    href: "https://www.ritumbhara.com/destinations/agra",
  },
] as const;

const COMPANY_LINKS = [
  { label: "Our Story", href: "https://www.ritumbhara.com/about" },
  { label: "The Ritumbhara Standard", href: "/#standard" },
  { label: "Experiences", href: "https://www.ritumbhara.com/experiences" },
  { label: "Journal", href: "https://www.ritumbhara.com/journal" },
  { label: "Contact", href: "https://www.ritumbhara.com/contact" },
  {
    label: "Partner With Us",
    href: "https://www.ritumbhara.com/partner",
    highlight: true,
  },
] as const;

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ritumbhara",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ritumbhara",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
        <path
          d="M14 8.5h2.5l-.5 3H14v9h-3.5v-9H9V8.5h1.5V6.8c0-1.5.5-2.7 1.4-3.5.9-.9 2.2-1.3 3.9-1.3H17v3h-1.8c-.6 0-1 .1-1.2.4-.2.2-.3.6-.3 1.1V8.5z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ritumbhara",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 10v7M8 7v.01" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <path
          d="M12 17v-4.2c0-1.2.9-2.2 2.1-2.2 1.1 0 1.9.8 1.9 2V17M12 10.8V17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

function BrandMark() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ritumbhara-charcoal">
      <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-ritumbhara-maroon transition-colors group-hover:bg-ritumbhara-maroon-dark">
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-white" aria-hidden="true">
          <path
            d="M6 18V8l6-4 6 4v10"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M10 18v-5h4v5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path d="M6 11h12" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      </span>
      <span className="text-base font-semibold tracking-tight text-white">
        Ritumbhara
        <sup className="ml-0.5 text-[0.5em] font-normal text-white/70">®</sup>
      </span>
    </Link>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div>
      {title && (
        <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
          {title}
        </h3>
      )}
      <div className={title ? "mt-2.5" : ""}>{children}</div>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ritumbhara-charcoal text-neutral-400">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          <FooterColumn>
            <BrandMark />
            <p className="mt-3 max-w-xs text-sm leading-snug text-neutral-400">
              A hospitality management company curating hotels, villas, and
              boutique stays across India.
            </p>
            <p className="mt-1.5 text-xs text-neutral-500">
              Based in Jaipur, Rajasthan, India
            </p>

            <div className="mt-3 flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition-colors hover:border-ritumbhara-maroon/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ritumbhara-charcoal"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="mt-4">
              <p className="mb-2 text-[0.65rem] font-medium tracking-wide text-neutral-500 uppercase">
                Newsletter
              </p>
              <FooterSubscribe />
            </div>
          </FooterColumn>

          <FooterColumn title="Destinations">
            <ul className="space-y-2">
              {DESTINATIONS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ritumbhara-charcoal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Company">
            <ul className="space-y-2">
              {COMPANY_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 text-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ritumbhara-charcoal ${
                      "highlight" in item && item.highlight
                        ? "font-semibold text-white"
                        : ""
                    }`}
                  >
                    {item.label}
                    {"highlight" in item && item.highlight && (
                      <span aria-hidden="true" className="text-ritumbhara-maroon">
                        →
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Contact">
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+919503002629"
                  className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ritumbhara-charcoal"
                >
                  +91 95030 02629
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919503002629"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ritumbhara-charcoal"
                >
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:reservations@ritumbhara.com"
                  className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ritumbhara-charcoal"
                >
                  reservations@ritumbhara.com
                </a>
              </li>
            </ul>
          </FooterColumn>
        </div>

        <div className="mt-8 border-t border-neutral-800 pt-5">
          <div className="flex flex-col items-start justify-between gap-2 text-xs leading-snug text-neutral-500 sm:flex-row sm:items-center">
            <p>
              © {currentYear} Ritumbhara, a brand of EdacMosaic Technologies
              Private Limited. All rights reserved.
            </p>
            <p className="text-neutral-500">
              Secure booking · Direct rates · No OTA fees
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
