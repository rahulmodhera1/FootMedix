"use client";

import { useState } from "react";

// Renders the clinic logo from /public/logo.png (or .svg if you prefer — see
// public/README.md). Until a logo file is uploaded, it gracefully falls back
// to a styled gold wordmark so the site never shows a broken image.
export default function Logo({ height = 46, light = false }) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logo.png"
        alt="FootMedix — Chiropody & Foot Care Clinic"
        className="brand__img"
        style={{ height, width: "auto" }}
        onError={() => setFailed(true)}
      />
    );
  }

  // Fallback wordmark (shown only if no logo file is present yet)
  return (
    <span className={`brand__fallback${light ? " brand__fallback--light" : ""}`}>
      <span className="brand__mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M15.5 2c-2 0-3.3 1.4-3.3 3.6 0 1 .2 1.9.2 2.8 0 1.1-.6 1.7-1.7 1.7-1.4 0-2.2-1-2.5-2.6C7.7 5.3 6.4 4 4.8 4 3.2 4 2 5.3 2 7.1c0 3.5 2.4 6.6 5.9 7.9.9.3 1.4 1 1.5 2l.2 1.9c.2 1.7 1.5 3.1 3.4 3.1 2.1 0 3.6-1.6 3.6-3.9 0-1.6-.5-3.1-.5-4.7 0-3.4.6-5 2.2-6.3.9-.7 1.4-1.6 1.4-2.7C19.9 3.5 18 2 15.5 2z" />
        </svg>
      </span>
      <span className="brand__text">
        Foot<strong>Medix</strong>
      </span>
    </span>
  );
}
