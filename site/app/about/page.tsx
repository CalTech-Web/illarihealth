import type { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About Dr. Milton Chavez MD, FAAFP | Illari Health Chicago",
  description:
    "Meet Dr. Milton Chavez MD, FAAFP, Board-Certified Family Physician with 28+ years of experience, and Karen Corona MSN, APRN, FNP-C. Illari Health has served Wicker Park, Chicago since 2010.",
  alternates: {
    canonical: "https://illarihealth.com/about",
  },
  openGraph: {
    url: "https://illarihealth.com/about",
    title: "About Dr. Milton Chavez MD, FAAFP | Illari Health Chicago",
    description:
      "Dr. Milton Chavez MD, FAAFP trained at Meharry Medical College, completed his residency at Rush University, and his fellowship at UCLA. Meet the team at Illari Health in Wicker Park.",
    images: [
      {
        url: "/assets/team/dr-milton-chavez.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Milton Chavez MD, FAAFP, Illari Health Chicago",
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
      name: "About",
      item: "https://illarihealth.com/about",
    },
  ],
};

const drChavezJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": "https://illarihealth.com/about#dr-chavez",
  name: "Dr. Milton Chavez MD, FAAFP",
  honorificPrefix: "Dr.",
  honorificSuffix: "MD, FAAFP",
  jobTitle: "Founder and Medical Director",
  description:
    "Board-Certified Family Physician with 28+ years of experience. Trained at Meharry Medical College, residency at Rush University Chicago, fellowship at UCLA. Licensed in Illinois since 1997.",
  image: "https://illarihealth.com/assets/team/dr-milton-chavez.jpg",
  url: "https://illarihealth.com/about",
  worksFor: {
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
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Meharry Medical College",
      address: { "@type": "PostalAddress", addressLocality: "Nashville", addressRegion: "TN" },
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Rush University",
      address: { "@type": "PostalAddress", addressLocality: "Chicago", addressRegion: "IL" },
    },
    {
      "@type": "CollegeOrUniversity",
      name: "UCLA",
      address: { "@type": "PostalAddress", addressLocality: "Los Angeles", addressRegion: "CA" },
    },
  ],
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", credentialCategory: "MD" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "FAAFP, Fellow, American Academy of Family Physicians" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "Board-Certified Family Physician" },
  ],
  medicalSpecialty: [
    "Family Medicine",
    "Non-Operative Orthopedics",
    "Regenerative Medicine",
    "Surgical Dermatology",
    "Sports Medicine",
  ],
  knowsAbout: [
    "Concierge Medicine",
    "Direct Primary Care",
    "Family Medicine",
    "Preventive Care",
    "Non-Operative Orthopedics",
    "Regenerative Medicine",
    "Surgical Dermatology",
    "Sports Medicine",
    "Internal Medicine",
  ],
};

const karenCoronaJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://illarihealth.com/about#karen-corona",
  name: "Karen Corona MSN, APRN, FNP-C",
  honorificSuffix: "MSN, APRN, FNP-C",
  jobTitle: "Family Nurse Practitioner",
  description:
    "Board-Certified Family Nurse Practitioner with 5+ years of diverse clinical experience specializing in Women's Health, Family Medicine, Inpatient Care, and Medical Weight Loss.",
  image: "https://illarihealth.com/assets/team/karen-corona.jpg",
  worksFor: {
    "@type": "MedicalClinic",
    name: "Illari Health",
    url: "https://illarihealth.com",
  },
};

