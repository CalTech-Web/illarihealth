"use client";

import { useState } from "react";

const GOLD = "#DECBA4";
const CHARCOAL = "#161616";
const BORDER_GOLD = "#DECBA3";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-0">
      {faqs.map(({ q, a }, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderBottom: `1px solid ${BORDER_GOLD}` }}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full text-left py-7 flex items-center justify-between gap-6 group"
              aria-expanded={isOpen}
            >
              <h2
                className="text-xl transition-colors"
                style={{
                  color: isOpen ? GOLD : CHARCOAL,
                  fontFamily: "'Abril Fatface', serif",
                }}
              >
                {q}
              </h2>
              <span
                className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-transform"
                style={{
                  border: `1px solid ${isOpen ? GOLD : BORDER_GOLD}`,
                  color: isOpen ? GOLD : "#9a8a72",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease, border-color 0.2s, color 0.2s",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="7" y1="1" x2="7" y2="13" />
                  <line x1="1" y1="7" x2="13" y2="7" />
                </svg>
              </span>
            </button>
            <div
              style={{
                maxHeight: isOpen ? "600px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.4s ease",
              }}
            >
              <p
                className="pb-7 text-base leading-relaxed"
                style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}
              >
                {a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
