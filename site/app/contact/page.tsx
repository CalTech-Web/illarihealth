import type { Metadata } from "next";
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
        <section style={{ backgroundColor: CHARCOAL }} className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <AnimateOnScroll>
              <nav className="text-xs tracking-widest uppercase mb-8" style={{ color: "#5a4a3a", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.15em" }}>
                <a href="/" style={{ color: "#9a8a72" }}>Home</a>
                <span className="mx-2" style={{ color: "#5a4a3a" }}>/</span>
                <span style={{ color: GOLD }}>Contact</span>
              </nav>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                1509 N Western Avenue, Chicago, IL 60622
              </p>
              <h1 className="text-5xl md:text-6xl leading-tight mb-6" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                Contact Illari Health
              </h1>
              <div className="w-16 h-px mb-6" style={{ backgroundColor: GOLD }} />
              <p className="text-xl leading-relaxed max-w-2xl" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>
                Ready to get started? Call to book a one-time visit or ask about membership. We answer our own phones.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Contact Details */}
        <section style={{ backgroundColor: OFF_WHITE }} className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Primary Contact */}
              <AnimateOnScroll>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                    Get in Touch
                  </p>
                  <div className="space-y-8">
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>Phone</p>
                      <a
                        href="tel:7732273303"
                        className="text-3xl hover:opacity-80 transition-opacity"
                        style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}
                      >
                        773.227.3303
                      </a>
                      <p className="text-sm mt-1" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                        Call for priority booking and general inquiries
                      </p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>Email</p>
                      <a
                        href="mailto:info@illarihealth.com"
                        className="text-lg hover:opacity-80 transition-opacity"
                        style={{ color: CHARCOAL, fontFamily: "'Lora', Georgia, serif" }}
                      >
                        info@illarihealth.com
                      </a>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>Address</p>
                      <address className="not-italic" style={{ color: CHARCOAL, fontFamily: "'Lora', Georgia, serif" }}>
                        <p className="text-base font-medium">1509 North Western Avenue</p>
                        <p className="text-base">Chicago, IL 60622</p>
                        <p className="text-sm mt-1" style={{ color: "#9a8a72" }}>Wicker Park</p>
                      </address>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>Instagram</p>
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
                      Book Now
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
                  <div className="ih-card p-8" style={{ border: `1px solid ${BORDER_GOLD}`, backgroundColor: "#fff" }}>
                    <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                      Location
                    </p>
                    <h3 className="text-lg mb-3" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>Wicker Park, Chicago</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                      Our office is located at 1509 North Western Avenue in the heart of Wicker Park. We serve patients from Wicker Park, Bucktown, Logan Square, Ukrainian Village, Lincoln Park, and surrounding Chicago neighborhoods.
                    </p>
                  </div>
                  <div className="ih-card p-8" style={{ border: `1px solid ${BORDER_GOLD}`, backgroundColor: "#fff" }}>
                    <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                      Parking
                    </p>
                    <h3 className="text-lg mb-3" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>Free Private Parking</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                      Free private parking is available immediately south of the building at Western and LeMoyne. No meters, no garages, no stress.
                    </p>
                  </div>
                  <div className="ih-card p-8" style={{ border: `1px solid ${BORDER_GOLD}`, backgroundColor: "#fff" }}>
                    <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                      New Patients
                    </p>
                    <h3 className="text-lg mb-3" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>One-Time Visit Available</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                      Not sure if Illari Health is right for you? A $175 one-time visit lets you meet Dr. Chavez and experience the practice before committing to a membership plan.
                    </p>
                    <a
                      href="/one-time-visit"
                      className="text-xs tracking-widest uppercase hover:opacity-80 transition-opacity"
                      style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}
                    >
                      Learn About One-Time Visits &rarr;
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Neighborhoods Served */}
        <section style={{ backgroundColor: CREAM }} className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Service Area
                </p>
                <h2 className="text-4xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                  Serving Chicago's Northwest Side
                </h2>
                <div className="w-12 h-px mx-auto mb-6" style={{ backgroundColor: GOLD }} />
                <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                  Illari Health is located in Wicker Park and serves patients from across Chicago's northwest neighborhoods and beyond.
                </p>
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Wicker Park",
                "Bucktown",
                "Logan Square",
                "Ukrainian Village",
                "Lincoln Park",
                "West Town",
              ].map((neighborhood, i) => (
                <AnimateOnScroll key={neighborhood} delay={i * 50}>
                  <div className="ih-card p-6 text-center" style={{ border: `1px solid ${BORDER_GOLD}`, backgroundColor: "#fff" }}>
                    <p className="text-sm tracking-wider" style={{ color: CHARCOAL, fontFamily: "'Lora', Georgia, serif" }}>{neighborhood}</p>
                    <p className="text-xs mt-1" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>Chicago, IL</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Sister Practices */}
        <section style={{ backgroundColor: CHARCOAL, borderTop: `1px solid #2a2a2a` }} className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Same Building
                </p>
                <h2 className="text-4xl mb-4" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                  Sister Practices at 1509 N Western
                </h2>
                <div className="w-12 h-px mx-auto" style={{ backgroundColor: GOLD }} />
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
                },
                {
                  name: "Illari Aesthetics",
                  unit: "Unit B",
                  description: "Med spa offering injectables, IV therapy, skincare, and medical weight loss. 773.219.0326.",
                  url: "https://illariaesthetics.com",
                  delay: 80,
                },
              ].map(({ name, unit, description, url, delay }) => (
                <AnimateOnScroll key={name} delay={delay}>
                  <div className="ih-card-dark p-8" style={{ border: `1px solid #2a2a2a`, backgroundColor: "#1a1a1a" }}>
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#5a4a3a", fontFamily: "'Lora', Georgia, serif" }}>{unit}</p>
                    <h3 className="text-lg mb-2" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>{name}</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>{description}</p>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs tracking-widest uppercase hover:opacity-80 transition-opacity"
                      style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}
                    >
                      Visit Website &rarr;
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
