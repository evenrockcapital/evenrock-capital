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
        <div className="border border-[#d4a843]/20 bg-white/5 rounded-xl p-8 text-center">
          <p className="font-[family-name:var(--font-cormorant)] text-[#f4eed5] font-light italic text-lg">
            Message sent.
          </p>
          <p className="mt-2 text-white/40 text-sm font-light">
            I&apos;ll be in touch soon.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-[12px] tracking-wide text-[#d4a843] hover:text-[#d4a843]/80 transition-colors"
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
        <label htmlFor="contact-name" className="block text-[12px] tracking-wide text-white/50 mb-2">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          className="w-full border-b border-white/15 pb-3 text-base outline-none focus:border-[#d4a843] focus:shadow-[0_2px_8px_rgba(212,168,67,0.1)] transition-all duration-300 bg-transparent text-[#f4eed5] placeholder:text-white/30"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-[12px] tracking-wide text-white/50 mb-2">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          className="w-full border-b border-white/15 pb-3 text-base outline-none focus:border-[#d4a843] focus:shadow-[0_2px_8px_rgba(212,168,67,0.1)] transition-all duration-300 bg-transparent text-[#f4eed5] placeholder:text-white/30"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-[12px] tracking-wide text-white/50 mb-2">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          className="w-full border-b border-white/15 pb-3 text-base outline-none focus:border-[#d4a843] focus:shadow-[0_2px_8px_rgba(212,168,67,0.1)] transition-all duration-300 bg-transparent resize-none text-[#f4eed5] placeholder:text-white/30"
          placeholder="What are you building?"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-red-400 text-sm">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-4 w-fit text-[12px] tracking-[0.15em] uppercase bg-[#d4a843] px-8 py-3 text-[#0a2e17] font-medium hover:bg-[#d4a843]/90 transition-all duration-300 disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
