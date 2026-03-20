import type { Metadata } from "next";
import "./globals.css";
import MobileCtaBar from "./components/MobileCtaBar";

export const metadata: Metadata = {
  title: "Illari Health | Direct Primary Care & Concierge Medicine in Chicago",
  description: "Chicago's premier Direct Primary Care and Concierge Medicine practice in Wicker Park, led by Dr. Milton Chavez MD, FAAFP. Flat-rate pricing, unlimited visits, no insurance friction.",
  keywords: "direct primary care Chicago, concierge medicine Wicker Park, Dr. Milton Chavez, family medicine Chicago, DPC Chicago",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
<body className="min-h-full flex flex-col pb-16 md:pb-0" style={{ fontFamily: "'Lora', Georgia, 'Times New Roman', serif" }}>
        {children}
        <MobileCtaBar />
      </body>
    </html>
  );
}
