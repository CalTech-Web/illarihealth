import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Concierge Medicine Chicago | Illari Health",
  description:
    "Executive concierge medicine in Wicker Park, Chicago. Unlimited monthly visits, 90-minute appointments, and direct access to Dr. Milton Chavez MD, FAAFP for $300 per month. No co-pays. No insurance friction.",
  alternates: {
    canonical: "https://illarihealth.com/concierge-medicine",
  },
  openGraph: {
    url: "https://illarihealth.com/concierge-medicine",
    title: "Concierge Medicine Chicago | Illari Health",
    description:
      "Unlimited visits, 90-minute executive wellness program, and a direct Dr. Chavez line for $300 per month in Wicker Park, Chicago. No co-pays.",
    images: [
      {
        url: "/assets/gallery/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "Concierge Medicine at Illari Health, Wicker Park Chicago",
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
      name: "Concierge Medicine",
      item: "https://illarihealth.com/concierge-medicine",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Concierge Medicine",
  alternateName: "Concierge Doctor Chicago",
  serviceType: "Concierge Medicine",
  description:
    "Executive-level concierge medicine membership offering unlimited monthly visits, a 90-minute executive wellness program, advanced blood panel, body composition analysis, and direct physician access with Dr. Milton Chavez MD, FAAFP.",
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
    name: "Concierge Medicine Membership",
    price: "300",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "300",
      priceCurrency: "USD",
      unitText: "month",
    },
    url: "https://illarihealth.com/concierge-medicine",
  },
};

const GOLD = "#DECBA4";
const CHARCOAL = "#161616";
const OFF_WHITE = "#FAF7F2";
const CREAM = "#F1E8D8";
const BORDER_GOLD = "#DECBA3";
const BOOKING_URL = "https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB";

