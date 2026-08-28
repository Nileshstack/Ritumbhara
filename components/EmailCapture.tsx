"use client";

import { useState, type FormEvent } from "react";
import { DESTINATIONS } from "@/data/destinations";

const fieldClass =
  "w-full rounded-md border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-ritumbhara-text outline-none transition-colors placeholder:text-neutral-400 focus:border-ritumbhara-maroon focus:ring-2 focus:ring-ritumbhara-maroon/20";

function EnvelopeHomeIcon() {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ritumbhara-maroon/8 text-ritumbhara-maroon">
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M4 7.5l8 5.5 8-5.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="4"
          y="6"
          width="16"
          height="12"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M9 14.5h6M11 12h2"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}

export default function EmailCapture() {
  const [showDetails, setShowDetails] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="bg-ritumbhara-cream px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-sm border border-neutral-200/80 bg-white p-6 shadow-md shadow-neutral-900/5 sm:p-8">
          <div className="flex items-start gap-4">
            <EnvelopeHomeIcon />
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-ritumbhara-text sm:text-2xl">
                Not ready to book yet?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:text-[0.95rem]">
                Leave your email and get{" "}
                <span className="font-semibold text-ritumbhara-maroon">
                  10% off your first direct booking
                </span>{" "}
                — plus updates on new destinations and offers.
              </p>
            </div>
          </div>

          {isSubmitted ? (
            <div
              className="mt-8 rounded-md border border-ritumbhara-maroon/20 bg-ritumbhara-maroon/5 px-5 py-6 text-center"
              role="status"
            >
              <p className="text-base font-semibold text-ritumbhara-text">
                You&apos;re on the list!
              </p>
              <p className="mt-2 text-sm text-neutral-600">
                We&apos;ll be in touch with your discount code and the latest
                from Ritumbhara.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="sr-only">Your name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    autoComplete="name"
                    className={fieldClass}
                  />
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="sr-only">Email address</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email address"
                    autoComplete="email"
                    className={fieldClass}
                  />
                </label>
              </div>

              <button
                type="button"
                onClick={() => setShowDetails((open) => !open)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ritumbhara-maroon transition-colors hover:text-ritumbhara-maroon-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ritumbhara-maroon focus-visible:ring-offset-2"
                aria-expanded={showDetails}
                aria-controls="capture-extra-fields"
              >
                <span
                  className={`text-base leading-none transition-transform duration-200 ${
                    showDetails ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
                {showDetails ? "Hide details" : "Add more details"}
              </button>

              <div
                id="capture-extra-fields"
                className={`grid transition-all duration-300 ease-in-out ${
                  showDetails
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
                aria-hidden={!showDetails}
              >
                <div className="overflow-hidden">
                  <div className="space-y-4 pt-1">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
                        Which destination interests you?
                      </span>
                      <select
                        name="destination"
                        className={fieldClass}
                        tabIndex={showDetails ? 0 : -1}
                      >
                        <option value="">Select a destination</option>
                        {DESTINATIONS.map((destination) => (
                          <option key={destination.id} value={destination.id}>
                            {destination.name}
                            {destination.status === "coming-soon"
                              ? " (Coming soon)"
                              : ""}
                          </option>
                        ))}
                        <option value="any">Any destination</option>
                      </select>
                    </label>

                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
                        Anything else we should know? (optional)
                      </span>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Tell us about your travel plans, dates, or preferences…"
                        className={`${fieldClass} resize-y`}
                        tabIndex={showDetails ? 0 : -1}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-ritumbhara-maroon px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ritumbhara-maroon-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ritumbhara-maroon focus-visible:ring-offset-2"
              >
                Claim My Discount
              </button>

              <p className="text-center text-xs leading-relaxed text-neutral-500">
                We&apos;ll only email you about new stays — no spam, unsubscribe
                anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
