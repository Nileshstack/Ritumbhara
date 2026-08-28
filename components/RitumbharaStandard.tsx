"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { STANDARD_ATTRIBUTES } from "@/data/standard";

function StandardItem({
  label,
  description,
  icon,
  index,
  isVisible,
}: {
  label: string;
  description: string;
  icon: ReactNode;
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`group text-center transition-all duration-700 ease-out sm:text-left ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-5 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="mx-auto mb-3 flex justify-center sm:mx-0 sm:justify-start">
        {icon}
      </div>
      <h3 className="text-sm font-semibold tracking-tight text-ritumbhara-text sm:text-[0.95rem]">
        {label}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500">
        {description}
      </p>
    </div>
  );
}

export default function RitumbharaStandard() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="standard"
      ref={sectionRef}
      className="relative scroll-mt-20 overflow-hidden bg-ritumbhara-cream px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
      aria-labelledby="ritumbhara-standard-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #e8ddd2 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/30"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl text-center">
        <h2
          id="ritumbhara-standard-heading"
          className="text-3xl font-semibold tracking-tight text-ritumbhara-text sm:text-4xl"
        >
          The Ritumbhara Standard
        </h2>

        <div className="mx-auto mt-5 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-ritumbhara-maroon/30" aria-hidden="true" />
          <span className="h-1.5 w-1.5 rounded-full bg-ritumbhara-maroon/50" aria-hidden="true" />
          <span className="h-px w-12 bg-ritumbhara-maroon/30" aria-hidden="true" />
        </div>

        <p
          className={`mx-auto mt-6 max-w-2xl text-sm font-medium tracking-wide text-ritumbhara-maroon transition-all duration-700 sm:text-base ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          Trusted by 500+ guests across India · 50+ properties, one consistent
          standard
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-8">
          {STANDARD_ATTRIBUTES.map((attribute, index) => (
            <StandardItem
              key={attribute.id}
              label={attribute.label}
              description={attribute.description}
              icon={attribute.icon}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
