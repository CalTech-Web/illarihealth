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
        alt: "Dr. Milton Chavez MD, FAAFP — Illari Health Chicago",
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
    { "@type": "EducationalOccupationalCredential", credentialCategory: "FAAFP — Fellow, American Academy of Family Physicians" },
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
        <section style={{ backgroundColor: CHARCOAL }} className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <AnimateOnScroll>
              <nav className="text-xs tracking-widest uppercase mb-8" style={{ color: "#5a4a3a", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.15em" }}>
                <a href="/" style={{ color: "#9a8a72" }}>Home</a>
                <span className="mx-2" style={{ color: "#5a4a3a" }}>/</span>
                <span style={{ color: GOLD }}>About</span>
              </nav>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                Wicker Park, Chicago — Since 2010
              </p>
              <h1 className="text-5xl md:text-6xl leading-tight mb-6" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                About Illari Health
              </h1>
              <div className="w-16 h-px mb-6" style={{ backgroundColor: GOLD }} />
              <p className="text-xl leading-relaxed max-w-2xl" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>
                Illari Health was built to restore what medicine lost. Relationship-based primary care with time, attention, and a physician who knows your name, not just your chart number.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Practice Story */}
        <section style={{ backgroundColor: OFF_WHITE }} className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <AnimateOnScroll>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                    Our Story
                  </p>
                  <h2 className="text-4xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                    Relationship-Based Primary Care Since 2010
                  </h2>
                  <div className="w-12 h-px mb-6" style={{ backgroundColor: GOLD }} />
                  <p className="text-base leading-relaxed mb-4" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                    Dr. Milton Chavez opened his private practice in the heart of Wicker Park in 2010 with one mission: to give patients the kind of care that the insurance-driven system had made nearly impossible. Long appointments. A doctor who remembered your history. Direct access when you needed it.
                  </p>
                  <p className="text-base leading-relaxed mb-4" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                    Illari Health is the realization of that mission, offering Direct Primary Care and Concierge Medicine to patients across Chicago's northwest neighborhoods. No insurance friction. Flat, transparent pricing. And a physician with 28 years of training who still takes his own calls.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                    The name Illari, meaning &ldquo;light&rdquo; in Quechua, reflects Dr. Chavez's belief that great medicine should illuminate a path toward optimal health, not obscure it behind paperwork.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={150}>
                <div className="space-y-4">
                  {[
                    { label: "Founded", value: "2010" },
                    { label: "Location", value: "1509 N Western Avenue, Wicker Park, Chicago" },
                    { label: "Physician", value: "Dr. Milton Chavez MD, FAAFP" },
                    { label: "Years in Medicine", value: "28+" },
                    { label: "Patient Rating", value: "4.78 / 5 on Tebra (23 verified reviews)" },
                    { label: "Specialist Network", value: "200+ via RubiconMD" },
                    { label: "Annual Discount", value: "10% off for annual payment" },
                    { label: "Family Discount", value: "10% off when entire family enrolls" },
                  ].map(({ label, value }) => (
                    <div key={label} style={{ borderBottom: `1px solid ${BORDER_GOLD}` }} className="pb-3">
                      <p className="text-xs tracking-wider uppercase mb-0.5" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>{label}</p>
                      <p className="text-sm" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>{value}</p>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Dr. Chavez */}
        <section style={{ backgroundColor: CHARCOAL }} className="py-24">
          <div className="max-w-4xl mx-auto px-6">
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
                  <Image
                    src="/assets/team/dr-milton-chavez.jpg"
                    alt="Dr. Milton Chavez MD, FAAFP — Founder and Medical Director, Illari Health Chicago"
                    width={480}
                    height={580}
                    className="w-full object-cover"
                    style={{ border: `2px solid rgba(222,203,164,0.4)`, display: "block" }}
                  />
                  <div className="mt-4 p-6" style={{ backgroundColor: "#1a1a1a", border: `1px solid #2a2a2a` }}>
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
                <div className="space-y-6">
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
                    <ul className="space-y-2">
                      {[
                        "MD — Meharry Medical College, Nashville, TN",
                        "Family Medicine Residency — Rush University, Chicago",
                        "Surgical Residency and Pediatric Surgical Fellowship — UCLA",
                        "Mini-Epilepsy Fellowship — Bowman Grey School of Medicine",
                        "FAAFP — Fellow, American Academy of Family Physicians",
                        "Board-Certified Family Physician",
                        "Illinois Licensed Since 1997",
                        "28+ Years in Medicine",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                          <span style={{ color: GOLD, marginTop: "2px", flexShrink: 0 }}>&#10003;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>Areas of Expertise</p>
                    <div className="flex flex-wrap gap-2">
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
                        <span key={tag} className="px-3 py-1 text-xs tracking-wider" style={{ border: `1px solid #2a2a2a`, color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
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
          <div className="max-w-4xl mx-auto px-6">
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
                <div className="space-y-4">
                  <p className="text-base leading-relaxed" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                    Karen Corona is a Board-Certified Family Nurse Practitioner with more than five years of diverse clinical experience. She holds a Master of Science in Nursing (MSN) and is certified as both an Advanced Practice Registered Nurse (APRN) and a Family Nurse Practitioner (FNP-C).
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                    Her clinical background spans Women's Health, Family Medicine, Inpatient Care, and Medical Weight Loss, bringing a broad and patient-focused lens to every encounter at Illari Health.
                  </p>
                  <div className="mt-6">
                    <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>Credentials</p>
                    <ul className="space-y-2">
                      {[
                        "MSN — Master of Science in Nursing",
                        "APRN — Advanced Practice Registered Nurse",
                        "FNP-C — Board-Certified Family Nurse Practitioner",
                        "5+ Years Diverse Clinical Experience",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: GOLD }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>Specialties</p>
                    <div className="flex flex-wrap gap-2">
                      {["Women's Health", "Family Medicine", "Inpatient Care", "Medical Weight Loss"].map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs tracking-wider" style={{ border: `1px solid ${BORDER_GOLD}`, color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
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
                  alt="Karen Corona MSN, APRN, FNP-C — Family Nurse Practitioner at Illari Health Chicago"
                  width={480}
                  height={560}
                  className="w-full object-cover"
                  style={{ border: `1px solid ${BORDER_GOLD}` }}
                />
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section style={{ backgroundColor: OFF_WHITE }} className="py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <AnimateOnScroll>
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                Our Philosophy
              </p>
              <h2 className="text-4xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                Medicine Practiced With Integrity
              </h2>
              <div className="w-12 h-px mx-auto mb-8" style={{ backgroundColor: GOLD }} />
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                Illari Health exists because the standard model of primary care fails most people. Rushed appointments. Billing friction. A different doctor every visit. Insurance constraints that override clinical judgment.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                The concierge and direct primary care models return the relationship between patient and physician to the center of healthcare. At Illari Health, that means you see the same doctor, every visit. You get time. You get answers. And you get a physician whose only agenda is your health.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                Every member of the Illari Health team shares this commitment. Integrity and respect are not aspirational values. They are the standard.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: CHARCOAL, borderTop: `1px solid #2a2a2a` }} className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <AnimateOnScroll>
              <h2 className="text-4xl mb-4" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                Begin Your Care at Illari Health
              </h2>
              <div className="w-12 h-px mx-auto mb-6" style={{ backgroundColor: GOLD }} />
              <p className="text-base leading-relaxed mb-8" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                Call to book a one-time visit and meet Dr. Chavez before committing to a membership. 773.227.3303.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:7732273303"
                  className="px-8 py-4 text-sm font-medium tracking-wider uppercase transition-opacity hover:opacity-90"
                  style={{ backgroundColor: GOLD, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                >
                  Call 773.227.3303
                </a>
                <a
                  href="/#contact"
                  className="px-8 py-4 text-sm font-medium tracking-wider uppercase transition-opacity hover:opacity-80"
                  style={{ border: `1px solid ${GOLD}`, color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                >
                  Request a Callback
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
