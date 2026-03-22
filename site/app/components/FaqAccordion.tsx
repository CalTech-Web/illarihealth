"use client";

import { useState } from "react";

const GOLD = "#DECBA4";
const CHARCOAL = "#161616";
const CREAM = "#F1E8D8";
const BORDER_GOLD = "#DECBA3";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {faqs.map(({ q, a }, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="ih-card overflow-hidden transition-all duration-300"
            style={{
              border: `1px solid ${isOpen ? GOLD : BORDER_GOLD}`,
              borderLeft: isOpen ? `4px solid ${GOLD}` : `4px solid transparent`,
              backgroundColor: isOpen ? "#fff" : "#fdfbf7",
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full text-left px-7 py-6 flex items-center justify-between gap-6 group"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-4">
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                  style={{
                    backgroundColor: isOpen ? GOLD : CREAM,
                    color: isOpen ? CHARCOAL : "#9a8a72",
                    fontFamily: "'Lora', Georgia, serif",
                    border: `1px solid ${isOpen ? GOLD : BORDER_GOLD}`,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2
                  className="text-lg md:text-xl transition-colors"
                  style={{
                    color: isOpen ? CHARCOAL : "#4a4a4a",
                    fontFamily: "'Abril Fatface', serif",
                  }}
                >
                  {q}
                </h2>
              </div>
              <span
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
                style={{
                  backgroundColor: isOpen ? "rgba(222,203,164,0.15)" : "transparent",
                  border: `1px solid ${isOpen ? GOLD : BORDER_GOLD}`,
                  color: isOpen ? GOLD : "#9a8a72",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
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
                transition: "max-height 0.4s ease, opacity 0.3s ease",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="px-7 pb-7 pt-0">
                <div className="ml-13" style={{ marginLeft: "52px" }}>
                  <div className="w-10 h-px mb-4" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}
                  >
                    {a}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
