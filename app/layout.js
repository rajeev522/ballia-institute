export const metadata = {
  metadataBase: new URL("https://ballia-institute.vercel.app"),

  title: {
    default:
      "Ballia Institute of Stock Market (BISM) | Best Stock Market Coaching in Ballia",
    template: "%s | BISM",
  },

  description:
    "Ballia Institute of Stock Market (BISM) is the leading stock market coaching institute in Ballia, Uttar Pradesh. Learn Intraday Trading, Swing Trading, Option Trading, Technical Analysis, Price Action, Candlestick Patterns and Investment.",

  keywords: [
    "Ballia Institute of Stock Market",
    "BISM",
    "Stock Market Coaching Ballia",
    "Share Market Coaching Ballia",
    "Trading Classes Ballia",
    "Stock Market Course Ballia",
    "Intraday Trading",
    "Option Trading",
    "Technical Analysis",
    "Ritik Kushwah",
  ],

  alternates: {
    canonical: "/",
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

  openGraph: {
    title:
      "Ballia Institute of Stock Market (BISM) | Best Stock Market Coaching",
    description:
      "Join Ballia Institute of Stock Market and learn professional trading.",
    url: "https://ballia-institute.vercel.app",
    siteName: "Ballia Institute of Stock Market",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ballia Institute of Stock Market",
    description: "Best Stock Market Coaching in Ballia",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};
