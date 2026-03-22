"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    plan: "concierge",
  });
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot: if filled, silently fake success
    if (honeypot) {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "", plan: "concierge" });
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "", plan: "concierge" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    backgroundColor: "#FAF7F2",
    border: "1px solid #DECBA3",
    color: "#161616",
    fontFamily: "'Lora', Georgia, serif",
    padding: "12px 16px",
    width: "100%",
    outline: "none",
    fontSize: "14px",
  };

  const labelStyle = {
    display: "block",
    fontSize: "11px",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    marginBottom: "6px",
    color: "#161616",
    fontFamily: "'Lora', Georgia, serif",
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot field - hidden from real users */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px", opacity: 0, height: 0, overflow: "hidden" }}>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="name" style={labelStyle}>Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Your full name"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" style={labelStyle}>Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" style={labelStyle}>Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            style={inputStyle}
            placeholder="(312) 555-0100"
          />
        </div>
      </div>

      <div>
        <label htmlFor="plan" style={labelStyle}>Interested In</label>
        <select
          id="plan"
          name="plan"
          value={formData.plan}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="concierge">Concierge Medicine ($300/mo)</option>
          <option value="dpc">Direct Primary Care ($150/mo)</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Message (Optional)</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: "vertical" }}
          placeholder="Tell us about your health goals or any questions you have."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="ih-btn ih-btn-gold w-full py-4 text-sm font-medium tracking-widest uppercase transition-opacity disabled:opacity-60"
        style={{
          backgroundColor: "#DECBA4",
          color: "#161616",
          fontFamily: "'Lora', Georgia, serif",
          letterSpacing: "0.15em",
          border: "1px solid #DECBA4",
        }}
      >
        {status === "sending" ? "Sending..." : "Request a Callback"}
      </button>

      {status === "success" && (
        <p className="text-sm text-center" style={{ color: "#5a8a62", fontFamily: "'Lora', Georgia, serif" }}>
          Thank you. We will reach out to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-center" style={{ color: "#8a4a42", fontFamily: "'Lora', Georgia, serif" }}>
          Something went wrong. Please call us at 773.227.3303.
        </p>
      )}

      <p className="text-xs text-center" style={{ color: "#9a8a72", fontFamily: "'Lora', Georgia, serif" }}>
        By submitting this form you agree to our{" "}
        <a href="https://policies.google.com/privacy" className="underline" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>.
      </p>
    </form>
  );
}
