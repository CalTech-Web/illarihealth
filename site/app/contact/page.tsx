import type { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Contact Illari Health | Wicker Park, Chicago IL 60622",
  description:
    "Contact Illari Health at 1509 North Western Avenue, Wicker Park, Chicago, IL 60622. Call 773.227.3303 or email info@illarihealth.com. Free private parking at Western and LeMoyne.",
  alternates: {
    canonical: "https://illarihealth.com/contact",
  },
  openGraph: {
    url: "https://illarihealth.com/contact",
    title: "Contact Illari Health | Wicker Park, Chicago IL 60622",
    description:
      "Reach Illari Health at 773.227.3303. Located at 1509 North Western Avenue in Wicker Park, Chicago. Free private parking available.",
    images: [
      {
        url: "/assets/gallery/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "Illari Health, 1509 North Western Avenue, Wicker Park, Chicago",
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
      name: "Contact",
      item: "https://illarihealth.com/contact",
    },
  ],
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Illari Health",
  url: "https://illarihealth.com/contact",
  description: "Contact information for Illari Health, a Direct Primary Care and Concierge Medicine practice in Wicker Park, Chicago.",
  mainEntity: {
    "@type": "MedicalClinic",
    "@id": "https://illarihealth.com#clinic",
    name: "Illari Health",
    url: "https://illarihealth.com",
    telephone: "+17732273303",
    email: "info@illarihealth.com",
    image: "https://illarihealth.com/assets/logos/illari-health-logo-full.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1509 North Western Avenue",
      addressLocality: "Chicago",
      addressRegion: "IL",
      postalCode: "60622",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.9097,
      longitude: -87.6876,
    },
    areaServed: [
      {
        "@type": "Place",
        name: "Wicker Park",
        address: { "@type": "PostalAddress", addressLocality: "Chicago", addressRegion: "IL" },
      },
      {
        "@type": "Place",
        name: "Bucktown",
        address: { "@type": "PostalAddress", addressLocality: "Chicago", addressRegion: "IL" },
      },
      {
        "@type": "Place",
        name: "Logan Square",
        address: { "@type": "PostalAddress", addressLocality: "Chicago", addressRegion: "IL" },
      },
      {
        "@type": "Place",
        name: "Ukrainian Village",
        address: { "@type": "PostalAddress", addressLocality: "Chicago", addressRegion: "IL" },
      },
      {
        "@type": "Place",
        name: "Lincoln Park",
        address: { "@type": "PostalAddress", addressLocality: "Chicago", addressRegion: "IL" },
      },
    ],
    sameAs: [
      "https://www.instagram.com/illarihealth/",
      "https://www.google.com/maps/place/Illari+Health/@41.9097,-87.6876,17z",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.78",
      reviewCount: "23",
      bestRating: "5",
      worstRating: "1",
    },
    medicalSpecialty: [
      "Family Medicine",
      "Concierge Medicine",
      "Direct Primary Care",
      "Sports Medicine",
      "Surgical Dermatology",
      "Non-Operative Orthopedics",
    ],
  },
};

