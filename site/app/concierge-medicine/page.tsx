import type { Metadata } from "next";
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
        <section style={{ backgroundColor: CHARCOAL }} className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <AnimateOnScroll>
              <nav className="text-xs tracking-widest uppercase mb-8" style={{ color: "#5a4a3a", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.15em" }}>
                <a href="/" style={{ color: "#9a8a72" }}>Home</a>
                <span className="mx-2" style={{ color: "#5a4a3a" }}>/</span>
                <span style={{ color: GOLD }}>Concierge Medicine</span>
              </nav>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                Wicker Park, Chicago
              </p>
              <h1 className="text-5xl md:text-6xl leading-tight mb-6" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                Concierge Medicine in Chicago
              </h1>
              <div className="w-16 h-px mb-6" style={{ backgroundColor: GOLD }} />
              <p className="text-xl leading-relaxed mb-8 max-w-2xl" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>
                Your physician. Available to you. Unlimited visits, 90-minute appointments, and a direct line to Dr. Milton Chavez MD, FAAFP for $300 per month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:7732273303"
                  className="ih-btn ih-btn-gold px-8 py-4 text-sm font-medium tracking-wider uppercase text-center transition-opacity hover:opacity-90"
                  style={{ backgroundColor: GOLD, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                >
                  Call for Priority Booking
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

        {/* What Is Concierge Medicine */}
        <section style={{ backgroundColor: OFF_WHITE }} className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  What It Is
                </p>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                  What Is Concierge Medicine?
                </h2>
                <div className="w-12 h-px mx-auto mb-8" style={{ backgroundColor: GOLD }} />
                <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                  Concierge medicine is a membership-based model that replaces insurance-driven care with a direct relationship between you and your physician. At Illari Health, that means Dr. Milton Chavez MD, FAAFP dedicates his full attention to you, not to billing codes or 7-minute appointment slots.
                </p>
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[
                {
                  heading: "Unlimited Visits",
                  body: "No caps on how often you see Dr. Chavez. Come in monthly for preventive care or more frequently when you need it. Your membership covers every visit.",
                  delay: 0,
                },
                {
                  heading: "30 to 60-Minute Appointments",
                  body: "Every appointment is long enough to actually address your health. Dr. Chavez learns your history, your goals, and your concerns, not just the presenting symptom.",
                  delay: 80,
                },
                {
                  heading: "Direct Physician Access",
                  body: "Call or text Dr. Chavez directly. No phone tree, no nurse relay, no hold music. When you need an answer, you get one.",
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

        {/* Concierge Plan Details */}
        <section style={{ backgroundColor: CHARCOAL }} className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Premier Plan
                </p>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                  Everything Included
                </h2>
                <div className="w-12 h-px mx-auto" style={{ backgroundColor: GOLD }} />
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <AnimateOnScroll>
                <div style={{ border: `2px solid ${GOLD}`, backgroundColor: "#1a1a1a" }} className="ih-card-dark ih-gold-glow p-8">
                  <div className="mb-6">
                    <p className="text-5xl mb-1" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>$300</p>
                    <p className="text-sm" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>/month + $200 enrollment fee</p>
                    <p className="text-xs mt-1" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>10% off when paid annually. 10% off for entire families.</p>
                  </div>
                  <ul className="space-y-3 mb-8">
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
                        <span style={{ color: GOLD, marginTop: "2px" }}>&#10003;</span>
                        <span className="text-sm" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:7732273303"
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
                      title: "Executive Wellness Program",
                      body: "Your first visit is a 90-minute executive wellness session. Dr. Chavez reviews your complete health history, orders an advanced blood panel, performs a modern body composition analysis, and builds a long-term care plan tailored to your goals.",
                    },
                    {
                      title: "All Labs and EKG Included",
                      body: "Every standard lab, point-of-care test, and in-office EKG is included in your monthly membership. For anything beyond standard, you receive 30% off as a Concierge member.",
                    },
                    {
                      title: "Specialist Access via RubiconMD",
                      body: "When a specialist is needed, Dr. Chavez connects you to 200+ specialties through RubiconMD at no added cost. Same-day consultations across psychiatry, cardiology, dermatology, and more.",
                    },
                    {
                      title: "Priority Scheduling",
                      body: "Concierge members receive priority booking. Same-day and next-day appointments are available most of the time. You are not waiting weeks for a routine visit.",
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
          <div className="max-w-4xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Is This Right For You
                </p>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                  Who Chooses Concierge Medicine
                </h2>
                <div className="w-12 h-px mx-auto" style={{ backgroundColor: GOLD }} />
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  label: "Executives and Professionals",
                  body: "You cannot afford to be sidelined. Concierge membership gives you same-day access, a direct physician line, and a doctor who knows your health history without having to re-introduce yourself every visit.",
                  delay: 0,
                },
                {
                  label: "Patients Tired of Rushed Care",
                  body: "You have left appointments feeling like you did not get your questions answered. Concierge visits run 30 to 60 minutes. Dr. Chavez does not have another patient waiting behind you.",
                  delay: 80,
                },
                {
                  label: "Those Seeking Comprehensive Prevention",
                  body: "The advanced blood panel, body composition analysis, and executive wellness program give you a complete picture of your health, not just a check on your current complaints.",
                  delay: 0,
                },
                {
                  label: "Self-Employed Without Employer Insurance",
                  body: "The Concierge plan covers primary care comprehensively at a flat monthly rate. No co-pays, no deductibles, no surprise bills. You know exactly what you are paying.",
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

        {/* Physician */}
        <section style={{ backgroundColor: CREAM }} className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                    Your Physician
                  </p>
                  <h2 className="text-4xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                    Dr. Milton Chavez MD, FAAFP
                  </h2>
                  <div className="w-12 h-px mb-6" style={{ backgroundColor: GOLD }} />
                  <p className="text-base leading-relaxed mb-4" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                    Dr. Chavez trained at Meharry Medical College, completed his residency at Rush University in Chicago, and his fellowship at UCLA. He has been practicing in Illinois since 1997, and has led Illari Health since 2010.
                  </p>
                  <p className="text-base leading-relaxed mb-6" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                    His expertise spans family medicine, non-operative orthopedics, regenerative medicine, surgical dermatology, and minor outpatient surgery. Most conditions that other primary care offices refer out, Dr. Chavez handles in-house.
                  </p>
                  <div className="space-y-2 text-sm" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                    {[
                      "Meharry Medical College",
                      "Residency: Rush University, Chicago",
                      "Fellowship: UCLA",
                      "Illinois Licensed Since 1997",
                      "Board-Certified Family Physician, FAAFP",
                      "28+ Years in Medicine",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: GOLD }} />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={150}>
                <div className="ih-card p-6" style={{ border: `1px solid ${BORDER_GOLD}`, backgroundColor: "#fff" }}>
                  <p className="text-sm italic leading-relaxed mb-4" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                    &ldquo;We strive to inspire and aid those seeking their optimal health, wellness and healing through efficient service, quality consultations and our core values: integrity and respect.&rdquo;
                  </p>
                  <p className="text-xs tracking-wider uppercase" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>
                    Dr. Milton Chavez MD, FAAFP
                  </p>
                  <p className="text-xs mt-1" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                    Founder and Medical Director, Illari Health
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Patient Reviews */}
        <section style={{ backgroundColor: CHARCOAL }} className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Patient Reviews
                </p>
                <h2 className="text-4xl mb-2" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                  What Patients Say
                </h2>
                <p className="text-sm" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                  4.78 out of 5 on Tebra, 23 verified reviews
                </p>
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "Chad M.", quote: "Dr. Chavez has my highest recommendation. He is knowledgeable, intelligent, empathic, consistent, thorough and soft-spoken. Basically, he delivers what most people want and deserve from their MD.", delay: 0 },
                { name: "Albert T.", quote: "My visit with Dr. Chavez is always pleasant. I love that the Doctors take your appointment on time, very attentive and professional and knowledgeable of my medical history.", delay: 100 },
              ].map(({ name, quote, delay }) => (
                <AnimateOnScroll key={name} delay={delay}>
                  <div className="ih-card-dark p-8" style={{ border: `1px solid #2a2a2a`, backgroundColor: "#1a1a1a" }}>
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={GOLD}>
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-base italic leading-relaxed mb-4" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>
                      &ldquo;{quote}&rdquo;
                    </p>
                    <p className="text-xs tracking-wider uppercase" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>{name}</p>
                    <p className="text-xs" style={{ color: "#5a4a3a", fontFamily: "'Lora', Georgia, serif" }}>Verified Patient</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ backgroundColor: CREAM, borderTop: `1px solid ${BORDER_GOLD}` }} className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <AnimateOnScroll>
              <h2 className="text-4xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                Begin Your Concierge Membership
              </h2>
              <div className="w-12 h-px mx-auto mb-6" style={{ backgroundColor: GOLD }} />
              <p className="text-base leading-relaxed mb-8" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                Call us to get started. Not ready to commit? A $175 one-time visit lets you meet Dr. Chavez and see the practice before joining.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:7732273303"
                  className="ih-btn ih-btn-dark px-8 py-4 text-sm font-medium tracking-wider uppercase transition-opacity hover:opacity-90"
                  style={{ backgroundColor: CHARCOAL, color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                >
                  Call 773.227.3303
                </a>
                <a
                  href="/#contact"
                  className="ih-btn ih-btn-outline px-8 py-4 text-sm font-medium tracking-wider uppercase transition-opacity hover:opacity-80"
                  style={{ border: `1px solid ${CHARCOAL}`, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                >
                  Request a Callback
                </a>
              </div>
              <p className="mt-8 text-sm" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
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
