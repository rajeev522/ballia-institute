import Link from "next/link";
import { TrendingUp, Mail, Phone, MapPin } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

// Simple inline brand glyphs (lucide-react no longer ships brand icons)
const SOCIALS = [
  { label: "Instagram", path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 1.8a2.7 2.7 0 1 1 0 5.4 2.7 2.7 0 0 1 0-5.4ZM17.6 6a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z" },
  { label: "YouTube", path: "M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3A2.7 2.7 0 0 0 2.4 7.2 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8ZM10 15V9l5.2 3-5.2 3Z" },
  { label: "Twitter", path: "M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.3 1.7-2.3-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 3.7A11.5 11.5 0 0 1 3.4 4.6a4 4 0 0 0 1.3 5.4c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.8 2.8A8 8 0 0 1 2 18.4a11.5 11.5 0 0 0 6.3 1.9c7.5 0 11.6-6.4 11.6-11.9v-.5c.8-.6 1.5-1.3 2.1-2.1Z" },
  { label: "LinkedIn", path: "M6.9 8.7H3.5V20h3.4V8.7ZM5.2 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM20.5 20h-3.4v-5.9c0-1.4-.5-2.4-1.8-2.4-1 0-1.5.7-1.8 1.3-.1.2-.1.6-.1.9V20h-3.4s.1-10.4 0-11.3h3.4v1.6c.4-.7 1.3-1.7 3.1-1.7 2.3 0 4 1.5 4 4.6V20Z" },
  { label: "Facebook", path: "M13.5 21v-7.6h2.6l.4-3H13.5V8.4c0-.9.2-1.5 1.6-1.5h1.6V4.2C16.4 4.1 15.4 4 14.2 4c-2.5 0-4.2 1.5-4.2 4.3v2.1H7.4v3h2.6V21h3.5Z" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border-color bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <img src="/logo.png" alt="BISM Logo" className="h-24 w-auto object-contain" />
          </Link>
          <p className="mt-4 text-sm text-foreground/60 leading-relaxed">
            India&apos;s premium stock market coaching institute — helping traders and investors build
            wealth with discipline, strategy, and confidence.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.label === "Instagram" ? "https://www.instagram.com/bisminstitute_ballia?igsh=N3k1NXdjazNpeGpp" : "#"}
                aria-label={s.label}
                className="h-9 w-9 flex items-center justify-center rounded-lg border border-border-color hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                <svg viewBox="0 0 24 24" width={15} height={15} fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-foreground/60">
            {NAV_LINKS.slice(0, 6).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-foreground/60">
            {NAV_LINKS.slice(6).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-foreground/60">
            <li className="flex items-center gap-2">
              <Mail size={15} /> balliainstituteofstockmarket@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} /> +91 9369695793
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 flex-shrink-0" /> Tikhampur, Ballia, 277001
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border-color py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-foreground/50">
          <p>© {new Date().getFullYear()} BISM. All rights reserved.</p>
          <p>
            Disclaimer: Investments in securities are subject to market risk. This website is for
            educational purposes only and does not constitute investment advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
