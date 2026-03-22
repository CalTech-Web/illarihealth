"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        backgroundColor: "rgba(22,22,22,0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" prefetch={false} className="flex items-center gap-3">
          <Image
            src="/assets/logos/illari-health-logo.png"
            alt="Illari Health"
            width={160}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            prefetch={false}
            className="ih-nav-link text-sm tracking-widest uppercase transition-colors"
            style={{ color: "#DECBA4", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.1em" }}
          >
            Home
          </Link>
          <Link
            href="/concierge-medicine"
            prefetch={false}
            className="ih-nav-link text-sm tracking-widest uppercase transition-colors"
            style={{ color: "#DECBA4", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.1em" }}
          >
            Concierge Medicine
          </Link>
          <Link
            href="/direct-primary-care"
            prefetch={false}
            className="ih-nav-link text-sm tracking-widest uppercase transition-colors"
            style={{ color: "#DECBA4", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.1em" }}
          >
            Direct Primary Care
          </Link>
          <Link
            href="/faq"
            prefetch={false}
            className="ih-nav-link text-sm tracking-widest uppercase transition-colors"
            style={{ color: "#DECBA4", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.1em" }}
          >
            FAQ
          </Link>
          <Link
            href="/about"
            prefetch={false}
            className="ih-nav-link text-sm tracking-widest uppercase transition-colors"
            style={{ color: "#DECBA4", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.1em" }}
          >
            About
          </Link>
          <Link
            href="/contact"
            prefetch={false}
            className="ih-nav-link text-sm tracking-widest uppercase transition-colors"
            style={{ color: "#DECBA4", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.1em" }}
          >
            Contact
          </Link>
          <a
            href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
            target="_blank"
            rel="noopener noreferrer"
            className="ih-btn ih-btn-gold px-6 py-2.5 text-sm font-medium tracking-wider uppercase border transition-colors"
            style={{
              backgroundColor: "#DECBA4",
              color: "#161616",
              borderColor: "#DECBA4",
              fontFamily: "'Lora', Georgia, serif",
            }}
          >
            Call for Priority Booking
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          style={{ color: "#DECBA4" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu with smooth transition */}
      <div
        className={`ih-mobile-menu md:hidden ${menuOpen ? "open" : ""}`}
        style={{ backgroundColor: "#1a1a1a", borderTop: "1px solid #DECBA3" }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          <Link
            href="/"
            prefetch={false}
            className="text-sm tracking-widest uppercase py-2"
            style={{ color: "#DECBA4", fontFamily: "'Lora', Georgia, serif" }}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/concierge-medicine"
            prefetch={false}
            className="text-sm tracking-widest uppercase py-2"
            style={{ color: "#DECBA4", fontFamily: "'Lora', Georgia, serif" }}
            onClick={() => setMenuOpen(false)}
          >
            Concierge Medicine
          </Link>
          <Link
            href="/direct-primary-care"
            prefetch={false}
            className="text-sm tracking-widest uppercase py-2"
            style={{ color: "#DECBA4", fontFamily: "'Lora', Georgia, serif" }}
            onClick={() => setMenuOpen(false)}
          >
            Direct Primary Care
          </Link>
          <Link
            href="/faq"
            prefetch={false}
            className="text-sm tracking-widest uppercase py-2"
            style={{ color: "#DECBA4", fontFamily: "'Lora', Georgia, serif" }}
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="/about"
            prefetch={false}
            className="text-sm tracking-widest uppercase py-2"
            style={{ color: "#DECBA4", fontFamily: "'Lora', Georgia, serif" }}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            prefetch={false}
            className="text-sm tracking-widest uppercase py-2"
            style={{ color: "#DECBA4", fontFamily: "'Lora', Georgia, serif" }}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <a
            href="https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB"
            target="_blank"
            rel="noopener noreferrer"
            className="ih-btn ih-btn-gold px-6 py-3 text-sm font-medium tracking-wider uppercase text-center"
            style={{ backgroundColor: "#DECBA4", color: "#161616", fontFamily: "'Lora', Georgia, serif" }}
          >
            Call for Priority Booking
          </a>
        </div>
      </div>
    </header>
  );
}