const GOLD = "#DECBA4";
const CHARCOAL = "#161616";
const OFF_WHITE = "#FAF7F2";
const CREAM = "#F1E8D8";
const BORDER_GOLD = "#DECBA3";

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(drChavezJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(karenCoronaJsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/assets/gallery/horiz-consultation.jpg"
              alt="About Illari Health"
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
                <span style={{ color: GOLD }}>About</span>
              </nav>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                Wicker Park, Chicago, Since 2010
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                About Illari Health
              </h1>
              <div className="w-16 h-px mx-auto mb-6" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
              <p className="text-xl leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>
                Illari Health was built to restore what medicine lost. Relationship-based primary care with time, attention, and a physician who knows your name, not just your chart number.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:7732273303"
                  className="ih-btn ih-btn-gold px-10 py-4 text-sm font-medium tracking-wider uppercase text-center"
                  style={{ backgroundColor: GOLD, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                >
                  Call for Priority Booking
                </a>
                <a
                  href="/contact"
                  className="ih-btn ih-btn-outline px-10 py-4 text-sm font-medium tracking-wider uppercase text-center"
                  style={{ border: "1px solid rgba(222,203,164,0.5)", color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                >
                  Contact Us
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <div aria-hidden="true" style={{ height: "4px", background: `linear-gradient(90deg, transparent 5%, ${GOLD} 50%, transparent 95%)` }} />

        {/* Practice Story */}
        <section style={{ backgroundColor: OFF_WHITE }} className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <AnimateOnScroll>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                    Our Story
                  </p>
                  <h2 className="text-4xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                    Relationship-Based Primary Care Since 2010
                  </h2>
                  <div className="w-12 h-px mb-8" style={{ backgroundColor: GOLD }} />
                  <p className="text-base leading-relaxed mb-6" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                    <span className="text-3xl font-semibold float-left mr-2 leading-none" style={{ color: GOLD, fontFamily: "'Abril Fatface', serif", marginTop: "4px" }}>D</span>r. Milton Chavez opened his private practice in the heart of Wicker Park in 2010 with one mission: to give patients the kind of care that the insurance-driven system had made nearly impossible. Long appointments. A doctor who remembered your history. Direct access when you needed it.
                  </p>
                  <p className="text-base leading-relaxed mb-6" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                    Illari Health is the realization of that mission, offering Direct Primary Care and Concierge Medicine to patients across Chicago's northwest neighborhoods. No insurance friction. Flat, transparent pricing. And a physician with 28 years of training who still takes his own calls.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                    The name Illari, meaning &ldquo;light&rdquo; in Quechua, reflects Dr. Chavez's belief that great medicine should illuminate a path toward optimal health, not obscure it behind paperwork.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={150}>
                <div className="relative">
                  {/* Decorative "Since 2010" accent */}
                  <div className="absolute -top-8 -right-2 select-none pointer-events-none" aria-hidden="true">
                    <span className="text-8xl font-bold" style={{ color: GOLD, opacity: 0.1, fontFamily: "'Abril Fatface', serif" }}>2010</span>
                  </div>
                  <div className="ih-card p-6" style={{ backgroundColor: "#ffffff", border: `1px solid ${BORDER_GOLD}` }}>
                    <div className="space-y-0">
                      {[
                        { label: "Founded", value: "2010" },
                        { label: "Location", value: "1509 N Western Avenue, Wicker Park, Chicago" },
                        { label: "Physician", value: "Dr. Milton Chavez MD, FAAFP" },
                        { label: "Years in Medicine", value: "28+" },
                        { label: "Patient Rating", value: "4.78 / 5 on Tebra (23 verified reviews)" },
                        { label: "Specialist Network", value: "200+ via RubiconMD" },
                        { label: "Annual Discount", value: "10% off for annual payment" },
                        { label: "Family Discount", value: "10% off when entire family enrolls" },
                      ].map(({ label, value }, idx) => (
                        <div key={label} className="flex items-start gap-3 py-3.5" style={{ borderBottom: idx < 7 ? `1px solid rgba(222,203,164,0.3)` : "none" }}>
                          <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: GOLD }} />
                          <div>
                            <p className="text-xs tracking-wider uppercase mb-0.5" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>{label}</p>
                            <p className="text-sm" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>{value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Dr. Chavez */}
        <section className="relative overflow-hidden py-24" style={{ backgroundColor: CHARCOAL }}>
          <div className="absolute inset-0">
            <Image
              src="/assets/gallery/horiz-medical-team.jpg"
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
                  Medical Director
                </p>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                  Dr. Milton Chavez MD, FAAFP
                </h2>
                <div className="w-12 h-px mx-auto" style={{ backgroundColor: GOLD }} />
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <AnimateOnScroll>
                <div className="relative">
                  {/* Gold border glow around photo */}
                  <Image
                    src="/assets/team/dr-milton-chavez.jpg"
                    alt="Dr. Milton Chavez MD, FAAFP, Founder and Medical Director, Illari Health Chicago"
                    width={480}
                    height={580}
                    className="w-full object-cover ih-img"
                    style={{ border: `2px solid rgba(222,203,164,0.5)`, display: "block", boxShadow: `0 0 30px rgba(222,203,164,0.15), 0 8px 32px rgba(0,0,0,0.3)` }}
                  />
                  {/* Quote card with gold left border */}
                  <div className="mt-4 p-6 ih-card-dark" style={{ backgroundColor: "#1a1a1a", border: `1px solid #2a2a2a`, borderLeft: `3px solid ${GOLD}` }}>
                    <svg width="24" height="20" viewBox="0 0 24 20" className="mb-3" aria-hidden="true" style={{ opacity: 0.4 }}>
                      <path d="M0 20V12.4C0 5.07 4.2 1.07 10.5 0l1.3 2.6C6.5 4.2 5.3 7.5 5 10h4.5v10H0zm13 0V12.4C13 5.07 17.2 1.07 23.5 0l1.3 2.6c-5.3 1.6-6.5 4.9-6.8 7.4H22.5v10H13z" fill={GOLD} />
                    </svg>
                    <p className="text-sm italic leading-relaxed mb-3" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>
                      &ldquo;We strive to inspire and aid those seeking their optimal health, wellness and healing through efficient service, quality consultations and our core values: integrity and respect.&rdquo;
                    </p>
                    <p className="text-xs tracking-wider uppercase" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>
                      Dr. Milton Chavez MD, FAAFP
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={120}>
                <div className="space-y-6 relative">
                  {/* Decorative "28+" accent */}
                  <div className="absolute -top-4 -right-2 select-none pointer-events-none hidden md:block" aria-hidden="true">
                    <span className="text-8xl font-bold" style={{ color: GOLD, opacity: 0.07, fontFamily: "'Abril Fatface', serif" }}>28+</span>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                    Dr. Chavez trained at <strong style={{ color: "#d4c4a8" }}>Meharry Medical College</strong> in Nashville, one of the nation's oldest historically Black medical schools and a globally respected institution. He completed his family medicine residency at <strong style={{ color: "#d4c4a8" }}>Rush University Medical Center</strong> in Chicago, followed by a surgical residency and pediatric surgical fellowship at <strong style={{ color: "#d4c4a8" }}>UCLA</strong>, and a mini-epilepsy fellowship at Bowman Grey School of Medicine.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                    He has been licensed in Illinois since 1997 and is a Fellow of the American Academy of Family Physicians (FAAFP), the highest recognition awarded to board-certified family physicians who demonstrate commitment to continuing medical education and professional standards.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                    His training spans family medicine, non-operative orthopedics, regenerative medicine, surgical dermatology, and minor outpatient surgery. Most conditions that other primary care practices refer out, Dr. Chavez handles in-house, reducing the time and cost burden on his patients.
                  </p>
                  <div className="mt-8">
                    <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>Credentials</p>
                    <ul className="space-y-2.5">
                      {[
                        "MD, Meharry Medical College, Nashville, TN",
                        "Family Medicine Residency, Rush University, Chicago",
                        "Surgical Residency and Pediatric Surgical Fellowship, UCLA",
                        "Mini-Epilepsy Fellowship, Bowman Grey School of Medicine",
                        "FAAFP, Fellow, American Academy of Family Physicians",
                        "Board-Certified Family Physician",
                        "Illinois Licensed Since 1997",
                        "28+ Years in Medicine",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                          <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: GOLD }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>Areas of Expertise</p>
                    <div className="flex flex-wrap gap-2.5">
                      {[
                        "Family Medicine",
                        "Concierge Medicine",
                        "Direct Primary Care",
                        "Preventive Care",
                        "Non-Operative Orthopedics",
                        "Regenerative Medicine",
                        "Surgical Dermatology",
                        "Sports Medicine",
                        "Pediatric Care",
                        "Minor Outpatient Surgery",
                      ].map((tag) => (
                        <span key={tag} className="px-4 py-1.5 text-xs tracking-wider ih-tag" style={{ border: `1px solid rgba(222,203,164,0.25)`, color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Karen Corona */}
        <section style={{ backgroundColor: CREAM }} className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Family Nurse Practitioner
                </p>
                <h2 className="text-4xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                  Karen Corona MSN, APRN, FNP-C
                </h2>
                <div className="w-12 h-px mx-auto" style={{ backgroundColor: GOLD }} />
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll delay={120}>
                <div className="space-y-4 relative">
                  {/* Decorative accent */}
                  <div className="absolute -top-6 -left-4 select-none pointer-events-none hidden md:block" aria-hidden="true">
                    <svg width="40" height="40" viewBox="0 0 40 40" style={{ opacity: 0.12 }}>
                      <circle cx="20" cy="20" r="18" stroke={GOLD} strokeWidth="2" fill="none" />
                      <circle cx="20" cy="20" r="6" fill={GOLD} />
                    </svg>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                    Karen Corona is a Board-Certified Family Nurse Practitioner with more than five years of diverse clinical experience. She holds a Master of Science in Nursing (MSN) and is certified as both an Advanced Practice Registered Nurse (APRN) and a Family Nurse Practitioner (FNP-C).
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                    Her clinical background spans Women's Health, Family Medicine, Inpatient Care, and Medical Weight Loss, bringing a broad and patient-focused lens to every encounter at Illari Health.
                  </p>
                  <div className="mt-6">
                    <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>Credentials</p>
                    <ul className="space-y-2.5">
                      {[
                        "MSN, Master of Science in Nursing",
                        "APRN, Advanced Practice Registered Nurse",
                        "FNP-C, Board-Certified Family Nurse Practitioner",
                        "5+ Years Diverse Clinical Experience",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                          <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: GOLD }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>Specialties</p>
                    <div className="flex flex-wrap gap-2.5">
                      {["Women's Health", "Family Medicine", "Inpatient Care", "Medical Weight Loss"].map((tag) => (
                        <span key={tag} className="px-4 py-1.5 text-xs tracking-wider ih-tag" style={{ border: `1px solid ${BORDER_GOLD}`, color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <Image
                  src="/assets/team/karen-corona.jpg"
                  alt="Karen Corona MSN, APRN, FNP-C, Family Nurse Practitioner at Illari Health Chicago"
                  width={480}
                  height={560}
                  className="w-full object-cover ih-img"
                  style={{ border: `2px solid rgba(222,203,164,0.5)`, boxShadow: `0 0 30px rgba(222,203,164,0.12), 0 8px 32px rgba(0,0,0,0.08)` }}
                />
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section style={{ backgroundColor: CHARCOAL }} className="py-24 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Our Philosophy
                </p>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                  Medicine Practiced With Integrity
                </h2>
                <div className="w-16 h-px mx-auto" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
                  heading: "Rushed Appointments End Here",
                  body: "Illari Health exists because the standard model of primary care fails most people. Rushed appointments. Billing friction. A different doctor every visit. Insurance constraints that override clinical judgment.",
                  delay: 0,
                },
                {
                  icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v-2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
                  heading: "The Relationship Comes First",
                  body: "The concierge and direct primary care models return the relationship between patient and physician to the center of healthcare. At Illari Health, that means you see the same doctor, every visit. You get time. You get answers.",
                  delay: 100,
                },
                {
                  icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                  heading: "Integrity Is the Standard",
                  body: "Every member of the Illari Health team shares this commitment. Integrity and respect are not aspirational values. They are the standard. Your physician's only agenda is your health.",
                  delay: 200,
                },
              ].map(({ icon, heading, body, delay }) => (
                <AnimateOnScroll key={heading} delay={delay} className="flex">
                  <div className="ih-card-dark p-8 flex-1 flex flex-col" style={{ backgroundColor: "rgba(26,26,26,0.6)", border: `1px solid rgba(222,203,164,0.12)` }}>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(222,203,164,0.08)", border: `1px solid rgba(222,203,164,0.15)` }}>
                      {icon}
                    </div>
                    <h3 className="text-lg mb-3" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>{heading}</h3>
                    <div className="w-10 h-px mb-4" style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
                    <p className="text-sm leading-relaxed flex-1" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>{body}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Featured quote */}
            <AnimateOnScroll delay={100}>
              <div className="max-w-3xl mx-auto text-center p-10 md:p-14" style={{ backgroundColor: "rgba(222,203,164,0.06)", border: `1px solid rgba(222,203,164,0.12)`, borderRadius: "16px" }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="mx-auto mb-6" style={{ opacity: 0.3 }}>
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill={GOLD}/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill={GOLD}/>
                </svg>
                <p className="text-xl md:text-2xl italic leading-relaxed mb-6" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>
                  We strive to inspire and aid those seeking their optimal health, wellness and healing through efficient service, quality consultations and our core values: integrity and respect.
                </p>
                <div className="w-8 h-px mx-auto mb-4" style={{ backgroundColor: GOLD }} />
                <p className="text-xs tracking-widest uppercase" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>Dr. Milton Chavez MD, FAAFP</p>
                <p className="text-xs mt-1" style={{ color: "#5a4a3a", fontFamily: "'Lora', Georgia, serif" }}>Founder and Medical Director</p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-24" style={{ backgroundColor: CHARCOAL }}>
          <div className="absolute inset-0">
            <Image
              src="/assets/gallery/horiz-doctor-patient.jpg"
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
                Experience Medicine as It Should Be
              </p>
              <h2 className="text-4xl md:text-5xl mb-4" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                Begin Your Care at Illari Health
              </h2>
              <div className="w-24 h-px mx-auto mb-6" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
              {/* Trust indicator pills */}
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                {["28+ Years Experience", "Board-Certified", "4.78\u2605 Rating"].map((pill) => (
                  <span key={pill} className="ih-pill" style={{ border: `1px solid rgba(222,203,164,0.3)`, color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>
                    {pill}
                  </span>
                ))}
              </div>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                Call to book a one-time visit and meet Dr. Chavez before committing to a membership. 773.227.3303.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:7732273303"
                  className="px-8 py-4 text-sm font-medium tracking-wider uppercase transition-opacity hover:opacity-90 ih-btn ih-btn-gold"
                  style={{ backgroundColor: GOLD, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                >
                  Call for Priority Booking
                </a>
                <a
                  href="/#contact"
                  className="px-8 py-4 text-sm font-medium tracking-wider uppercase transition-opacity hover:opacity-80 ih-btn ih-btn-outline"
                  style={{ border: `1px solid ${GOLD}`, color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                >
                  Request a Callback
                </a>
              </div>
              {/* Social proof and address */}
              <p className="text-xs tracking-wider uppercase mb-2" style={{ color: "rgba(222,203,164,0.6)", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.1em" }}>
                Serving Wicker Park since 2010
              </p>
              <p className="text-xs flex items-center justify-center gap-1.5" style={{ color: "rgba(154,138,114,0.7)", fontFamily: "'Lora', Georgia, serif" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                1509 N Western Avenue, Chicago, IL 60622
              </p>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
