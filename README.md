# FootMedix — Clinic Website (Next.js)

A modern, responsive website for **FootMedix**, a chiropody (foot care) clinic
in Scarborough, Toronto. Built with **Next.js 14** (App Router) and ready to
deploy on **Vercel**.

## Tech stack

- **Next.js 14** (App Router)
- **React 18**
- Plain CSS (`app/globals.css`) — no UI framework
- Google Fonts (Plus Jakarta Sans + Lora) via `next/font` (self-hosted, no extra requests)

## Features

- Sticky responsive navigation with mobile hamburger menu
- Hero section with prominent **Book an Appointment** call to action
- Full services grid (orthotics, diabetic foot care, ingrown toenails, callus
  removal, warts, compression stockings, gait analysis and more)
- About / practitioner section
- "Why choose us" highlights and insurance note
- Contact section with embedded Google Map
- Floating "Book Now" button on mobile
- Scroll-reveal animations, accessible and reduced-motion friendly

All **Book an Appointment** buttons link to the clinic's JaneApp booking page:
<https://footmedix.janeapp.com/>

## Project structure

```
app/
  layout.js            Root layout, fonts & SEO metadata
  page.js              The landing page (server component)
  globals.css          All styling
  components/
    Nav.js             Sticky nav + mobile menu (client component)
    Reveal.js          Scroll-reveal animations (client component)
next.config.mjs
package.json
```

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. In Vercel → **Add New → Project** and import the repo.
3. Vercel auto-detects the **Next.js** framework preset — no configuration needed.
   - Build command: `next build` (default)
   - Output: handled automatically
4. Click **Deploy**.

## Clinic details

- **Address:** 520 Ellesmere Rd, Ste 215, Scarborough, ON M1R 0B1
- **Phone:** 437-990-3008
- **Email:** footmedix1@gmail.com
- **Booking:** https://footmedix.janeapp.com/
