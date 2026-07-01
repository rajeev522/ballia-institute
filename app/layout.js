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
  metadataBase: new URL("https://ballia-institute.vercel.app"),

  title: {
    default: "Ballia Institute of Stock Market (BISM) | Best Stock Market Coaching in Ballia",
    template: "%s | BISM",
  },

  description:
    "Ballia Institute of Stock Market (BISM) is the leading stock market coaching institute in Ballia, Uttar Pradesh. Learn Intraday Trading, Swing Trading, Option Trading, Technical Analysis, Price Action, Candlestick Patterns, Risk Management and Investment from experienced mentors.",

  keywords: [
    "Ballia Institute of Stock Market",
    "BISM",
    "BISM Ballia",
    "Ritik Kushwah",
    "Stock Market Coaching Ballia",
    "Share Market Coaching Ballia",
    "Stock Market Institute Ballia",
    "Best Stock Market Course",
    "Trading Classes Ballia",
    "Intraday Trading Course",
    "Swing Trading Course",
    "Option Trading Course",
    "Technical Analysis Course",
    "Candlestick Course",
    "Price Action Course",
    "Nifty Trading",
    "Bank Nifty Trading",
    "Futures and Options",
    "F&O Course",
    "Stock Market Classes Uttar Pradesh",
    "Trading Institute UP",
    "Share Market Training",
    "Investment Course",
    "Stock Market Mentor",
    "Learn Trading",
    "Beginner Stock Market Course",
    "Live Trading Classes",
    "Online Stock Market Course",
    "Offline Stock Market Course",
    "Stock Market Education India",
    "Stock Market Academy",
    "Financial Education",
    "Trading Psychology",
    "Risk Management",
    "Portfolio Management",
    "Stock Market Learning"
  ],

  authors: [
    {
      name: "Ritik Kushwah",
    },
  ],

  creator: "Ballia Institute of Stock Market",

  publisher: "Ballia Institute of Stock Market",

  category: "Education",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title:
      "Ballia Institute of Stock Market (BISM) | Best Share Market Classes",
    description:
      "Join Ballia Institute of Stock Market (BISM) to learn Share Market, Intraday Trading, Option Trading, Technical Analysis and Investing from experienced mentors.",

    url: "https://ballia-institute.vercel.app",

    siteName: "Ballia Institute of Stock Market",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ballia Institute of Stock Market",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ballia Institute of Stock Market (BISM)",

    description:
      "Best Stock Market Coaching Institute in Ballia.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "PASTE_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE_HERE",
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
