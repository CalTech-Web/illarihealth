import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "One-Time Doctor Visit Chicago | $175 | No Membership | Illari Health",
  description:
    "See Dr. Milton Chavez MD, FAAFP in Wicker Park for a single visit at $175. No membership, no commitment. Adult and pediatric primary care, sports medicine, dermatology, and more in Chicago.",
  alternates: {
    canonical: "https://illarihealth.com/one-time-visit",
  },
  openGraph: {
    url: "https://illarihealth.com/one-time-visit",
    title: "One-Time Doctor Visit Chicago | $175 | No Membership | Illari Health",
    description:
      "$175 one-time visit with Dr. Milton Chavez MD, FAAFP in Wicker Park. No membership required. Adult and pediatric primary care, sports medicine, and dermatology.",
    images: [
      {
        url: "/assets/gallery/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "One-Time Doctor Visit at Illari Health, Wicker Park Chicago",
      },
    ],
  },
};

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
      name: "One-Time Visit",
      item: "https://illarihealth.com/one-time-visit",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "One-Time Doctor Visit",
  alternateName: "Pay-Per-Visit Primary Care Chicago",
  serviceType: "Primary Care",
  description:
    "A single primary care visit with Dr. Milton Chavez MD, FAAFP for $175. No membership required. Covers adult and pediatric primary care, sports medicine, clinical and surgical dermatology, and non-operative orthopedics.",
  provider: {
    "@type": "MedicalClinic",
    name: "Illari Health",
    url: "https://illarihealth.com",
    telephone: "+17732273303",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1509 North Western Avenue",
      addressLocality: "Chicago",
      addressRegion: "IL",
      postalCode: "60622",
      addressCountry: "US",
    },
  },
  areaServed: [
    "Wicker Park, Chicago",
    "Bucktown, Chicago",
    "Logan Square, Chicago",
    "Ukrainian Village, Chicago",
    "Lincoln Park, Chicago",
  ],
  offers: {
    "@type": "Offer",
    name: "One-Time Visit",
    price: "175",
    priceCurrency: "USD",
    url: "https://illarihealth.com/one-time-visit",
  },
};

const GOLD = "#DECBA4";
const CHARCOAL = "#161616";
const OFF_WHITE = "#FAF7F2";
const CREAM = "#F1E8D8";
const BORDER_GOLD = "#DECBA3";

