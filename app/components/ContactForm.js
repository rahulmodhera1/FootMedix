"use client";

import { useState } from "react";

const CLINIC_EMAIL = "footmedix1@gmail.com";
// Free Web3Forms access key (tied to the clinic inbox). Set in Vercel + .env.local
// as NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY. Until it's set, the form falls back to mailto.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error | mailto

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: if filled, it's a bot — silently ignore.
    if (data.get("botcheck")) return;

    const name = (data.get("name") || "").toString().trim();

    // No key configured yet → fall back to opening the email app.
    if (!ACCESS_KEY) {
      const email = (data.get("email") || "").toString().trim();
      const message = (data.get("message") || "").toString().trim();
      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
      window.location.href = `mailto:${CLINIC_EMAIL}?subject=${encodeURIComponent(
        `Website enquiry from ${name}`
      )}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    data.append("access_key", ACCESS_KEY);
    data.append("subject", `New website enquiry from ${name}`);
    data.append("from_name", "FootMedix Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <div className="formcard">
      <h3 className="formcard__title">Send us a message</h3>
      <form className="form" onSubmit={handleSubmit}>
        {/* Honeypot field — hidden from users, catches bots */}
        <input type="checkbox" name="botcheck" className="form__hp" tabIndex={-1} autoComplete="off" />

        <div className="form__row">
          <label className="field">
            <span>Name</span>
            <input type="text" name="name" autoComplete="name" placeholder="Your name" required />
          </label>
          <label className="field">
            <span>Email</span>
            <input type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
          </label>
        </div>
        <label className="field">
          <span>Message</span>
          <textarea name="message" rows={3} placeholder="How can we help?" required />
        </label>

        <button type="submit" className="btn btn--primary form__submit" disabled={sending}>
          {sending ? "Sending…" : "Send Message"}
          {!sending && (
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4 20-7z" /></svg>
          )}
        </button>

        {status === "success" && (
          <p className="form__note" role="status">
            Thanks! Your message has been sent — we&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="form__note form__note--error" role="status">
            Something went wrong. Please email us directly at{" "}
            <a href={`mailto:${CLINIC_EMAIL}`}>{CLINIC_EMAIL}</a>.
          </p>
        )}
        {status === "mailto" && (
          <p className="form__note" role="status">
            Your email app should have opened, ready to send. If not, email us at{" "}
            <a href={`mailto:${CLINIC_EMAIL}`}>{CLINIC_EMAIL}</a>.
          </p>
        )}
      </form>
    </div>
  );
}
