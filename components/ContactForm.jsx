"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const endpoint =
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: "submitting", message: "" });
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!endpoint) {
      setStatus({
        state: "error",
        message:
          "Form not yet configured. Set NEXT_PUBLIC_FORMSPREE_ENDPOINT in .env.local.",
      });
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        setStatus({
          state: "success",
          message: "Thanks. We'll be back to you within one business day.",
        });
      } else {
        setStatus({
          state: "error",
          message: "Something went wrong. Please try again or email us directly.",
        });
      }
    } catch (err) {
      setStatus({
        state: "error",
        message: "Network error. Please try again.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Field label="Name" name="name" required />
      <Field label="Company" name="company" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone" name="phone" type="tel" optional />
      <Field
        label="Message"
        name="message"
        as="textarea"
        rows={5}
        required
        placeholder="Tell us about the job. Substrate, run length, deadline, anything we need to know."
      />
      {/* Honeypot for bots */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status.state === "submitting"}
          className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status.state === "submitting" ? "Sending..." : "Send message"}
        </button>

        {status.state === "success" && (
          <span className="text-sm text-green-700">{status.message}</span>
        )}
        {status.state === "error" && (
          <span className="text-sm text-red-700">{status.message}</span>
        )}
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", as = "input", rows, required, optional, placeholder }) {
  const Cmp = as;
  const baseClass =
    "w-full rounded-md border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">
        {label} {optional && <span className="text-ink-muted font-normal">(optional)</span>}
      </span>
      <Cmp
        name={name}
        type={as === "textarea" ? undefined : type}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className={`${baseClass} mt-2 ${as === "textarea" ? "resize-y" : ""}`}
      />
    </label>
  );
}