export default function OneTimeVisitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: CHARCOAL }} className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <AnimateOnScroll>
              <nav className="text-xs tracking-widest uppercase mb-8" style={{ color: "#5a4a3a", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.15em" }}>
                <a href="/" style={{ color: "#9a8a72" }}>Home</a>
                <span className="mx-2" style={{ color: "#5a4a3a" }}>/</span>
                <span style={{ color: GOLD }}>One-Time Visit</span>
              </nav>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                Wicker Park, Chicago
              </p>
              <h1 className="text-5xl md:text-6xl leading-tight mb-6" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                One Visit. No Strings.
              </h1>
              <div className="w-16 h-px mb-6" style={{ backgroundColor: GOLD }} />
              <p className="text-xl leading-relaxed mb-8 max-w-2xl" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>
                A single appointment with Dr. Milton Chavez MD, FAAFP for $175. No membership. No commitment. Just a full, unhurried visit with a physician who takes the time to actually listen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:7732273303"
                  className="ih-btn ih-btn-gold px-8 py-4 text-sm font-medium tracking-wider uppercase text-center transition-opacity hover:opacity-90"
                  style={{ backgroundColor: GOLD, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                >
                  Call to Book
                </a>
                <a
                  href="/#contact"
                  className="ih-btn ih-btn-outline px-8 py-4 text-sm font-medium tracking-wider uppercase text-center transition-opacity hover:opacity-80"
                  style={{ border: `1px solid ${GOLD}`, color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                >
                  Request a Callback
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Gradient transition from dark hero to light content */}
        <div style={{ height: "40px", background: "linear-gradient(to bottom, #161616, #FAF7F2)" }} aria-hidden="true" />

        {/* Pricing Card + What's Included */}
        <section style={{ backgroundColor: OFF_WHITE }} className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  No Membership Required
                </p>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                  What You Get for $175
                </h2>
                <div className="w-12 h-px mx-auto mb-8" style={{ backgroundColor: GOLD }} />
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <AnimateOnScroll>
                <div style={{ border: `1px solid ${BORDER_GOLD}`, backgroundColor: "#fff" }} className="ih-card p-8">
                  <div className="mb-6">
                    <p className="text-5xl mb-1" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>$175</p>
                    <p className="text-sm" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>per visit, no enrollment fee</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Adult and pediatric primary care",
                      "Sports medicine",
                      "Clinical and surgical dermatology",
                      "Non-operative orthopedics and biologics",
                      "No co-pays, no insurance billing",
                      "No commitment or follow-up required",
                      "Appointments start on time",
                      "Full attention from Dr. Chavez",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span style={{ color: "#C9A96E", marginTop: "2px" }}>&#10003;</span>
                        <span className="text-sm" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:7732273303"
                    className="ih-btn ih-btn-dark block w-full py-4 text-sm font-medium tracking-wider uppercase text-center transition-opacity hover:opacity-90"
                    style={{ backgroundColor: CHARCOAL, color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                  >
                    Call 773.227.3303
                  </a>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={120}>
                <div className="space-y-6">
                  {[
                    {
                      title: "A Real Appointment",
                      body: "No seven-minute clock. Dr. Chavez takes the time to understand your concern, review your history, and give you a complete answer, not a referral and a handshake.",
                    },
                    {
                      title: "No Insurance Required",
                      body: "The $175 flat fee is all you pay. No co-pays, no billing surprises in the mail, no insurance involvement. Cash, card, and HSA accepted.",
                    },
                    {
                      title: "Try Before You Commit",
                      body: "Not sure if a membership is right for you? The one-time visit is the lowest-friction way to meet Dr. Chavez, see the practice, and decide on your own terms.",
                    },
                    {
                      title: "Broad Clinical Scope",
                      body: "Dr. Chavez trained in family medicine, orthopedics, dermatology, and surgery. Conditions that other primary care offices refer out, he handles in-house.",
                    },
                  ].map(({ title, body }) => (
                    <div key={title} className="flex gap-4">
                      <div className="w-1 flex-shrink-0 mt-1" style={{ backgroundColor: GOLD }} />
                      <div>
                        <h3 className="text-base mb-1" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>{title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Conditions Treated */}
        <section style={{ backgroundColor: CHARCOAL }} className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Scope of Care
                </p>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                  What We Treat
                </h2>
                <div className="w-12 h-px mx-auto" style={{ backgroundColor: GOLD }} />
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  category: "Primary Care",
                  items: ["Annual physicals", "Illness and infection", "Chronic disease management", "Pediatric care", "Preventive health"],
                  delay: 0,
                },
                {
                  category: "Sports Medicine",
                  items: ["Musculoskeletal injuries", "Joint pain and sprains", "Return-to-play evaluation", "Overuse injuries", "Athletic physicals"],
                  delay: 80,
                },
                {
                  category: "Dermatology",
                  items: ["Skin condition evaluation", "Mole and lesion assessment", "Surgical dermatology", "Acne and rosacea", "Wound care"],
                  delay: 0,
                },
                {
                  category: "Orthopedics",
                  items: ["Non-operative orthopedic care", "Biologics and regenerative medicine", "Back and neck pain", "Knee and shoulder evaluation", "Arthritis management"],
                  delay: 80,
                },
              ].map(({ category, items, delay }) => (
                <AnimateOnScroll key={category} delay={delay}>
                  <div className="ih-card-dark p-8" style={{ border: `1px solid #2a2a2a`, backgroundColor: "#1a1a1a" }}>
                    <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.15em" }}>{category}</p>
                    <ul className="space-y-2">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: GOLD }} />
                          <span className="text-sm" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Who It Is For */}
        <section style={{ backgroundColor: OFF_WHITE }} className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Who It Is For
                </p>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                  A Good Fit If You...
                </h2>
                <div className="w-12 h-px mx-auto" style={{ backgroundColor: GOLD }} />
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  label: "Need Care Without a Commitment",
                  body: "You have a specific concern to address and do not want to lock into a monthly plan to get it seen. One visit, one fee, done.",
                  delay: 0,
                },
                {
                  label: "Are Between Insurance Plans",
                  body: "Between jobs, between plans, or simply uninsured for now. The $175 flat visit keeps you out of urgent care waiting rooms and in front of an actual physician.",
                  delay: 80,
                },
                {
                  label: "Want to Meet the Practice First",
                  body: "Considering a DPC or Concierge membership but not ready to commit. The one-time visit is a no-pressure way to experience the practice before deciding.",
                  delay: 0,
                },
                {
                  label: "Need Care Beyond General Practice",
                  body: "You have a dermatology, orthopedic, or sports medicine concern that most PCPs would just refer out. Dr. Chavez handles it directly.",
                  delay: 80,
                },
              ].map(({ label, body, delay }) => (
                <AnimateOnScroll key={label} delay={delay}>
                  <div className="ih-card p-8" style={{ border: `1px solid ${BORDER_GOLD}`, backgroundColor: "#fff" }}>
                    <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.15em" }}>{label}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>{body}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Upgrade Prompt */}
        <section style={{ backgroundColor: CREAM, borderTop: `1px solid ${BORDER_GOLD}` }} className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Want More?
                </p>
                <h2 className="text-4xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                  Consider a Membership Plan
                </h2>
                <div className="w-12 h-px mx-auto mb-6" style={{ backgroundColor: GOLD }} />
                <p className="text-base leading-relaxed max-w-xl mx-auto mb-10" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                  If you want ongoing care, predictable costs, and direct access to Dr. Chavez, membership starts at $150 per month. No co-pays, no deductibles, labs included.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <a
                  href="/direct-primary-care"
                  className="ih-card p-6 text-center transition-opacity hover:opacity-90"
                  style={{ border: `1px solid ${BORDER_GOLD}`, backgroundColor: "#fff" }}
                >
                  <p className="text-2xl mb-1" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>$150/mo</p>
                  <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>Direct Primary Care</p>
                  <p className="text-sm" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>Up to 3 visits, labs, and a 45-minute physical.</p>
                </a>
                <a
                  href="/concierge-medicine"
                  className="ih-card-dark ih-gold-glow p-6 text-center transition-opacity hover:opacity-90"
                  style={{ border: `2px solid ${GOLD}`, backgroundColor: CHARCOAL }}
                >
                  <p className="text-2xl mb-1" style={{ color: GOLD, fontFamily: "'Abril Fatface', serif" }}>$300/mo</p>
                  <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>Concierge Medicine</p>
                  <p className="text-sm" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>Unlimited visits, 90-min wellness program, all labs.</p>
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ backgroundColor: CHARCOAL, borderTop: `1px solid #2a2a2a` }} className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <AnimateOnScroll>
              <h2 className="text-4xl mb-4" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                Book Your One-Time Visit
              </h2>
              <div className="w-12 h-px mx-auto mb-6" style={{ backgroundColor: GOLD }} />
              <p className="text-base leading-relaxed mb-8" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                Call us to schedule. One visit, $175, no membership required. Free private parking at Western and LeMoyne.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:7732273303"
                  className="ih-btn ih-btn-gold px-8 py-4 text-sm font-medium tracking-wider uppercase transition-opacity hover:opacity-90"
                  style={{ backgroundColor: GOLD, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                >
                  Call 773.227.3303
                </a>
                <a
                  href="/#contact"
                  className="ih-btn ih-btn-outline px-8 py-4 text-sm font-medium tracking-wider uppercase transition-opacity hover:opacity-80"
                  style={{ border: `1px solid ${GOLD}`, color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                >
                  Request a Callback
                </a>
              </div>
              <p className="mt-8 text-sm" style={{ color: "#5a4a3a", fontFamily: "'Lora', Georgia, serif" }}>
                1509 North Western Avenue, Chicago, IL 60622
              </p>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
