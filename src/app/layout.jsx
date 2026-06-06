import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/layout/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.yourdomain.com"),

  title: {
    default: "SSA - Strategic Solutions & Automation",
    template: "%s | SSA",
  },

  description:
    "We build transformative digital experiences. Strategy, design, and technology that drives measurable growth.",

  keywords: [
    "SSA",
    "Salesforce Consulting",
    "Digital Transformation",
    "Automation Solutions",
    "Web Development",
    "Next.js",
  ],

  authors: [
    {
      name: "SSA",
    },
  ],

  creator: "SSA",
  publisher: "SSA",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "SSA - Strategic Solutions & Automation",
    description: "We build transformative digital experiences.",
    url: "https://www.yourdomain.com",
    siteName: "SSA",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SSA",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SSA - Strategic Solutions & Automation",
    description: "We build transformative digital experiences.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://www.yourdomain.com",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body className="bg-dark text-white antialiased font-body overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
