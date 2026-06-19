"use client";

import { useEffect } from "react";

// Adds scroll-reveal animations to key elements, mirroring the original
// vanilla-JS behaviour. Renders nothing.
export default function Reveal() {
  useEffect(() => {
    const selector =
      ".service, .why__item, .team-card, .about__content, .about__media, .section__head, .infocard, .contact__info, .contact__map";
    const els = Array.from(document.querySelectorAll(selector));
    els.forEach((el) => el.setAttribute("data-reveal", ""));

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
