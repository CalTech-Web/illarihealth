import type { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Direct Primary Care Chicago | $150/Month | Illari Health",
  description:
    "Flat-rate Direct Primary Care in Wicker Park, Chicago. $150 per month covers all visits, recommended labs, and direct physician access with Dr. Milton Chavez MD, FAAFP. No co-pays. No insurance friction.",
  alternates: {
    canonical: "https://illarihealth.com/direct-primary-care",
  },
  openGraph: {
    url: "https://illarihealth.com/direct-primary-care",
    title: "Direct Primary Care Chicago | $150/Month | Illari Health",
    description:
      "$150 per month. Up to three visits, all recommended labs, and direct physician access in Wicker Park, Chicago. No co-pays. No deductibles.",
    images: [
      {
        url: "/assets/gallery/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "Direct Primary Care at Illari Health, Wicker Park Chicago",
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
      name: "Direct Primary Care",
      item: "https://illarihealth.com/direct-primary-care",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Direct Primary Care",
  alternateName: "DPC Chicago",
  serviceType: "Direct Primary Care",
  description:
    "Direct Primary Care membership offering up to three medical visits per month, all recommended labs, a comprehensive physical, and direct physician access with Dr. Milton Chavez MD, FAAFP for $150 per month.",
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
    name: "Direct Primary Care Membership",
    price: "150",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "150",
      priceCurrency: "USD",
      unitText: "month",
    },
    url: "https://illarihealth.com/direct-primary-care",
  },
};

const GOLD = "#DECBA4";
const CHARCOAL = "#161616";
const OFF_WHITE = "#FAF7F2";
const CREAM = "#F1E8D8";
const BORDER_GOLD = "#DECBA3";
const BOOKING_URL = "https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB";

export default function DirectPrimaryCarePage() {
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
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/assets/gallery/horiz-wellness.jpg"
              alt="Direct primary care consultation"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(22,22,22,0.78) 0%, rgba(22,22,22,0.65) 100%)" }} />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
            <AnimateOnScroll>
              <nav className="text-xs tracking-widest uppercase mb-8" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.15em" }}>
                <a href="/" className="hover:opacity-80 transition-opacity" style={{ color: "#9a8a72" }}>Home</a>
                <span className="mx-2" style={{ color: "#5a4a3a" }}>/</span>
                <span style={{ color: GOLD }}>Direct Primary Care</span>
              </nav>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                Wicker Park, Chicago
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                Direct Primary Care
              </h1>
              <div className="w-16 h-px mx-auto mb-6" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
              <p className="text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>
                A flat $150 per month covers up to three visits, all recommended labs, and direct access to Dr. Milton Chavez MD, FAAFP. No co-pays. No deductibles. No surprise bills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ih-btn ih-btn-gold px-8 py-4 text-sm font-medium tracking-wider uppercase text-center"
                  style={{ backgroundColor: GOLD, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                >
                  Call for Priority Booking
                </a>
                <a
                  href="/#contact"
                  className="ih-btn ih-btn-outline px-8 py-4 text-sm font-medium tracking-wider uppercase text-center"
                  style={{ border: `1px solid ${GOLD}`, color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                >
                  Request a Callback
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Gradient transition from dark hero to light content */}
        <div style={{ height: "60px", background: "linear-gradient(to bottom, #161616, #FAF7F2)" }} aria-hidden="true" />

        {/* What Is DPC */}
        <section style={{ backgroundColor: OFF_WHITE }} className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  What It Is
                </p>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                  What Is Direct Primary Care?
                </h2>
                <div className="w-12 h-px mx-auto mb-8" style={{ backgroundColor: GOLD }} />
                <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                  Direct Primary Care (DPC) is a straightforward membership model: you pay a flat monthly fee directly to your physician, and insurance never enters the room. At Illari Health, $150 a month gives you real access to Dr. Milton Chavez MD, FAAFP, a board-certified family physician with 28+ years of experience.
                </p>
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  heading: "No Insurance Involvement",
                  body: "DPC removes the middleman. No co-pays, no deductibles, no surprise bills after your visit. You know exactly what you are paying before you walk in.",
                  delay: 0,
                },
                {
                  heading: "Up to Three Visits Per Month",
                  body: "Your membership includes up to three medical visits per month. Appointments run 25 to 30 minutes, starting on time, every time.",
                  delay: 80,
                },
                {
                  heading: "Labs and Physical Included",
                  body: "All recommended labs and a comprehensive 45-minute physical are covered by your membership. No add-on charges for standard in-office testing.",
                  delay: 160,
                },
              ].map(({ heading, body, delay }) => (
                <AnimateOnScroll key={heading} delay={delay}>
                  <div className="ih-card p-8" style={{ border: `1px solid ${BORDER_GOLD}`, backgroundColor: "#fff" }}>
                    <div className="w-8 h-px mb-4" style={{ backgroundColor: GOLD }} />
                    <h3 className="text-lg mb-3" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>{heading}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>{body}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* DPC Plan Details */}
        <section className="relative overflow-hidden py-24" style={{ backgroundColor: CHARCOAL }}>
          <div className="absolute inset-0">
            <Image
              src="/assets/gallery/horiz-patient-care.jpg"
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              aria-hidden="true"
            />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(22,22,22,0.88)" }} />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  DPC Membership
                </p>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                  Everything Included
                </h2>
                <div className="w-12 h-px mx-auto" style={{ backgroundColor: GOLD }} />
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <AnimateOnScroll>
                <div style={{ border: `1px solid ${BORDER_GOLD}`, backgroundColor: "#1a1a1a" }} className="ih-card-dark p-8">
                  <div className="mb-6">
                    <p className="text-5xl mb-1" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>$150</p>
                    <p className="text-sm" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>/month + $200 enrollment fee</p>
                    <p className="text-xs mt-1" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>10% off when paid annually. 10% off for entire families.</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Up to 3 medical visits per month",
                      "All recommended labs included",
                      "Comprehensive physical (up to 45 minutes)",
                      "Appointments 25 to 30 minutes",
                      "Access to a nurse anytime",
                      "15% off point-of-care services and procedures",
                      "Priority booking for DPC members",
                      "3-month minimum, then month-to-month",
                      "200+ specialist consultations via RubiconMD",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span style={{ color: GOLD, marginTop: "2px" }}>&#10003;</span>
                        <span className="text-sm" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ih-btn ih-btn-gold block w-full py-4 text-sm font-medium tracking-wider uppercase text-center transition-opacity hover:opacity-90"
                    style={{ backgroundColor: GOLD, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                  >
                    Call for Priority Booking
                  </a>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={120}>
                <div className="space-y-6">
                  {[
                    {
                      title: "Comprehensive Physical",
                      body: "Your first visit with Dr. Chavez is a 45-minute comprehensive physical. He reviews your complete health history, orders recommended labs, and builds a care plan around your goals, not just your current symptoms.",
                    },
                    {
                      title: "Nurse Access Anytime",
                      body: "DPC members have direct access to our nursing staff at any time. Questions between visits do not require scheduling another appointment.",
                    },
                    {
                      title: "Specialist Coordination",
                      body: "Through RubiconMD, Dr. Chavez connects members to 200+ specialists at no extra cost. For PPO patients, he refers to vetted in-network providers. Uninsured patients receive a curated cash-price specialist list.",
                    },
                    {
                      title: "Month-to-Month After 3 Months",
                      body: "After your initial 3-month commitment, your membership continues month-to-month. Cancel in writing anytime. Any remaining balance is applied to an extension, transferred, or refunded.",
                    },
                  ].map(({ title, body }) => (
                    <div key={title} className="flex gap-4">
                      <div className="w-1 flex-shrink-0 mt-1" style={{ backgroundColor: GOLD }} />
                      <div>
                        <h3 className="text-base mb-1" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>{title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Who It Is For */}
        <section style={{ backgroundColor: OFF_WHITE }} className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Is This Right For You
                </p>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                  Who Chooses DPC
                </h2>
                <div className="w-12 h-px mx-auto" style={{ backgroundColor: GOLD }} />
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  label: "Uninsured Individuals",
                  body: "No insurance does not mean no primary care. $150 a month covers visits, labs, and a direct physician relationship. And through RubiconMD, you have access to cash-price specialist options when you need them.",
                  delay: 0,
                },
                {
                  label: "Families",
                  body: "When your whole family joins the same plan, everyone saves 10% per month. One physician who knows your children, your parents, and your complete family health history.",
                  delay: 80,
                },
                {
                  label: "Patients Who Want Predictable Costs",
                  body: "The DPC model is built on price transparency. You know the monthly fee before you join. No surprise bills arrive in the mail weeks after your visit.",
                  delay: 0,
                },
                {
                  label: "Those Seeking a Consistent Physician",
                  body: "You see Dr. Chavez every visit, not a rotating roster of practitioners. He knows your history, your goals, and your baseline, because he has been treating you.",
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

        {/* FAQ Excerpt */}
        <section style={{ backgroundColor: CREAM }} className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Common Questions
                </p>
                <h2 className="text-4xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                  DPC Questions Answered
                </h2>
                <div className="w-12 h-px mx-auto" style={{ backgroundColor: GOLD }} />
              </div>
            </AnimateOnScroll>
            <div className="space-y-6 max-w-2xl mx-auto">
              {[
                {
                  q: "Will I still need health insurance?",
                  a: "Yes. DPC covers primary care, labs, and in-office services. You will still need health insurance for hospitalizations, emergency services, and specialist care. DPC is a better way to access primary care, not a substitute for insurance.",
                  delay: 0,
                },
                {
                  q: "Can I cancel anytime?",
                  a: "Yes, after the initial 3-month commitment. Membership continues month-to-month after that. Cancel in writing and any positive balance will be applied to an extension, transferred to another plan, or refunded.",
                  delay: 80,
                },
                {
                  q: "Is there a discount for paying annually?",
                  a: "Yes. All plans receive a 10% discount when paid annually instead of monthly. An additional 10% discount applies when your entire family joins the same plan.",
                  delay: 0,
                },
              ].map(({ q, a, delay }) => (
                <AnimateOnScroll key={q} delay={delay}>
                  <div className="ih-card p-6" style={{ border: `1px solid ${BORDER_GOLD}`, backgroundColor: "#fff" }}>
                    <h3 className="text-base mb-3" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>{q}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>{a}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
            <AnimateOnScroll delay={100}>
              <div className="text-center mt-10">
                <a
                  href="/faq"
                  className="text-sm tracking-wider uppercase transition-opacity hover:opacity-80"
                  style={{ color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", borderBottom: `1px solid ${BORDER_GOLD}`, paddingBottom: "2px" }}
                >
                  See All FAQ
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden py-20" style={{ backgroundColor: CHARCOAL }}>
          <div className="absolute inset-0">
            <Image
              src="/assets/gallery/horiz-clinic-modern.jpg"
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              aria-hidden="true"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(22,22,22,0.85) 0%, rgba(22,22,22,0.92) 100%)" }} />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <AnimateOnScroll>
              <h2 className="text-4xl mb-4" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                Begin Your DPC Membership
              </h2>
              <div className="w-12 h-px mx-auto mb-6" style={{ backgroundColor: GOLD }} />
              <p className="text-base leading-relaxed mb-8" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                Call us to get started. We will walk you through your options and find the right plan for you.
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
                1509 North Western Avenue, Chicago, IL 60622. Free private parking at Western and LeMoyne.
              </p>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
