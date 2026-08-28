"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Destination } from "@/data/destinations";
import { DESTINATIONS } from "@/data/destinations";
import DestinationMap from "./DestinationMap";

function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function DestinationCard({
  destination,
  isHighlighted,
  onHover,
  onLeave,
}: {
  destination: Destination;
  isHighlighted: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const isComingSoon = destination.status === "coming-soon";

  return (
    <Link
      href={destination.href}
      className={`group flex flex-col overflow-hidden rounded-sm border bg-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ritumbhara-maroon focus-visible:ring-offset-2 focus-visible:ring-offset-ritumbhara-cream ${
        isHighlighted
          ? "border-ritumbhara-maroon/40 shadow-md"
          : "border-neutral-200/80 hover:border-ritumbhara-maroon/30 hover:shadow-md"
      } ${isComingSoon ? "opacity-95" : ""}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
    >
      <div className="relative aspect-video overflow-hidden bg-neutral-100">
        <Image
          src={destination.image}
          alt={destination.imageAlt}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
            isComingSoon ? "saturate-[0.85]" : ""
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        {isComingSoon && (
          <span className="absolute top-3 right-3 rounded-sm bg-neutral-800/85 px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.14em] text-white uppercase backdrop-blur-sm">
            Coming soon
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-ritumbhara-text">
            {destination.name}
          </h3>
        </div>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
          {destination.description}
        </p>

        <div className="mt-4 space-y-1 border-t border-neutral-100 pt-4">
          {destination.managedStays !== null ? (
            <p className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
              {destination.managedStays} managed stays
            </p>
          ) : (
            <p className="text-xs font-medium tracking-wide text-neutral-400 uppercase">
              Stays launching soon
            </p>
          )}

          {destination.priceFrom !== null ? (
            <p className="text-sm font-semibold text-ritumbhara-maroon">
              From {formatPrice(destination.priceFrom)}/night
            </p>
          ) : (
            <p className="text-sm text-neutral-400">Pricing to be announced</p>
          )}
        </div>

        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ritumbhara-text transition-colors group-hover:text-ritumbhara-maroon">
          {isComingSoon ? "Get notified" : "View stays"}
          <span
            className="transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

export default function Destinations() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="destinations"
      className="scroll-mt-20 bg-ritumbhara-cream px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-semibold tracking-tight text-ritumbhara-text sm:text-4xl">
          Destinations
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10 xl:gap-12">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
            {DESTINATIONS.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                isHighlighted={activeId === destination.id}
                onHover={() => setActiveId(destination.id)}
                onLeave={() => setActiveId(null)}
              />
            ))}
          </div>

          <div className="min-h-[22rem] lg:min-h-0">
            <DestinationMap
              activeId={activeId}
              onMarkerHover={setActiveId}
              onMarkerLeave={() => setActiveId(null)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