export default function ConciergeMedicinePage() {
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
              src="/assets/gallery/concierge-hero.jpg"
              alt="Concierge medicine consultation"
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
                <span style={{ color: GOLD }}>Concierge Medicine</span>
              </nav>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                Wicker Park, Chicago
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                Concierge Medicine
              </h1>
              <div className="w-16 h-px mx-auto mb-6" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
              <p className="text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>
                Your physician. Available to you. Unlimited visits, 90-minute appointments, and a direct line to Dr. Milton Chavez MD, FAAFP for $300 per month.
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

        {/* Trust Strip */}
        <div style={{ background: `linear-gradient(135deg, ${CHARCOAL} 0%, #1e1e1e 100%)` }} className="py-5">
          <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
            {[
              "Unlimited Visits",
              "30-60 Min Appointments",
              "Direct Physician Line",
              "$300/Month Flat Rate",
              "No Co-pays",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-xs tracking-wider uppercase" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.1em" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill={GOLD}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Gradient transition */}
        <div style={{ height: "60px", background: `linear-gradient(to bottom, ${CHARCOAL}, ${OFF_WHITE})` }} aria-hidden="true" />

        {/* What Is Concierge Medicine */}
        <section style={{ backgroundColor: OFF_WHITE }} className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <AnimateOnScroll>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                    What It Is
                  </p>
                  <h2 className="text-4xl md:text-5xl mb-6" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                    What Is Concierge Medicine?
                  </h2>
                  <div className="w-12 h-px mb-8" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
                  <p className="text-lg leading-relaxed mb-6" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                    Concierge medicine replaces insurance-driven care with a direct relationship between you and your physician. No middlemen, no billing codes, no 7-minute slots.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                    At Illari Health, that means Dr. Milton Chavez MD, FAAFP dedicates his full attention to a smaller panel of patients. Fewer patients, longer appointments, better outcomes.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { stat: "Unlimited", label: "Visits per month", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg> },
                    { stat: "30-60", label: "Minutes per visit", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v-2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg> },
                    { stat: "Direct", label: "Physician access", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg> },
                    { stat: "$300", label: "Flat monthly rate", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg> },
                  ].map(({ stat, label, icon }) => (
                    <div key={label} className="ih-card text-center p-6" style={{ backgroundColor: "#fff", border: `1px solid ${BORDER_GOLD}` }}>
                      <div className="flex justify-center mb-3">{icon}</div>
                      <p className="text-3xl mb-1" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>{stat}</p>
                      <p className="text-xs tracking-wider uppercase" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>{label}</p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>

            {/* Feature Cards with Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {[
                {
                  heading: "Unlimited Visits",
                  body: "No caps on how often you see Dr. Chavez. Come in monthly for preventive care or more frequently when you need it. Your membership covers every visit.",
                  delay: 0,
                  icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"/></svg>,
                },
                {
                  heading: "30 to 60-Minute Appointments",
                  body: "Every appointment is long enough to actually address your health. Dr. Chavez learns your history, your goals, and your concerns, not just the presenting symptom.",
                  delay: 80,
                  icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
                },
                {
                  heading: "Direct Physician Access",
                  body: "Call or text Dr. Chavez directly. No phone tree, no nurse relay, no hold music. When you need an answer, you get one.",
                  delay: 160,
                  icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
                },
              ].map(({ heading, body, delay, icon }) => (
                <AnimateOnScroll key={heading} delay={delay} className="flex">
                  <div className="ih-card p-8 flex-1 flex flex-col" style={{ border: `1px solid ${BORDER_GOLD}`, backgroundColor: "#fff" }}>
                    <div className="mb-4 w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: CREAM, border: `1px solid ${BORDER_GOLD}` }}>
                      {icon}
                    </div>
                    <h3 className="text-lg mb-3" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>{heading}</h3>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>{body}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Concierge vs Traditional */}
        <section className="relative overflow-hidden py-20" style={{ backgroundColor: CREAM }}>
          <div className="absolute inset-0">
            <Image
              src="/assets/gallery/card-bg-stethoscope.jpg"
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              aria-hidden="true"
            />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(241,232,216,0.78)" }} />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-14">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  The Difference
                </p>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                  Concierge vs. Traditional Care
                </h2>
                <div className="w-12 h-px mx-auto" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={80}>
              <div className="ih-table-wrap" style={{ border: `1px solid ${BORDER_GOLD}` }}>
                <table className="w-full" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                  <thead>
                    <tr style={{ backgroundColor: CHARCOAL }}>
                      <th className="text-left px-6 py-4 text-xs tracking-widest uppercase" style={{ color: "#9a8a72", letterSpacing: "0.1em" }}>Experience</th>
                      <th className="text-center px-6 py-4 text-xs tracking-widest uppercase" style={{ color: GOLD, letterSpacing: "0.1em" }}>Illari Concierge</th>
                      <th className="text-center px-6 py-4 text-xs tracking-widest uppercase" style={{ color: "#666", letterSpacing: "0.1em" }}>Traditional</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Appointment Length", concierge: "30-60 min", traditional: "7-12 min" },
                      { feature: "Doctor Access", concierge: "Direct call/text", traditional: "Phone tree, days to respond" },
                      { feature: "Monthly Visits", concierge: "Unlimited", traditional: "Limited by insurance" },
                      { feature: "Wait Time", concierge: "Same-day or next-day", traditional: "Weeks to months" },
                      { feature: "Labs and EKG", concierge: "Included", traditional: "Billed separately" },
                      { feature: "Surprise Bills", concierge: "Never", traditional: "Common" },
                      { feature: "Specialist Consult", concierge: "200+ via RubiconMD", traditional: "Referral, weeks to wait" },
                    ].map(({ feature, concierge, traditional }, i) => (
                      <tr key={feature} style={{ backgroundColor: i % 2 === 0 ? "#fff" : OFF_WHITE, borderBottom: `1px solid ${BORDER_GOLD}` }}>
                        <td className="px-6 py-4 text-sm font-medium" style={{ color: CHARCOAL }}>{feature}</td>
                        <td className="px-6 py-4 text-sm text-center font-medium" style={{ color: "#8a7a5a" }}>{concierge}</td>
                        <td className="px-6 py-4 text-sm text-center" style={{ color: "#999" }}>{traditional}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Concierge Plan Details */}
        <section className="relative overflow-hidden py-24" style={{ backgroundColor: CHARCOAL }}>
          <div className="absolute inset-0">
            <Image
              src="/assets/gallery/concierge-bg-1.jpg"
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
                  Premier Plan
                </p>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                  Everything Included
                </h2>
                <div className="w-12 h-px mx-auto" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <AnimateOnScroll>
                <div style={{ border: `2px solid ${GOLD}`, backgroundColor: "rgba(26,26,26,0.95)" }} className="ih-card-dark ih-gold-glow p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="ih-pill" style={{ backgroundColor: "rgba(222,203,164,0.15)", color: GOLD, border: `1px solid rgba(222,203,164,0.3)` }}>
                      Most Popular
                    </span>
                  </div>
                  <div className="mb-8">
                    <p className="text-6xl mb-2" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>$300</p>
                    <p className="text-sm" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>/month + $200 one-time enrollment fee</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="ih-pill" style={{ backgroundColor: "rgba(222,203,164,0.1)", color: GOLD, border: `1px solid rgba(222,203,164,0.2)` }}>
                        10% off annually
                      </span>
                      <span className="ih-pill" style={{ backgroundColor: "rgba(222,203,164,0.1)", color: GOLD, border: `1px solid rgba(222,203,164,0.2)` }}>
                        10% family discount
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-10">
                    {[
                      "Unlimited visits per month",
                      "All visits, labs, and EKG included",
                      "90-minute executive wellness program",
                      "Advanced blood panel included",
                      "Modern body composition analysis",
                      "Appointments 30 to 60 minutes",
                      "Direct communication with Dr. Chavez",
                      "All point-of-care services included",
                      "30% off additional labs and procedures",
                      "Priority booking guaranteed",
                      "200+ specialist consultations via RubiconMD",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(222,203,164,0.15)" }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                        </span>
                        <span className="text-sm" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ih-btn ih-btn-gold block w-full py-4 text-sm font-medium tracking-wider uppercase text-center"
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
                      title: "Executive Wellness Program",
                      body: "Your first visit is a 90-minute executive wellness session. Dr. Chavez reviews your complete health history, orders an advanced blood panel, performs a modern body composition analysis, and builds a long-term care plan tailored to your goals.",
                      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>,
                    },
                    {
                      title: "All Labs and EKG Included",
                      body: "Every standard lab, point-of-care test, and in-office EKG is included in your monthly membership. For anything beyond standard, you receive 30% off as a Concierge member.",
                      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>,
                    },
                    {
                      title: "Specialist Access via RubiconMD",
                      body: "When a specialist is needed, Dr. Chavez connects you to 200+ specialties through RubiconMD at no added cost. Same-day consultations across psychiatry, cardiology, dermatology, and more.",
                      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v-2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
                    },
                    {
                      title: "Priority Scheduling",
                      body: "Concierge members receive priority booking. Same-day and next-day appointments are available most of the time. You are not waiting weeks for a routine visit.",
                      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>,
                    },
                  ].map(({ title, body, icon }) => (
                    <div key={title} className="ih-card-dark flex gap-5 p-6" style={{ backgroundColor: "rgba(26,26,26,0.6)", border: `1px solid rgba(222,203,164,0.15)` }}>
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(222,203,164,0.08)", border: `1px solid rgba(222,203,164,0.15)` }}>
                        {icon}
                      </div>
                      <div>
                        <h3 className="text-base mb-2" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>{title}</h3>
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
        <section className="relative overflow-hidden py-24" style={{ backgroundColor: OFF_WHITE }}>
          <div className="absolute inset-0">
            <Image
              src="/assets/gallery/concierge-bg-2.jpg"
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
              aria-hidden="true"
            />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(250,247,242,0.92)" }} />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Is This Right For You
                </p>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                  Who Chooses Concierge Medicine
                </h2>
                <div className="w-12 h-px mx-auto" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {[
                {
                  num: "01",
                  label: "Executives and Professionals",
                  body: "You cannot afford to be sidelined. Concierge membership gives you same-day access, a direct physician line, and a doctor who knows your health history without having to re-introduce yourself every visit.",
                  delay: 0,
                  icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>,
                },
                {
                  num: "02",
                  label: "Patients Tired of Rushed Care",
                  body: "You have left appointments feeling like you did not get your questions answered. Concierge visits run 30 to 60 minutes. Dr. Chavez does not have another patient waiting behind you.",
                  delay: 80,
                  icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
                },
                {
                  num: "03",
                  label: "Those Seeking Comprehensive Prevention",
                  body: "The advanced blood panel, body composition analysis, and executive wellness program give you a complete picture of your health, not just a check on your current complaints.",
                  delay: 0,
                  icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
                },
                {
                  num: "04",
                  label: "Self-Employed Without Employer Insurance",
                  body: "The Concierge plan covers primary care comprehensively at a flat monthly rate. No co-pays, no deductibles, no surprise bills. You know exactly what you are paying.",
                  delay: 80,
                  icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                },
              ].map(({ num, label, body, delay, icon }) => (
                <AnimateOnScroll key={label} delay={delay} className="flex">
                  <div className="ih-card p-8 flex-1 flex flex-col" style={{ border: `1px solid ${BORDER_GOLD}`, backgroundColor: "#fff" }}>
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: CREAM, border: `1px solid ${BORDER_GOLD}` }}>
                        {icon}
                      </div>
                      <span className="text-3xl" style={{ color: BORDER_GOLD, fontFamily: "'Abril Fatface', serif", opacity: 0.4 }}>{num}</span>
                    </div>
                    <h3 className="text-base font-medium tracking-wide uppercase mb-3" style={{ color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.05em" }}>{label}</h3>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>{body}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Physician - Full Portrait Card */}
        <section style={{ backgroundColor: CREAM }} className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Your Physician
                </p>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                  Meet Dr. Milton Chavez
                </h2>
                <div className="w-12 h-px mx-auto" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={80}>
              <div className="ih-card overflow-hidden" style={{ backgroundColor: "#fff", border: `1px solid ${BORDER_GOLD}` }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div className="relative" style={{ aspectRatio: "3 / 4", minHeight: "420px" }}>
                    <Image
                      src="/assets/team/dr-milton-chavez.jpg"
                      alt="Dr. Milton Chavez MD, FAAFP"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
                    <p className="text-xs tracking-widest uppercase mb-2" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.15em" }}>
                      Founder and Medical Director
                    </p>
                    <h3 className="text-3xl md:text-4xl mb-1" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>Dr. Milton Chavez</h3>
                    <p className="text-sm mb-6" style={{ color: "#C9A96E", fontFamily: "'Lora', Georgia, serif" }}>MD, FAAFP</p>
                    <p className="text-base leading-relaxed mb-4" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                      Trained at Meharry Medical College, residency at Rush University in Chicago, fellowship at UCLA. 28+ years in medicine. Most practices refer out dermatology, orthopedics, and minor surgery. Dr. Chavez handles all of it, in the same office, at the same flat rate.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {[
                        "Meharry Medical College",
                        "Rush University",
                        "UCLA Fellowship",
                        "Licensed Since 1997",
                        "Board-Certified FAAFP",
                        "28+ Years",
                      ].map((tag) => (
                        <span key={tag} className="ih-tag px-3 py-1 text-xs" style={{ backgroundColor: CREAM, color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", border: `1px solid ${BORDER_GOLD}` }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="p-5 mb-6" style={{ backgroundColor: OFF_WHITE, borderLeft: `3px solid ${GOLD}`, borderRadius: "0 12px 12px 0" }}>
                      <p className="text-sm italic leading-relaxed" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                        &ldquo;We strive to inspire and aid those seeking their optimal health, wellness and healing through efficient service, quality consultations and our core values: integrity and respect.&rdquo;
                      </p>
                    </div>

                    <div>
                      <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ih-btn ih-btn-gold inline-block px-8 py-3.5 text-sm font-medium tracking-wider uppercase"
                        style={{ backgroundColor: GOLD, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                      >
                        Book with Dr. Chavez
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Patient Reviews */}
        <section style={{ backgroundColor: CHARCOAL }} className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Patient Reviews
                </p>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                  What Patients Say
                </h2>
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill={GOLD}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                  4.78 out of 5 on Tebra, 23 verified reviews
                </p>
              </div>
            </AnimateOnScroll>

            {/* Featured Pull Quote */}
            <AnimateOnScroll>
              <div className="mb-10 p-10 md:p-14 text-center" style={{ backgroundColor: "rgba(222,203,164,0.06)", border: `1px solid rgba(222,203,164,0.15)`, borderRadius: "16px" }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="mx-auto mb-6" style={{ opacity: 0.4 }}>
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill={GOLD}/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill={GOLD}/>
                </svg>
                <p className="text-xl md:text-2xl italic leading-relaxed mb-6 max-w-3xl mx-auto" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>
                  Dr. Chavez has my highest recommendation. He is knowledgeable, intelligent, empathic, consistent, thorough and soft-spoken. Basically, he delivers what most people want and deserve from their MD.
                </p>
                <div className="w-8 h-px mx-auto mb-4" style={{ backgroundColor: GOLD }} />
                <p className="text-xs tracking-wider uppercase" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>Chad M.</p>
                <p className="text-xs mt-1" style={{ color: "#5a4a3a", fontFamily: "'Lora', Georgia, serif" }}>Verified Patient via Tebra</p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "Albert T.", quote: "My visit with Dr. Chavez is always pleasant. I love that the Doctors take your appointment on time, very attentive and professional and knowledgeable of my medical history.", delay: 0 },
                { name: "Sandra W.", quote: "Dr. Chavez is the best doctor I have ever had. He really listens, takes his time, and genuinely cares about his patients. I would recommend him to anyone looking for a physician who actually puts patients first.", delay: 100 },
              ].map(({ name, quote, delay }) => (
                <AnimateOnScroll key={name} delay={delay} className="flex">
                  <div className="ih-card-dark p-8 flex-1 flex flex-col" style={{ border: `1px solid rgba(222,203,164,0.12)`, backgroundColor: "rgba(26,26,26,0.8)" }}>
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={GOLD}>
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-base italic leading-relaxed mb-4 flex-1" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>
                      &ldquo;{quote}&rdquo;
                    </p>
                    <div>
                      <p className="text-xs tracking-wider uppercase" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>{name}</p>
                      <p className="text-xs" style={{ color: "#5a4a3a", fontFamily: "'Lora', Georgia, serif" }}>Verified Patient</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden py-24" style={{ backgroundColor: CHARCOAL }}>
          <div className="absolute inset-0">
            <Image
              src="/assets/gallery/concierge-hero.jpg"
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
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                Get Started
              </p>
              <h2 className="text-4xl md:text-5xl mb-4" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                Begin Your Concierge Membership
              </h2>
              <div className="w-12 h-px mx-auto mb-6" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
              <p className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>
                Call us to get started. We will walk you through your options and find the right plan for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href="tel:7732273303"
                  className="ih-btn ih-btn-gold px-8 py-4 text-sm font-medium tracking-wider uppercase"
                  style={{ backgroundColor: GOLD, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                >
                  Call 773.227.3303
                </a>
                <a
                  href="/#contact"
                  className="ih-btn ih-btn-outline px-8 py-4 text-sm font-medium tracking-wider uppercase"
                  style={{ border: `1px solid ${GOLD}`, color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                >
                  Request a Callback
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                <span className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  1509 N. Western Ave, Chicago, IL 60622
                </span>
                <span className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                  Free Private Parking
                </span>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
