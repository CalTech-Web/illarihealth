import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

const GOLD = "#DECBA4";
const CHARCOAL = "#161616";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center py-32 px-6" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="text-center max-w-lg">
          <p className="text-8xl mb-6" style={{ color: GOLD, fontFamily: "'Abril Fatface', serif" }}>
            404
          </p>
          <h1 className="text-3xl md:text-4xl mb-4" style={{ color: CHARCOAL, fontFamily: "'Abril Fatface', serif" }}>
            Page Not Found
          </h1>
          <div className="w-12 h-px mx-auto mb-6" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
          <p className="text-base leading-relaxed mb-10" style={{ color: "#4a4a4a", fontFamily: "'Lora', Georgia, serif" }}>
            The page you are looking for may have been moved or no longer exists. Let us help you find what you need.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="ih-btn ih-btn-gold px-10 py-4 text-sm font-medium tracking-wider uppercase text-center"
              style={{ backgroundColor: GOLD, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
            >
              Return Home
            </Link>
            <Link
              href="/contact"
              className="ih-btn ih-btn-outline px-10 py-4 text-sm font-medium tracking-wider uppercase text-center"
              style={{ border: `1px solid #DECBA3`, color: CHARCOAL, fontFamily: "'Lora', Georgia, serif", letterSpacing: "0.12em" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
