"use client";
import { useEffect, useState } from "react";

const GOLD = "#DECBA4";
const CHARCOAL = "#161616";

export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 120);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        backgroundColor: GOLD,
        borderTop: `2px solid #C9A96E`,
      }}
    >
      <a
        href="tel:7732273303"
        className="flex items-center justify-center gap-3 py-4 px-6 w-full"
        style={{ color: CHARCOAL, textDecoration: "none" }}
      >
        <svg width="18" height="18" fill="none" stroke={CHARCOAL} strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
        <span
          className="text-sm font-medium tracking-wider uppercase"
          style={{ fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
        >
          Call for Priority Booking
        </span>
        <span
          className="text-sm font-semibold"
          style={{ fontFamily: "'Lora', Georgia, serif" }}
        >
          773.227.3303
        </span>
      </a>
    </div>
  );
}
