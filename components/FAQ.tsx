"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { FAQ_ITEMS, type FAQItem } from "@/data/faq";

function FAQAnswer({ item }: { item: FAQItem }) {
  if (item.id === "contact") {
    return (
      <p className="text-sm leading-relaxed text-neutral-600 sm:text-[0.95rem]">
        You can reach Ritumbhara at{" "}
        <a
          href="tel:+919503002623"
          className="font-medium text-ritumbhara-maroon underline decoration-ritumbhara-maroon/30 underline-offset-2 hover:decoration-ritumbhara-maroon/60"
        >
          +91 95030 02623
        </a>{" "}
        or{" "}
        <a
          href="mailto:studios.jaipur@gmail.com"
          className="font-medium text-ritumbhara-maroon underline decoration-ritumbhara-maroon/30 underline-offset-2 hover:decoration-ritumbhara-maroon/60"
        >
          studios.jaipur@gmail.com
        </a>
        , or visit the{" "}
        <Link
          href="https://www.ritumbhara.com/contact"
          className="font-medium text-ritumbhara-maroon underline decoration-ritumbhara-maroon/30 underline-offset-2 hover:decoration-ritumbhara-maroon/60"
        >
          Contact page
        </Link>{" "}
        for more details.
      </p>
    );
  }

  return (
    <p className="text-sm leading-relaxed text-neutral-600 sm:text-[0.95rem]">
      {item.answer}
    </p>
  );
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className="border-b border-neutral-200/80">
      <h3>
        <button
          id={buttonId}
          type="button"
          className="group flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:bg-ritumbhara-maroon/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ritumbhara-maroon focus-visible:ring-offset-2 focus-visible:ring-offset-ritumbhara-cream sm:py-5"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="text-base font-semibold tracking-tight text-ritumbhara-text sm:text-[1.05rem]">
            {item.question}
          </span>
          <span
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-200/80 text-neutral-500 transition-all duration-300 group-hover:border-ritumbhara-maroon/30 group-hover:text-ritumbhara-maroon ${
              isOpen ? "rotate-180 border-ritumbhara-maroon/20 bg-ritumbhara-maroon/5 text-ritumbhara-maroon" : ""
            }`}
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isOpen}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 sm:pb-6">
            <FAQAnswer item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  const handleToggle = (id: string) => {
    setOpenId((current) => (current === id ? "" : id));
  };

  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-ritumbhara-cream px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="faq-heading"
          className="text-center text-3xl font-semibold tracking-tight text-ritumbhara-text sm:text-4xl"
        >
          Frequently Asked Questions
        </h2>

        <div className="mt-10 border-t border-neutral-200/80 sm:mt-12">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
