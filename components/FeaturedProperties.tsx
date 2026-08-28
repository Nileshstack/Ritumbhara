"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Property } from "@/data/properties";
import { FEATURED_PROPERTIES } from "@/data/properties";

function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function PhotoIndicator({ count }: { count: number }) {
  const visibleDots = Math.min(count, 5);

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1" aria-hidden="true">
        {Array.from({ length: visibleDots }).map((_, index) => (
          <span
            key={index}
            className={`h-1 rounded-full transition-all ${
              index === 0 ? "w-3 bg-white" : "w-1 bg-white/50"
            }`}
          />
        ))}
      </div>
      <span className="text-[0.65rem] font-medium tracking-wide text-white/90">
        1/{count}
      </span>
    </div>
  );
}

function PropertyCard({ property }: { property: Property }) {
  return (
    <article
      data-card
      className="group flex w-[min(85vw,340px)] shrink-0 snap-start flex-col overflow-hidden rounded-sm border border-neutral-200/80 bg-white transition-shadow duration-300 hover:shadow-md sm:w-[300px] lg:w-[calc((min(80rem,100vw)-8rem-4.5rem)/3.5)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <Image
          src={property.image}
          alt={property.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 300px, 340px"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/10" />

        <span className="absolute top-3 left-3 rounded-sm bg-white/95 px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.16em] text-neutral-700 uppercase backdrop-blur-sm">
          {property.category}
        </span>

        <div className="absolute top-3 right-3 flex flex-col items-end gap-2">
          <span className="rounded-sm bg-ritumbhara-wine px-2.5 py-1 text-[0.62rem] font-semibold tracking-wide text-white">
            Superhost
          </span>
          <span className="rounded-sm bg-white/95 px-2 py-1 text-xs font-semibold text-ritumbhara-text backdrop-blur-sm">
            <span className="text-amber-500" aria-hidden="true">
              ★
            </span>{" "}
            {property.rating.toFixed(1)}
          </span>
        </div>

        <div className="absolute right-3 bottom-3 left-3 flex items-end justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-base font-semibold tracking-tight text-white sm:text-lg">
              {property.name}
            </h3>
            <p className="mt-0.5 text-sm font-medium text-white/90">
              From {formatPrice(property.priceFrom)}/night
            </p>
          </div>
          <PhotoIndicator count={property.photoCount} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs leading-relaxed text-neutral-500">
          {property.amenities.join(" · ")}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-neutral-100 pt-4">
          <p className="text-[0.7rem] tracking-wide text-neutral-400">
            Book direct · No OTA fees
          </p>
          <Link
            href={property.href}
            className="shrink-0 text-sm font-medium text-ritumbhara-text transition-colors hover:text-ritumbhara-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ritumbhara-maroon focus-visible:ring-offset-2"
          >
            View Stay →
          </Link>
        </div>
      </div>
    </article>
  );
}

function CarouselButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Scroll to previous stays" : "Scroll to next stays"}
      className="absolute top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200/80 bg-white/95 p-2.5 text-ritumbhara-text shadow-sm backdrop-blur-sm transition-all hover:border-ritumbhara-maroon/30 hover:text-ritumbhara-maroon disabled:pointer-events-none disabled:opacity-0 sm:flex"
      style={{
        [direction === "left" ? "left" : "right"]: "-0.25rem",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4"
        aria-hidden="true"
      >
        {direction === "left" ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
}

export default function FeaturedProperties() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByDirection = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>("[data-card]");
    const gap = 24;
    const distance = (firstCard?.offsetWidth ?? 320) + gap;

    el.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-ritumbhara-cream px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ritumbhara-text sm:text-4xl">
            Featured Properties
          </h2>
          <p className="mt-3 text-base leading-relaxed text-neutral-600 sm:text-lg">
            A handful of stays from across our portfolio — each managed to the
            same standard.
          </p>
        </div>

        <div className="relative mt-10 sm:mt-12">
          <CarouselButton
            direction="left"
            onClick={() => scrollByDirection("left")}
            disabled={!canScrollLeft}
          />
          <CarouselButton
            direction="right"
            onClick={() => scrollByDirection("right")}
            disabled={!canScrollRight}
          />

          <div
            ref={scrollRef}
            className="scrollbar-hide -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-5 pb-2 sm:-mx-8 sm:px-8"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {FEATURED_PROPERTIES.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
