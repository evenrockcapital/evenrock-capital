"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // TODO: Replace with your Formspree form ID
      const res = await fetch("https://formspree.io/f/maqleyow", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="mt-12 max-w-lg">
        <div className="border border-amber-700/20 bg-amber-50/50 rounded-xl p-8 text-center">
          <p className="text-stone-900 font-light text-lg">Message sent.</p>
          <p className="mt-2 text-stone-500 text-sm font-light">
            I&apos;ll be in touch soon.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-[13px] tracking-wide text-amber-800 hover:text-stone-900 transition-colors"
          >
            Send another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 max-w-lg flex flex-col gap-5">
      <div>
        <label className="block text-[13px] tracking-wide text-stone-400 mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full border-b border-stone-200 pb-3 text-base outline-none focus:border-amber-700 transition-colors duration-300 bg-transparent placeholder:text-stone-300"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-[13px] tracking-wide text-stone-400 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full border-b border-stone-200 pb-3 text-base outline-none focus:border-amber-700 transition-colors duration-300 bg-transparent placeholder:text-stone-300"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="block text-[13px] tracking-wide text-stone-400 mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full border-b border-stone-200 pb-3 text-base outline-none focus:border-amber-700 transition-colors duration-300 bg-transparent resize-none placeholder:text-stone-300"
          placeholder="What are you building?"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-4 w-fit text-[13px] tracking-[0.15em] uppercase bg-amber-800 px-8 py-3 text-white hover:bg-amber-900 transition-all duration-300 disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