const GOLD = "#DECBA4";
const CHARCOAL = "#161616";
const OFF_WHITE = "#FAF7F2";
const CREAM = "#F1E8D8";
const BORDER_GOLD = "#DECBA3";
const BOOKING_URL = "https://web2.myaestheticspro.com/BN/index.cfm?52A4C5D4699E6C16FB67ACA46E1487324CFC2165279C2B6FC9B29ADF9D0A6FBB";

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/assets/gallery/horiz-doctor-office.jpg"
              alt="Contact Illari Health"
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
                <span style={{ color: GOLD }}>Contact</span>
              </nav>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                1509 N Western Avenue, Chicago, IL 60622
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                Contact Illari Health
              </h1>
              <div className="w-16 h-px mx-auto mb-6" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
              <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>
                Ready to get started? Call to ask about membership or book your first appointment. We answer our own phones.
              </p>
            </AnimateOnScroll>
          </div>
        </section>
        <div aria-hidden="true" style={{ height: "4px", background: `linear-gradient(90deg, transparent 5%, ${GOLD} 50%, transparent 95%)` }} />

        {/* Contact Details */}
        <section style={{ backgroundColor: OFF_WHITE }} className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Primary Contact */}
              <AnimateOnScroll>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                    Get in Touch
                  </p>
                  <div className="space-y-8">
                    {/* Phone */}
                    <div className="pl-5" style={{ borderLeft: `3px solid ${GOLD}` }}>
                      <div className="flex items-center gap-2 mb-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className="text-xs tracking-widest uppercase" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>Phone</p>
                      </div>
                      <a
                        href="tel:7732273303"
                        className="text-4xl md:text-5xl hover:opacity-80 transition-opacity block"
                        style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}
                      >
                        773.227.3303
                      </a>
                      <p className="text-sm mt-2" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                        Call for priority booking and general inquiries
                      </p>
                    </div>
                    {/* Email */}
                    <div className="pl-5" style={{ borderLeft: `3px solid ${GOLD}` }}>
                      <div className="flex items-center gap-2 mb-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="2" y="4" width="20" height="16" rx="2" stroke={GOLD} strokeWidth="2"/>
                          <path d="M22 7l-10 7L2 7" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className="text-xs tracking-widest uppercase" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>Email</p>
                      </div>
                      <a
                        href="mailto:info@illarihealth.com"
                        className="text-lg hover:opacity-80 transition-opacity"
                        style={{ color: CHARCOAL, fontFamily: "'Lora', Georgia, serif" }}
                      >
                        info@illarihealth.com
                      </a>
                    </div>
                    {/* Address */}
                    <div className="pl-5" style={{ borderLeft: `3px solid ${GOLD}` }}>
                      <div className="flex items-center gap-2 mb-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="10" r="3" stroke={GOLD} strokeWidth="2"/>
                        </svg>
                        <p className="text-xs tracking-widest uppercase" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>Address</p>
                      </div>
                      <address className="not-italic" style={{ color: CHARCOAL, fontFamily: "'Lora', Georgia, serif" }}>
                        <p className="text-base font-medium">1509 North Western Avenue</p>
                        <p className="text-base">Chicago, IL 60622</p>
                        <p className="text-sm mt-1" style={{ color: "#9a8a72" }}>Wicker Park</p>
                      </address>
                    </div>
                    {/* Instagram */}
                    <div className="pl-5" style={{ borderLeft: `3px solid ${GOLD}` }}>
                      <div className="flex items-center gap-2 mb-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="2" y="2" width="20" height="20" rx="5" stroke={GOLD} strokeWidth="2"/>
                          <circle cx="12" cy="12" r="5" stroke={GOLD} strokeWidth="2"/>
                          <circle cx="17.5" cy="6.5" r="1.5" fill={GOLD}/>
                        </svg>
                        <p className="text-xs tracking-widest uppercase" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>Instagram</p>
                      </div>
                      <a
                        href="https://www.instagram.com/illarihealth/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base hover:opacity-80 transition-opacity underline"
                        style={{ color: "#C9A96E", fontFamily: "'Lora', Georgia, serif" }}
                      >
                        @illarihealth
                      </a>
                    </div>
                  </div>
                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ih-btn ih-btn-gold px-8 py-4 text-sm font-medium tracking-wider uppercase text-center transition-opacity hover:opacity-90 whitespace-nowrap"
                      style={{ backgroundColor: GOLD, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                    >
                      Call for Priority Booking
                    </a>
                    <a
                      href="/#contact"
                      className="ih-btn ih-btn-outline px-8 py-4 text-sm font-medium tracking-wider uppercase text-center transition-opacity hover:opacity-80"
                      style={{ border: `1px solid ${BORDER_GOLD}`, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                    >
                      Request a Callback
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Location Details */}
              <AnimateOnScroll delay={150}>
                <div className="space-y-8">
                  {/* Location Card */}
                  <div className="ih-card p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ border: `1px solid ${BORDER_GOLD}`, backgroundColor: "#fff" }}>
                    <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${GOLD}18`, border: `1px solid ${BORDER_GOLD}` }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="10" r="3" stroke={GOLD} strokeWidth="2"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                          Location
                        </p>
                        <h3 className="text-lg mb-3" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>Wicker Park, Chicago</h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                          Our office is located at 1509 North Western Avenue in the heart of Wicker Park. We serve patients from Wicker Park, Bucktown, Logan Square, Ukrainian Village, Lincoln Park, and surrounding Chicago neighborhoods.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Parking Card */}
                  <div className="ih-card p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ border: `1px solid ${BORDER_GOLD}`, backgroundColor: "#fff" }}>
                    <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${GOLD}18`, border: `1px solid ${BORDER_GOLD}` }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="3" width="22" height="18" rx="2" stroke={GOLD} strokeWidth="2"/>
                          <path d="M9 17V7h4a3 3 0 010 6H9" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                          Parking
                        </p>
                        <h3 className="text-lg mb-3" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>Free Private Parking</h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                          Free private parking is available immediately south of the building at Western and LeMoyne. No meters, no garages, no stress.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* New Patients Card */}
                  <div className="ih-card p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ border: `1px solid ${BORDER_GOLD}`, backgroundColor: "#fff" }}>
                    <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${GOLD}18`, border: `1px solid ${BORDER_GOLD}` }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="9" cy="7" r="4" stroke={GOLD} strokeWidth="2"/>
                          <line x1="19" y1="8" x2="19" y2="14" stroke={GOLD} strokeWidth="2" strokeLinecap="round"/>
                          <line x1="22" y1="11" x2="16" y2="11" stroke={GOLD} strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                          New Patients
                        </p>
                        <h3 className="text-lg mb-3" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>New Patients Welcome</h3>
                        <p className="text-sm leading-relaxed mb-4" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                          Not sure which plan is right for you? Call us and we will walk you through your options. No pressure, just honest guidance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Neighborhoods Served */}
        <section style={{ backgroundColor: CREAM }} className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-14">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Service Area
                </p>
                <h2 className="text-4xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                  Serving Chicago's Northwest Side
                </h2>
                <div className="w-12 h-px mx-auto mb-5" style={{ backgroundColor: GOLD }} />
                <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                  Illari Health is located in Wicker Park and serves patients from across Chicago's northwest neighborhoods and beyond.
                </p>
                <p className="text-xs tracking-widest uppercase mt-3" style={{ color: "#b8a88a", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.15em" }}>
                  In the heart of Chicago's northwest side
                </p>
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {[
                "Wicker Park",
                "Bucktown",
                "Logan Square",
                "Ukrainian Village",
                "Lincoln Park",
                "West Town",
              ].map((neighborhood, i) => (
                <AnimateOnScroll key={neighborhood} delay={i * 50}>
                  <div
                    className="ih-card px-8 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#DECBA4]"
                    style={{ border: `1px solid ${BORDER_GOLD}`, backgroundColor: "#fff" }}
                  >
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="10" r="3" stroke={GOLD} strokeWidth="2.5"/>
                      </svg>
                      <p className="text-sm tracking-wider font-medium" style={{ color: CHARCOAL, fontFamily: "'Lora', Georgia, serif" }}>{neighborhood}</p>
                    </div>
                    <p className="text-xs mt-1" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>Chicago, IL</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Sister Practices */}
        <section className="relative overflow-hidden py-20" style={{ backgroundColor: CHARCOAL }}>
          <div className="absolute inset-0">
            <Image
              src="/assets/gallery/horiz-clinic-interior.jpg"
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
              <div className="text-center mb-14">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Same Building
                </p>
                <h2 className="text-4xl mb-4" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                  Sister Practices at 1509 N Western
                </h2>
                <div className="w-12 h-px mx-auto mb-5" style={{ backgroundColor: GOLD }} />
                {/* Connecting location indicator */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: "rgba(222,203,164,0.1)", border: `1px solid rgba(222,203,164,0.2)` }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke={GOLD} strokeWidth="2"/>
                  </svg>
                  <span className="text-xs tracking-wider" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>All located at the same address</span>
                </div>
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "M. Chavez MD, SC",
                  unit: "Unit A",
                  description: "Dr. Chavez's parent family medicine practice. Accepts PPO, HMO, Medicare, Medicaid. Walk-ins welcome.",
                  url: "https://mchavezmd.com",
                  delay: 0,
                  badge: "Same Address",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L15 8H9L12 2Z" stroke={GOLD} strokeWidth="2" strokeLinejoin="round"/>
                      <rect x="4" y="8" width="16" height="14" rx="1" stroke={GOLD} strokeWidth="2"/>
                      <line x1="12" y1="12" x2="12" y2="18" stroke={GOLD} strokeWidth="2" strokeLinecap="round"/>
                      <line x1="9" y1="15" x2="15" y2="15" stroke={GOLD} strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  name: "Illari Aesthetics",
                  unit: "Unit B",
                  description: "Med spa offering injectables, IV therapy, skincare, and medical weight loss. 773.219.0326.",
                  url: "https://illariaesthetics.com",
                  delay: 80,
                  badge: "Same Building",
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke={GOLD} strokeWidth="2" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
              ].map(({ name, unit, description, url, delay, badge, icon }) => (
                <AnimateOnScroll key={name} delay={delay}>
                  <div
                    className="ih-card-dark p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(222,203,164,0.08),0_0_0_1px_rgba(222,203,164,0.15)]"
                    style={{ border: `1px solid #2a2a2a`, borderTopWidth: "3px", borderTopColor: GOLD, backgroundColor: "#1a1a1a" }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(222,203,164,0.1)", border: `1px solid rgba(222,203,164,0.2)` }}>
                          {icon}
                        </div>
                        <div>
                          <p className="text-xs tracking-widest uppercase" style={{ color: "#5a4a3a", fontFamily: "'Lora', Georgia, serif" }}>{unit}</p>
                          <h3 className="text-lg" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>{name}</h3>
                        </div>
                      </div>
                      <span className="ih-pill text-xs tracking-wider px-3 py-1 rounded-full flex-shrink-0" style={{ backgroundColor: "rgba(222,203,164,0.12)", color: GOLD, fontFamily: "'Lora', Georgia, serif", border: `1px solid rgba(222,203,164,0.25)` }}>
                        {badge}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>{description}</p>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-5 py-2.5 rounded transition-all duration-200 hover:opacity-90"
                      style={{ color: CHARCOAL, backgroundColor: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.1em" }}
                    >
                      Visit Website
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke={CHARCOAL} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
