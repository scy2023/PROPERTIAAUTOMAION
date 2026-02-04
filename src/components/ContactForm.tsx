"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      e.target.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="space-y-4">
      <h2 className="text-lg font-semibold tracking-tight">
        Let’s talk about your property workflows
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm"
      >
        <input name="name" placeholder="Name" required className="input" />
        <input name="email" type="email" placeholder="Email" required className="input" />
        <input name="company" placeholder="Company" className="input" />
        <textarea name="message" rows={4} placeholder="What would you like to automate?" required className="input" />

        <button className="btn" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send message"}
        </button>

        {status === "success" && <p className="text-emerald-400 text-xs">Message sent!</p>}
        {status === "error" && <p className="text-red-400 text-xs">Something went wrong.</p>}
      </form>
    </section>
  );
}
