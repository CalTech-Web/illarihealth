import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";
import AnimateOnScroll from "../components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Direct Primary Care, Concierge Medicine, pricing, specialist access, and what to expect at Illari Health in Wicker Park, Chicago.",
  alternates: {
    canonical: "https://illarihealth.com/faq",
  },
  openGraph: {
    url: "https://illarihealth.com/faq",
    title: "FAQ | Illari Health",
    description: "Common questions about Direct Primary Care, Concierge Medicine, pricing, and specialist access at Illari Health in Wicker Park, Chicago.",
    images: [
      {
        url: "/assets/gallery/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "Illari Health - Direct Primary Care & Concierge Medicine in Wicker Park, Chicago",
      },
    ],
  },
};

const GOLD = "#DECBA4";
const CHARCOAL = "#161616";
const OFF_WHITE = "#FAF7F2";
const CREAM = "#F1E8D8";
const BORDER_GOLD = "#DECBA3";

const faqs = [
  {
    q: "What is Direct Primary Care?",
    a: "Direct Primary Care at Illari Health is a flat $150 a month. No insurance involved. No co-pays, no deductibles. Your fee covers visits, labs, and a comprehensive physical with Dr. Chavez.",
  },
  {
    q: "What is the difference between Direct Primary Care and Concierge Medicine?",
    a: "Both plans skip the co-pays, the deductibles, and the insurance back-and-forth. You get direct access to your physician at a flat monthly rate. The Concierge Medicine plan ($300/mo) is the premium tier. It includes unlimited visits, an executive-level 90-minute wellness program, an advanced blood panel, modern body composition analysis, direct communication with Dr. Chavez, and 30% off additional labs. The DPC plan ($150/mo) includes up to three visits per month, recommended labs, and a 45-minute comprehensive physical.",
  },
  {
    q: "Can I save money if my entire family joins?",
    a: "Yes. There is a 10% discount on membership fees when your entire family joins one plan together. An additional 10% discount applies to all plans paid annually instead of monthly.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, after the initial 3-month commitment. Any positive balance on your account at cancellation will be applied toward extending your current plan, transferred to another plan, or refunded to you.",
  },
  {
    q: "Will I still need health insurance?",
    a: "Yes. Your membership covers primary care, labs, and in-office services. For hospitalizations, specialist care, and emergency services, you will still need health insurance. DPC is a better way to access primary care, not a substitute for it.",
  },
  {
    q: "What medical conditions do you treat?",
    a: "Illari Health offers general primary care for adults and children, sports medicine, clinical and surgical dermatology, and non-operative orthopedics and biologics. Dr. Chavez trained in family medicine, orthopedics, dermatology, and surgery. Most of what other primary care offices refer out, he handles in-house.",
  },
  {
    q: "What if I need to see a specialist?",
    a: "Dr. Chavez uses RubiconMD, a platform connecting members to 200+ specialists for consultation at no extra cost. For PPO patients, he refers to vetted in-network specialists. Uninsured patients get a curated list of cash-price options. His training in internal medicine means he often works through complex cases before a referral is even necessary.",
  },
  {
    q: "Is there parking?",
    a: "Yes. Free private parking is available immediately south of the building at Western and LeMoyne.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://illarihealth.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "FAQ",
      item: "https://illarihealth.com/faq",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

const specialtyIcons: Record<string, ReactNode> = {
  Psychiatry: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#DECBA4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
      <path d="M9 21h6" />
      <path d="M10 17v4" />
      <path d="M14 17v4" />
      <path d="M12 6v4" />
      <path d="M10 8h4" />
    </svg>
  ),
  Dermatology: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#DECBA4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
      <path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  ),
  Cardiology: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#DECBA4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0L12 5.35l-.77-.77a5.4 5.4 0 0 0-7.65 0 5.4 5.4 0 0 0 0 7.65L12 20.65l8.42-8.42a5.4 5.4 0 0 0 0-7.65z" />
      <path d="M3.5 12h6l1-2 2 4 1-2h6.5" />
    </svg>
  ),
  Orthopedics: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#DECBA4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v4a2 2 0 0 1-2 2H4" />
      <path d="M16 2v4a2 2 0 0 0 2 2h2" />
      <path d="M8 22v-4a2 2 0 0 0-2-2H4" />
      <path d="M16 22v-4a2 2 0 0 1 2-2h2" />
      <rect x="9" y="2" width="6" height="20" rx="2" />
    </svg>
  ),
  Neurology: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#DECBA4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
      <path d="M9 21h6" />
      <path d="M8 8c1.5 0 2 1 3.5 1S14 8 15.5 8" />
      <path d="M8 12c1.5 0 2-1 3.5-1s2.5 1 4 1" />
    </svg>
  ),
  Endocrinology: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#DECBA4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="5" r="1.5" />
      <circle cx="12" cy="19" r="1.5" />
      <circle cx="5" cy="12" r="1.5" />
      <circle cx="19" cy="12" r="1.5" />
      <path d="M12 8v-1.5" />
      <path d="M12 17.5V15" />
      <path d="M8 12H6.5" />
      <path d="M17.5 12H15" />
    </svg>
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/assets/gallery/horiz-reception.jpg"
              alt="Frequently asked questions"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(22,22,22,0.78) 0%, rgba(22,22,22,0.65) 100%)" }} />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center">
            <AnimateOnScroll>
              <nav className="text-xs tracking-widest uppercase mb-8" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.15em" }}>
                <a href="/" className="hover:opacity-80 transition-opacity" style={{ color: "#9a8a72" }}>Home</a>
                <span className="mx-2" style={{ color: "#5a4a3a" }}>/</span>
                <span style={{ color: GOLD }}>FAQ</span>
              </nav>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                Wicker Park, Chicago
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                Common Questions
              </h1>
              <div className="w-16 h-px mx-auto mb-6" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
              <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>
                Straight answers about how this practice works, what it costs, and what you can expect.
              </p>
            </AnimateOnScroll>
          </div>
        </section>
        <div aria-hidden="true" style={{ height: "4px", background: `linear-gradient(90deg, transparent 5%, ${GOLD} 50%, transparent 95%)` }} />

        {/* FAQ List */}
        <section style={{ backgroundColor: OFF_WHITE }} className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              {/* Left column: heading + quick stats */}
              <div className="lg:col-span-2 lg:sticky lg:top-32">
                <AnimateOnScroll>
                  <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                    Common Questions
                  </p>
                  <h2 className="text-4xl md:text-5xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                    Everything You Need to Know
                  </h2>
                  <div className="w-16 h-px mb-6" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
                  <p className="text-base leading-relaxed mb-8" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                    Straight answers about how Illari Health works, what it costs, and what you can expect as a member.
                  </p>

                  {/* Quick reference cards */}
                  <div className="space-y-3 mb-8">
                    {[
                      { label: "DPC Membership", value: "$150/mo" },
                      { label: "Concierge Membership", value: "$300/mo" },
                      { label: "Enrollment Fee", value: "$200" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex items-center justify-between py-3 px-4" style={{ backgroundColor: "#fff", borderRadius: "12px", border: `1px solid ${BORDER_GOLD}` }}>
                        <span className="text-xs tracking-wider uppercase" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>{label}</span>
                        <span className="text-base font-medium" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>{value}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="tel:7732273303"
                    className="ih-btn ih-btn-gold block w-full py-4 text-sm font-medium tracking-wider uppercase text-center"
                    style={{ backgroundColor: GOLD, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                  >
                    Call 773.227.3303
                  </a>
                </AnimateOnScroll>
              </div>

              {/* Right column: accordion */}
              <div className="lg:col-span-3">
                <AnimateOnScroll delay={150}>
                  <FaqAccordion faqs={faqs} />
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section style={{ backgroundColor: CREAM, borderTop: `1px solid ${BORDER_GOLD}` }} className="py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <AnimateOnScroll>
              <div className="flex items-center justify-center gap-4 mb-4">
                {/* Phone Icon */}
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <h2 className="text-4xl" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                  Still Have Questions?
                </h2>
              </div>
              <div className="w-12 h-px mx-auto mb-6" style={{ backgroundColor: GOLD }} />
              <p className="text-base leading-relaxed mb-6" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                Call us directly and we will walk you through your options. DPC and Concierge members receive priority scheduling.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                <span className="ih-pill px-4 py-1.5 text-xs tracking-wider" style={{ backgroundColor: "transparent", border: `1px solid ${BORDER_GOLD}`, color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                  No Commitment Needed
                </span>
                <span className="ih-pill px-4 py-1.5 text-xs tracking-wider" style={{ backgroundColor: "transparent", border: `1px solid ${BORDER_GOLD}`, color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                  Priority Scheduling for Members
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:7732273303"
                  className="ih-btn ih-btn-dark px-10 py-5 text-sm font-medium tracking-wider uppercase transition-opacity hover:opacity-90"
                  style={{ backgroundColor: CHARCOAL, color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                >
                  Call 773.227.3303
                </a>
                <a
                  href="mailto:info@illarihealth.com"
                  className="ih-btn ih-btn-outline px-10 py-5 text-sm font-medium tracking-wider uppercase transition-opacity hover:opacity-80"
                  style={{ border: `1px solid ${CHARCOAL}`, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                >
                  Email Us
                </a>
              </div>
              <p className="flex items-center justify-center gap-2 text-sm" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                {/* Map Pin Icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9a8a72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                1509 N Western Ave, Wicker Park, Chicago
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Specialist Access Section */}
        <section className="relative overflow-hidden py-20" style={{ backgroundColor: CHARCOAL }}>
          <div className="absolute inset-0">
            <Image
              src="/assets/gallery/horiz-checkup.jpg"
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              aria-hidden="true"
            />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(22,22,22,0.88)" }} />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-3" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                    Specialist Access
                  </p>
                  <h2 className="text-4xl mb-4" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                    200+ Specialists via RubiconMD
                  </h2>
                  <div className="w-12 h-px mb-6" style={{ backgroundColor: GOLD }} />
                  <p className="text-base leading-relaxed mb-4" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                    Members connect to 200+ specialists through RubiconMD at no added cost. Psychiatry, cardiology, dermatology, neurology. When something goes beyond primary care, members reach a specialist same day.
                  </p>
                  <p className="text-base leading-relaxed mb-6" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                    PPO patients are referred to vetted in-network specialists. Uninsured patients receive a curated list of cash-price options.
                  </p>
                  <span className="ih-pill inline-block px-4 py-1.5 text-xs tracking-wider uppercase" style={{ backgroundColor: "rgba(222,203,164,0.1)", border: `1px solid ${GOLD}`, color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.1em" }}>
                    Included with all membership plans
                  </span>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={200}>
                <div className="grid grid-cols-2 gap-4">
                  {(["Psychiatry", "Dermatology", "Cardiology", "Orthopedics", "Neurology", "Endocrinology"] as const).map((specialty) => (
                    <div key={specialty} className="ih-card-dark p-5 text-center flex flex-col items-center gap-3" style={{ border: `1px solid #4a4030`, backgroundColor: "#252218" }}>
                      {specialtyIcons[specialty]}
                      <p className="text-sm" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>{specialty}</p>
                    </div>
                  ))}
                  <div className="ih-card-dark ih-gold-glow col-span-2 p-5 text-center" style={{ border: `2px solid ${GOLD}`, backgroundColor: "#1a1a1a" }}>
                    <p className="text-sm font-medium" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>200+ Specialties Available</p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
