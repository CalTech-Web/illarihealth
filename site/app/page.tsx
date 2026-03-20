import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import AnimateOnScroll from "./components/AnimateOnScroll";

const GOLD = "#DECBA4";
const CHARCOAL = "#161616";
const OFF_WHITE = "#FAF7F2";
const CREAM = "#F1E8D8";
const BORDER_GOLD = "#DECBA3";

export default function Home() {
  return (
    <>
      <Header />
      <main>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/assets/gallery/hero-background.jpg"
              alt="Doctor holding patient's hands warmly"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(22,22,22,0.82) 40%, rgba(22,22,22,0.45) 100%)" }} />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            <div>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                Wicker Park, Chicago
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                Care That Feels Personal Again
              </h1>
              <div className="w-16 h-px mb-6" style={{ backgroundColor: GOLD }} />
              <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>
                Most doctors give you 7 minutes. Dr. Milton Chavez gives you 30 to 60. He has practiced in Wicker Park since 2010, with flat pricing, no co-pays, and a direct line to your physician.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:7732273303"
                  className="px-8 py-4 text-sm font-medium tracking-wider uppercase text-center transition-opacity hover:opacity-90"
                  style={{ backgroundColor: GOLD, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                >
                  Call for Priority Booking
                </a>
                <a
                  href="#membership"
                  className="px-8 py-4 text-sm font-medium tracking-wider uppercase text-center transition-opacity hover:opacity-80"
                  style={{ border: `1px solid ${GOLD}`, color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                >
                  View Membership Plans
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <p className="text-2xl font-semibold" style={{ color: GOLD, fontFamily: "'Abril Fatface', serif" }}>4.78</p>
                  <p className="text-xs" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>Tebra Rating</p>
                </div>
                <div className="w-px h-10" style={{ backgroundColor: "#333" }} />
                <div>
                  <p className="text-2xl font-semibold" style={{ color: GOLD, fontFamily: "'Abril Fatface', serif" }}>28+</p>
                  <p className="text-xs" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>Years Experience</p>
                </div>
                <div className="w-px h-10" style={{ backgroundColor: "#333" }} />
                <div>
                  <p className="text-2xl font-semibold" style={{ color: GOLD, fontFamily: "'Abril Fatface', serif" }}>200+</p>
                  <p className="text-xs" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>Specialists via RubiconMD</p>
                </div>
              </div>
            </div>

            {/* Hero Right Column - Physician Credential Card */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="p-8 w-full max-w-sm" style={{
                backgroundColor: "rgba(22,22,22,0.78)",
                border: `1px solid rgba(222,203,164,0.35)`,
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
              }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-full" style={{ border: `2px solid ${GOLD}` }}>
                    <Image
                      src="/assets/team/dr-milton-chavez.jpg"
                      alt="Dr. Milton Chavez MD, FAAFP"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-lg leading-tight" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>Dr. Milton Chavez</p>
                    <p className="text-sm" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>MD, FAAFP</p>
                    <p className="text-xs" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>Founder and Medical Director</p>
                  </div>
                </div>
                <div className="w-full h-px mb-5" style={{ backgroundColor: "rgba(222,203,164,0.2)" }} />
                <div className="space-y-2.5 mb-5">
                  {[
                    "Meharry Medical College",
                    "Residency: Rush University, Chicago",
                    "Fellowship: UCLA",
                    "Illinois Licensed Since 1997",
                    "28+ Years in Medicine",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: GOLD }} />
                      <p className="text-xs" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>{item}</p>
                    </div>
                  ))}
                </div>
                <div className="w-full h-px mb-5" style={{ backgroundColor: "rgba(222,203,164,0.2)" }} />
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.15em" }}>Membership Plans</p>
                <div className="flex gap-4">
                  <div className="flex-1 text-center py-3" style={{ border: `1px solid rgba(222,203,164,0.2)` }}>
                    <p className="text-xl" style={{ color: GOLD, fontFamily: "'Abril Fatface', serif" }}>$150</p>
                    <p className="text-xs" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>DPC / mo</p>
                  </div>
                  <div className="flex-1 text-center py-3" style={{ border: `1px solid ${GOLD}`, backgroundColor: "rgba(222,203,164,0.08)" }}>
                    <p className="text-xl" style={{ color: GOLD, fontFamily: "'Abril Fatface', serif" }}>$300</p>
                    <p className="text-xs" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>Concierge / mo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <section style={{ backgroundColor: CHARCOAL, borderBottom: `1px solid #2a2a2a` }} className="py-5">
          <AnimateOnScroll>
            <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-4 text-center">
              {[
                "Relationship-Based Primary Care Since 2010",
                "Appointments Start On Time. Every Time.",
                "No Co-Pays. No Deductibles. No Surprise Bills.",
              ].map((text) => (
                <p key={text} className="text-xs tracking-widest uppercase" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}>
                  {text}
                </p>
              ))}
            </div>
          </AnimateOnScroll>
        </section>

        {/* Membership Plans */}
        <section id="membership" style={{ backgroundColor: OFF_WHITE }} className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Membership Plans
                </p>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                  Choose Your Level of Care
                </h2>
                <div className="w-12 h-px mx-auto mb-6" style={{ backgroundColor: GOLD }} />
                <p className="text-lg max-w-2xl mx-auto" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                  No co-pays, no billing surprises. Both plans give you direct access to Dr. Chavez at a flat monthly rate. Pay annually or bring the whole family and save 10%. A $200 enrollment fee applies to either plan.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {/* Concierge - Featured */}
              <div className="lg:col-span-1 relative" style={{ backgroundColor: CHARCOAL, border: `2px solid ${GOLD}` }}>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-xs tracking-widest uppercase" style={{ backgroundColor: GOLD, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif" }}>
                  Premier Plan
                </div>
                <div className="p-8">
                  <h3 className="text-2xl mb-1" style={{ color: GOLD, fontFamily: "'Abril Fatface', serif" }}>
                    Concierge Medicine
                  </h3>
                  <p className="text-xs uppercase tracking-wider mb-6" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                    Executive-Level Care
                  </p>
                  <div className="mb-6">
                    <p className="text-5xl" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>$300</p>
                    <p className="text-sm" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>/month + $200 enrollment fee</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Unlimited visits per month",
                      "All visits, labs, and EKG included",
                      "90-minute executive wellness program",
                      "Advanced blood panel included",
                      "Body composition analysis",
                      "Appointments 30 to 60 minutes",
                      "Direct communication with Dr. Chavez",
                      "All point-of-care services included",
                      "30% off additional labs and procedures",
                      "Priority booking guaranteed",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span style={{ color: GOLD, marginTop: "2px" }}>&#10003;</span>
                        <span className="text-sm" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:7732273303"
                    className="block w-full py-4 text-sm font-medium tracking-wider uppercase text-center transition-opacity hover:opacity-90"
                    style={{ backgroundColor: GOLD, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                  >
                    Call for Priority Booking
                  </a>
                </div>
              </div>

              {/* DPC */}
              <div className="lg:col-span-1" style={{ backgroundColor: "#fff", border: `1px solid ${BORDER_GOLD}` }}>
                <div className="p-8">
                  <h3 className="text-2xl mb-1" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                    Direct Primary Care
                  </h3>
                  <p className="text-xs uppercase tracking-wider mb-6" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                    Comprehensive Coverage
                  </p>
                  <div className="mb-6">
                    <p className="text-5xl" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>$150</p>
                    <p className="text-sm" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>/month + $200 enrollment fee</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Up to 3 medical visits per month",
                      "All recommended labs included",
                      "Comprehensive physical (up to 45 min)",
                      "Appointments 25 to 30 minutes",
                      "Access to a nurse anytime",
                      "15% off point-of-care services",
                      "Priority booking for DPC members",
                      "3-month minimum, then month-to-month",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span style={{ color: "#C9A96E", marginTop: "2px" }}>&#10003;</span>
                        <span className="text-sm" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:7732273303"
                    className="block w-full py-4 text-sm font-medium tracking-wider uppercase text-center transition-opacity hover:opacity-80"
                    style={{ border: `1px solid ${CHARCOAL}`, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                  >
                    Call for Priority Booking
                  </a>
                </div>
              </div>

              {/* One-Time Visit */}
              <div className="lg:col-span-1" style={{ backgroundColor: CREAM, border: `1px solid ${BORDER_GOLD}` }}>
                <div className="p-8">
                  <h3 className="text-2xl mb-1" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                    One-Time Visit
                  </h3>
                  <p className="text-xs uppercase tracking-wider mb-6" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                    No Membership Required
                  </p>
                  <div className="mb-6">
                    <p className="text-5xl" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>$175</p>
                    <p className="text-sm" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>per visit</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Adult and pediatric primary care",
                      "Sports medicine",
                      "Clinical and surgical dermatology",
                      "Non-operative orthopedics",
                      "No commitment required",
                      "Great way to meet Dr. Chavez",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span style={{ color: "#C9A96E", marginTop: "2px" }}>&#10003;</span>
                        <span className="text-sm" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:7732273303"
                    className="block w-full py-4 text-sm font-medium tracking-wider uppercase text-center transition-opacity hover:opacity-80"
                    style={{ border: `1px solid ${CHARCOAL}`, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
                  >
                    Call 773.227.3303
                  </a>
                </div>
              </div>
            </div>

          {/* Comparison Table */}
          <AnimateOnScroll delay={100}>
            <div className="mt-16 overflow-x-auto">
              <p className="text-xs tracking-widest uppercase mb-8 text-center" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                How We Compare
              </p>
              <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th className="text-left py-4 px-6 text-xs tracking-wider uppercase" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", borderBottom: `1px solid ${BORDER_GOLD}`, width: "34%" }}></th>
                    <th className="py-4 px-6 text-center text-xs tracking-wider uppercase" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", borderBottom: `1px solid ${BORDER_GOLD}`, width: "22%" }}>
                      Traditional Insurance
                    </th>
                    <th className="py-4 px-6 text-center text-xs tracking-wider uppercase" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", borderBottom: `1px solid ${BORDER_GOLD}`, width: "22%" }}>
                      DPC<br /><span style={{ color: GOLD }}>$150/mo</span>
                    </th>
                    <th className="py-4 px-6 text-center text-xs tracking-wider uppercase" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", borderBottom: `2px solid ${GOLD}`, backgroundColor: "rgba(222,203,164,0.07)", width: "22%" }}>
                      Concierge<br /><span style={{ fontSize: "1.1em" }}>$300/mo</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Appointment Length", traditional: "7 minutes", dpc: "25–30 min", concierge: "30–60 min" },
                    { label: "Wait to Book", traditional: "Days to weeks", dpc: "Same / next day", concierge: "Priority, same day" },
                    { label: "Labs Included", traditional: "Extra cost", dpc: "✓ Included", concierge: "✓ Included" },
                    { label: "Direct Doctor Access", traditional: "✕ No", dpc: "✓ Yes", concierge: "✓ Yes" },
                    { label: "Co-Pays or Deductibles", traditional: "Yes", dpc: "✕ None", concierge: "✕ None" },
                    { label: "Surprise Bills", traditional: "Common", dpc: "✕ Never", concierge: "✕ Never" },
                    { label: "Specialist Coordination", traditional: "Self-managed", dpc: "✓ RubiconMD", concierge: "✓ RubiconMD" },
                    { label: "Executive Wellness Program", traditional: "✕ No", dpc: "✕ No", concierge: "✓ Included" },
                    { label: "Advanced Blood Panel", traditional: "Extra cost", dpc: "✕ No", concierge: "✓ Included" },
                  ].map(({ label, traditional, dpc, concierge }, i) => (
                    <tr key={label} style={{ backgroundColor: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.03)" }}>
                      <td className="py-4 px-6 text-left" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif", borderBottom: `1px solid rgba(222,203,163,0.15)` }}>
                        {label}
                      </td>
                      <td className="py-4 px-6 text-center" style={{ color: "#888", fontFamily: "'Lora', Georgia, serif", borderBottom: `1px solid rgba(222,203,163,0.15)` }}>
                        {traditional}
                      </td>
                      <td className="py-4 px-6 text-center" style={{ color: traditional === dpc ? "#888" : "#4a4a4a", fontFamily: "'Lora', Georgia, serif", borderBottom: `1px solid rgba(222,203,163,0.15)` }}>
                        {dpc}
                      </td>
                      <td className="py-4 px-6 text-center" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", borderBottom: `1px solid rgba(222,203,163,0.15)`, backgroundColor: "rgba(222,203,164,0.07)" }}>
                        {concierge}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
          </div>
        </section>

        {/* How It Works */}
        <section style={{ backgroundColor: CHARCOAL }} className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  How It Works
                </p>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>
                  Your Path to Better Care
                </h2>
                <div className="w-12 h-px mx-auto" style={{ backgroundColor: GOLD }} />
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Choose Your Plan", desc: "Select Concierge Medicine ($300/mo) or Direct Primary Care ($150/mo) based on your care needs.", delay: 0 },
                { step: "02", title: "Enroll", desc: "Pay the $200 non-refundable enrollment fee and commit to a 3-month minimum membership.", delay: 80 },
                { step: "03", title: "First Visit", desc: "Schedule your comprehensive physical, up to 90 minutes for Concierge or 45 minutes for DPC, with Dr. Chavez.", delay: 160 },
                { step: "04", title: "Ongoing Care", desc: "Reach Dr. Chavez directly. Schedule without insurance friction. Appointments start on time, every time.", delay: 0 },
                { step: "05", title: "Specialist Referrals", desc: "When needed, Dr. Chavez coordinates specialist access through RubiconMD or your insurance network.", delay: 80 },
                { step: "06", title: "Month-to-Month", desc: "After the initial 3 months, your membership continues month-to-month. Cancel in writing, anytime.", delay: 160 },
              ].map(({ step, title, desc, delay }) => (
                <AnimateOnScroll key={step} delay={delay}>
                  <div style={{ borderTop: `2px solid ${GOLD}` }} className="pt-6">
                    <p className="text-4xl mb-3" style={{ color: GOLD, fontFamily: "'Abril Fatface', serif", opacity: 0.35 }}>{step}</p>
                    <h3 className="text-xl mb-3" style={{ color: "#FAF7F2", fontFamily: "'Abril Fatface', serif" }}>{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>{desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Key Differentiators */}
        <section style={{ backgroundColor: OFF_WHITE }} className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimateOnScroll>
              <div>
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Why Illari Health
                </p>
                <h2 className="text-4xl md:text-5xl mb-6" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                  Medicine the Way It Should Be
                </h2>
                <div className="w-12 h-px mb-8" style={{ backgroundColor: GOLD }} />
                <div className="space-y-6">
                  {[
                    { title: "No 7-Minute Appointments", desc: "Concierge members get 30 to 60-minute appointments. DPC members get 25 to 30. Not a rounding error. That is the difference between being heard and being processed." },
                    { title: "Flat, Transparent Pricing", desc: "No co-pays, no deductibles, no surprise bills. You know exactly what you pay before you walk in the door." },
                    { title: "200+ Specialists at No Extra Cost", desc: "RubiconMD connects members to 200+ specialists for same-day consultations, included in your membership." },
                    { title: "28+ Years of Broad Expertise", desc: "Dr. Chavez trained at Meharry, Rush, and UCLA. His expertise spans family medicine, orthopedics, dermatology, and surgery." },
                    { title: "Priority Scheduling for Members", desc: "DPC and Concierge members get priority booking. Same day or next day, most of the time. No weeks-long wait for a routine visit." },
                    { title: "10% Family Discount", desc: "When your entire family joins together, everyone saves 10% on their monthly membership fee." },
                  ].map(({ title, desc }) => (
                    <div key={title} className="flex gap-4">
                      <div className="w-1 flex-shrink-0 mt-1" style={{ backgroundColor: GOLD }} />
                      <div>
                        <h3 className="text-base font-semibold mb-1" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>{title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </AnimateOnScroll>
              <AnimateOnScroll delay={150}>
              <div className="relative">
                <Image
                  src="/assets/team/dr-milton-chavez.jpg"
                  alt="Dr. Milton Chavez MD, FAAFP"
                  width={500}
                  height={600}
                  className="w-full object-cover"
                  style={{ border: `4px solid ${BORDER_GOLD}` }}
                />
                <div className="absolute -bottom-6 -left-6 p-6 max-w-xs" style={{ backgroundColor: CHARCOAL, border: `1px solid ${GOLD}` }}>
                  <p className="text-sm italic mb-2" style={{ color: "#d4c4a8", fontFamily: "'Lora', Georgia, serif" }}>
                    &ldquo;We strive to inspire and aid those seeking their optimal health, wellness and healing through efficient service, quality consultations and our core values: integrity and respect.&rdquo;
                  </p>
                  <p className="text-xs tracking-wider uppercase" style={{ color: GOLD, fontFamily: "'Lora', Georgia, serif" }}>
                    Dr. Milton Chavez MD, FAAFP
                  </p>
                </div>
              </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section style={{ backgroundColor: CREAM }} className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Our Team
                </p>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                  Your Physicians
                </h2>
                <div className="w-12 h-px mx-auto" style={{ backgroundColor: GOLD }} />
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Dr. Chavez */}
              <AnimateOnScroll>
              <div className="text-center">
                <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-full" style={{ border: `3px solid ${BORDER_GOLD}` }}>
                  <Image
                    src="/assets/team/dr-milton-chavez.jpg"
                    alt="Dr. Milton Chavez MD, FAAFP"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl mb-1" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>Dr. Milton Chavez</h3>
                <p className="text-sm mb-2" style={{ color: "#C9A96E", fontFamily: "'Lora', Georgia, serif" }}>MD, FAAFP</p>
                <p className="text-xs tracking-wider uppercase mb-4" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                  Founder and Medical Director
                </p>
                <div style={{ borderTop: `1px solid ${BORDER_GOLD}` }} className="pt-4 text-sm space-y-1">
                  <p style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>Meharry Medical College</p>
                  <p style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>Residency: Rush University, Chicago</p>
                  <p style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>Fellowship: UCLA</p>
                  <p style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>Illinois Licensed Since 1997</p>
                  <p style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>28+ Years in Medicine</p>
                </div>
              </div>
              </AnimateOnScroll>

              {/* Karen Corona */}
              <AnimateOnScroll delay={150}>
              <div className="text-center">
                <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-full" style={{ border: `3px solid ${BORDER_GOLD}` }}>
                  <Image
                    src="/assets/team/karen-corona.jpg"
                    alt="Karen Corona MSN, APRN, FNP-C"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl mb-1" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>Karen Corona</h3>
                <p className="text-sm mb-2" style={{ color: "#C9A96E", fontFamily: "'Lora', Georgia, serif" }}>MSN, APRN, FNP-C</p>
                <p className="text-xs tracking-wider uppercase mb-4" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                  Family Nurse Practitioner
                </p>
                <div style={{ borderTop: `1px solid ${BORDER_GOLD}` }} className="pt-4 text-sm space-y-1">
                  <p style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>Board-Certified Family NP</p>
                  <p style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>5+ Years Clinical Experience</p>
                  <p style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>Women&apos;s Health Specialist</p>
                  <p style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>Medical Weight Loss</p>
                  <p style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>Inpatient and Family Medicine</p>
                </div>
              </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* Testimonials */}
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
                <div className="w-12 h-px mx-auto mb-4" style={{ backgroundColor: GOLD }} />
                <p className="text-sm" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                  4.78 out of 5 on Tebra, 23 verified reviews
                </p>
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "Albert T.", quote: "My visit with Dr. Chavez is always pleasant. I love that the Doctors take your appointment on time, very attentive and professional and knowledgeable of my medical history.", delay: 0 },
                { name: "Chad M.", quote: "Dr. Chavez has my highest recommendation. He is knowledgeable, intelligent, empathic, consistent, thorough and soft-spoken. Basically, he delivers what most people want and deserve from their MD.", delay: 100 },
                { name: "Janneth H.", quote: "My initial visit was very great. The receptionist was very helpful and cordial. Beautiful, clean waiting area and offices. My overall experience was wonderful.", delay: 0 },
                { name: "David H.", quote: "My experience was relaxing and thorough.", delay: 100 },
              ].map(({ name, quote, delay }) => (
                <AnimateOnScroll key={name} delay={delay}>
                  <div className="p-8" style={{ border: `1px solid #2a2a2a`, backgroundColor: "#1a1a1a" }}>
                    <div className="flex gap-1 mb-4">
                      {[1,2,3,4,5].map((s) => (
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

        {/* Case Studies */}
        <section style={{ backgroundColor: OFF_WHITE }} className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Patient Stories
                </p>
                <h2 className="text-4xl md:text-5xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                  Real Results
                </h2>
                <div className="w-12 h-px mx-auto" style={{ backgroundColor: GOLD }} />
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  audience: "Uninsured Individual",
                  challenge: "No insurance, no primary care access, and no affordable path to routine care",
                  result: "Joined DPC at $150/mo with no co-pays and all labs included",
                  note: "Cash-pay model with specialist referral list",
                  delay: 0,
                },
                {
                  audience: "Executive",
                  challenge: "Seven-minute insurance visits, a different doctor every time, no continuity",
                  result: "Concierge membership with unlimited visits and direct Dr. Chavez line",
                  note: "30 to 60-minute appointments and priority scheduling",
                  delay: 100,
                },
                {
                  audience: "Family",
                  challenge: "Multiple providers, fragmented records, no single physician who knew the whole story",
                  result: "Entire family joined DPC with 10% family discount",
                  note: "One trusted physician who knows the full family history",
                  delay: 200,
                },
              ].map(({ audience, challenge, result, note, delay }) => (
                <AnimateOnScroll key={audience} delay={delay}>
                  <div className="p-8" style={{ border: `1px solid ${BORDER_GOLD}`, backgroundColor: "#fff" }}>
                    <div className="inline-block px-3 py-1 text-xs tracking-wider uppercase mb-4" style={{ backgroundColor: CREAM, color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                      {audience}
                    </div>
                    <h3 className="text-lg mb-3" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>The Challenge</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>{challenge}</p>
                    <div className="w-full h-px mb-4" style={{ backgroundColor: BORDER_GOLD }} />
                    <h3 className="text-lg mb-3" style={{ color: "#C9A96E", fontFamily: "'Abril Fatface', serif" }}>The Result</h3>
                    <p className="text-sm leading-relaxed mb-2" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>{result}</p>
                    <p className="text-xs italic" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>{note}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / CTA Section */}
        <section id="contact" style={{ backgroundColor: CREAM, borderTop: `1px solid ${BORDER_GOLD}` }} className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left: Info */}
              <AnimateOnScroll>
              <div>
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.2em" }}>
                  Get in Touch
                </p>
                <h2 className="text-4xl md:text-5xl mb-6" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
                  Begin Your Membership
                </h2>
                <div className="w-12 h-px mb-8" style={{ backgroundColor: GOLD }} />
                <p className="text-base leading-relaxed mb-8" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
                  Call for priority booking or fill out the form below. DPC and Concierge members get priority scheduling, same day or next day most of the time. One-time visits are available for $175 with no commitment.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: CHARCOAL }}>
                      <svg width="18" height="18" fill="none" stroke={GOLD} strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>Phone</p>
                      <a href="tel:7732273303" className="text-base font-medium hover:opacity-80" style={{ color: CHARCOAL, fontFamily: "'Lora', Georgia, serif" }}>773.227.3303</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: CHARCOAL }}>
                      <svg width="18" height="18" fill="none" stroke={GOLD} strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>Email</p>
                      <a href="mailto:info@illarihealth.com" className="text-base font-medium hover:opacity-80" style={{ color: CHARCOAL, fontFamily: "'Lora', Georgia, serif" }}>info@illarihealth.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: CHARCOAL }}>
                      <svg width="18" height="18" fill="none" stroke={GOLD} strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>Location</p>
                      <p className="text-sm" style={{ color: CHARCOAL, fontFamily: "'Lora', Georgia, serif" }}>1509 North Western Avenue<br />Chicago, IL 60622</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm italic" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                  Free private parking available immediately south of the building at Western and LeMoyne.
                </p>
              </div>
              </AnimateOnScroll>

              {/* Right: Form */}
              <AnimateOnScroll delay={150}>
              <div className="p-8" style={{ backgroundColor: "#fff", border: `1px solid ${BORDER_GOLD}` }}>
                <h3 className="text-2xl mb-2" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>Request a Callback</h3>
                <p className="text-sm mb-6" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
                  Fill out the form and we will reach out within one business day.
                </p>
                <ContactForm />
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
