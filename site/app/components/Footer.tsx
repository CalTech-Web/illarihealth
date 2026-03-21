import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#161616", borderTop: "1px solid #DECBA3" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/assets/logos/illari-health-logo.png"
              alt="Illari Health"
              width={160}
              height={50}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
              Relationship-Based Primary Care Since 2010. Built to restore what medicine lost.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="https://www.instagram.com/illarihealth/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Illari Health on Instagram"
                style={{ color: "#DECBA4" }}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4" style={{ color: "#DECBA4", fontFamily: "'Lora', Georgia, serif" }}>
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/concierge-medicine" prefetch={false} className="text-sm transition-colors hover:opacity-80" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                  Concierge Medicine
                </Link>
              </li>
              <li>
                <Link href="/direct-primary-care" prefetch={false} className="text-sm transition-colors hover:opacity-80" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                  Direct Primary Care
                </Link>
              </li>
              <li>
                <Link href="/one-time-visit" prefetch={false} className="text-sm transition-colors hover:opacity-80" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                  One-Time Visit
                </Link>
              </li>
              <li>
                <Link href="/faq" prefetch={false} className="text-sm transition-colors hover:opacity-80" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" prefetch={false} className="text-sm transition-colors hover:opacity-80" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" prefetch={false} className="text-sm transition-colors hover:opacity-80" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4" style={{ color: "#DECBA4", fontFamily: "'Lora', Georgia, serif" }}>
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:7732273303" className="text-sm hover:opacity-80 transition-colors" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                  773.227.3303
                </a>
              </li>
              <li>
                <a href="mailto:info@illarihealth.com" className="text-sm hover:opacity-80 transition-colors" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                  info@illarihealth.com
                </a>
              </li>
              <li>
                <p className="text-sm" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                  1509 North Western Avenue<br />
                  Chicago, IL 60622
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #2a2a2a" }} className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "#5a4a3a", fontFamily: "'Lora', Georgia, serif" }}>
            &copy; 2026 Illari Health. All Rights Reserved.
          </p>
          <p className="text-xs" style={{ color: "#5a4a3a", fontFamily: "'Lora', Georgia, serif" }}>
            Powered by{" "}
            <a href="https://caltechweb.com" className="hover:opacity-80 transition-colors" style={{ color: "#9a8a72" }}>
              Caltechweb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
