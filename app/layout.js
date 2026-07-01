import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import TickerTape from "@/components/TickerTape";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata = {
  title: "Ballia Institute of Stock Market (BISM) — Best Share Market Classes",
  description:
    "BISM (Ballia Institute of Stock Market) by Ritik Kushwah is the premier share market training institute in Ballia. Learn stock trading, technical analysis, options, and more.",
  keywords: [
    "Ballia Institute of Stock Market",
    "BISM",
    "BISM Ballia",
    "Ritik Kushwah",
    "share market classes in Ballia",
    "stock market coaching Ballia",
    "best trading institute in UP",
    "technical analysis course Ballia",
    "options trading class",
    "stock market investing"
  ],
  openGraph: {
    title: "Ballia Institute of Stock Market (BISM) — Premium Coaching",
    description:
      "Join BISM in Ballia to learn share market trading and investing from SEBI/NISM registered experts. Start your financial journey with Ritik Kushwah.",
    type: "website",
    siteName: "Ballia Institute of Stock Market"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>
          <LoadingScreen />
          <ScrollProgress />
          <TickerTape />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
