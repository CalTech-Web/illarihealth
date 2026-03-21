import type { Metadata } from "next";
import { Abril_Fatface, Lora } from "next/font/google";
import "./globals.css";
import MobileCtaBar from "./components/MobileCtaBar";

const abrilFatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-abril",
});

const lora = Lora({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-lora",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://illarihealth.com"),
  title: {
    default: "Illari Health | Direct Primary Care & Concierge Medicine in Chicago",
    template: "%s | Illari Health",
  },
  description: "Chicago's premier Direct Primary Care and Concierge Medicine practice in Wicker Park, led by Dr. Milton Chavez MD, FAAFP. Flat-rate pricing, unlimited visits, no insurance friction.",
  keywords: [
    "direct primary care Chicago",
    "concierge medicine Wicker Park",
    "Dr. Milton Chavez",
    "family medicine Chicago",
    "DPC Chicago",
    "concierge doctor Chicago",
    "primary care Wicker Park",
    "no insurance primary care Chicago",
    "flat rate primary care",
    "membership medicine Chicago",
    "private doctor Chicago",
    "cash pay doctor Chicago",
    "Wicker Park doctor",
    "Bucktown primary care",
    "Logan Square family doctor",
    "no copay doctor Chicago",
    "family doctor Wicker Park",
    "direct care physician Chicago",
    "primary care membership Chicago",
    "concierge medicine Chicago cost",
  ],
  authors: [{ name: "Illari Health" }],
  creator: "Illari Health",
  publisher: "Illari Health",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://illarihealth.com",
    siteName: "Illari Health",
    title: "Illari Health | Direct Primary Care & Concierge Medicine in Chicago",
    description: "Chicago's premier Direct Primary Care and Concierge Medicine practice in Wicker Park, led by Dr. Milton Chavez MD, FAAFP. Flat-rate pricing, unlimited visits, no insurance friction.",
    images: [
      {
        url: "/assets/logos/illari-health-logo-full.png",
        width: 1200,
        height: 630,
        alt: "Illari Health - Direct Primary Care & Concierge Medicine in Chicago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Illari Health | Direct Primary Care & Concierge Medicine in Chicago",
    description: "Chicago's premier Direct Primary Care and Concierge Medicine practice in Wicker Park, led by Dr. Milton Chavez MD, FAAFP.",
    images: ["/assets/logos/illari-health-logo-full.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${abrilFatface.variable} ${lora.variable}`}>
      <body className="min-h-full flex flex-col pb-16 md:pb-0" style={{ fontFamily: "var(--font-lora), Georgia, 'Times New Roman', serif" }}>
        {children}
        <MobileCtaBar />
      </body>
    </html>
  );
}
