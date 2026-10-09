'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl3 border border-line bg-white p-12 text-center shadow-soft">
        <CheckCircle className="h-12 w-12 text-azure-500" />
        <h3 className="mt-4 text-xl font-semibold text-ink">
          Thank you for reaching out
        </h3>
        <p className="mt-2 text-sm text-ink-light">
          We&apos;ll review your enquiry and respond shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-xl3 border border-line bg-white p-8 shadow-soft sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-ink">Name</span>
          <input
            type="text"
            required
            className="mt-1.5 block w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-azure-400 focus:outline-none focus:ring-2 focus:ring-azure-200"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-ink">Organisation</span>
          <input
            type="text"
            className="mt-1.5 block w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-azure-400 focus:outline-none focus:ring-2 focus:ring-azure-200"
            placeholder="Company name"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-ink">Email</span>
        <input
          type="email"
          required
          className="mt-1.5 block w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-azure-400 focus:outline-none focus:ring-2 focus:ring-azure-200"
          placeholder="you@example.com"
        />
      </label>
      <label className="block">
        <span className="text-sm font-medium text-ink">Message</span>
        <textarea
          required
          rows={5}
          className="mt-1.5 block w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-azure-400 focus:outline-none focus:ring-2 focus:ring-azure-200"
          placeholder="Tell us about your project requirements..."
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="btn-azure w-full disabled:opacity-60"
      >
        {loading ? 'Sending...' : 'Send Enquiry'}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
