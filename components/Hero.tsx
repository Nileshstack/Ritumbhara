"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const DESTINATIONS = [
  "Jaipur",
  "Udaipur",
  "Sariska",
] as const;

const GUEST_OPTIONS = ["1", "2", "3", "4", "5", "6+"] as const;

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919876543210";

function buildWhatsAppUrl(
  destination: string,
  checkIn: string,
  checkOut: string,
  guests: string,
) {
  const message = [
    "Hi Ritumbhara, I'd like to check availability.",
    "",
    `Destination: ${destination}`,
    `Check-in: ${checkIn || "—"}`,
    `Check-out: ${checkOut || "—"}`,
    `Guests: ${guests}`,
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Hero() {
  const [destination, setDestination] = useState<string>(DESTINATIONS[0]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState<string>(GUEST_OPTIONS[1]);

  const handleCheckAvailability = () => {
    window.open(
      buildWhatsAppUrl(destination, checkIn, checkOut, guests),
      "_blank",
      "noopener,noreferrer",
    );
  };

  const fieldClass =
    "w-full rounded-md border border-neutral-200 bg-white px-3 py-2.5 text-sm text-ritumbhara-text outline-none transition-colors focus:border-ritumbhara-maroon focus:ring-2 focus:ring-ritumbhara-maroon/20";

  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-ritumbhara-wine sm:min-h-[calc(100vh-5rem)]">
      <div className="absolute inset-0 lg:hidden" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ritumbhara-wine/88" />
      </div>

      <div className="relative mx-auto grid min-h-[inherit] max-w-7xl lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-14 pb-24 sm:px-8 sm:py-16 sm:pb-24 lg:px-10 lg:py-20 xl:px-12">
          <p className="text-xs font-semibold tracking-[0.22em] text-white/90 uppercase">
            India, Thoughtfully Hosted
          </p>

          <h1 className="mt-5 max-w-xl text-[2rem] leading-[1.15] font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
            A Home-Away-From-Home, Managed So You Don&apos;t Have To Worry.
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/92 sm:text-[1.05rem]">
            Hotels, villas, serviced apartments and boutique stays across India,
            each one managed to the same exacting standard.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <span className="inline-flex w-fit items-center rounded-full border border-white/35 px-4 py-1.5 text-xs font-medium tracking-wide text-white sm:text-[0.8rem]">
              <span className="mr-1.5 text-amber-300" aria-hidden="true">
                ★
              </span>
              Airbnb Superhost · Book direct, no OTA fees
            </span>
            <p className="text-sm font-medium text-white/88">
              <span className="text-amber-300" aria-hidden="true">
                ★
              </span>{" "}
              4.8 (120+ reviews) · 500+ stays hosted
            </p>
          </div>

          <div className="mt-8 w-full max-w-xl rounded-xl bg-white p-4 shadow-xl shadow-black/10 sm:p-5">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <label className="flex flex-col gap-1.5 sm:col-span-2 lg:col-span-1">
                <span className="text-xs font-semibold tracking-wide text-neutral-500 uppercase">
                  Destination
                </span>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className={fieldClass}
                >
                  {DESTINATIONS.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold tracking-wide text-neutral-500 uppercase">
                  Check-in
                </span>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className={fieldClass}
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold tracking-wide text-neutral-500 uppercase">
                  Check-out
                </span>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn || undefined}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className={fieldClass}
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold tracking-wide text-neutral-500 uppercase">
                  Guests
                </span>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className={fieldClass}
                >
                  {GUEST_OPTIONS.map((count) => (
                    <option key={count} value={count}>
                      {count}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <button
              type="button"
              onClick={handleCheckAvailability}
              className="mt-4 w-full rounded-md bg-ritumbhara-wine px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ritumbhara-wine-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ritumbhara-wine focus-visible:ring-offset-2"
            >
              Check Availability
            </button>

            <p className="mt-3 text-center text-xs text-neutral-500">
              We reply directly — no OTA fees, real-time human answers
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 text-sm sm:flex-row sm:gap-6">
            <Link
              href="https://www.ritumbhara.com/destinations"
              className="font-medium text-white underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            >
              Or browse all destinations →
            </Link>
            <Link
              href="https://www.ritumbhara.com/about"
              className="font-medium text-white underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            >
              Our Story
            </Link>
          </div>
        </div>

        <div className="relative hidden min-h-[inherit] lg:block" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ritumbhara-wine via-ritumbhara-wine/55 to-transparent" />
        </div>
      </div>

      <a
        href="#explore"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ritumbhara-wine"
      >
        <span className="text-[0.7rem] font-medium tracking-[0.18em] uppercase">
          Explore our stays
        </span>
        <svg
          className="h-4 w-4 animate-bounce"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}
