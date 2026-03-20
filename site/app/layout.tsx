import type { Metadata } from "next";
import "./globals.css";

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
<body className="min-h-full flex flex-col" style={{ fontFamily: "'Lora', Georgia, 'Times New Roman', serif" }}>
        {children}
      </body>
    </html>
  );
}
