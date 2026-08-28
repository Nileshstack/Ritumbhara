"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/data/testimonials";
import {
  AGGREGATE_RATING,
  TESTIMONIALS,
  TOTAL_REVIEWS,
} from "@/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${
            index < rating ? "text-amber-400" : "text-neutral-200"
          }`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.35 4.76 5.25.77-3.8 3.7.9 5.23L10 13.9l-4.7 2.06.9-5.23-3.8-3.7 5.25-.77L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function GuestAvatar({ name, color }: { name: string; color: string }) {
  const initial = name.trim().charAt(0).toUpperCase();

  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
      style={{ backgroundColor: color }}
      aria-hidden="true"
    >
      {initial}
    </span>
  );
}

function PlatformBadge({ platform }: { platform: Testimonial["platform"] }) {
  if (platform === "airbnb") {
    return (
      <span
        className="inline-flex items-center gap-1 rounded-sm bg-[#ff5a5f]/10 px-2 py-1 text-[0.65rem] font-semibold tracking-wide text-[#e31c5f] uppercase"
        title="Review from Airbnb"
      >
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 3.3c-1.1 2.5-2.2 4.5-3.2 6.2-1 1.6-2 2.9-2.9 3.8-.9.9-1.7 1.3-2.4 1.3-.5 0-.9-.2-1.2-.5-.3-.4-.5-.9-.5-1.5 0-.6.2-1.3.5-2.1.4-.8.8-1.5 1.3-2.2.5-.7 1-1.3 1.4-1.8L12 3.3zm0 0C13.1 5.8 14.2 7.8 15.2 9.5c1 1.6 2 2.9 2.9 3.8.9.9 1.7 1.3 2.4 1.3.5 0 .9-.2 1.2-.5.3-.4.5-.9.5-1.5 0-.6-.2-1.3-.5-2.1-.4-.8-.8-1.5-1.3-2.2-.5-.7-1-1.3-1.4-1.8L12 3.3z"
          />
        </svg>
        Airbnb
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center gap-1 rounded-sm bg-neutral-100 px-2 py-1 text-[0.65rem] font-semibold tracking-wide text-neutral-600 uppercase"
      title="Review from Google"
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
      Google
    </span>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article
      data-card
      className="group flex w-[min(85vw,380px)] shrink-0 snap-start flex-col rounded-sm border border-neutral-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ritumbhara-maroon/20 hover:shadow-lg sm:w-[340px] lg:w-[calc((min(80rem,100vw)-8rem-3rem)/3)]"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <StarRating rating={testimonial.rating} />
        <PlatformBadge platform={testimonial.platform} />
      </div>

      <blockquote className="flex-1 text-sm leading-relaxed text-neutral-600 sm:text-[0.95rem]">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <footer className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-5">
        <GuestAvatar
          name={testimonial.name}
          color={testimonial.avatarColor}
        />
        <cite className="not-italic">
          <span className="block text-sm font-medium text-ritumbhara-text">
            {testimonial.name}
          </span>
          <span className="text-sm text-neutral-400">— {testimonial.city}</span>
        </cite>
      </footer>
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
      aria-label={
        direction === "left"
          ? "Scroll to previous reviews"
          : "Scroll to next reviews"
      }
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

export default function Testimonials() {
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
    const distance = (firstCard?.offsetWidth ?? 340) + gap;

    el.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="testimonials"
      className="scroll-mt-20 bg-ritumbhara-cream px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="testimonials-heading"
          className="text-center text-3xl font-semibold tracking-tight text-ritumbhara-text sm:text-4xl"
        >
          What Our Guests Say
        </h2>

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
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-5">
          <p className="text-base font-semibold text-ritumbhara-text">
            <span className="text-amber-500" aria-hidden="true">
              ★
            </span>{" "}
            {AGGREGATE_RATING} average from {TOTAL_REVIEWS}+ reviews
          </p>
          <span className="hidden text-neutral-300 sm:inline" aria-hidden="true">
            |
          </span>
          <Link
            href="https://www.ritumbhara.com/reviews"
            className="text-sm font-medium text-ritumbhara-maroon underline decoration-ritumbhara-maroon/30 underline-offset-4 transition-colors hover:text-ritumbhara-maroon-dark hover:decoration-ritumbhara-maroon/60"
          >
            Read all reviews →
          </Link>
        </div>
      </div>
    </section>
  );
}
