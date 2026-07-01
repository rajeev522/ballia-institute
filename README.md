# TradeMentor — Premium Stock Market Coaching Website

A fully responsive, frontend-only stock market coaching website built with **Next.js (App Router)**,
**React**, **Tailwind CSS v4**, **Framer Motion**, and **JavaScript**.

No backend, no database, no authentication, no admin panel — everything runs client-side with
dummy/static data (see `lib/data.js`).

## ✨ Features

- 10 pages: Home, About, Courses, Live Market, Market News, Trading Tools, Testimonials, Gallery, FAQ, Contact
- Sticky glassmorphism navbar + mobile menu
- Dark/Light mode toggle (persisted in `localStorage`)
- Animated hero with floating candlestick background + typing animation
- Reusable components: `CourseCard`, `TestimonialsSlider`, `FaqAccordion`, `TradingViewWidget`, `AnimatedCounter`, `SectionHeading`
- TradingView widget embeds: Market Overview, Symbol Overview (NIFTY/BANK NIFTY/SENSEX), Watchlist,
  Heatmap, Screener (Gainers/Losers), Economic Calendar, Advanced Chart
- Market News page with search + category filters (dummy data, structured like a News API response —
  swap in a real API/RSS feed easily)
- 5 working calculators: Brokerage, Risk-Reward, Position Size, Compound Interest, SIP
- Gallery with animated lightbox
- Scroll progress bar, back-to-top button, loading screen, WhatsApp floating button
- SEO metadata via Next.js `metadata` export

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

### Build for production

```bash
npm run build
npm start
```

## Folder Structure

```
app/                    Next.js App Router pages (one folder per route)
components/             Shared, reusable UI components
components/home/        Home-page-only section components
context/ThemeContext.js Dark/light mode provider
lib/data.js             All dummy data (courses, testimonials, FAQ, news, gallery, stats)
```

## Customization

- Colors: edit CSS variables in `app/globals.css` (`:root` and `.dark` blocks)
- Content: edit `lib/data.js` — no other files need touching to change courses, testimonials, FAQs, news, or gallery items
- Fonts: currently uses the system font stack (no external font requests, since this build environment
  had no network access to fonts.googleapis.com). To use a custom Google Font, re-add
  `next/font/google` in `app/layout.js`.
- TradingView widgets: configs live directly in `app/live-market/page.js` — swap symbols/exchanges as needed.
- Contact form: `app/contact/page.js` simulates submission client-side. Wire it to Formspree, EmailJS,
  or any form backend of your choice — no backend code is included by design.

## Notes

- This is a frontend-only project. The contact form doesn't send real emails, and market news uses
  static dummy data (its shape mirrors a typical News API response so it's a drop-in swap).
- TradingView widgets require the visitor's browser to reach s3.tradingview.com at runtime.
