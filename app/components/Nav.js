"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <div className="container nav__inner">
        <a href="#home" className="brand" aria-label="FootMedix home" onClick={close}>
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M15.5 2c-2 0-3.3 1.4-3.3 3.6 0 1 .2 1.9.2 2.8 0 1.1-.6 1.7-1.7 1.7-1.4 0-2.2-1-2.5-2.6C7.7 5.3 6.4 4 4.8 4 3.2 4 2 5.3 2 7.1c0 3.5 2.4 6.6 5.9 7.9.9.3 1.4 1 1.5 2l.2 1.9c.2 1.7 1.5 3.1 3.4 3.1 2.1 0 3.6-1.6 3.6-3.9 0-1.6-.5-3.1-.5-4.7 0-3.4.6-5 2.2-6.3.9-.7 1.4-1.6 1.4-2.7C19.9 3.5 18 2 15.5 2z" />
            </svg>
          </span>
          <span className="brand__text">
            Foot<strong>Medix</strong>
          </span>
        </a>

        <nav
          className={`nav__links${open ? " open" : ""}`}
          id="navLinks"
          aria-label="Primary"
        >
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn--primary nav__cta"
            href="https://footmedix.janeapp.com/"
            target="_blank"
            rel="noopener"
            onClick={close}
          >
            Book Appointment
          </a>
        </nav>

        <button
          className={`nav__toggle${open ? " open" : ""}`}
          id="navToggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
