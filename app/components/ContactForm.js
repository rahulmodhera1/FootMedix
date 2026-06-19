"use client";

import { useState } from "react";

const CLINIC_EMAIL = "footmedix1@gmail.com";

// Composes a mailto: link from the form fields and opens the visitor's email
// app pre-addressed to the clinic. Works on a static deploy with no backend.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get("name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const phone = (data.get("phone") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    const subject = `Website enquiry${name ? ` from ${name}` : ""}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const href = `mailto:${CLINIC_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSent(true);
  }

  return (
    <div className="formcard">
      <span className="eyebrow">Send Us a Message</span>
      <h3>Have a question? Get in touch.</h3>
      <p className="formcard__lead">
        Fill in the form and we&apos;ll help you book or answer any questions. Your
        message opens in your email app, ready to send to our team.
      </p>

      <form className="form" onSubmit={handleSubmit}>
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
          <span>Phone <em>(optional)</em></span>
          <input type="tel" name="phone" autoComplete="tel" placeholder="(437) 990-3008" />
        </label>
        <label className="field">
          <span>Message</span>
          <textarea name="message" rows={5} placeholder="How can we help?" required />
        </label>

        <button type="submit" className="btn btn--primary btn--block form__submit">
          Send Message
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4 20-7z" /></svg>
        </button>

        {sent && (
          <p className="form__note" role="status">
            Your email app should have opened with your message ready to send. If it
            didn&apos;t, email us directly at{" "}
            <a href={`mailto:${CLINIC_EMAIL}`}>{CLINIC_EMAIL}</a>.
          </p>
        )}
      </form>
    </div>
  );
}
