import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | Illari Health",
  description: "Answers to common questions about Direct Primary Care, Concierge Medicine, pricing, specialist access, and what to expect at Illari Health in Wicker Park, Chicago.",
};

const GOLD = "#DECBA4";
const CHARCOAL = "#161616";
const OFF_WHITE = "#FAF7F2";
const CREAM = "#F1E8D8";
const BORDER_GOLD = "#DECBA3";

const faqs = [
  {
    q: "What is Direct Primary Care?",
    a: "Direct Primary Care at Illari Health is a flat $150 a month for direct access to your physician. No insurance involved. No co-pays, no deductibles. Your fee covers visits, labs, and a comprehensive physical.",
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
    a: "Yes. Your membership covers primary care, labs, and in-office services, but you will still need health insurance for hospitalizations, specialist care, and emergency services. Think of DPC as a better way to access primary care, not a substitute for insurance.",
  },
  {
    q: "Is there an option for a one-time visit without joining?",
    a: "Yes. A single visit is $175, no membership required. Come once, no strings. It is a solid way to meet Dr. Chavez and get a sense of the practice before deciding on a plan.",
  },
  {
    q: "What medical conditions do you treat?",
    a: "Illari Health offers general primary care for adults and children, sports medicine, clinical and surgical dermatology, and non-operative orthopedics and biologics. Dr. Chavez's 28+ years of training allow the practice to handle a wide range of conditions that typically require a specialist referral elsewhere.",
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

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: CHARCOAL }} className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
              Frequently Asked Questions
            </p>
            <h1 className="text-5xl md:text-6xl mb-4" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
              Common Questions
            </h1>
            <div className="w-12 h-px mx-auto mb-6" style={{ backgroundColor: GOLD }} />
            <p className="text-lg" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
              Straight answers about how this practice works, what it costs, and what you can expect.
            </p>
          </div>
        </section>

        {/* FAQ List */}
        <section style={{ backgroundColor: OFF_WHITE }} className="py-24">
          <div className="max-w-3xl mx-auto px-6">
            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section style={{ backgroundColor: CREAM, borderTop: `1px solid ${BORDER_GOLD}` }} className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-4xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
              Still Have Questions?
            </h2>
            <div className="w-12 h-px mx-auto mb-6" style={{ backgroundColor: GOLD }} />
            <p className="text-base leading-relaxed mb-8" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
              Call us directly and we will walk you through your options. DPC and Concierge members receive priority scheduling. One-time visits are available for $175 with no commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7732273303"
                className="px-8 py-4 text-sm font-medium tracking-wider uppercase transition-opacity hover:opacity-90"
                style={{ backgroundColor: CHARCOAL, color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
              >
                Call 773.227.3303
              </a>
              <a
                href="mailto:info@illarihealth.com"
                className="px-8 py-4 text-sm font-medium tracking-wider uppercase transition-opacity hover:opacity-80"
                style={{ border: `1px solid ${CHARCOAL}`, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
              >
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Specialist Access Section */}
        <section style={{ backgroundColor: CHARCOAL }} className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Specialist Access
                </p>
                <h2 className="text-4xl mb-4" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                  200+ Specialists via RubiconMD
                </h2>
                <div className="w-12 h-px mb-6" style={{ backgroundColor: GOLD }} />
                <p className="text-base leading-relaxed mb-4" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                  Members get access to RubiconMD, connecting them to over 200 specialists, including psychiatry, dermatology, cardiology, and more, at no extra cost.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                  PPO patients are referred to vetted in-network specialists. Uninsured patients receive a curated list of cash-price options.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["Psychiatry", "Dermatology", "Cardiology", "Orthopedics", "Neurology", "Endocrinology"].map((specialty) => (
                  <div key={specialty} className="p-4 text-center" style={{ border: `1px solid #2a2a2a`, backgroundColor: "#1a1a1a" }}>
                    <p className="text-sm" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>{specialty}</p>
                  </div>
                ))}
                <div className="col-span-2 p-4 text-center" style={{ border: `1px solid ${GOLD}`, backgroundColor: "#1a1a1a" }}>
                  <p className="text-sm" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>200+ Specialties Available</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
