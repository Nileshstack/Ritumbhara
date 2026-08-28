"use client";

import { useState, type FormEvent } from "react";

export default function FooterSubscribe() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <p className="text-sm text-neutral-400" role="status">
        Thanks — you&apos;re subscribed.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1.5 sm:flex-row">
      <label className="sr-only" htmlFor="footer-email">
        Email address
      </label>
      <input
        id="footer-email"
        type="email"
        name="email"
        required
        placeholder="Your email"
        autoComplete="email"
        className="min-w-0 flex-1 rounded-md border border-neutral-700 bg-neutral-900 px-2.5 py-1.5 text-sm text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-ritumbhara-maroon focus:ring-2 focus:ring-ritumbhara-maroon/30"
      />
      <button
        type="submit"
        className="shrink-0 rounded-md border border-ritumbhara-maroon bg-ritumbhara-maroon px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-ritumbhara-maroon-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ritumbhara-maroon focus-visible:ring-offset-2 focus-visible:ring-offset-ritumbhara-charcoal"
      >
        Subscribe
      </button>
    </form>
  );
}
